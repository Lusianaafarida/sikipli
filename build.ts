import { watch } from 'fs';

interface PageConfig {
  file: string;
  activeNav: string;
  activeSub: string | null;
}

const PAGES: PageConfig[] = [
  { file: 'index.html', activeNav: 'beranda', activeSub: null },
  { file: 'bahasa-jawa.html', activeNav: 'materi', activeSub: 'bahasa-jawa' },
  { file: 'cerita-rakyat.html', activeNav: 'materi', activeSub: 'cerita-rakyat' },
  { file: 'aksara-jawa.html', activeNav: 'materi', activeSub: 'aksara-jawa' },
  { file: 'wayang-kulit.html', activeNav: 'materi', activeSub: 'wayang-kulit' },
  { file: 'evaluasi.html', activeNav: 'evaluasi', activeSub: null },
  { file: 'kuis.html', activeNav: 'evaluasi', activeSub: null },
  { file: 'tentang-kami.html', activeNav: 'tentang', activeSub: null },
];

function addClassToTag(tagStr: string, className: string): string {
  if (/class="([^"]*)"/i.test(tagStr)) {
    return tagStr.replace(/class="([^"]*)"/i, (_m, existingClasses) => {
      const classes = existingClasses.trim().split(/\s+/);
      if (!classes.includes(className)) {
        classes.push(className);
      }
      return `class="${classes.join(' ')}"`;
    });
  } else {
    return tagStr.replace(/^<[a-z0-9-]+/i, `$& class="${className}"`);
  }
}

function generateNavbarForPage(rawNavbar: string, activeNav: string, activeSub: string | null): string {
  let navHtml = rawNavbar;

  if (activeNav) {
    const navTagRegex = new RegExp(`(<a\\s+[^>]*data-nav="${activeNav}"[^>]*>)`, 'i');
    navHtml = navHtml.replace(navTagRegex, (tag) => addClassToTag(tag, 'active'));
  }

  if (activeSub) {
    const subTagRegex = new RegExp(`(<a\\s+[^>]*data-nav="${activeSub}"[^>]*>)`, 'i');
    navHtml = navHtml.replace(subTagRegex, (tag) => addClassToTag(tag, 'active'));
  }

  return navHtml.trim();
}

export async function build(): Promise<number> {
  const navbarFile = Bun.file('components/navbar.html');
  const footerFile = Bun.file('components/footer.html');

  if (!(await navbarFile.exists()) || !(await footerFile.exists())) {
    console.error('❌ File components/navbar.html atau components/footer.html tidak ditemukan!');
    return 0;
  }

  const rawNavbar = await navbarFile.text();
  const rawFooter = (await footerFile.text()).trim();

  let updatedCount = 0;

  for (const page of PAGES) {
    const fileRef = Bun.file(page.file);
    if (!(await fileRef.exists())) continue;

    let content = await fileRef.text();

    content = content.replace(/\s*<script\s+src="js\/components\.js"><\/script>/gi, '');

    const pageNavbar = generateNavbarForPage(rawNavbar, page.activeNav, page.activeSub);

    const navbarReplacement = `<!-- @component:navbar:start -->\n  ${pageNavbar}\n  <!-- @component:navbar:end -->`;
    const footerReplacement = `<!-- @component:footer:start -->\n  ${rawFooter}\n  <!-- @component:footer:end -->`;

    const navbarRegex = /(<!-- @component:navbar:start -->[\s\S]*?<!-- @component:navbar:end -->|<site-header><\/site-header>)/i;
    if (navbarRegex.test(content)) {
      content = content.replace(navbarRegex, navbarReplacement);
    }

    const footerRegex = /(<!-- @component:footer:start -->[\s\S]*?<!-- @component:footer:end -->|<site-footer><\/site-footer>)/i;
    if (footerRegex.test(content)) {
      content = content.replace(footerRegex, footerReplacement);
    }

    await Bun.write(page.file, content);
    updatedCount++;
  }

  console.log(`✅ [Bun TypeScript Build] Berhasil menyematkan komponen ke ${updatedCount} halaman HTML!`);
  return updatedCount;
}

await build();

if (process.argv.includes('--watch')) {
  console.log('👀 Memantau perubahan di folder components/ (tekan Ctrl+C untuk keluar)...');
  watch('components', async (eventType, filename) => {
    if (filename && (filename.endsWith('.html') || filename.endsWith('.htm'))) {
      console.log(`🔄 Terdeteksi perubahan pada components/${filename}, menyusun ulang...`);
      await build();
    }
  });
}
