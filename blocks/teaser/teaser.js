export default function decorate(block) {
  // Check if this block should be styled as a teaser
  if (block.classList.contains('teaser')) {
    // Create the hero structure
    const heroEl = document.createElement('div');
    heroEl.className = 'hero';
    
    // Create background div
    const backgroundEl = document.createElement('div');
    backgroundEl.className = 'hero-background';
    
    // Get image from the first image in the block, if available
    const img = block.querySelector('img');
    if (img) {
      backgroundEl.style.backgroundImage = `url(${img.src})`;
      // Hide the original image row
      img.closest('.block > div').style.display = 'none';
    }
    
    // Create content container
    const contentEl = document.createElement('div');
    contentEl.className = 'hero-content';
    
    // Find heading, paragraph and button
    const heading = block.querySelector('h1, h2, h3, h4, h5, h6');
    const paragraphs = block.querySelectorAll('p:not(:has(a))');
    const buttonLink = block.querySelector('a');
    
    // Process title
    if (heading) {
      const titleEl = document.createElement('div');
      titleEl.className = 'hero-title';
      titleEl.innerHTML = heading.innerHTML;
      contentEl.appendChild(titleEl);
      // Hide original
      heading.style.display = 'none';
    }
    
    // Process description
    if (paragraphs.length) {
      const textEl = document.createElement('div');
      textEl.className = 'hero-text';
      textEl.innerHTML = paragraphs[0].innerHTML;  // Use first paragraph
      contentEl.appendChild(textEl);
      // Hide original
      paragraphs[0].style.display = 'none';
    }
    
    // Process button
    if (buttonLink) {
      buttonLink.className = 'hero-button';
      contentEl.appendChild(buttonLink.cloneNode(true));
      // Hide original
      buttonLink.style.display = 'none';
    }
    
    // Append all elements
    heroEl.appendChild(backgroundEl);
    heroEl.appendChild(contentEl);
    
    // Replace block content with hero
    block.prepend(heroEl);
  }
}