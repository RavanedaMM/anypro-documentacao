document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  if (!content) return;

  const headings = Array.from(content.querySelectorAll('h2, h3'));
  if (headings.length === 0) return;

  const slugify = (text) => text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  headings.forEach(h => {
    if (!h.id) h.id = slugify(h.textContent);
  });

  const toc = document.createElement('aside');
  toc.className = 'doc-toc';

  const title = document.createElement('div');
  title.className = 'toc-title';
  title.textContent = 'Nesta página';
  toc.appendChild(title);

  const nav = document.createElement('nav');
  nav.className = 'toc-list';

  headings.forEach(h => {
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    a.className = h.tagName.toLowerCase() === 'h3' ? 'toc-item sub' : 'toc-item';
    nav.appendChild(a);
  });

  toc.appendChild(nav);
  document.body.appendChild(toc);
});
