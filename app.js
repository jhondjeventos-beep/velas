/**
 * Nalu Candle - ATELIER BOTÁNICO
 * Script principal: Catálogo interactivo, Diseñador en Vivo de Velas, Carrito & WhatsApp
 */

// =============================================================================
// CONFIGURACIÓN RÁPIDA (Cambia aquí tu número de WhatsApp y moneda)
// =============================================================================
const CONFIG = {
  // Escribe aquí tu número con código de país (Ejemplo Colombia: 573001234567, México: 521..., etc.)
  WHATSAPP_PHONE: "573000000000",
  STORE_NAME: "Nalu Candle",
  CURRENCY: "COP",
  CURRENCY_SYMBOL: "$"
};

// Formateador de moneda
function formatMoney(amount) {
  return `${CONFIG.CURRENCY_SYMBOL}${amount.toLocaleString("es-CO")} ${CONFIG.CURRENCY}`;
}

// =============================================================================
// CATÁLOGO DE PRODUCTOS
// =============================================================================
const PRODUCTS_DATA = [
  {
    id: "vela-01",
    title: "Vainilla Bourbon & Higo Silvestre",
    category: "aromaticas",
    scent: "Vainilla & Frutos Dulces",
    description: "Cálida y reconfortante. Notas de vainilla añejada en roble con fondo acaramelado. En vaso de vidrio ámbar reutilizable.",
    notes: ["Vainilla Bourbon", "Higo Dulce", "Ámbar"],
    shape: "Vaso Ámbar 250g",
    price: 48000,
    badge: "Más Vendida",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-02",
    title: "Brisa de Lavanda & Manzanilla",
    category: "aromaticas",
    scent: "Relajante & Calma",
    description: "Diseñada para inducir el descanso y la paz mental nocturna. Vertida en cuenco de cerámica artesanal beige mate.",
    notes: ["Lavanda Francesa", "Manzanilla", "Cedro"],
    shape: "Cerámica Beige 300g",
    price: 55000,
    badge: "Relajante",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-03",
    title: "Bubble Cube Escandinava",
    category: "esculturas",
    scent: "Flor de Azahar & Té Blanco",
    description: "La icónica vela geométrica de burbujas en tendencia estética. Escultura aromática vertida con cera de soja blanca pura.",
    notes: ["Azahar", "Té Blanco", "Cítricos"],
    shape: "Cubo Bubble 160g",
    price: 38000,
    badge: "Tendencia",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-04",
    title: "Torso Afrodita Botánico",
    category: "esculturas",
    scent: "Rosas Damascenas & Almizcle",
    description: "Homenaje a la belleza y el arte clásico. Escultura decorativa que perfuma delicadamente cualquier tocador o biblioteca.",
    notes: ["Rosa Damascena", "Peonía", "Almizcle Blanco"],
    shape: "Figura Clásica 210g",
    price: 45000,
    badge: "Arte & Decoración",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-05",
    title: "Flor de Loto Sagrada",
    category: "esculturas",
    scent: "Jazmín Blanco & Sándalo",
    description: "Pétalos tallados con detalle tridimensional. Ideal para centros de mesa, sesiones de yoga, meditación y bienestar.",
    notes: ["Pétalos de Loto", "Jazmín", "Sándalo"],
    shape: "Flor de Loto 180g",
    price: 42000,
    badge: "Zen",
    image: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-06",
    title: "Café Espresso & Canela Artesanal",
    category: "aromaticas",
    scent: "Gourmand Despertar",
    description: "Inspirada en el aroma de una cafetería artesanal en la mañana. Mecha doble de madera crujiente que suena como chimenea.",
    notes: ["Grano de Café", "Canela Ceilán", "Caramelo"],
    shape: "Vaso Terracota 280g",
    price: 52000,
    badge: "Mecha Crepitante",
    image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-07",
    title: "Trío Box 'Momentos de Oro'",
    category: "packs",
    scent: "Colección Aromas Exclusivos",
    description: "Caja de regalo rígida negra con 3 velas medianas (Vainilla, Lavanda y Canela), cerillas de madera extralargas y tarjeta personalizada.",
    notes: ["Pack 3 Aromas", "Caja Rígida", "Lazo Terciopelo"],
    shape: "Set de 3 Velas x 100g c/u",
    price: 89000,
    badge: "Kit de Regalo",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "vela-08",
    title: "Pack 20 Velitas para Recuerdos de Boda / Eventos",
    category: "eventos",
    scent: "Personalizado a Elección",
    description: "Lote de 20 mini velas en tarrito de vidrio con tapa dorada, etiqueta grabada con nombres de novios/festejados y ramillete botánico.",
    notes: ["20 Unidades", "Etiquetas Personalizadas", "Recuerdos"],
    shape: "Pack 20 x 60g",
    price: 180000,
    badge: "Especial Eventos",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80"
  }
];

// =============================================================================
// ESTADO GLOBAL DE LA APLICACIÓN
// =============================================================================
const state = {
  cart: JSON.parse(localStorage.getItem("aura_cera_cart")) || [],
  customizer: {
    shapeName: "Vaso de Vidrio Ámbar 250g",
    shapeKey: "ambar",
    shapePrice: 48000,
    shapeImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
    scentName: "Vainilla Bourbon & Caramelo",
    scentGlow: "#f59e0b",
    labelText: "Mi Rincón de Paz",
    packagingName: "Caja Kraft Eco",
    packagingKey: "kraft",
    packagingCost: 0
  }
};

// =============================================================================
// INICIALIZACIÓN
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog(PRODUCTS_DATA);
  initCustomizer();
  initCart();
  initNavigation();
  initSearch();
  initContactForm();
  updateCartBadge();
});

// =============================================================================
// CATÁLOGO: RENDER Y FILTROS
// =============================================================================
function renderCatalog(products) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-border-focus);"></i>
        <h3>No encontramos velas con ese término</h3>
        <p>Prueba buscando "vainilla", "lavanda", "escultura" o limpia el filtro.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="product-image-wrap">
        <img src="${item.image}" alt="${item.title}" class="product-img" loading="lazy">
        ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ""}
      </div>
      <div class="product-content">
        <span class="product-scent-tag"><i class="fa-solid fa-seedling"></i> ${item.scent}</span>
        <h3 class="product-title">${item.title}</h3>
        <p class="product-description">${item.description}</p>
        
        <div class="product-notes-chips">
          ${item.notes.map(note => `<span class="note-chip">${note}</span>`).join("")}
        </div>

        <div class="product-footer">
          <span class="product-price">${formatMoney(item.price)}</span>
          <button class="btn-add-cart" onclick="addToCartCatalog('${item.id}')" title="Añadir al carrito" aria-label="Añadir ${item.title}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Filtros de categoría
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;
    if (category === "all") {
      renderCatalog(PRODUCTS_DATA);
    } else {
      const filtered = PRODUCTS_DATA.filter(p => p.category === category);
      renderCatalog(filtered);
    }
  });
});

// =============================================================================
// PERSONALIZADOR DE VELAS EN VIVO (ESTUDIO INTERACTIVO)
// =============================================================================
function initCustomizer() {
  const shapeButtons = document.querySelectorAll("#shapeOptions .option-btn");
  const scentPills = document.querySelectorAll("#scentOptions .scent-pill");
  const labelInput = document.getElementById("customLabelInput");
  const chips = document.querySelectorAll(".chip-btn");
  const packagingInputs = document.querySelectorAll('input[name="packaging"]');
  const addCartBtn = document.getElementById("addCustomToCartBtn");
  const orderWhatsAppBtn = document.getElementById("orderCustomWhatsAppBtn");

  // 1. Selector de Forma / Recipiente
  shapeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      shapeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      state.customizer.shapeKey = btn.dataset.shape;
      state.customizer.shapeName = btn.querySelector("strong").textContent;
      state.customizer.shapePrice = parseInt(btn.dataset.price, 10);
      state.customizer.shapeImage = btn.dataset.img;

      updateCustomizerView();
    });
  });

  // 2. Selector de Esencia
  scentPills.forEach(pill => {
    pill.addEventListener("click", () => {
      scentPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      state.customizer.scentName = pill.dataset.scent;
      state.customizer.scentGlow = pill.dataset.glow;

      updateCustomizerView();
    });
  });

  // 3. Texto de Etiqueta
  if (labelInput) {
    labelInput.addEventListener("input", (e) => {
      const text = e.target.value.trim() || "Tu Nombre o Frase";
      state.customizer.labelText = text;
      document.getElementById("previewLabelName").textContent = text;
    });
  }

  // Chips con sugerencias rápidas
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const text = chip.dataset.text;
      labelInput.value = text;
      state.customizer.labelText = text;
      document.getElementById("previewLabelName").textContent = text;
    });
  });

  // 4. Empaque
  packagingInputs.forEach(radio => {
    radio.addEventListener("change", (e) => {
      document.querySelectorAll(".pkg-card").forEach(c => c.classList.remove("active"));
      radio.closest(".pkg-card").classList.add("active");

      const cost = parseInt(radio.dataset.cost, 10);
      state.customizer.packagingCost = cost;
      state.customizer.packagingKey = radio.value;
      state.customizer.packagingName = radio.closest(".pkg-card").querySelector("strong").textContent;

      updateCustomizerView();
    });
  });

  // 5. Botones de Acción
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      addCustomCandleToCart();
    });
  }

  if (orderWhatsAppBtn) {
    orderWhatsAppBtn.addEventListener("click", () => {
      sendCustomCandleDirectWhatsApp();
    });
  }

  updateCustomizerView();
}

function updateCustomizerView() {
  const { shapeName, shapePrice, shapeImage, scentName, scentGlow, labelText, packagingName, packagingCost } = state.customizer;

  // Actualizar imagen y glow de la vela
  const previewImg = document.getElementById("customizerImage");
  const previewGlow = document.getElementById("previewGlow");
  const labelScent = document.getElementById("previewLabelScent");
  const specShape = document.getElementById("specShape");
  const specScent = document.getElementById("specScent");
  const specPackaging = document.getElementById("specPackaging");
  const priceDisplay = document.getElementById("customizerTotalPrice");

  if (previewImg) previewImg.src = shapeImage;
  if (previewGlow) previewGlow.style.background = `radial-gradient(circle, ${scentGlow}55 0%, transparent 70%)`;
  if (labelScent) labelScent.textContent = scentName;
  if (specShape) specShape.textContent = shapeName;
  if (specScent) specScent.textContent = scentName;
  if (specPackaging) specPackaging.textContent = packagingName;

  const total = shapePrice + packagingCost;
  if (priceDisplay) priceDisplay.textContent = formatMoney(total);
}

function addCustomCandleToCart() {
  const { shapeName, shapePrice, shapeImage, scentName, labelText, packagingName, packagingCost } = state.customizer;
  const totalPrice = shapePrice + packagingCost;

  const customItem = {
    id: "custom-" + Date.now(),
    isCustom: true,
    title: `Vela Personalizada: "${labelText}"`,
    shape: shapeName,
    scent: scentName,
    labelText: labelText,
    packaging: packagingName,
    price: totalPrice,
    image: shapeImage,
    quantity: 1
  };

  state.cart.push(customItem);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  openCart();
  showToast(`✨ ¡Vela personalizada agregada a tu carrito!`);
}

function sendCustomCandleDirectWhatsApp() {
  const { shapeName, shapePrice, scentName, labelText, packagingName, packagingCost } = state.customizer;
  const total = shapePrice + packagingCost;

  const message = `🕯️ *¡Hola ${CONFIG.STORE_NAME}! Deseo pedir una vela personalizada con este diseño:*

✨ *Forma / Recipiente:* ${shapeName}
🌸 *Aroma seleccionado:* ${scentName}
✍️ *Texto en la etiqueta:* "${labelText}"
🎁 *Empaque de regalo:* ${packagingName}
💰 *Total estimado:* ${formatMoney(total)}

¿Me confirman tiempo de entrega y medios de pago por favor? ¡Gracias!`;

  const url = `https://wa.me/${CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// =============================================================================
// CARRITO DE COMPRAS & CHECKOUT WHATSAPP
// =============================================================================
function initCart() {
  const cartToggle = document.getElementById("cartToggle");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("checkoutWhatsAppBtn");

  if (cartToggle) cartToggle.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("¿Deseas vaciar tu carrito de velas?")) {
        state.cart = [];
        saveCart();
        renderCartDrawer();
        updateCartBadge();
        showToast("Carrito vaciado");
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", checkoutWhatsApp);
  }

  renderCartDrawer();
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartBackdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartBackdrop").classList.remove("active");
  document.body.style.overflow = "";
}

function addToCartCatalog(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      isCustom: false,
      title: product.title,
      scent: product.scent,
      shape: product.shape,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  openCart();
  showToast(`🕯️ "${product.title}" añadida al carrito`);
}

function updateQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;

  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function saveCart() {
  localStorage.setItem("aura_cera_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = count;
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotalAmount");
  const footer = document.getElementById("cartFooter");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-fire-burner"></i>
        <h4>Tu carrito está vacío</h4>
        <p>Aún no has agregado velas aromáticas o personalizadas a tu pedido.</p>
        <button class="btn btn-sm btn-primary" onclick="closeCart()" style="margin-top: 1rem;">
          Explorar Catálogo
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatMoney(0);
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  let total = 0;
  container.innerHTML = state.cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.title}</h4>
          <span class="cart-item-scent">🌸 ${item.scent}</span>
          ${item.labelText ? `<div class="cart-item-label">🏷️ Grabado: <em>"${item.labelText}"</em></div>` : ""}
          ${item.packaging ? `<div class="cart-item-label">🎁 ${item.packaging}</div>` : ""}
          <div class="cart-item-footer">
            <span class="cart-item-price">${formatMoney(itemTotal)}</span>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateQuantity(${index}, -1)" title="Reducir">-</button>
              <span style="font-size: 0.88rem; font-weight: 700; min-width: 18px; text-align: center;">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${index}, 1)" title="Aumentar">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = formatMoney(total);
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío.");
    return;
  }

  let total = 0;
  let itemsSummary = state.cart.map((item, i) => {
    const sub = item.price * item.quantity;
    total += sub;
    let detail = `*${i + 1}. ${item.title}* x${item.quantity} -> ${formatMoney(sub)}`;
    detail += `\n   • Aroma: ${item.scent}`;
    if (item.shape) detail += `\n   • Forma: ${item.shape}`;
    if (item.labelText) detail += `\n   • Grabado personalizado: "${item.labelText}"`;
    if (item.packaging) detail += `\n   • Empaque: ${item.packaging}`;
    return detail;
  }).join("\n\n");

  const message = `🕯️ *¡Hola ${CONFIG.STORE_NAME}! Deseo confirmar el siguiente pedido de velas:*

${itemsSummary}

---------------------------------------
💰 *TOTAL DEL PEDIDO:* ${formatMoney(total)}
---------------------------------------

📍 *Por favor indíquenme:*
1. Costo y cobertura de envío a mi ciudad/dirección.
2. Medios de pago disponibles (Nequi, Daviplata, Transferencia, Tarjeta).
3. Tiempo estimado de entrega para mi pedido.

¡Muchas gracias!`;

  const url = `https://wa.me/${CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// =============================================================================
// BUSCADOR INSTANTÁNEO & OVERLAY
// =============================================================================
function initSearch() {
  const searchToggle = document.getElementById("searchToggle");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener("click", () => {
      searchOverlay.classList.toggle("active");
      if (searchOverlay.classList.contains("active")) {
        searchInput.focus();
      }
    });
  }

  if (closeSearch && searchOverlay) {
    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = PRODUCTS_DATA.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.scent.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.notes.some(n => n.toLowerCase().includes(query))
      );
      renderCatalog(filtered);
    });
  }
}

// =============================================================================
// NAVEGACIÓN & RESPONSIVE MENU
// =============================================================================
function initNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// =============================================================================
// FORMULARIO DE CONTACTO / VENTAS POR MAYOR
// =============================================================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const msg = document.getElementById("contactMsg").value.trim();

    const message = `✨ *Consulta para Pedido Especial / Mayoreo - ${CONFIG.STORE_NAME}*

👤 *Nombre:* ${name}
📞 *Teléfono:* ${phone}
📝 *Detalle del Evento / Pedido:*
${msg}`;

    const url = `https://wa.me/${CONFIG.WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    showToast("¡Redirigiendo a WhatsApp para tu cotización!");
    form.reset();
  });
}

// =============================================================================
// TOAST NOTIFICATIONS
// =============================================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-sparkles"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
