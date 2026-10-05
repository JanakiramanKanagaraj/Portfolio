document.getElementById('year').textContent = new Date().getFullYear();
const themeSelect = document.getElementById('theme');
themeSelect.value = document.documentElement.dataset.themePreference || 'system';
themeSelect.addEventListener('change', () => {
  window.applyPortfolioTheme(themeSelect.value);
  try { localStorage.setItem('portfolio-theme', themeSelect.value); } catch (_) {}
});
