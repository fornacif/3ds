import { readBlockConfig, createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);
  console.info(JSON.stringify(config));
  
  const picture = createOptimizedPicture(config.image, config.imagedescription);

  const content = document.createRange().createContextualFragment(`
    <section class="teaser-section">
        <div class="teaser-background">
            ${picture.outerHTML}
        </div>
        <div class="bokeh-effect"></div>
        <div class="content-container">
            <h1 data-aue-label="Title" data-aue-prop="title" data-aue-type="text" >${config.title}</h1>
            <p data-aue-label="Description" data-aue-prop="description" data-aue-type="text">${config.description}</p>
            <a data-aue-label="Call to Action" data-aue-prop="buttonText" data-aue-type="text" href="${config.buttonlink}" class="learn-more-btn">${config.buttontext}</a>
        </div>
    </section>
  `);

  block.textContent = '';
  block.append(content);

  
}