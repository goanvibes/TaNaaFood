const grid = document.querySelector('[data-menu-grid]');
const chips = document.querySelector('[data-category-chips]');
const search = document.querySelector('[data-menu-search]');
const vegOnly = document.querySelector('[data-veg-only]');
let active = 'all';

function money(n){ return `₹${n}`; }
function allItems(){ return MENU_CATEGORIES.flatMap(cat => cat.items.map(item => ({...item, category: cat.name, categoryId: cat.id}))); }

function renderChips(){
  if(!chips) return;
  chips.innerHTML = `<button class="chip active" data-cat="all">All</button>` + MENU_CATEGORIES.map(cat => `<button class="chip" data-cat="${cat.id}">${cat.name}</button>`).join('');
  chips.addEventListener('click', e => {
    const btn = e.target.closest('button[data-cat]');
    if(!btn) return;
    active = btn.dataset.cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    renderMenu();
  });
}

function renderMenu(){
  if(!grid) return;
  const q = (search?.value || '').toLowerCase().trim();
  const onlyVeg = vegOnly?.checked;
  const filteredCats = MENU_CATEGORIES.map(cat => ({
    ...cat,
    items: cat.items.filter(item => {
      const inCat = active === 'all' || cat.id === active;
      const inSearch = !q || `${item.name} ${item.desc} ${cat.name}`.toLowerCase().includes(q);
      const inVeg = !onlyVeg || item.veg;
      return inCat && inSearch && inVeg;
    })
  })).filter(cat => cat.items.length);

  grid.innerHTML = filteredCats.map(cat => `
    <section class="menu-category reveal visible" id="${cat.id}">
      <div class="category-head">
        <span class="section-kicker">${cat.name}</span>
        <p>${cat.tagline}</p>
      </div>
      <div class="dish-grid">
        ${cat.items.map(item => `
          <article class="dish-card">
            <div>
              <div class="dish-top">
                <h3>${item.name}</h3>
                <span class="food-mark ${item.veg ? 'veg' : 'nonveg'}" title="${item.veg ? 'Veg' : 'Non-veg'}"></span>
              </div>
              <p>${item.desc}</p>
            </div>
            <strong>${money(item.price)}</strong>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('') || `<div class="empty-state">No dishes found. Try another search.</div>`;
}

renderChips();
renderMenu();
search?.addEventListener('input', renderMenu);
vegOnly?.addEventListener('change', renderMenu);
