
const orderMenu = document.querySelector('[data-order-menu]');
const cartItems = document.querySelector('[data-cart-items]');
const cartTotal = document.querySelector('[data-cart-total]');
const orderForm = document.querySelector('[data-order-form]');
const orderPreview = document.querySelector('[data-order-preview]');
const whatsappNumber = '918855817785';
let cart = JSON.parse(localStorage.getItem('tanaaCart') || '{}');
function money(n){ return `₹${n}`; }
function slug(item){ return item.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function imageFor(item){ return typeof dishImage === 'function' ? dishImage(item) : 'assets/img/colourfulfood.jpg'; }
function itemMap(){ const map={}; MENU_CATEGORIES.forEach(cat=>cat.items.forEach(item=>map[slug(item)]={...item,category:cat.name,categoryId:cat.id})); return map; }
const itemsById = itemMap();
function save(){ localStorage.setItem('tanaaCart', JSON.stringify(cart)); }
function total(){ return Object.entries(cart).reduce((sum,[id,qty]) => sum + (itemsById[id]?.price || 0) * qty, 0); }
function count(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function applyQuickAdd(){ const id=localStorage.getItem('tanaaQuickAdd'); if(id && itemsById[id]){ cart[id]=(cart[id]||0)+1; localStorage.removeItem('tanaaQuickAdd'); save(); }}
function renderOrderMenu(){
  if(!orderMenu) return;
  orderMenu.innerHTML = MENU_CATEGORIES.map(cat => `<section class="order-category reveal visible" id="order-${cat.id}">
    <h2>${cat.name}</h2><p>${cat.tagline}</p><div class="order-list">
    ${cat.items.map(item => { const id=slug(item); return `<article class="order-dish">
      <img class="order-thumb" src="${imageFor(item)}" alt="${item.name}" loading="lazy">
      <div><div class="dish-title-row"><span class="food-mark ${item.veg ? 'veg':'nonveg'}"></span><h3>${item.name}</h3></div><p>${item.desc}</p><strong class="dish-price">${money(item.price)}</strong></div>
      <div class="qty-control" data-id="${id}"><button type="button" data-action="minus" aria-label="Remove ${item.name}">−</button><span>${cart[id] || 0}</span><button type="button" data-action="plus" aria-label="Add ${item.name}">+</button></div>
    </article>`; }).join('')}
    </div></section>`).join('');
}
function renderCart(){
  if(!cartItems) return;
  const entries = Object.entries(cart).filter(([_,qty]) => qty > 0);
  cartItems.innerHTML = entries.length ? entries.map(([id,qty]) => { const item=itemsById[id]; return `<div class="cart-row"><span>${qty} × ${item.name}</span><strong>${money(qty * item.price)}</strong></div>`; }).join('') : '<p class="muted">No items selected yet. Add dishes from the menu.</p>';
  cartTotal.textContent = money(total());
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = count());
  updatePreview();
}
function updateQty(id,diff){ cart[id]=Math.max(0,(cart[id]||0)+diff); if(cart[id]===0) delete cart[id]; save(); renderOrderMenu(); renderCart(); }
function getFormData(){ return Object.fromEntries(new FormData(orderForm).entries()); }
function plainMessage(){
  const data=getFormData();
  const entries=Object.entries(cart).filter(([_,qty])=>qty>0);
  const lines=entries.map(([id,qty])=>{ const item=itemsById[id]; return `• ${qty} x ${item.name} - ₹${qty*item.price}`; }).join('\n');
  return `Hello Ta Naa Foods, I want to place an order.\n\nName: ${data.customerName || ''}\nOrder Type: ${data.orderType || ''}\nPayment: ${data.paymentMode || ''}${data.notes ? `\nNotes: ${data.notes}` : ''}\n\nItems:\n${lines}\n\nTotal: ₹${total()}\n\nPlease confirm my order.`;
}
function updatePreview(){
  if(!orderPreview || !orderForm) return;
  const data=getFormData();
  const entries=Object.entries(cart).filter(([_,qty])=>qty>0);
  const itemLines=entries.map(([id,qty])=>`${qty} × ${itemsById[id].name}`).join('\n') || 'No items selected yet';
  orderPreview.textContent = `Name: ${data.customerName || '—'}\nOrder Type: ${data.orderType || '—'}\nPayment: ${data.paymentMode || '—'}\nItems:\n${itemLines}\nTotal: ₹${total()}`;
}
orderMenu?.addEventListener('click', e=>{ const btn=e.target.closest('button[data-action]'); const box=e.target.closest('[data-id]'); if(!btn||!box) return; updateQty(box.dataset.id, btn.dataset.action==='plus'?1:-1); });
orderForm?.addEventListener('input', updatePreview); orderForm?.addEventListener('change', updatePreview);
orderForm?.addEventListener('submit', e=>{ e.preventDefault(); if(total()<=0){ alert('Please select at least one item.'); return; } const data=getFormData(); if(!data.customerName.trim()){ alert('Please enter your name.'); return; } window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plainMessage())}`,'_blank'); });
applyQuickAdd(); renderOrderMenu(); renderCart();
