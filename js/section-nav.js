document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  if (!content) return;

  // Top anchor
  if (!document.getElementById('top')) {
    const top = document.createElement('a');
    top.id = 'top';
    content.prepend(top);
  }

  const h2s = Array.from(content.querySelectorAll('h2'));
  if (h2s.length === 0) return;

  const createBackLink = () => {
    const a = document.createElement('a');
    a.href = '#top';
    a.className = 'back-to-top';
    a.textContent = '↑ Voltar ao topo';
    return a;
  };

  for (let i = 0; i < h2s.length; i++) {
    const start = h2s[i];
    const end = h2s[i + 1];
    let node = start.nextElementSibling;
    let last = start;

    // Walk siblings until the next H2 (end) or end of content
    while (node && node !== end) {
      last = node;
      node = node.nextElementSibling;
    }

    // Avoid duplication if there is already a back-to-top nearby
    if (!last || last.classList?.contains('back-to-top') || last.matches('.back-to-top')) continue;

    const back = createBackLink();
    // Insert after 'last'
    if (last && last.parentNode) {
      last.parentNode.insertBefore(back, last.nextSibling);
    } else {
      start.insertAdjacentElement('afterend', back);
    }
  }
});
