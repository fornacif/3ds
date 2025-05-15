import { isAuthorMode, loadNav } from '../../scripts/utils.js';

export default async function decorate(block) {
  const navItems = await loadNav();
  let logoImage = isAuthorMode ? '/content/dassault.resource/icons/logo.svg': '/icons/logo.svg';

  const content = document.createRange().createContextualFragment(`
    <header class="header" role="banner" aria-label="Dassault Systèmes Main Navigation">
      <button class="mobile-menu-btn" aria-expanded="false" aria-controls="main-navigation" aria-label="Toggle menu">
        <div class="mobile-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      <a href="/" class="logo-link" aria-label="Dassault Systèmes Home">
        <img src="${logoImage}" alt="Dassault Systèmes Logo" class="logo">
      </a>
      
      <nav id="main-navigation" class="main-nav" role="navigation" aria-label="Main Navigation">
      </nav>
      
      <div class="right-nav">
        <button class="search-btn" aria-label="Search">
          <img src="/icons/search.svg" alt="Search Icon" class="search-icon">
        </button>
      </div>
    </header>
  `);

  block.textContent = '';
  block.append(content);

  const nav = document.querySelector('#main-navigation');
  navItems.forEach(item => {
    const navItem = document.createElement('div');
    navItem.classList.add('nav-item');
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.href = item.path;
    link.textContent = item.title;
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-expanded', 'false');
    link.setAttribute('aria-controls', 'sub-navigation');
    link.setAttribute('aria-label', item.title);
    navItem.append(link);
    nav.append(navItem);
  });

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');
  });
}
