(function () {
  'use strict';

  const FOLKLORE_STORIES = {
    'kudus': {
      id: 'kudus',
      title: 'Asal Usul Kota Kudus',
      origin: 'Kudus, Jawa Tengah',
      img: 'assets/images/asal-usul-kudus.png',
      sinopsis: 'Asal-usul Kota Kudus memiliki cerita yang sangat dalam, yang berkaitan erat dengan perjuangan Sunan Kudus, atau yang juga dikenal sebagai Syekh Jafar Sodiq. Ia memainkan peran penting dalam menyebarkan ajaran Islam di wilayah Jawa Tengah. Dalam cerita rakyat ini, Kota Kudus dulu disebut Tajug, sebuah daerah yang terkenal karena penduduknya beragama Hindu dan aktivitas seni ukir, terutama di wilayah Sunggingan. Cerita ini juga melibatkan seorang pedagang Tiongkok bernama Tee Ling Sing yang memiliki pengaruh besar terhadap seni ukir dan budaya setempat.',
      fullStory: [
        'Pada masa lampau, daerah yang kini kita kenal sebagai Kudus bernama Tajug. Wilayah ini dinamai demikian karena banyaknya bangunan beratap tajug peninggalan masyarakat yang mayoritas memeluk agama Hindu dan Buddha. Penduduk Tajug dikenal sangat terampil dalam bidang seni ukir, terutama di daerah Sunggingan.',
        'Seiring berjalannya waktu, datanglah seorang ulama arif bernama Raden Ja\'far Shadiq atau yang lebih masyhur dengan sebutan Sunan Kudus. Beliau berdakwah dengan pendekatan budaya yang luar biasa bijaksana. Mengingat masyarakat setempat memuliakan sapi (lembu), Sunan Kudus melarang para pengikutnya menyembelih sapi demi menghormati kepercayaan warga setempat, sebuah tradisi toleransi yang masih lestari hingga hari ini.',
        'Perkembangan kota ini juga diperkaya oleh kedatangan Tee Ling Sing (Kyai Telingsing), seorang saudagar dan master seni ukir asal Tiongkok. Beliau bersahabat karib dengan Sunan Kudus dan bersama-sama membina para pengrajin lokal hingga lahirlah ragam seni ukir gebyok Kudus yang tersohor di seantero Nusantara.',
        'Kota Tajug kemudian diubah namanya oleh Sunan Kudus menjadi Al-Quds (yang berarti suci), yang dalam pelafalan masyarakat Jawa lambat laun bertransformasi menjadi Kota Kudus.'
      ],
      moral: 'Menjunjung tinggi toleransi, saling menghormati perbedaan suku dan keyakinan, serta melestarikan seni budaya dengan kebijaksanaan.',
      videoId: '8ru4c5tEvLo',
      videoUrl: 'https://youtu.be/8ru4c5tEvLo?si=_BpN_WKGXoFrFSRj'
    },

    'roro-kidul': {
      id: 'roro-kidul',
      title: 'Legenda Nyi Roro Kidul',
      origin: 'Kerajaan Pajajaran / Pesisir Laut Selatan Jawa',
      img: 'assets/images/roro-kidul.png',
      sinopsis: 'Sekitar dulu kala, di sebuah kerajaan di wilayah Pajajaran, terdapat seorang raja bernama Prabu Munding Wangi, yang biasa dikenal sebagai Prabu Siliwangi ke enam. Prabu Siliwangi memiliki seorang anak bernama Kadita. Namun, Kadita akhirnya ditolak oleh ibu tirinya yang bernama Dewi Mutiara. Putri Kadita diubah menjadi seorang wanita yang sangat jelek, dan akhirnya dia memilih untuk melompat ke laut selatan dan menjadi Nyi Roro Kidul. Putri Kadita akhirnya memutuskan untuk tinggal di laut, membangun sebuah istana, dan mengumpulkan ribuan pasukan. Sejak itu, Putri Kadita dikenal sebagai Nyi Roro Kidul.',
      fullStory: [
        'Dahulu kala di Kerajaan Pajajaran bertahtalah Prabu Munding Wangi (Prabu Siliwangi ke-VI) yang memimpin dengan adil dan bijaksana. Sang Prabu memiliki seorang putri yang teramat jelita dan berbudi pekerti luhur bernama Putri Kadita. Kecantikan dan kebaikan hatinya membuat sang putri sangat disayangi oleh seluruh rakyat.',
        'Namun, rasa cemburu dan dengki timbul di hati sang selir, Dewi Mutiara, yang khawatir putranya tidak akan menjadi penerus tahta jika Putri Kadita masih berada di istana. Melalui perantara dukun jahat, Dewi Mutiara mengirimkan ilmu hitam sehingga sekujur tubuh Putri Kadita timbul penyakit kusta berbau busuk yang merusak paras ayunya.',
        'Karena desakan sang selir, Putri Kadita dengan lapang dada meninggalkan istana. Berhari-hari ia berjalan tanpa arah menyusuri rimba belantara hingga tiba di tebing karang Pantai Selatan (Laut Kidul). Di tengah keheningan deburan ombak, ia mendengar bisikan gaib yang memintanya melompat ke dalam gulungan air laut.',
        'Begitu menyentuh samudra, keajaiban terjadi. Penyakit kulitnya lenyap seketika dan parasnya kembali menjadi bidadari abadi. Alam gaib laut selatan menerimanya sebagai ratu. Putri Kadita membangun istana megah di dasar laut dan sejak itu dikenal sebagai Kanjeng Ratu Kidul / Nyi Roro Kidul, penguasa spiritual Pantai Selatan Jawa.'
      ],
      moral: 'Ketabahan dan keteguhan hati saat dizalimi akan mengangkat derajat seseorang. Keikhlasan serta kedamaian jiwa jauh lebih luhur daripada membalas kejahatan dengan dendam.',
      videoId: 'vCKPS5hlEyg',
      videoUrl: 'https://youtu.be/vCKPS5hlEyg?si=y8Fr3TZqyH7tFH2i'
    },

    'keong-mas': {
      id: 'keong-mas',
      title: 'Keong Mas',
      origin: 'Kerajaan Daha, Kediri, Jawa Timur',
      img: 'assets/images/keong-mas.png',
      sinopsis: 'Cerita rakyat Indonesia yang berjudul Keong Mas sangat terkenal di wilayah Jawa Timur. Cerita ini menceritakan tentang dua saudara perempuan yang memiliki kehidupan yang berbeda, sehingga membuat salah satu dari mereka menjadi iri, akhirnya melakukan tindakan yang berbahaya. Namun, kebaikan akan terus menang mengalahkan kejahatan. Keong Mas juga merasa bahagia setelah mengalami perlakuan yang tidak adil dari saudaranya sendiri. Pada masa dahulu kala, di sebuah kerajaan yang makmur dan damai, hiduplah dua orang putri raja yang bernama Candra Kirana dan Dewi Galuh. Mereka hidup berbahagia dan serba berkecukupan.',
      fullStory: [
        'Di Kerajaan Daha bertahtalah Raja Kertamarta yang memiliki dua orang putri jelita: Dewi Candra Kirana dan Dewi Galuh Ajeng. Suatu hari, pangeran tampan dari Kerajaan Kahuripan bernama Raden Inu Kertapati datang meminang Candra Kirana. Pertunangan ini menyulut bara iri dengki di hati Dewi Galuh yang merasa tersisihkan.',
        'Galuh Ajeng lalu menemui seorang penyihir jahat untuk mengutuk saudarinya sendiri. Candra Kirana disihir menjadi seekor Keong Mas (siput emas) lalu dihanyutkan ke sungai yang deras. Beruntung, keong berkilau itu tersangkut pada jala milik seorang nenek tua pencari ikan bernama Mbok Rondo Dadapan.',
        'Mbok Rondo merawat keong tersebut di dalam tempayan air. Anehnya, setiap kali si nenek pulang dari sawah, rumahnya selalu bersih dan meja makannya telah tersaji hidangan lezat. Karena penasaran, si nenek mengintip dari celah dinding dan tertegun melihat keong emas itu berubah wujud menjadi seorang putri anggun nan ayu jelita yang tengah memasak.',
        'Kutukan keong mas hanya bisa patah bila ia bertemu kembali dengan tunangannya. Raden Panji Inu Kertapati yang menyamar sebagai rakyat jelata akhirnya berhasil menemukan gubuk Mbok Rondo. Begitu keduanya bertatap muka, sihir penyihir musnah selamanya. Candra Kirana kembali ke istana bersama sang pangeran dan Mbok Rondo, sementara Dewi Galuh melarikan diri karena menanggung malu atas perbuatannya.'
      ],
      moral: 'Iri hati dan dengki kepada saudara hanya akan merugikan diri sendiri. Kejujuran, ketulusan budi, dan kesabaran pada akhirnya selalu menang menghadapi cobaan.',
      videoId: '65A5Uo513Rw',
      videoUrl: 'https://youtu.be/65A5Uo513Rw?si=gUaQDYK8bbL-B3Pm'
    },

    'watu-ulo': {
      id: 'watu-ulo',
      title: 'Legenda Watu Ulo',
      origin: 'Pantai Watu Ulo, Jember, Jawa Timur',
      img: 'assets/images/watu-ulo.png',
      sinopsis: 'Legenda Asal Usul Watu Ulo adalah cerita yang diwariskan oleh masyarakat tentang seekor naga besar bernama Nogo Rojo yang akhirnya dikalahkan oleh seorang pria bernama Joko Mursodo. Legenda ini diyakini oleh penduduk setempat sebagai cerita awal kenapa Pantai Watu Ulo di Jember, Jawa Timur, memiliki nama seperti itu. Pada awalnya, seorang anak bernama Joko Mursodo melarikan diri dari Banyuwangi dan ditemukan di tengah hutan oleh Aki dan Nini Sambi. Mereka merawatnya seolah-olah ia adalah anak mereka sendiri karena suami istri itu belum memiliki anak. Joko Mursodo diajarkan ilmu kanuragan dan beladiri oleh Aki Sambi.',
      fullStory: [
        'Dikisahkan seorang anak lelaki bernama Joko Mursodo melarikan diri dari Banyuwangi karena suatu kemalangan. Di tengah lebatnya hutan belantara, ia ditemukan oleh sepasang kakek-nenek penyayang bernama Aki Sambi dan Nini Sambi. Karena tidak memiliki anak, mereka mengangkat Joko Mursodo dengan penuh cinta dan kasih sayang.',
        'Aki Sambi yang sakti menggembleng Joko Mursodo dengan berbagai ilmu kanuragan, pencak silat, serta olah batin. Joko Mursodo tumbuh menjadi pemuda yang gagah perkasa, santun, dan sangat berbakti kepada orang tua angkatnya.',
        'Suatu hari pesisir laut selatan diteror oleh seekor naga raksasa yang rakus bernama Nogo Rojo. Naga tersebut merusak perahu-perahu nelayan, memangsa ikan tangkapan, dan meneror perkampungan warga. Berbekal restu dari Aki Sambi dan pusaka keris yang diwariskan, Joko Mursodo menantang Nogo Rojo dalam pertempuran dahsyat di tepi samudra.',
        'Dengan kelincahan dan kesaktiannya, Joko Mursodo berhasil menebas tubuh sang naga raksasa hingga terbelah. Atas kehendak Yang Maha Kuasa, tubuh naga tersebut membatu memanjang menyerupai ular raksasa yang menjorok dari bibir pantai ke tengah laut. Sejak peristiwa itu, pantai di pesisir selatan Jember dinamakan Pantai Watu Ulo (Batu Ular).'
      ],
      moral: 'Bakti yang tulus kepada orang tua yang membesarkan kita, serta keberanian mempergunakan ilmu kesaktian demi melindungi masyarakat dari kezaliman.',
      videoId: '-b40IA6taM4',
      videoUrl: 'https://youtu.be/-b40IA6taM4?si=1BLReLx1SH74_hnl'
    },

    'kidang': {
      id: 'kidang',
      title: 'Kawah si Kidang',
      origin: 'Dataran Tinggi Dieng, Wonosobo - Banjarnegara, Jawa Tengah',
      img: 'assets/images/kidang.png',
      sinopsis: 'Di balik keindahan alam dataran tinggi Dieng, tersembunyi sebuah kisah sedih yang telah dilestarikan dari generasi ke generasi. Cerita tentang seorang putri yang cantik bernama Sinta Dewi, yang sombongnya membuatnya dihukum dengan kutukan yang tak pernah berakhir dan suatu kawah misterius yang hingga kini masih ada. Pangeran Kidang Garungan, yang memiliki penampilan seperti kijang dan memiliki kekuasaan, datang meminta tangan Putri Sinta Dewi dengan membawa harta yang sangat banyak. Namun di balik kecantikannya, Putri Sinta Dewi memiliki rencana buruk untuk mengubur pangeran secara hidup-hidup. Sebelum waktunya meninggal, Pangeran Kidang pernah menyampaikan sumpah yang sampai saat ini masih dipercaya sumpah mengenai rambut gimbal dan kutukan yang berlaku seumur hidup.',
      fullStory: [
        'Di dataran tinggi Dieng nan sejuk bertahtalah seorang putri jelita bernama Sinta Dewi. Kecantikannya mashyur ke berbagai pelosok negeri, namun hatinya diliputi kesombongan dan keangkuhan. Suatu ketika, datanglah utusan seorang pangeran kaya raya dan sakti mandraguna bernama Pangeran Kidang Garungan yang hendak meminangnya.',
        'Tergiur oleh limpahan emas dan permata, Putri Sinta Dewi menerima lamaran itu tanpa pernah melihat sosok sang pangeran terlebih dahulu. Betapa terkejutnya sang putri ketika hari pertemuan tiba: Pangeran Kidang Garungan rupanya berkepala kijang bertanduk indah meski bertubuh manusia tegap dan berwibawa.',
        'Merasa gengsi dan tak sudi bersuamikan manusia berkepala kijang, sang putri mencari muslihat jahat. Ia mengajukan syarat mustahil: sang pangeran harus menggali sebuah sumur raksasa dalam waktu semalam sendirian. Berbekal kesaktiannya, Pangeran Kidang menggali tanah begitu dalam tanpa kenal lelah.',
        'Melihat sumur hampir selesai sebelum fajar merekah, Putri Sinta Dewi panik dan memerintahkan prajuritnya menimbun sumur itu dengan batu dan tanah hidup-hidup. Dari dasar sumur yang mendidih panas akibat amarah sang pangeran, terdengarlah kutukan keras bahwa kelak keturunan Dieng akan terlahir dengan rambut gimbal dan kawah tersebut akan terus meloncat-loncat seperti kijang. Tanah itu meletus menjadi kawah lumpur panas yang berpindah-pindah, kini dikenal sebagai Kawah Sikidang.'
      ],
      moral: 'Jangan memandang orang hanya dari wujud lahiriah semata. Kesombongan, ingkar janji, dan tipu daya terhadap ketulusan orang lain akan berujung pada malapetaka berkepanjangan.',
      videoId: 'aMh8cTwe8sY',
      videoUrl: 'https://youtu.be/aMh8cTwe8sY?si=wncFJs8Az7baFbu1'
    }
  };

  function parseYouTubeId(url) {
    if (!url) return null;

    let match = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];

    match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];

    match = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];

    if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) {
      return url.trim();
    }
    return null;
  }

  function openVideoModal(videoInput, title) {
    const videoModal = document.getElementById('videoModal');
    const iframeEl = document.getElementById('modalYoutubeIframe');
    const titleEl = document.getElementById('modalVideoTitle');
    const extLinkEl = document.getElementById('modalExternalLink');

    if (!videoModal) return;

    const videoId = parseYouTubeId(videoInput) || videoInput;
    const embedUrl = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0&playsinline=1';
    const originalUrl = videoInput.startsWith('http') ? videoInput : ('https://www.youtube.com/watch?v=' + videoId);

    if (titleEl && title) {
      titleEl.textContent = title;
    }
    if (iframeEl) {
      iframeEl.src = embedUrl;
    }
    if (extLinkEl) {
      extLinkEl.href = originalUrl;
    }

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const iframeEl = document.getElementById('modalYoutubeIframe');

    if (!videoModal) return;

    if (iframeEl) {
      iframeEl.src = '';
    }

    videoModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function readFolkloreStory(storyKey) {
    const story = FOLKLORE_STORIES[storyKey];
    const modal = document.getElementById('storyReaderModal');
    if (!modal) return;

    if (!story) {
      if (window.showToast) window.showToast('Cerita sedang dipersiapkan.');
      return;
    }

    const titleEl = document.getElementById('storyModalTitle');
    const originEl = document.getElementById('storyModalOrigin');
    const imgEl = document.getElementById('storyModalImg');
    const bodyEl = document.getElementById('storyModalBody');
    const moralEl = document.getElementById('storyModalMoral');
    const watchBtn = document.getElementById('storyModalWatchBtn');

    if (titleEl) titleEl.textContent = story.title;
    if (originEl) originEl.textContent = '📍 ' + story.origin;
    if (imgEl) {
      imgEl.src = story.img;
      imgEl.alt = story.title;
    }

    if (bodyEl) {
      if (Array.isArray(story.fullStory)) {
        bodyEl.innerHTML = story.fullStory.map(function (para) {
          return '<p style="margin-bottom: 14px; text-indent: 24px; text-align: justify;">' + para + '</p>';
        }).join('');
      } else {
        bodyEl.innerHTML = '<p style="text-align: justify;">' + (story.sinopsis || '') + '</p>';
      }
    }

    if (moralEl) moralEl.textContent = story.moral;

    if (watchBtn) {
      watchBtn.onclick = function () {
        closeStoryModal();
        openVideoModal(story.videoId, story.title);
      };
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeStoryModal() {
    const modal = document.getElementById('storyReaderModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function initCeritaPage() {

    document.querySelectorAll('[data-play-video]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const videoSrc = btn.dataset.videoSrc || btn.getAttribute('data-video-src');
        const videoTitle = btn.dataset.videoTitle || btn.getAttribute('data-video-title');
        openVideoModal(videoSrc, videoTitle);
      });
    });

    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
      const closeBtn = videoModal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
      }
      videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) closeVideoModal();
      });
    }

    const storyModal = document.getElementById('storyReaderModal');
    if (storyModal) {
      const closeBtn = storyModal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeStoryModal);
      }
      storyModal.addEventListener('click', function (e) {
        if (e.target === storyModal) closeStoryModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeVideoModal();
        closeStoryModal();
      }
    });
  }

  window.readFolkloreStory = readFolkloreStory;
  window.openFolkloreVideo = openVideoModal;
  window.closeFolkloreVideo = closeVideoModal;
  window.closeFolkloreStory = closeStoryModal;
  window.FOLKLORE_DATA = FOLKLORE_STORIES;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCeritaPage);
  } else {
    initCeritaPage();
  }
})();
