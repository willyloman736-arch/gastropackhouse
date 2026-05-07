// ============================================================
// GASTRO PACK HOUSE — Site Logic
// Handles: product render, category filter, cart, toast, nav
// ============================================================

const CART_KEY = 'gph_cart_v1';

// ---------- Cart helpers ----------
function getCart()       { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { return {}; } }
function saveCart(c)     { localStorage.setItem(CART_KEY, JSON.stringify(c)); }
function cartCount()     { return Object.values(getCart()).reduce((a,b) => a + b, 0); }
function updateCartBadge() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cartCount();
}
function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  updateCartBadge();
}

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// ---------- Product Icons (SVG by category) ----------
const ICONS = {
  takeaway: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 38h56l-5 42a4 4 0 0 1-4 4H31a4 4 0 0 1-4-4z" opacity=".95"/>
    <path d="M18 32h64" />
    <path d="M30 24h40v8H30z" opacity=".7"/>
    <path d="M40 50v22M50 50v22M60 50v22" opacity=".5"/>
  </svg>`,
  kraft: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 30h64v50H18z" />
    <path d="M18 30l10-12h44l10 12" />
    <path d="M50 18v62" opacity=".4"/>
    <path d="M30 50h40" opacity=".5"/>
  </svg>`,
  plastic: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="50" cy="32" rx="28" ry="6"/>
    <path d="M22 32l4 46a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4l4-46"/>
    <ellipse cx="50" cy="32" rx="20" ry="3" opacity=".4"/>
  </svg>`,
  eco: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 50c0-18 12-32 28-32s28 14 28 32-12 32-28 32S22 68 22 50z"/>
    <path d="M50 18c-6 18 0 36 18 48" opacity=".5"/>
    <path d="M50 82c6-18 0-36-18-48" opacity=".5"/>
  </svg>`,
  cups: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M28 26h44l-4 56a4 4 0 0 1-4 4H36a4 4 0 0 1-4-4z"/>
    <path d="M28 26h44" />
    <path d="M72 38h6a8 8 0 0 1 0 16h-5" opacity=".7"/>
  </svg>`,
  catering: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="14" y="36" width="72" height="44" rx="3"/>
    <path d="M14 48h72" opacity=".6"/>
    <path d="M22 28h56" />
  </svg>`,
  deli: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="22" y="22" width="56" height="56" rx="3"/>
    <path d="M30 34h40M30 44h40M30 54h40M30 64h28" opacity=".55"/>
  </svg>`,
  wraps: `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="50" cy="30" rx="26" ry="6"/>
    <path d="M24 30v40c0 3 12 6 26 6s26-3 26-6V30"/>
    <path d="M24 50c0 3 12 6 26 6s26-3 26-6" opacity=".5"/>
  </svg>`
};

function iconFor(cat) {
  return ICONS[cat] || ICONS.takeaway;
}

// ---------- Render: category chips ----------
let activeCat = 'all';

function renderChips() {
  const bar = document.getElementById('cat-bar');
  if (!bar) return;
  const all = { id: 'all', name: 'All Products', count: PRODUCTS.length };
  const cats = [all, ...CATEGORIES];
  bar.innerHTML = cats.map(c => `
    <button class="cat-chip ${c.id === activeCat ? 'is-active' : ''}" data-cat="${c.id}">
      ${c.name}
      <span class="num">${c.count}</span>
    </button>
  `).join('');
  bar.querySelectorAll('.cat-chip').forEach(b => {
    b.addEventListener('click', () => {
      activeCat = b.dataset.cat;
      renderChips();
      renderProducts();
    });
  });
}

// ---------- Render: product grid ----------
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const list = activeCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === activeCat);

  const catLabel = id => (CATEGORIES.find(c => c.id === id) || {}).name || '';

  grid.innerHTML = list.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <span class="product-stock">${p.stock}</span>
        ${iconFor(p.cat)}
      </div>
      <div class="product-body">
        <span class="product-cat">${catLabel(p.cat)}</span>
        <h3 class="product-name">${p.name}</h3>
        <span class="product-meta">MOQ · ${p.moq}</span>
        <div class="product-foot">
          <span class="product-price">$${p.price.toFixed(2)}<span class="unit">${p.unit}</span></span>
          <button class="btn-add" data-add="${p.id}">
            Add
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5v14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = +btn.dataset.add;
      addToCart(id);
      btn.classList.add('is-added');
      btn.innerHTML = `Added <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>`;
      const product = PRODUCTS.find(p => p.id === id);
      toast(`Added · ${product.name}`);
      setTimeout(() => {
        btn.classList.remove('is-added');
        btn.innerHTML = `Add <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5v14"/></svg>`;
      }, 1400);
    });
  });
}

// ---------- Mobile nav ----------
function bindBurger() {
  const burger = document.getElementById('burger');
  const links  = document.getElementById('nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', () => links.classList.toggle('is-open'));
}

// ---------- Footer year ----------
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  renderChips();
  renderProducts();
  updateCartBadge();
  bindBurger();
  setYear();
});
