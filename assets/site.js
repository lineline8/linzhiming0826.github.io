(() => {
  const page = document.querySelector('.page');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function applyPreference() {
    page.classList.toggle('is-animated', !reducedMotion.matches);
    page.dataset.motion = document.hidden ? 'paused' : 'playing';
  }

  // Play once on arrival, then leave the sunrise in its final, still state.
  // Background tabs pause automatically; no video download or animation loop.
  document.addEventListener('visibilitychange', () => {
    page.dataset.motion = document.hidden ? 'paused' : 'playing';
  });
  reducedMotion.addEventListener('change', applyPreference);
  applyPreference();
})();
