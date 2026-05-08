// ============================================================
// GASTRO PACK HOUSE — Site Logic
// Handles: product render, category filter, cart, toast, nav
// ============================================================

const CART_KEY = 'gph_cart_v2';
const AGE_GATE_KEY = 'gph_age_verified_21_v1';
const TELEGRAM_ORDER_BASE = 'https://t.me/gastroopackhouse';

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

// ---------- Formatting helpers ----------
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function formatMoney(value) {
  return `$${Number(value).toLocaleString('en-US', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2
  })}`;
}

function productVisual(p) {
  if (!p.image) return iconFor(p.cat);
  return `<img class="product-image" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">`;
}

function productImages(p) {
  const images = Array.isArray(p.images) && p.images.length ? p.images : [p.image];
  return [...new Set(images.filter(Boolean))];
}

function categoryName(id) {
  return (CATEGORIES.find(c => c.id === id) || {}).name || '';
}

function telegramOrderUrl(message) {
  return `${TELEGRAM_ORDER_BASE}?text=${encodeURIComponent(message)}`;
}

function generalTelegramOrderUrl() {
  return telegramOrderUrl('Hello Gastro Pack House, I want to request a bulk order. Please send current availability.');
}

function productOrderMessage(product, quantity = 1) {
  return [
    'Hello Gastro Pack House, I want to order this product.',
    '',
    `Product: ${product.name}`,
    `Category: ${categoryName(product.cat)}`,
    `Quantity: ${quantity}`,
    `Price: ${formatMoney(product.price)}${product.unit}`,
    `MOQ: ${product.moq}`,
    '',
    'Please confirm availability and next steps.'
  ].join('\n');
}

function productOrderUrl(product, quantity = 1) {
  return telegramOrderUrl(productOrderMessage(product, quantity));
}

function buildCartOrderUrl(cart, summary = {}) {
  const ids = Object.keys(cart);
  if (!ids.length) return generalTelegramOrderUrl();

  const lines = ids.map(id => {
    const product = PRODUCTS.find(p => p.id === +id);
    if (!product) return '';
    const qty = cart[id];
    return `- ${qty} x ${product.name} (${categoryName(product.cat)}) @ ${formatMoney(product.price)}${product.unit} = ${formatMoney(product.price * qty)}`;
  }).filter(Boolean);

  return telegramOrderUrl([
    'Hello Gastro Pack House, I want to place this wholesale order.',
    '',
    'Order items:',
    ...lines,
    '',
    `Items: ${summary.items ?? Object.values(cart).reduce((a, b) => a + b, 0)}`,
    `Subtotal: ${summary.subtotal !== undefined ? formatMoney(summary.subtotal) : 'Please calculate'}`,
    `Volume rebate: ${summary.rebate !== undefined ? formatMoney(summary.rebate) : 'Please confirm'}`,
    `Freight: ${summary.freight !== undefined ? formatMoney(summary.freight) : 'Please confirm'}`,
    `Estimated total: ${summary.total !== undefined ? formatMoney(summary.total) : 'Please confirm'}`,
    '',
    'Please confirm availability and next steps.'
  ].join('\n'));
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

  grid.innerHTML = list.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card-main" data-view="${p.id}" role="button" tabindex="0" aria-label="View ${escapeHtml(p.name)}">
        <div class="product-thumb">
          <span class="product-stock">${escapeHtml(p.stock)}</span>
          ${productVisual(p)}
          <span class="product-view">View</span>
        </div>
        <div class="product-body">
          <span class="product-cat">${escapeHtml(categoryName(p.cat))}</span>
          <h3 class="product-name">${escapeHtml(p.name)}</h3>
          <span class="product-meta">MOQ · ${escapeHtml(p.moq)}</span>
        </div>
      </div>
        <div class="product-foot">
          <span class="product-price">${formatMoney(p.price)}<span class="unit">${escapeHtml(p.unit)}</span></span>
          <button class="btn-add" data-add="${p.id}">
            Add
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M12 5v14"/></svg>
          </button>
        </div>
    </article>
  `).join('');

  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
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

  grid.querySelectorAll('[data-view]').forEach(card => {
    const id = +card.dataset.view;
    card.addEventListener('click', () => openProductModal(id));
    card.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      openProductModal(id);
    });
  });
}

// ---------- Product detail modal ----------
function ensureProductModal() {
  let modal = document.getElementById('product-modal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'product-modal';
  modal.className = 'product-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'product-modal-title');
  document.body.appendChild(modal);
  return modal;
}

function productHash(p) {
  return `#product-${encodeURIComponent(p.slug)}`;
}

function openProductModal(id, syncHash = true) {
  const p = PRODUCTS.find(product => product.id === id);
  if (!p) return;

  const modal = ensureProductModal();
  const images = productImages(p);
  const mainImage = images[0];
  const thumbs = images.map((image, index) => `
    <button class="product-modal-thumb ${index === 0 ? 'is-active' : ''}" data-gallery-image="${escapeHtml(image)}" aria-label="Show image ${index + 1} for ${escapeHtml(p.name)}">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(p.name)} image ${index + 1}" loading="lazy">
    </button>
  `).join('');

  modal.innerHTML = `
    <div class="product-modal-backdrop" data-product-close></div>
    <div class="product-modal-panel">
      <button class="product-modal-close" data-product-close aria-label="Close product view">×</button>
      <div class="product-modal-gallery">
        <div class="product-modal-main">
          <img src="${escapeHtml(mainImage)}" alt="${escapeHtml(p.name)}" data-product-main-image>
        </div>
        <div class="product-modal-thumbs">${thumbs}</div>
      </div>
      <div class="product-modal-info">
        <span class="product-cat">${escapeHtml(categoryName(p.cat))}</span>
        <h2 id="product-modal-title">${escapeHtml(p.name)}</h2>
        <div class="product-modal-price">${formatMoney(p.price)}<span>${escapeHtml(p.unit)}</span></div>
        <div class="product-modal-meta">
          <span>${escapeHtml(p.stock)}</span>
          <span>MOQ ${escapeHtml(p.moq)}</span>
        </div>
        <p>Wholesale availability and pricing are ready for quote review.</p>
        <div class="product-modal-actions">
          <button class="btn btn-primary" data-modal-add="${p.id}">Add to Cart</button>
          <a class="btn btn-ghost" href="${productOrderUrl(p)}" target="_blank" rel="noopener noreferrer">Order on Telegram</a>
        </div>
      </div>
    </div>
  `;

  document.body.classList.add('product-modal-open');
  modal.classList.add('is-open');

  modal.querySelectorAll('[data-product-close]').forEach(el => {
    el.addEventListener('click', () => closeProductModal());
  });

  modal.querySelectorAll('[data-gallery-image]').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextImage = btn.dataset.galleryImage;
      const main = modal.querySelector('[data-product-main-image]');
      if (main) main.src = nextImage;
      modal.querySelectorAll('[data-gallery-image]').forEach(item => item.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  const addButton = modal.querySelector('[data-modal-add]');
  if (addButton) {
    addButton.addEventListener('click', () => {
      addToCart(p.id);
      toast(`Added · ${p.name}`);
    });
  }

  if (syncHash && window.location.hash !== productHash(p)) {
    window.history.pushState(null, '', productHash(p));
  }
}

function closeProductModal(syncHash = true) {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.innerHTML = '';
  document.body.classList.remove('product-modal-open');
  if (syncHash && window.location.hash.startsWith('#product-')) {
    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
  }
}

function openProductFromHash() {
  if (!window.location.hash.startsWith('#product-')) {
    closeProductModal(false);
    return;
  }
  const slug = decodeURIComponent(window.location.hash.replace('#product-', ''));
  const product = PRODUCTS.find(p => p.slug === slug);
  if (product) openProductModal(product.id, false);
}

// ---------- 21+ age gate ----------
function isAgeVerified() {
  try { return localStorage.getItem(AGE_GATE_KEY) === 'yes'; } catch { return false; }
}

function saveAgeVerified() {
  try { localStorage.setItem(AGE_GATE_KEY, 'yes'); } catch {}
}

function bindAgeGate() {
  if (isAgeVerified()) return;

  const gate = document.createElement('div');
  gate.className = 'age-gate';
  gate.setAttribute('role', 'dialog');
  gate.setAttribute('aria-modal', 'true');
  gate.setAttribute('aria-labelledby', 'age-gate-title');
  gate.innerHTML = `
    <div class="age-gate-card">
      <span class="age-gate-kicker">Age Verification</span>
      <h2 id="age-gate-title">Are you 21 or older?</h2>
      <p>You must confirm you are at least 21 years old to enter Gastro Pack House.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary" data-age-confirm>I am 21+</button>
        <button class="btn btn-ghost" data-age-deny>Under 21</button>
      </div>
    </div>
  `;

  document.body.appendChild(gate);
  document.body.classList.add('age-gate-open');

  gate.querySelector('[data-age-confirm]').addEventListener('click', () => {
    saveAgeVerified();
    document.body.classList.remove('age-gate-open');
    gate.remove();
  });

  gate.querySelector('[data-age-deny]').addEventListener('click', () => {
    gate.querySelector('.age-gate-card').innerHTML = `
      <span class="age-gate-kicker">Access Restricted</span>
      <h2>You must be 21+</h2>
      <p>This site is only available to visitors who confirm they are at least 21 years old.</p>
    `;
  });

  gate.querySelector('[data-age-confirm]').focus();
}

// ---------- Mobile nav ----------
function bindBurger() {
  const burger = document.getElementById('burger');
  const links  = document.getElementById('nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

// ---------- Footer year ----------
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  bindAgeGate();
  renderChips();
  renderProducts();
  updateCartBadge();
  bindBurger();
  setYear();
  openProductFromHash();
  window.addEventListener('hashchange', openProductFromHash);
});
