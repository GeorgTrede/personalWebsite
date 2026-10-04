/* Lorenz equations: sigma = 10, beta = 8/3; RK4 with dt = 0.005.
 * Periodic rho=160 → chaotic rho=180 → recovery, without resetting state.
 * Five seconds per transition; manual input holds rho for 10 seconds.
 */
(() => {
  'use strict';
  const canvas = document.querySelector('#lorenz-canvas');
  const slider = document.querySelector('#lorenz-rho');
  const output = document.querySelector('#lorenz-value');
  const toggle = document.querySelector('#lorenz-toggle');
  const status = document.querySelector('#lorenz-status');
  if (!canvas || !slider) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  document.querySelector('.lorenz-controls').hidden = false;
  const dt = 0.005, trailLength = 700, manualDelay = 10000;
  const frameStep = 1 / 25, transitionDuration = 5, cycleDuration = 2 * transitionDuration;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let state = [1, 1, 1], trail = [], rho = 160, cycle = 0;
  let running = !reducedMotion.matches, visible = false, last = null;
  let accumulator = 0, manualUntil = 0, lastMode = '';

  function derivative([x, y, z], r) {
    return [10 * (y - x), x * (r - z) - y, x * y - (8 / 3) * z];
  }
  function advance(q, r) {
    const a = derivative(q, r);
    const b = derivative(q.map((v, i) => v + dt * a[i] / 2), r);
    const c = derivative(q.map((v, i) => v + dt * b[i] / 2), r);
    const d = derivative(q.map((v, i) => v + dt * c[i]), r);
    return q.map((v, i) => v + dt * (a[i] + 2 * b[i] + 2 * c[i] + d[i]) / 6);
  }
  // Settle onto the periodic orbit before showing it, including its initial trail.
  for (let i = 0; i < 20000; i++) {
    state = advance(state, 160);
    if (i >= 20000 - trailLength) trail.push(state);
  }
  function automaticRho(t) {
    return 170 - 10 * Math.cos(Math.PI * t / transitionDuration);
  }
  function showValue() {
    slider.value = rho.toFixed(1);
    output.value = rho.toFixed(1);
    output.textContent = rho.toFixed(1);
    slider.setAttribute('aria-valuetext', `rho ${rho.toFixed(1)}`);
  }
  function showMode(mode) {
    if (mode === lastMode) return;
    lastMode = mode;
    status.textContent = mode;
  }
  function draw() {
    const size = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.round(size.width * pixelRatio);
    const height = Math.round(size.height * pixelRatio);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width; canvas.height = height;
    }
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.clearRect(0, 0, size.width, size.height);
    const azimuth = -62 * Math.PI / 180, elevation = 22 * Math.PI / 180;
    const scale = Math.min(size.width / 240, size.height / 255);
    function project([x, y, z]) {
      const horizontal = -Math.sin(azimuth) * x + Math.cos(azimuth) * y;
      const depth = Math.cos(azimuth) * x + Math.sin(azimuth) * y;
      const vertical = Math.cos(elevation) * (z - 155) - Math.sin(elevation) * depth;
      return [size.width / 2 + horizontal * scale, size.height / 2 - vertical * scale];
    }
    ctx.strokeStyle = '#235f79'; ctx.lineWidth = 1.4;
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    for (let chunk = 0; chunk < 7; chunk++) {
      const from = Math.floor(chunk * (trail.length - 1) / 7);
      const to = Math.floor((chunk + 1) * (trail.length - 1) / 7);
      ctx.globalAlpha = 0.25 + chunk * 0.105;
      ctx.beginPath();
      for (let i = from; i <= to; i++) {
        const [x, y] = project(trail[i]);
        if (i === from) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    const [x, y] = project(state);
    ctx.fillStyle = '#235f79';ctx.beginPath();ctx.arc(x, y, 3, 0, Math.PI * 2);ctx.fill();
  }
  function refreshControls(now) {
    toggle.textContent = running ? 'Pause' : 'Play';
    toggle.setAttribute('aria-label', running ? 'Pause Lorenz animation' : 'Play Lorenz animation');
    if (!running) showMode('Animation paused');
    else if (now < manualUntil) showMode('Manual control · auto resumes after 10 seconds');
    else showMode('Automatic cycle · move ρ to explore');
  }
  slider.addEventListener('input', () => {
    rho = Number(slider.value);
    manualUntil = performance.now() + manualDelay;
    // Match the cycle to the selected value, keeping its direction when it resumes.
    const phase = Math.acos((170 - rho) / 10) * transitionDuration / Math.PI;
    cycle = cycle < transitionDuration ? phase : cycleDuration - phase;
    showValue(); refreshControls(performance.now());
  });
  toggle.addEventListener('click', () => {
    running = !running;
    last = null; accumulator = 0;
    refreshControls(performance.now());
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { running = false; last = null; refreshControls(performance.now()); }
  });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    last = null; accumulator = 0;
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => { last = null; accumulator = 0; });
  new ResizeObserver(draw).observe(canvas);
  function frame(now) {
    if (running && visible && !document.hidden) {
      if (last !== null) accumulator += Math.min((now - last) / 1000, 0.1);
      last = now;
      let advanced = false;
      while (accumulator >= frameStep) {
        accumulator -= frameStep;
        if (now >= manualUntil) {
          manualUntil = 0;
          cycle = (cycle + frameStep) % cycleDuration;
          rho = automaticRho(cycle);
        }
        for (let i = 0; i < 13; i++) {
          state = advance(state, rho);
          trail.push(state);
        }
        trail = trail.slice(-trailLength);
        advanced = true;
      }
      if (advanced) { showValue(); draw(); }
      refreshControls(now);
    } else last = null;
    requestAnimationFrame(frame);
  }
  showValue(); draw(); refreshControls(performance.now());
  requestAnimationFrame(frame);
})();
