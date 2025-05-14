import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {
  const config = readBlockConfig(block);
  console.info(config.asset)

  const content = document.createRange().createContextualFragment(`
    <model-viewer 
      src="${config.asset}"
      ar shadow-intensity="1" camera-controls touch-action="pan-y">
    </model-viewer>
  `);

  block.textContent = '';
  block.append(content);
}