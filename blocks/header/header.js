import { loadFragment } from '../fragment/fragment.js';
import { getPagePath, getIconPath, getCurrentLocale } from '../../scripts/utils.js';

function switchLocale(targetLocale) {
  const currentLocale = getCurrentLocale();
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace(`/${currentLocale}/`, `/${targetLocale}/`);
  window.location.href = newPath;
}

function extractMenuItems(fragment) {
  const menuItems = [];
  const menuBlock = fragment.querySelector('.menu.block');

  if (menuBlock) {
    const items = menuBlock.querySelectorAll(':scope > div');
    items.forEach(item => {
      const labelEl = item.querySelector('div:first-child p');
      const linkEl = item.querySelector('div:nth-child(2) a');

      if (labelEl && linkEl) {
        menuItems.push({
          label: labelEl.textContent.trim(),
          path: linkEl.getAttribute('href')
        });
      }
    });
  }

  return menuItems;
}

function buildNavigationHTML(menuItems) {
  return menuItems.map(item => `
    <div class="nav-item">
      <a href="${item.path}" class="nav-link" aria-haspopup="true" aria-expanded="false">
        ${item.label}
      </a>
    </div>
  `).join('');
}

function extractLoginModalData(fragment) {
  const loginModalBlock = fragment.querySelector('.login-modal.block');
  const items = loginModalBlock.querySelectorAll(':scope > div');
  const title = items[0]?.querySelector('p')?.textContent.trim() || 'Login';
  const usernameLabel = items[1]?.querySelector('p')?.textContent.trim() || 'Username';
  const profileTypeLabel = items[2]?.querySelector('p')?.textContent.trim() || 'Profile Type';
  const optionsText = items[3]?.querySelector('p')?.textContent.trim() || '';
  const cancelButtonLabel = items[4]?.querySelector('p')?.textContent.trim() || 'Cancel';

  const profileOptions = optionsText.split(',').map(option => {
    const [value, label] = option.split('=');
    return { value: value?.trim(), label: label?.trim() };
  }).filter(opt => opt.value && opt.label);

  return { title, usernameLabel, profileTypeLabel, profileOptions, cancelButtonLabel };
}

export default async function decorate(block) {
  
  block.textContent = '';
  //block.append(content);

  
}
