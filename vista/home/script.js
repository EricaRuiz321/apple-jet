const productData = [
    { id: 'prod1', category: 'iPhone', name: 'iPhone 15 Pro', price: 5500000, image: 'iphone_15_pro.png', description: 'El iPhone 15 Pro es el iPhone definitivo con el chip A17 Pro, un sistema de cámaras Pro más avanzado y un diseño de titanio ligero y resistente.' },
    { id: 'prod2', category: 'iPhone', name: 'iPhone 15', price: 4200000, image: 'iphone_15.png', description: 'El iPhone 15 viene con Dynamic Island, una cámara gran angular de 48 MP y USB-C, todo en un diseño de vidrio y aluminio resistente.' },
    { id: 'prod3', category: 'AirPods', name: 'AirPods Pro (2ª gen)', price: 1200000, image: 'airpods_pro_2.png', description: 'Los AirPods Pro (2ª generación) ofrecen cancelación activa de ruido hasta 2 veces más eficaz, modo Ambiente adaptativo y audio espacial personalizado.' },
    { id: 'prod4', category: 'AirPods', name: 'AirPods (3ª gen)', price: 900000, image: 'airpods_3.png', description: 'Los AirPods (3ª generación) con audio espacial personalizado, mayor duración de batería y resistencia al agua y al sudor.' },
    { id: 'prod5', category: 'Mac', name: 'MacBook Air 13" (M2)', price: 6000000, image: 'macbook_air_13.png', description: 'El MacBook Air de 13 pulgadas con chip M2 es superdelgado, superligero y superrápido. Con hasta 18 horas de batería.' },
    { id: 'prod6', category: 'iPad', name: 'iPad Pro 11"', price: 4500000, image: 'ipad_pro.png', description: 'El iPad Pro. Con el rendimiento increíble del chip M2, una espectacular pantalla Liquid Retina XDR y conexión Wi-Fi 6E ultrarrápida.' },
    { id: 'prod7', category: 'Watch', name: 'Apple Watch Series 9', price: 2000000, image: 'apple_watch_s9.png', description: 'El Apple Watch Series 9. Más inteligente, más brillante y más potente gracias al nuevo chip S9 SiP. Un gesto de doble toque mágico para interactuar con el Apple Watch.' }
];

let cart = [];
let currentUser = { name: '', email: '', address: '', phone: '' };
let currentCategory = 'Todos';

const productGrid = document.getElementById('product-grid');
const categoryNav = document.getElementById('category-nav');
const cartCountEl = document.getElementById('cart-count');
const cartButton = document.getElementById('cart-button');
const profileButton = document.getElementById('profile-button');

// Modals
const productDetailsModal = document.getElementById('product-details-modal');
const cartModal = document.getElementById('cart-modal');
const checkoutModal = document.getElementById('checkout-modal');
const profileModal = document.getElementById('profile-modal');

// Modal Content Elements
const modalProductName = document.getElementById('modal-product-name');
const modalProductImage = document.getElementById('modal-product-image');
const modalProductDescription = document.getElementById('modal-product-description');
const modalProductPrice = document.getElementById('modal-product-price');
const modalAddToCartButton = document.getElementById('modal-add-to-cart-button');

const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalEl = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const clearCartButton = document.getElementById('clear-cart-button');

const checkoutForm = document.getElementById('checkout-form');
const checkoutSuccessMessage = document.getElementById('checkout-success-message');

const profileNameEl = document.getElementById('profile-name');
const profileEmailEl = document.getElementById('profile-email');
const profileAddressEl = document.getElementById('profile-address');
const profilePhoneEl = document.getElementById('profile-phone');
const logoutButton = document.getElementById('logout-button');

const formatCurrencyCOP = (amount) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
};

function saveState() {
    localStorage.setItem('appleStoreCart', JSON.stringify(cart));
    localStorage.setItem('appleStoreUser', JSON.stringify(currentUser));
}

function loadState() {
    const storedCart = localStorage.getItem('appleStoreCart');
    if (storedCart) cart = JSON.parse(storedCart);

    const storedUser = localStorage.getItem('appleStoreUser');
    if (storedUser) currentUser = JSON.parse(storedUser);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
}

function renderCategories() {
    const categories = ['Todos', ...new Set(productData.map(p => p.category))];
    categoryNav.innerHTML = '';
    categories.forEach(category => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = category;
        link.dataset.category = category;
        if (category === currentCategory) {
            link.classList.add('active');
        }
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = category;
            renderCategories(); // Re-render to update active class
            renderProducts();
        });
        categoryNav.appendChild(link);
    });
}

function renderProducts() {
    productGrid.innerHTML = '';
    const filteredProducts = currentCategory === 'Todos' 
        ? productData 
        : productData.filter(p => p.category === currentCategory);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatCurrencyCOP(product.price)}</p>
            <div class="actions">
                <button class="add-to-cart-btn" data-product-id="${product.id}">Añadir al Carrito</button>
                <button class="info-btn" data-product-id="${product.id}">Más Información</button>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // Add event listeners after products are rendered
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        if (!button.dataset.listenerAttached) { // Prevent multiple listeners
             button.addEventListener('click', () => handleAddToCart(button.dataset.productId));
             button.dataset.listenerAttached = true;
        }
    });
    document.querySelectorAll('.info-btn').forEach(button => {
         if (!button.dataset.listenerAttached) {
            button.addEventListener('click', () => handleMoreInfo(button.dataset.productId));
            button.dataset.listenerAttached = true;
        }
    });
}

function handleAddToCart(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    renderCart();
    saveState();
    // Optionally show a small confirmation
    // console.log(`${product.name} añadido al carrito.`);
}

function handleMoreInfo(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;

    modalProductName.textContent = product.name;
    modalProductImage.src = product.image;
    modalProductImage.alt = product.name;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = formatCurrencyCOP(product.price);
    modalAddToCartButton.dataset.productId = product.id; // Update product ID for modal's add to cart button
    
    openModal(productDetailsModal);
}

modalAddToCartButton.addEventListener('click', () => {
    const productId = modalAddToCartButton.dataset.productId;
    handleAddToCart(productId);
    closeModal(productDetailsModal); // Close modal after adding to cart
});


function renderCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        cartTotalEl.textContent = formatCurrencyCOP(0);
        checkoutButton.disabled = true;
        clearCartButton.disabled = true;
        return;
    }
    
    checkoutButton.disabled = false;
    clearCartButton.disabled = false;

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${formatCurrencyCOP(item.price)} x ${item.quantity} = ${formatCurrencyCOP(item.price * item.quantity)}</p>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn decrease-qty" data-product-id="${item.id}" ${item.quantity === 1 ? 'disabled' : ''}>-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn increase-qty" data-product-id="${item.id}">+</button>
                <button class="remove-item-btn" data-product-id="${item.id}"><img src="trash_icon.png" alt="Eliminar"></button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    cartTotalEl.textContent = formatCurrencyCOP(total);
    addCartItemActionListeners();
}

function addCartItemActionListeners() {
    document.querySelectorAll('.cart-item .decrease-qty').forEach(btn => {
        btn.addEventListener('click', () => updateCartItemQuantity(btn.dataset.productId, -1));
    });
    document.querySelectorAll('.cart-item .increase-qty').forEach(btn => {
        btn.addEventListener('click', () => updateCartItemQuantity(btn.dataset.productId, 1));
    });
    document.querySelectorAll('.cart-item .remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => removeCartItem(btn.dataset.productId));
    });
}

function updateCartItemQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeCartItem(productId);
        } else {
            renderCart();
            updateCartCount();
            saveState();
        }
    }
}

function removeCartItem(productId) {
    cart = cart.filter(i => i.id !== productId);
    renderCart();
    updateCartCount();
    saveState();
}

function handleClearCart() {
    cart = [];
    renderCart();
    updateCartCount();
    saveState();
}

function renderProfile() {
    profileNameEl.textContent = currentUser.name || 'N/A';
    profileEmailEl.textContent = currentUser.email || 'N/A';
    profileAddressEl.textContent = currentUser.address || 'N/A';
    profilePhoneEl.textContent = currentUser.phone || 'N/A';
}

// Modal Handling
function openModal(modalElement) {
    modalElement.style.display = 'block';
}

function closeModal(modalElement) {
    modalElement.style.display = 'none';
}

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modalId;
        if(modalId) closeModal(document.getElementById(modalId));
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});

// Event Listeners for static elements
cartButton.addEventListener('click', () => {
    renderCart(); // Ensure cart is up-to-date before showing
    openModal(cartModal);
});

profileButton.addEventListener('click', () => {
    renderProfile(); // Ensure profile is up-to-date
    openModal(profileModal);
});

checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Añade productos antes de comprar.');
        return;
    }
    // Pre-fill checkout form if user data exists
    document.getElementById('checkout-name').value = currentUser.name || '';
    document.getElementById('checkout-email').value = currentUser.email || '';
    document.getElementById('checkout-address').value = currentUser.address || '';
    document.getElementById('checkout-phone').value = currentUser.phone || '';
    
    checkoutForm.style.display = 'block';
    checkoutSuccessMessage.style.display = 'none';
    closeModal(cartModal);
    openModal(checkoutModal);
});

clearCartButton.addEventListener('click', handleClearCart);

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(checkoutForm);
    currentUser.name = formData.get('name');
    currentUser.email = formData.get('email');
    currentUser.address = formData.get('address');
    currentUser.phone = formData.get('phone');

    // Simulate purchase
    console.log('Compra confirmada:', currentUser, cart);
    
    checkoutForm.style.display = 'none';
    checkoutSuccessMessage.style.display = 'block';
    
    cart = []; // Clear cart after purchase
    updateCartCount();
    renderProfile(); // Update profile display if modal is open or will be opened
    saveState();

    // Optionally close checkout modal after a delay
    setTimeout(() => {
        closeModal(checkoutModal);
        // Reset form for next time
        checkoutForm.reset();
        checkoutForm.style.display = 'block';
        checkoutSuccessMessage.style.display = 'none';
    }, 3000);
});

logoutButton.addEventListener('click', () => {
    currentUser = { name: '', email: '', address: '', phone: '' };
    // cart = []; // Optionally clear cart on logout, or keep it
    // updateCartCount();
    // renderCart();
    renderProfile();
    saveState();
    closeModal(profileModal);
    alert('Has cerrado sesión.');
});

// Initial Load
loadState();
renderCategories();
renderProducts();
renderCart(); // To set initial cart state (empty or loaded)
renderProfile(); // To set initial profile state
updateCartCount();

// Handle listeners for dynamically added "Add to cart" in product details modal
// This is handled by modalAddToCartButton listener already.

