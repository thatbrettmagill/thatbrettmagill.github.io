(function () {
  function openSearch() {
    // Open Material's search dialog
    const lbl = document.querySelector('label[for="__search"]');
    if (lbl) lbl.click();
    else window.dispatchEvent(new KeyboardEvent('keydown', { key: '/' }));
  }

  function addBtn() {
    // Make the button
    const btn = document.createElement('button');
    btn.id = 'bm-search-btn';
    btn.setAttribute('aria-label', 'Search');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="currentColor"
          d="M9.5 3a6.5 6.5 0 015.18 10.45l4.44 4.44-1.41 1.41-4.44-4.44A6.5 6.5 0 119.5 3m0 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"/>
      </svg>`;
    document.body.appendChild(btn);
    btn.addEventListener('click', openSearch);
  }

  document.addEventListener('DOMContentLoaded', addBtn);
})();
