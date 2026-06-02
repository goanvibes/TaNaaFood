
const grid = document.querySelector('[data-menu-grid]');
const chips = document.querySelector('[data-category-chips]');
const search = document.querySelector('[data-menu-search]');
const vegOnly = document.querySelector('[data-veg-only]');
let activeCategory = 'all';
function money(n){ return `₹${n}`; }
function slug(item){ return item.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function imageFor(item){ return typeof dishImage === 'function' ? dishImage(item) : 'assets/img/colourfulfood.jpg'; }
function renderChips(){
  if(!chips) return;
  chips.innerHTML = [`<button class="chip ${activeCategory==='all'?'active':''}" data-cat="all">All</button>`]
    .concat(MENU_CATEGORIES.map(cat => `<button class="chip ${activeCategory===cat.id?'active':''}" data-cat="${cat.id}">${cat.name}</button>`)).join('');
}
function visibleItems(cat){
  const q = (search?.value || '').toLowerCase().trim();
  return cat.items.filter(item => {
    const matchesCategory = activeCategory === 'all' || cat.id === activeCategory;
    const matchesSearch = !q || `${item.name} ${item.desc} ${cat.name}`.toLowerCase().includes(q);
    const matchesVeg = !vegOnly?.checked || item.veg;
    return matchesCategory && matchesSearch && matchesVeg;
  });
}
function renderMenu(){
  if(!grid) return;
  const html = MENU_CATEGORIES.map(cat => {
    const items = visibleItems(cat);
    if(!items.length) return '';
    return `<section class="menu-category reveal visible" id="${cat.id}">
      <div class="category-head"><div><span class="section-kicker">${cat.name}</span><h2>${cat.name}</h2></div><p>${cat.tagline}</p></div>
      <div class="dish-grid">
        ${items.map(item => `<article class="dish-card">
          <img class="dish-img" src="${imageFor(item)}" alt="${item.name} at Ta Naa Foods" loading="lazy">
          <div class="dish-body">
            <div class="dish-main">
              <div class="dish-title-row"><span class="food-mark ${item.veg ? 'veg':'nonveg'}"></span><h3>${item.name}</h3></div>
              <strong class="dish-price">${money(item.price)}</strong>
            </div>
            <p>${item.desc}</p>
            <a class="btn secondary" href="order.html#order-${cat.id}" onclick="localStorage.setItem('tanaaQuickAdd','${slug(item)}')">Add on order page</a>
          </div>
        </article>`).join('')}
      </div>
    </section>`;
  }).join('');
  grid.innerHTML = html || '<div class="empty-state">No menu items found. Try another search.</div>';
}
function renderMenuPages(){
  const target = document.querySelector('[data-menu-pages]');
  if(!target || !Array.isArray(MENU_PAGE_IMAGES)) return;
  target.innerHTML = MENU_PAGE_IMAGES.map((src,i)=>`<a class="menu-page-card" href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="Ta Naa Foods menu page ${i+1}" loading="lazy"></a>`).join('');
}
chips?.addEventListener('click', e => { const btn=e.target.closest('[data-cat]'); if(!btn) return; activeCategory=btn.dataset.cat; renderChips(); renderMenu(); });
search?.addEventListener('input', renderMenu);
vegOnly?.addEventListener('change', renderMenu);
renderChips(); renderMenu(); renderMenuPages();
