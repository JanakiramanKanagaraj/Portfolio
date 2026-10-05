(() => {
  let preference = 'system';
  try { preference = localStorage.getItem('portfolio-theme') || 'system'; } catch (_) {}
  if (!['system', 'light', 'dark'].includes(preference)) preference = 'system';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  window.applyPortfolioTheme = (value) => {
    const resolved = value === 'system' ? (media.matches ? 'dark' : 'light') : value;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = value;
    document.querySelector('meta[name="theme-color"]').content = resolved === 'dark' ? '#101714' : '#f6f8f1';
  };
  window.applyPortfolioTheme(preference);
  media.addEventListener('change', () => {
    if (document.documentElement.dataset.themePreference === 'system') window.applyPortfolioTheme('system');
  });
})();
