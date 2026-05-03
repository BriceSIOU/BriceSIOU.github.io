// Animation typing dans le prompt terminal hero
(function () {
  const el = document.getElementById('typed');
  if (!el) return;

  const phrases = [
    'whoami',
    'cat about.md',
    'ls ./projects',
    'nmap -sV target',
    'python3 honeypot.py',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  // Délai entre chaque caractère (ms)
  const SPEED_TYPE = 80;
  const SPEED_DEL  = 40;
  const PAUSE_END  = 1800;
  const PAUSE_START = 400;

  function tick() {
    const current = phrases[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, SPEED_DEL);
    }
  }

  setTimeout(tick, 600);
})();
