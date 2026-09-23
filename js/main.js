(function () {
  'use strict';

  let toastTimer = null;

  window.showToast = function showToast(message) {
    let toastEl = document.querySelector('.toast');
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 2600);
  };

  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu-list');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open');
    });
  }

  const videoModal = document.getElementById('videoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalVideoTitle = document.getElementById('modalVideoTitle');
  const modalCloseBtn = videoModal ? videoModal.querySelector('.modal-close-btn') : null;
  const modalVideoSource = modalVideoPlayer ? modalVideoPlayer.querySelector('source') : null;

  function openVideoModal(src, title) {
    if (!videoModal || !modalVideoPlayer) return;

    if (title && modalVideoTitle) {
      modalVideoTitle.textContent = title;
    }
    if (src && modalVideoSource) {
      modalVideoSource.src = src;
      modalVideoPlayer.load();
    }

    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalVideoPlayer.play().catch(function () {

    });
  }

  function closeVideoModal() {
    if (!videoModal || !modalVideoPlayer) return;

    modalVideoPlayer.pause();
    modalVideoPlayer.currentTime = 0;
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-play-video]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openVideoModal(trigger.dataset.videoSrc, trigger.dataset.videoTitle);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeVideoModal);
  }
  if (videoModal) {
    videoModal.addEventListener('click', function (e) {
      if (e.target === videoModal) closeVideoModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeVideoModal();
  });

  const AUTH_STORAGE_KEY = 'javanesia_user_name';
  const QUIZ_STORAGE_KEY = 'javanesia_quiz_state';

  function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, function (tag) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      })[tag] || tag;
    });
  }

  const JavanesiaAuth = {
    getUserName: function () {
      try {
        return (localStorage.getItem(AUTH_STORAGE_KEY) || '').trim();
      } catch (e) {
        return '';
      }
    },

    setUserName: function (rawName) {
      const cleanName = (rawName || '').trim();
      if (!cleanName) return false;

      try {
        localStorage.setItem(AUTH_STORAGE_KEY, cleanName);

        const quizStateStr = localStorage.getItem(QUIZ_STORAGE_KEY);
        let quizState = quizStateStr ? JSON.parse(quizStateStr) : {};
        quizState.name = cleanName;
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
      } catch (e) {
        console.warn('LocalStorage save error:', e);
      }

      this.updateUI();
      window.dispatchEvent(new CustomEvent('javanesia:auth-changed', {
        detail: { name: cleanName, loggedIn: true }
      }));
      return true;
    },

    logout: function () {
      try {
        localStorage.removeItem(AUTH_STORAGE_KEY);

        const quizStateStr = localStorage.getItem(QUIZ_STORAGE_KEY);
        if (quizStateStr) {
          let quizState = JSON.parse(quizStateStr);
          quizState.name = '';
          localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
        }
      } catch (e) {
        console.warn('LocalStorage remove error:', e);
      }

      this.closeDropdown();
      this.updateUI();
      window.dispatchEvent(new CustomEvent('javanesia:auth-changed', {
        detail: { name: '', loggedIn: false }
      }));

      if (window.showToast) {
        window.showToast('Kamu telah berhasil keluar (logout). Nama akun telah dihapus.');
      }
    },

    updateUI: function () {
      const name = this.getUserName();
      const isLoggedIn = !!name;
      const displayName = isLoggedIn ? name : 'Tamu Budaya';

      const authBtns = document.querySelectorAll('.btn-header-auth, #btn-header-auth');
      authBtns.forEach(function (btn) {
        if (isLoggedIn) {
          btn.innerHTML = `<span class="auth-btn-name">${escapeHTML(name)}</span>`;
          btn.setAttribute('title', `Akun: ${name} (Klik untuk menu akun)`);
          btn.setAttribute('aria-label', `Akun: ${name}`);
        } else {
          btn.innerHTML = `Mulai`;
          btn.setAttribute('title', 'Mulai');
          btn.setAttribute('aria-label', 'Mulai');
        }
      });

      const userHeadings = document.querySelectorAll('.eval-user-heading');
      userHeadings.forEach(function (el) {
        el.textContent = displayName;
      });

      const avatars = document.querySelectorAll('.eval-avatar-img, img[alt*="Ardian"], img[alt*="Tamu Budaya"]');
      avatars.forEach(function (img) {
        img.alt = displayName;
      });

      const leaderboardCell = document.getElementById('evalLeaderboardUserName');
      if (leaderboardCell) {
        leaderboardCell.textContent = `${displayName} (Kamu)`;
      } else {
        document.querySelectorAll('tr').forEach(function (tr) {
          const td = tr.querySelectorAll('td');
          if (td.length >= 2 && td[1].textContent.includes('(Kamu)')) {
            td[1].textContent = `${displayName} (Kamu)`;
          }
        });
      }

      const dropdownName = document.getElementById('authDropdownUserName');
      if (dropdownName) {
        dropdownName.textContent = displayName;
      }
    },

    openModal: function (mode) {
      mode = mode || 'login';
      this.closeDropdown();

      let modal = document.getElementById('authNameModal');
      if (!modal) {
        this.injectModal();
        modal = document.getElementById('authNameModal');
      }

      const title = document.getElementById('authModalTitle');
      const desc = document.getElementById('authModalDesc');
      const input = document.getElementById('authUserNameInput');
      const submitBtn = document.getElementById('authSubmitBtn');

      const currentName = this.getUserName();
      if (mode === 'edit' && currentName) {
        if (title) title.textContent = 'Ganti Nama';
        if (desc) {
          desc.textContent = '';
          desc.style.display = 'none';
        }
        if (submitBtn) submitBtn.innerHTML = '<span>Simpan</span>';
        if (input) input.value = currentName;
      } else {
        if (title) title.textContent = 'Masuk ke Sikipli';
        if (desc) {
          desc.textContent = '';
          desc.style.display = 'none';
        }
        if (submitBtn) submitBtn.innerHTML = '<span>Mulai</span>';
        if (input) input.value = currentName || '';
      }

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      if (input) {
        setTimeout(function () {
          input.focus();
          input.select();
        }, 60);
      }
    },

    closeModal: function () {
      const modal = document.getElementById('authNameModal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    },

    toggleDropdown: function () {
      let dropdown = document.getElementById('authUserDropdown');
      if (!dropdown) {
        this.injectDropdown();
        dropdown = document.getElementById('authUserDropdown');
      }
      if (!dropdown) return;

      const isVisible = dropdown.style.display === 'block';
      dropdown.style.display = isVisible ? 'none' : 'block';
      if (!isVisible) {
        this.updateUI();
      }
    },

    closeDropdown: function () {
      const dropdown = document.getElementById('authUserDropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    },

    injectDropdown: function () {
      if (document.getElementById('authUserDropdown')) return;

      const navActions = document.querySelector('.nav-actions');
      if (!navActions) return;

      const dropdownEl = document.createElement('div');
      dropdownEl.className = 'auth-user-dropdown';
      dropdownEl.id = 'authUserDropdown';
      dropdownEl.style.display = 'none';
      dropdownEl.innerHTML = `
        <div class="auth-user-dropdown-header">
          <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); font-weight: 700;">Akun Budaya</div>
          <div class="auth-dropdown-user-name" id="authDropdownUserName">Tamu Budaya</div>
        </div>
        <div class="auth-user-dropdown-divider"></div>
        <a href="evaluasi.html" class="auth-dropdown-link" id="authDropdownEvalLink">
          <span>📊</span> <span>Dashboard Evaluasi</span>
        </a>
        <button type="button" class="auth-dropdown-link" id="authBtnChangeName">
          <span>✏️</span> <span>Ganti Nama</span>
        </button>
        <div class="auth-user-dropdown-divider"></div>
        <button type="button" class="auth-dropdown-link logout" id="authBtnLogout">
          <span>🚪</span> <span>Keluar (Logout)</span>
        </button>
      `;

      navActions.appendChild(dropdownEl);

      const changeBtn = document.getElementById('authBtnChangeName');
      if (changeBtn) {
        changeBtn.addEventListener('click', function () {
          JavanesiaAuth.openModal('edit');
        });
      }

      const logoutBtn = document.getElementById('authBtnLogout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
          JavanesiaAuth.logout();
        });
      }
    },

    injectModal: function () {
      if (document.getElementById('authNameModal')) return;

      const modalEl = document.createElement('div');
      modalEl.className = 'auth-modal-backdrop';
      modalEl.id = 'authNameModal';
      modalEl.style.display = 'none';
      modalEl.innerHTML = `
        <div class="auth-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
          <button type="button" class="auth-modal-close" id="authModalClose" aria-label="Tutup">&times;</button>
          <img src="assets/images/model.png" alt="Model SIKIPLI" class="auth-modal-icon">
          <h3 class="auth-modal-title" id="authModalTitle">Masuk ke Sikipli</h3>
          <p class="auth-modal-desc" id="authModalDesc" style="display: none;"></p>
          <form id="authNameForm" autocomplete="off">
            <div class="auth-input-group">
              <label for="authUserNameInput" class="auth-input-label">NAMA LENGKAP / PANGGILAN</label>
              <div class="auth-input-wrapper">
                <input type="text" id="authUserNameInput" class="auth-input-field" placeholder="contoh: budi" maxlength="30" required autocomplete="name" />
              </div>
            </div>
            <button type="submit" class="btn btn-gold" id="authSubmitBtn" style="width: 100%; justify-content: center; padding: 12px; font-weight: 700;">
              <span>Mulai</span>
            </button>
          </form>
        </div>
      `;

      document.body.appendChild(modalEl);

      const closeBtn = document.getElementById('authModalClose');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          JavanesiaAuth.closeModal();
        });
      }

      modalEl.addEventListener('click', function (e) {
        if (e.target === modalEl) {
          JavanesiaAuth.closeModal();
        }
      });

      const form = document.getElementById('authNameForm');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          const input = document.getElementById('authUserNameInput');
          const val = input ? input.value.trim() : '';
          if (!val) {
            if (window.showToast) window.showToast('Silakan ketik namamu terlebih dahulu! ✍️');
            return;
          }

          JavanesiaAuth.setUserName(val);
          JavanesiaAuth.closeModal();
          if (window.showToast) {
            window.showToast(`Selamat datang, ${val}! 🙏`);
          }
        });
      }
    },

    init: function () {
      this.injectDropdown();
      this.injectModal();
      this.updateUI();

      document.addEventListener('click', function (e) {
        const authBtn = e.target.closest('.btn-header-auth, #btn-header-auth');
        if (authBtn) {
          e.preventDefault();
          if (JavanesiaAuth.getUserName()) {
            JavanesiaAuth.toggleDropdown();
          } else {
            JavanesiaAuth.openModal('login');
          }
          return;
        }

        const dropdown = document.getElementById('authUserDropdown');
        if (dropdown && dropdown.style.display === 'block') {
          if (!e.target.closest('#authUserDropdown') && !e.target.closest('.btn-header-auth, #btn-header-auth')) {
            dropdown.style.display = 'none';
          }
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          JavanesiaAuth.closeModal();
          JavanesiaAuth.closeDropdown();
        }
      });
    }
  };

  window.JavanesiaAuth = JavanesiaAuth;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      JavanesiaAuth.init();
    });
  } else {
    JavanesiaAuth.init();
  }
})();
