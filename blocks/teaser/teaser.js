import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);

  const content = document.createRange().createContextualFragment(`
    <section class="teaser-section">
        <div class="teaser-background">
            <img src="/api/placeholder/1200/600" alt="Team collaborating on a unified platform">
        </div>
        <div class="bokeh-effect"></div>
        <div class="content-container">
            <h1>${config.title}</h1>
            <p>${config.description}</p>
            <a href="${config.buttonLink}" class="learn-more-btn">${config.buttonText}</a>
        </div>
    </section>
  `);

  block.textContent = '';
  block.append(content);
}