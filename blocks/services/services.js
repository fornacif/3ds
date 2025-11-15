/**
 * Services block
 * @param {Element} block The services block element
 */
export default async function decorate(block) {
  const services = [
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>`,
      title: 'Consulting',
      description: 'Expert guidance and strategic planning to help your business achieve its goals and optimize operations.'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      title: 'Implementation',
      description: 'Seamless integration and deployment of solutions tailored to your specific business requirements.'
    },
    {
      icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>`,
      title: 'Support',
      description: 'Comprehensive ongoing support and maintenance to ensure your systems run smoothly and efficiently.'
    }
  ];

  const servicesHTML = services.map(service => `
    <div class="service-item">
      <div class="service-icon">${service.icon}</div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
    </div>
  `).join('');

  const content = document.createRange().createContextualFragment(`
    <div class="services-container">
      ${servicesHTML}
    </div>
  `);

  block.textContent = '';
  block.append(content);
}
