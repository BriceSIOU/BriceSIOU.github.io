/* Portfolio interactions: nav, typing prompt, scroll reveals, copy-to-clipboard.
   Everything degrades gracefully — nothing here is required to read the site. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Theme toggle ──────────────────────────────────────────── */
  /* The stored theme is applied inline in <head> before paint; this only
     handles switching it afterwards. Dark is the default when nothing
     is stored, regardless of the OS preference. */
  var themeBtn = document.getElementById('theme-toggle');

  if (themeBtn) {
    var root = document.documentElement;

    var currentTheme = function () {
      return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    };

    var applyTheme = function (theme) {
      root.setAttribute('data-theme', theme);
      themeBtn.setAttribute('aria-pressed', String(theme === 'light'));
      // Keep the browser chrome in step with the page
      var meta = document.querySelector('meta[name="theme-color"]:not([media])');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'theme-color');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', theme === 'light' ? '#ffffff' : '#000000');
      try { localStorage.setItem('theme', theme); } catch (err) { /* private mode */ }
    };

    applyTheme(currentTheme());

    themeBtn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });
  }

  /* ── Mobile navigation ─────────────────────────────────────── */
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close when a link is followed, or on Escape
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    // Reset state when leaving the mobile breakpoint
    window.addEventListener('resize', function () {
      if (window.innerWidth > 720) setOpen(false);
    });
  }

  /* ── Typing prompt ─────────────────────────────────────────── */
  var typed = document.getElementById('typed');

  if (typed) {
    var phrases;
    try {
      phrases = JSON.parse(typed.getAttribute('data-phrases') || '[]');
    } catch (err) {
      phrases = [];
    }

    if (!phrases.length) {
      phrases = ['whoami'];
    }

    if (reduced) {
      // No animation: just show the first command.
      typed.textContent = phrases[0];
    } else {
      var TYPE = 75, DEL = 35, HOLD = 1900, GAP = 450;
      var phraseIdx = 0, charIdx = 0, deleting = false;

      var tick = function () {
        var current = phrases[phraseIdx];

        if (!deleting) {
          charIdx++;
          typed.textContent = current.slice(0, charIdx);
          if (charIdx === current.length) {
            deleting = true;
            setTimeout(tick, HOLD);
            return;
          }
          setTimeout(tick, TYPE);
        } else {
          charIdx--;
          typed.textContent = current.slice(0, charIdx);
          if (charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            setTimeout(tick, GAP);
            return;
          }
          setTimeout(tick, DEL);
        }
      };

      setTimeout(tick, 650);
    }
  }

  /* ── Scroll reveals ────────────────────────────────────────── */
  var revealables = document.querySelectorAll('.reveal');

  if (revealables.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '240px 0px 240px 0px', threshold: 0 });

      revealables.forEach(function (el) {
        // Stagger within the parent only, so a fast scroll never leaves a
        // whole section blank waiting on a long cumulative delay.
        var siblings = el.parentNode ? el.parentNode.children : [el];
        var n = Array.prototype.indexOf.call(siblings, el);
        el.style.transitionDelay = (Math.min(Math.max(n, 0), 3) * 45) + 'ms';
        observer.observe(el);
      });
    }
  }

  /* ── Copy to clipboard ─────────────────────────────────────── */
  document.querySelectorAll('.copybtn').forEach(function (btn) {
    var label = btn.querySelector('.copybtn__label');
    var original = label ? label.textContent : '';

    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy') || '';
      var done = btn.getAttribute('data-done') || 'OK';

      var flash = function () {
        btn.classList.add('is-done');
        if (label) label.textContent = done;
        setTimeout(function () {
          btn.classList.remove('is-done');
          if (label) label.textContent = original;
        }, 2000);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(flash, function () {});
      } else {
        // Fallback for non-secure contexts (e.g. plain-HTTP previews)
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); flash(); } catch (err) { /* ignore */ }
        document.body.removeChild(ta);
      }
    });
  });
})();
