(function () {
  'use strict';

  const STORAGE_KEY = 'javanesia_quiz_state';
  const AUTH_KEY = 'javanesia_user_name';

  function recalculateTotalPoints(completedLevels) {
    if (!completedLevels || typeof completedLevels !== 'object') return 0;
    return Object.values(completedLevels).reduce((sum, s) => sum + (Number(s) || 0), 0);
  }

  function getUserStats() {
    const authName = (window.JavanesiaAuth && window.JavanesiaAuth.getUserName())
      || (localStorage.getItem(AUTH_KEY) || '').trim();

    const defaultStats = {
      name: authName || 'Tamu Budaya',
      role: 'Pelajar',
      poin: 0,
      rank: 1,
      unlockedLevels: [1],
      completedLevels: {},
      badges: []
    };

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = Object.assign({}, defaultStats, parsed);
        if (authName) {
          merged.name = authName;
        } else if (!merged.name || merged.name === 'Saka Ardian') {
          merged.name = 'Tamu Budaya';
        }
        merged.poin = recalculateTotalPoints(merged.completedLevels);
        return merged;
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return defaultStats;
  }

  function renderDashboard() {
    const stats = getUserStats();

    const userHeadings = document.querySelectorAll('.eval-user-heading');
    userHeadings.forEach(h => {
      h.textContent = stats.name;
    });

    const leaderboardUserCell = document.getElementById('evalLeaderboardUserName');
    if (leaderboardUserCell) {
      leaderboardUserCell.textContent = `${stats.name} (Kamu)`;
    }

    const userPoin = document.getElementById('evalUserPoin');
    if (userPoin) {
      userPoin.textContent = stats.poin;
    }

    const levelLabel = document.getElementById('evalLevelLabel');
    if (levelLabel) {
      const maxUnlocked = (stats.unlockedLevels && stats.unlockedLevels.length > 0) ? Math.max(...stats.unlockedLevels) : 1;
      const names = ['Tingkat Dasar (Kelas 1)', 'Tingkat Menengah (Kelas 4)', 'Tingkat Lanjutan (Kelas 5)', 'Tingkat Mahir (Kelas 6)'];
      levelLabel.textContent = `${maxUnlocked} - ${names[maxUnlocked - 1] || 'Tingkat Dasar'}`;
    }

    const levelCards = document.querySelectorAll('.levels-4-grid .level-tall-card, .levels-5-grid .level-tall-card');
    const levelConfigs = [
      { id: 1, name: 'Tingkat Dasar (Kelas 1)', reward: 100, icon: 'assets/icons/book-level.svg' },
      { id: 2, name: 'Tingkat Menengah (Kelas 4)', reward: 100, icon: 'assets/icons/badge-kata.svg' },
      { id: 3, name: 'Tingkat Lanjutan (Kelas 5)', reward: 100, icon: 'assets/icons/badge-wayang.svg' },
      { id: 4, name: 'Tingkat Mahir (Kelas 6)', reward: 100, icon: 'assets/icons/gunungan.svg' }
    ];

    levelCards.forEach((card, idx) => {
      const levelId = idx + 1;
      const config = levelConfigs[idx];
      const isUnlocked = stats.unlockedLevels.includes(levelId);
      const isCompleted = stats.completedLevels && stats.completedLevels[levelId] !== undefined;
      const bestScore = isCompleted ? stats.completedLevels[levelId] : null;

      const tag = card.querySelector('.level-tag-top');
      const artBox = card.querySelector('.level-art-box');
      const reqText = card.querySelector('.level-req-text');
      const rewardText = card.querySelector('.level-reward-text');


      if (isUnlocked) {
        card.style.borderColor = 'var(--gold-primary)'
          ;
        if (tag) {
          tag.className = 'level-tag-top open';
          tag.textContent = isCompleted ? `SELESAI (${bestScore}/100)` : 'TERBUKA';
        }

        if (artBox) {
          artBox.innerHTML = `<img src="${config.icon}" alt="Badge Level ${levelId} (Hasil karya dari Gemini 3.8 Flash)" title="Badge Level ${levelId} - Hasil karya dari Gemini 3.8 Flash" style="width: 70px; height: 70px;">`;
        }

        if (reqText) {
          if (isCompleted) {
            reqText.textContent = `Skor terbaikmu: ${bestScore} poin. Kuis dapat diulangi kapan saja.`;
            reqText.style.display = 'block';
          } else {
            reqText.textContent = '';
            reqText.style.display = 'none';
          }
        }

        let actionBtn = card.querySelector('a.btn');
        if (!actionBtn) {
          actionBtn = document.createElement('a');
          actionBtn.className = 'btn btn-pill-dark';
          actionBtn.style.cssText = 'width: 100%; font-size: 0.8rem; padding: 7px 12px; margin-bottom: 10px; display: inline-flex; justify-content: center; align-items: center; gap: 6px;';
          const sep = card.querySelector('div[style*="height: 1px"]');
          if (sep) {
            card.insertBefore(actionBtn, sep);
          } else if (rewardText) {
            card.insertBefore(actionBtn, rewardText);
          } else {
            card.appendChild(actionBtn);
          }
        }

        actionBtn.href = `kuis.html?level=${levelId}`;
        actionBtn.innerHTML = `<span>${isCompleted ? 'Ulangi Kuis' : 'Mulai Kuis'}</span><span>▶</span>`;

        if (rewardText) {
          rewardText.style.color = 'var(--gold-dark)';
          rewardText.textContent = `Hadiah ⭐ Hingga ${config.reward} Poin`;
        }
      } else {
        card.style.borderColor = 'var(--card-border)';
        if (tag) {
          tag.className = 'level-tag-top locked';
          tag.textContent = '🔒 TERKUNCI';
        }
        if (artBox) {
          artBox.innerHTML = `<img src="assets/icons/padlock.svg" alt="Ikon Level Terkunci (Hasil karya dari Gemini 3.8 Flash)" title="Ikon Level Terkunci - Hasil karya dari Gemini 3.8 Flash" style="width: 60px; height: 60px; opacity: 0.75;">`;
        }
        if (reqText) {
          reqText.textContent = `Selesaikan Level ${levelId - 1} untuk membuka level ini.`;
        }
        const existingBtn = card.querySelector('a.btn');
        if (existingBtn) existingBtn.remove();
        if (rewardText) {
          rewardText.style.color = 'var(--text-muted)';
          rewardText.textContent = `Hadiah Hingga ${config.reward} Poin`;
        }
      }
    });

    const headings = document.querySelectorAll('h3');
    let pencapaianCard = null;
    headings.forEach(h => {
      if (h.textContent.trim() === 'Pencapaian') {
        pencapaianCard = h.closest('div[style*="border"]');
      }
    });

    if (pencapaianCard) {
      const badgeCols = pencapaianCard.querySelectorAll('.pencapaian-badges-grid > div, div[style*="grid-template-columns"] > div');
      const badgeKeys = ['dasar', 'menengah', 'menengah atas', 'handal'];
      const oldKeys = ['pemula', 'pangripta', 'wayang', 'master'];
      badgeCols.forEach((col, idx) => {
        const bTitle = col.querySelector('div[style*="font-weight: 700"], div');
        const levelId = idx + 1;
        const key = badgeKeys[idx] || '';
        const oldKey = oldKeys[idx] || '';
        const isEarned = (stats.badges && stats.badges.some(b => {
          const bl = b.toLowerCase();
          return bl.includes(key) || bl.includes(oldKey);
        }))
          || (stats.completedLevels && stats.completedLevels[levelId] !== undefined && stats.completedLevels[levelId] >= 60);

        if (isEarned) {
          col.style.opacity = '1';
          if (bTitle) bTitle.style.color = 'var(--text-heading)';
          const img = col.querySelector('img');
          if (img) img.style.filter = 'drop-shadow(0 4px 8px rgba(201,162,39,0.35))';
        } else {
          col.style.opacity = '0.45';
          if (bTitle) bTitle.style.color = 'var(--text-muted)';
          const img = col.querySelector('img');
          if (img) img.style.filter = 'grayscale(100%)';
        }
      });
    }
  }

  window.addEventListener('javanesia:auth-changed', renderDashboard);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDashboard);
  } else {
    renderDashboard();
  }
})();
