/* Animated film-grain overlay.
   Draws a small noise tile and repeats it, rather than generating a
   full-viewport ImageData every frame — the original approach allocated
   several megabytes per frame and dominated the main thread on large screens. */
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.getElementById('grain');
  if (!canvas) return;

  var ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  var TILE = 180;        // noise tile edge, in pixels
  var FRAMES = 6;        // pre-rendered tiles cycled through
  var INTERVAL = 90;     // ms between frames
  var DENSITY = 0.5;     // share of pixels that get a grain speck
  var ALPHA = 85;        // maximum speck opacity (0-255)

  var tiles = [];
  var frame = 0;
  var last = 0;
  var rafId = null;

  function buildTiles() {
    tiles = [];
    for (var f = 0; f < FRAMES; f++) {
      var off = document.createElement('canvas');
      off.width = off.height = TILE;
      var octx = off.getContext('2d');
      var img = octx.createImageData(TILE, TILE);
      var d = img.data;
      for (var i = 0; i < d.length; i += 4) {
        if (Math.random() < DENSITY) {
          var v = (Math.random() * 255) | 0;
          d[i] = d[i + 1] = d[i + 2] = v;
          d[i + 3] = (Math.random() * ALPHA) | 0;
        }
      }
      octx.putImageData(img, 0, 0);
      tiles.push(off);
    }
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    var tile = tiles[frame];
    if (!tile) return;
    var pattern = ctx.createPattern(tile, 'repeat');
    if (!pattern) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pattern;
    // Jitter the origin so the tile seams never sit still
    ctx.save();
    ctx.translate(-((Math.random() * TILE) | 0), -((Math.random() * TILE) | 0));
    ctx.fillRect(0, 0, canvas.width + TILE, canvas.height + TILE);
    ctx.restore();
    frame = (frame + 1) % tiles.length;
  }

  function loop(ts) {
    if (ts - last >= INTERVAL) {
      draw();
      last = ts;
    }
    rafId = requestAnimationFrame(loop);
  }

  function start() {
    if (rafId === null) {
      last = 0;
      rafId = requestAnimationFrame(loop);
    }
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // Pause while the tab is hidden
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  buildTiles();
  resize();
  start();
})();
