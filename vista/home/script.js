const productData = [
    { id: 'prod1', category: 'iPhone', name: 'iPhone 15 Pro', price: 5800000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=300993&size=240x240', description: 'El iPhone 15 Pro es el iPhone definitivo con el chip A17 Pro, un sistema de cámaras Pro más avanzado y un diseño de titanio ligero y resistente.' },
    { id: 'prod2', category: 'iPhone', name: 'iPhone 15', price: 4500000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=300991&size=240x240', description: 'El iPhone 15 es el modelo estándar de Apple, presentando un diseño renovado con Dynamic Island en su pantalla Super Retina XDR de 6.1 pulgadas. Integra el potente chip A16 Bionic (anteriormente exclusivo de los modelos Pro), y un sistema de doble cámara que incluye una principal de 48 MP con teleobjetivo 2x y una ultra gran angular de 12 MP. Además, adopta el puerto USB-C para carga y datos, ofrece resistencia al agua y cuenta con conectividad Wi-Fi 6 y 5G.' },
    { id: 'prod3', category: 'iPhone', name: 'iphone 14 pro max', price: 5700000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=300881&size=240x240', description: 'El iPhone 14 Pro Max es un teléfono de gama alta de Apple, caracterizado por su pantalla Super Retina XDR de 6.7 pulgadas con Dynamic Island y ProMotion (120Hz). Está impulsado por el chip A16 Bionic, ofreciendo un gran rendimiento. Su sistema de cámara profesional incluye una principal de 48 MP con sensor-shift OIS, un ultra gran angular y un teleobjetivo de 3x, además de un escáner LiDAR. Incorpora detección de accidentes, SOS de emergencia vía satélite y mantiene el conector Lightning.' },
    { id: 'prod4', category: 'iPhone', name: 'iphone 16', price: 4200000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=301045&size=240x240', description: 'El iPhone 16, lanzado en septiembre de 2024, es el modelo estándar de Apple, incorporando el nuevo chip A18 para un rendimiento mejorado y capacidades de Apple Intelligence. Cuenta con una pantalla Super Retina XDR de 6.1 pulgadas con Dynamic Island y un brillo exterior de hasta 2.000 nits. Su sistema de cámara principal es ahora de 48 MP con opción de teleobjetivo 2x y un nuevo ultra gran angular, optimizado para fotos espaciales. Incluye el Botón de Acción personalizable y un nuevo Botón de Control de Cámara para mejorar la experiencia fotográfica, y utiliza USB-C para conectividad.' },
    { id: 'prod5', category: 'AirPods', name: 'AirPods Pro (2ª gen)', price: 1300000, image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png', description: 'Los AirPods Pro de 2ª generación son los auriculares inalámbricos premium de Apple, potenciados por el chip H2 para ofrecer hasta el doble de Cancelación Activa de Ruido y un Modo Ambiente Adaptable superior. Incluyen Audio Espacial Personalizado, control de volumen táctil en el vástago, y un estuche de carga MagSafe con USB-C, altavoz para localización y chip U1 para búsqueda precisa, todo con resistencia al agua y el sudor.' },
    { id: 'prod6', category: 'AirPods', name: 'AirPods (3ª gen)', price: 620000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=300453&size=240x240', description: 'Los AirPods de 3ª generación son los auriculares inalámbricos estándar de Apple con un diseño contorneado y sin almohadillas de silicona, potenciados por el chip H1. Destacan por su Audio Espacial Personalizado con seguimiento dinámico de la cabeza y Ecualización Adaptativa, ofreciendo un sonido inmersivo. Son resistentes al sudor y al agua (IPX4), cuentan con sensor de fuerza para control, y vienen con un estuche de carga MagSafe o Lightning.' },
    { id: 'prod7', category: 'AirPods', name: 'Airpods 4', price: 750000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=301050&size=240x240', description: 'Los AirPods 4 son la nueva generación estándar, impulsados por el chip H3. Ofrecen audio mejorado y ahora incluyen una Cancelación Activa de Ruido básica. Cuentan con un diseño renovado, mayor batería y puerto USB-C. Una variante más avanzada ofrece ANC superior.' },
    { id: 'prod8', category: 'AirPods', name: 'Airpods max', price: 2300000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=300273&size=240x240', description: 'Los AirPods Max son los audífonos supraaurales premium de Apple con audio de alta fidelidad y una Cancelación Activa de Ruido líder. Tienen un diseño cómodo y premium, Audio Espacial, Digital Crown para control y ahora puerto USB-C para carga y audio de alta resolución.' },
    { id: 'prod9', category: 'Mac', name: 'MacBook Air 13" (M2)', price: 4500000, image: 'https://www.apple.com/v/macbook-air/s/images/specs/13-inch/mba_13_hero__cgrv1gqx437m_large.jpg', description: 'El MacBook Air de 13 pulgadas con chip M2 es superdelgado, superligero y superrápido. Con hasta 18 horas de batería.' },
    { id: 'prod10', category: 'Mac', name: 'MacBook pro', price: 6000000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=PL107&size=240x240', description: 'Los MacBook Pro (14" y 16") son portátiles de alto rendimiento con chips M4, M4 Pro o M4 Max. Diseñados para profesionales, ofrecen pantallas Liquid Retina XDR ProMotion, múltiples puertos (incluyendo Thunderbolt 5) y una batería de larga duración, ideales para tareas exigentes.' },
    { id: 'prod11', category: 'Mac', name: 'Mac mini', price: 2900000, image: 'https://help.apple.com/assets/6751DB23764B24F68702812D/6751DB2EEED391E9530F09D9/es_ES/1e62a8b0cefe9fe2da740aa762f05b6d.png', description: 'El Mac mini es un potente ordenador de escritorio compacto disponible con chips M4 o M4 Pro. Ofrece un rendimiento excepcional en un formato reducido, con puertos Thunderbolt 4, HDMI 2.1 y Wi-Fi 7, ideal para una estación de trabajo versátil.' },
    { id: 'prod12', category: 'Mac', name: 'Mac pro', price: 39000000, image: 'https://help.apple.com/assets/63C70FC569A04C59D009C348/63C713A8D1F7997A3D0704B3/es_419/fbac8523b0d81e806024f9d46cb3b976.png', description: 'El Mac Pro es el ordenador más potente y expandible de Apple, impulsado por el chip M2 Ultra. Disponible en torre o rack, cuenta con numerosas ranuras PCIe para expansión, hasta 192 GB de RAM y una conectividad exhaustiva, diseñado para flujos de trabajo profesionales extremos.' },
    { id: 'prod13', category: 'iPad', name: 'iPad Pro 11"', price: 5800000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=506083&size=240x240', description: 'El iPad Pro de 11" es la tablet más avanzada y delgada de Apple, con el potente chip M4 y una espectacular pantalla Ultra Retina XDR (OLED). Ofrece un rendimiento extremo, puerto USB-C (Thunderbolt/USB 4) y es compatible con el nuevo Apple Pencil Pro.' },
    { id: 'prod14', category: 'iPad', name: 'iPad Air', price: 3400000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=134322&size=240x240', description: 'El iPad Air está ahora disponible en 11" y 13", ambos impulsados por el chip M3. Ofrece un equilibrio ideal entre rendimiento y portabilidad, con pantalla Liquid Retina, diseño moderno, cámara frontal horizontal con Encuadre Centrado y puerto USB-C. Compatible con Apple Pencil Pro.' },
    { id: 'prod15', category: 'iPad', name: 'iPad mini', price: 3000000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=133849&size=240x240', description: 'El iPad mini es la tablet más compacta de Apple, ahora con el potente chip A17 Pro. Mantiene su diseño de 8.3 pulgadas con pantalla Liquid Retina, cámara frontal con Encuadre Centrado y puerto USB-C. Ahora es compatible con el Apple Pencil Pro, ideal para potencia en un formato ultra-portátil.' },
    { id: 'prod16', category: 'iPad', name: 'iPad (10ª gen)', price: 3200000, image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111840_sp884-ipad-10gen-960.png', description: 'El iPad de 10ª Generación es el modelo estándar de Apple, con un diseño moderno de pantalla completa de 10.9 pulgadas y Touch ID en el botón superior. Impulsado por el chip A14 Bionic, ofrece una cámara frontal horizontal con Encuadre Centrado y puerto USB-C. Es compatible con el Apple Pencil de 1ª generación.' },
    { id: 'prod17', category: 'Watch', name: 'Apple Watch Series 9', price: 1500000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=PL207&size=240x240', description: 'El Apple Watch Series 9. Más inteligente, más brillante y más potente gracias al nuevo chip S9 SiP. Un gesto de doble toque mágico para interactuar con el Apple Watch.' },
    { id: 'prod18', category: 'Watch', name: 'Apple watch ultra 2', price: 4400000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=301002&size=240x240', description: 'El Apple Watch Ultra 2 es el reloj de Apple más robusto y avanzado, con una caja de titanio de 49 mm y la pantalla más brillante (hasta 3.000 nits). Impulsado por el chip S9 SiP, incluye el gesto de doble toque, GPS de doble frecuencia, botón de acción personalizable y una batería de larga duración, diseñado para deportes extremos y aventuras.' },
    { id: 'prod19', category: 'Watch', name: 'Apple Watch SE', price: 1400000, image: 'https://cdsassets.apple.com/content/services/pub/image?productid=PL290&size=240x240', description: 'El Apple Watch SE (2ª Generación) es el modelo más asequible de Apple, ofreciendo las funciones esenciales en un diseño de aluminio. Impulsado por el chip S8 SiP, incluye monitoreo de actividad, detección de caídas, detección de accidentes y resistencia al agua, siendo una excelente opción de entrada al ecosistema Apple Watch.' },
    
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

    populateProductSelect();
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
                <button class="remove-item-btn" data-product-id="${item.id}"><img src="eliminar.png" alt="Eliminar"></button>
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

    document.getElementById('productos-hidden').value = JSON.stringify(cart);
    
    checkoutForm.style.display = 'block';
    checkoutSuccessMessage.style.display = 'none';
    closeModal(cartModal);
    openModal(checkoutModal);
});

clearCartButton.addEventListener('click', handleClearCart);

checkoutForm.addEventListener('submit', (e) => {
    //e.preventDefault();
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
    currentUser = { name: '', email: '' };
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

//FUNCIONES PARA SELECCIONAR PRODCUTOS


function populateProductSelect() {
    const productSelect = document.getElementById('product-select');
    productSelect.innerHTML = '<option value="">-- Seleccione un producto --</option>';
    
    productData.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} - ${formatCurrencyCOP(product.price)}`;
        option.dataset.category = product.category;
        option.dataset.price = product.price;
        productSelect.appendChild(option);
    });
    
    // Agregar evento para autocompletar
    productSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        if (selectedOption.value) {
            document.getElementById('product-category').value = selectedOption.dataset.category;
            document.getElementById('product-price').value = formatCurrencyCOP(selectedOption.dataset.price);
        } else {
            document.getElementById('product-category').value = '';
            document.getElementById('product-price').value = '';
        }
    });
}

// FUNCION AÑADIR AL CARRITO 
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    // Validar que todos los campos estén completos
    const productSelect = document.getElementById('product-select');
    if(productSelect.value === "") {
        alert("Por favor selecciona un producto");
        e.preventDefault();
        return false;
    }
    
    // Puedes añadir más validaciones aquí si lo necesitas
    return true;
});