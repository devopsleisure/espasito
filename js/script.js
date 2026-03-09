const root = document.documentElement;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
const themeText = themeToggle?.querySelector('.theme-text');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

let searchableData = [];

// Mobile navigation toggle.
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Footer current year.
document.getElementById('year').textContent = new Date().getFullYear();

// One-click theme switch with persisted preference.
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);

  if (themeIcon && themeText) {
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeText.textContent = theme === 'dark' ? 'Dark' : 'Light';
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (prefersLight ? 'light' : 'dark');
  applyTheme(initialTheme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';

    applyTheme(next);
    localStorage.setItem('portfolio-theme', next);
  });
}

// Loads CPT and ICD-10 data from local JSON files.
async function loadSearchData() {
  try {
    const [cptRes, icdRes] = await Promise.all([
      fetch('data/cpt-codes.json'),
      fetch('data/icd10-codes.json')
    ]);

    const cptCodes = await cptRes.json();
    const icdCodes = await icdRes.json();
    searchableData = [...cptCodes, ...icdCodes];
  } catch (error) {
    searchResults.innerHTML = '<p class="result-item">Unable to load search data right now.</p>';
  }
}

// Searches code/title/description/keywords and renders result cards.
function runSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.innerHTML = '<p class="result-item">Enter a CPT, ICD-10, or billing keyword.</p>';
    return;
  }

  const matches = searchableData.filter((item) => {
    return (
      item.code.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.keywords && item.keywords.join(' ').toLowerCase().includes(query))
    );
  });

  if (!matches.length) {
    searchResults.innerHTML = '<p class="result-item">No results found. Please try another query.</p>';
    return;
  }

  searchResults.innerHTML = matches
    .slice(0, 10)
    .map(
      (item) => `
        <article class="result-item">
          <strong>${item.code}</strong> — ${item.title}
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
}

// Simple reveal animation for section entrances.
const revealItems = document.querySelectorAll('.reveal');

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

searchBtn.addEventListener('click', runSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') runSearch();
});

initTheme();
setupRevealAnimation();
loadSearchData();
