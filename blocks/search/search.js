/**
 * Search block
 * @param {Element} block The search block element
 */
export default async function decorate(block) {
  const searchHTML = `
    <div class="search-container">
      <form class="search-form" role="search">
        <div class="search-wrapper">
          <input
            type="search"
            class="search-input"
            placeholder="Search..."
            aria-label="Search"
            autocomplete="off"
          />
          <button type="submit" class="search-button" aria-label="Submit search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </form>
      <div class="search-results" aria-live="polite" aria-atomic="true"></div>
    </div>
  `;

  const content = document.createRange().createContextualFragment(searchHTML);
  block.textContent = '';
  block.append(content);

  const searchForm = block.querySelector('.search-form');
  const searchInput = block.querySelector('.search-input');
  const searchResults = block.querySelector('.search-results');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();

    if (!query) return;

    searchResults.innerHTML = '<p class="search-loading">Searching...</p>';

    // Placeholder for search implementation
    // In a real implementation, this would call a search API
    setTimeout(() => {
      searchResults.innerHTML = `
        <p class="search-info">Search results for: <strong>${query}</strong></p>
        <p class="search-no-results">No results found. Please try different keywords.</p>
      `;
    }, 500);
  });

  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
      searchResults.innerHTML = '';
    }
  });
}
