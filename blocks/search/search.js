import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const config = readBlockConfig(block);

  const searchHTML = `
    <div class="search-container">
      <h3 class="search-title" data-aue-label="Title" data-aue-prop="title" data-aue-type="text">${config.title}</h3>
      <p class="search-subtitle" data-aue-label="Subtitle" data-aue-prop="subtitle" data-aue-type="text">${config.subtitle}</p>

      <form class="search-form" role="search">
        <div class="search-wrapper">
          <input
            type="search"
            class="search-input"
            placeholder="Search..."
            aria-label="Search"
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  `;

  const content = document.createRange().createContextualFragment(searchHTML);
  block.textContent = '';
  block.append(content);

  const searchForm = block.querySelector('.search-form');

  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Placeholder for search implementation
  });
}
