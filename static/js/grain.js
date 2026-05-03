// Grain pellicule photo — fort contraste, haute densité
(function () {
  const canvas = document.getElementById('grain');
  const ctx = canvas.getContext('2d');
  let animId;
  let lastTime = 0;
  // Intervalle en ms entre chaque frame de grain (plus bas = plus animé)
  const INTERVAL = 80;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawGrain() {
    const W = canvas.width;
    const H = canvas.height;
    const imageData = ctx.createImageData(W, H);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Densité 0.65 = pellicule forte
      if (Math.random() < 0.65) {
        const val = Math.random() * 255;
        // Alpha fort pour le contraste élevé
        const alpha = Math.random() * 90;
        data[i]     = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = alpha;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function loop(timestamp) {
    if (timestamp - lastTime >= INTERVAL) {
      drawGrain();
      lastTime = timestamp;
    }
    animId = requestAnimationFrame(loop);
  }

  // Pause grain quand onglet caché (perf)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      lastTime = 0;
      animId = requestAnimationFrame(loop);
    }
  });

  window.addEventListener('resize', resize);
  resize();
  animId = requestAnimationFrame(loop);
})();
