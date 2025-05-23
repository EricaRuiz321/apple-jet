document.addEventListener('DOMContentLoaded', () => {
    const productDisplayArea = document.getElementById('productDisplayArea');
    const categoryButtons = document.querySelectorAll('.category-button');
    const shoppingCartIcon = document.getElementById('shoppingCartIcon');
    const cartIconContainer = document.getElementById('cartIconContainer');
    const shoppingCartModal = document.getElementById('shoppingCartModal');
    const closeCartModalButton = document.getElementById('closeCartModalButton');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalAmountElement = document.getElementById('cartTotalAmount');
    const cartItemCountElement = document.getElementById('cartItemCount');
    const checkoutButton = document.getElementById('checkoutButton');

    let currentCategory = 'iphone'; // Default category
    let cart = [];

    // Placeholder product data
    const products = {
        iphone: [
            { id: 'iphone1', name: 'iPhone 15 Pro', price: 999, image: 'iphone_product_placeholder.png', description: 'The latest iPhone with Pro features.' },
            { id: 'iphone2', name: 'iPhone 15', price: 799, image: 'iphone_product_placeholder.png', description: 'The powerful new iPhone 15.' },
            { id: 'iphone3', name: 'iPhone SE', price: 429, image: 'iphone_product_placeholder.png', description: 'Affordable and capable iPhone.' },
        ],
        airpods: [
            { id: 'airpods1', name: 'AirPods Pro (2nd Gen)', price: 249, image: 'airpods_product_placeholder.png', description: 'Advanced AirPods with Noise Cancellation.' },
            { id: 'airpods2', name: 'AirPods (3rd Gen)', price: 179, image: 'airpods_product_placeholder.png', description: 'AirPods with Spatial Audio.' },
            { id: 'airpods3', name: 'AirPods Max', price: 549, image: 'airpods_product_placeholder.png', description: 'High-fidelity audio and stunning design.' },
        ],
        'tv-home': [
            { id: 'tvhome1', name: 'Apple TV 4K', price: 129, image: 'tv_home_product_placeholder.png', description: 'The future of television.' },
            { id: 'tvhome2', name: 'HomePod', price: 299, image: 'tv_home_product_placeholder.png', description: 'Premium smart speaker.' },
            { id: 'tvhome3', name: 'HomePod mini', price: 99, image: 'tv_home_product_placeholder.png', description: 'Smart speaker with amazing sound.' },
        ],
        entertainment: [
            { id: 'ent1', name: 'Apple Arcade (1 Mo)', price: 6.99, image: 'entertainment_product_placeholder.png', description: 'Access to 200+ ad-free games.' },
            { id: 'ent2', name: 'Apple Music (1 Mo)', price: 10.99, image: 'entertainment_product_placeholder.png', description: 'Stream over 100 million songs.' },
            { id: 'ent3', name: 'Apple TV+ (1 Mo)', price: 9.99, image: 'entertainment_product_placeholder.png', description: 'Original shows and movies.' },
        ]
    };

    function renderProducts() {
        productDisplayArea.innerHTML = '';
        const categoryProducts = products[currentCategory];
        if (!categoryProducts) return;

        categoryProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="action-button add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
                    <button class="action-button view-details-button" data-product-id="${product.id}">View Details</button>
                </div>
            `;
            productDisplayArea.appendChild(card);
        });

        // Add event listeners for new buttons
        document.querySelectorAll('.add-to-cart-button').forEach(button => {
            button.addEventListener('click', (e) => addToCart(e.target.dataset.productId));
        });
        document.querySelectorAll('.view-details-button').forEach(button => {
            button.addEventListener('click', (e) => viewDetails(e.target.dataset.productId));
        });
    }

    function viewDetails(productId) {
        const product = findProductById(productId);
        if (product) {
            alert(`Product: ${product.name}\nPrice: $${product.price.toFixed(2)}\n\n${product.description}`);
        }
    }

    function findProductById(productId) {
        for (const category in products) {
            const found = products[category].find(p => p.id === productId);
            if (found) return found;
        }
        return null;
    }

    function addToCart(productId) {
        const product = findProductById(productId);
        if (!product) return;

        const existingCartItem = cart.find(item => item.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartDisplay();
        showCartNotification(product.name);
    }
    
    function showCartNotification(productName) {
        const notification = document.createElement('div');
        notification.classList.add('cart-notification');
        notification.textContent = `${productName} added to cart!`;
        document.body.appendChild(notification);

        // Basic styling for notification
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#007aff';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1002';
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }


    function updateCartItemQuantity(productId, change) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += change;
            if (cartItem.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCartDisplay();
            }
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-decrease" data-product-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-increase" data-product-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item-button" data-product-id="${item.id}">&times;</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
                totalAmount += item.price * item.quantity;
                totalItems += item.quantity;
            });

            // Add event listeners for cart item actions
            document.querySelectorAll('.quantity-decrease').forEach(button => {
                button.addEventListener('click', (e) => updateCartItemQuantity(e.target.dataset.productId, -1));
            });
            document.querySelectorAll('.quantity-increase').forEach(button => {
                button.addEventListener('click', (e) => updateCartItemQuantity(e.target.dataset.productId, 1));
            });
            document.querySelectorAll('.remove-item-button').forEach(button => {
                button.addEventListener('click', (e) => removeFromCart(e.target.dataset.productId));
            });
        }

        cartTotalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
        cartItemCountElement.textContent = totalItems;
        cartItemCountElement.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }

    function toggleCartModal() {
        shoppingCartModal.classList.toggle('active');
        if (shoppingCartModal.classList.contains('active')) {
            updateCartDisplay(); // Ensure cart is up-to-date when opened
        }
    }

    // Event Listeners
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            renderProducts();
        });
    });

    if (shoppingCartIcon) shoppingCartIcon.addEventListener('click', toggleCartModal);
    if (cartIconContainer) cartIconContainer.addEventListener('click', toggleCartModal); // Allow clicking container
    if (closeCartModalButton) closeCartModalButton.addEventListener('click', toggleCartModal);
    
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length > 0) {
                alert(`Proceeding to checkout with a total of $${cartTotalAmountElement.textContent}.\n(This is a simulation)`);
                cart = []; // Clear cart after checkout simulation
                updateCartDisplay();
                toggleCartModal(); // Close cart
            } else {
                alert('Your cart is empty. Add some products before checking out.');
            }
        });
    }

    // User profile icon (placeholder action)
    const userProfileIcon = document.getElementById('userProfileIcon');
    if(userProfileIcon) {
        userProfileIcon.addEventListener('click', () => {
            alert('User profile clicked! (Functionality to be implemented)');
        });
    }
    

    // Initial setup
    renderProducts();
    updateCartDisplay(); // Initialize cart count badge
});