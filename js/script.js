// Handles mobile navigation toggle.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

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

// Keeps footer year up to date.
document.getElementById('year').textContent = new Date().getFullYear();

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');

let searchableData = [];

// Loads JSON data for CPT and ICD-10 references.
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
    searchResults.innerHTML = '<p class="result-item">Unable to load search data.</p>';
  }
}

// Filters CPT/ICD data using user query and renders results.
function runSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.innerHTML = '<p class="result-item">Enter a term to start searching.</p>';
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
    searchResults.innerHTML = '<p class="result-item">No matches found. Try another keyword.</p>';
    return;
  }

  searchResults.innerHTML = matches
    .slice(0, 8)
    .map(
      (item) => `
        <article class="result-item">
          <strong>${item.code}</strong> - ${item.title}
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
}

searchBtn.addEventListener('click', runSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') runSearch();
});

loadSearchData();
