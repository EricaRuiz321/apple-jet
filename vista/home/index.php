<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apple Store Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="APPLE-JET.png" alt="Apple Logo" id="header-logo-img">
        </div>
        <nav id="category-nav">
            <!-- Categorías se cargarán aquí por JS -->
        </nav>
        <div class="user-actions">
            <button id="cart-button" class="icon-button" aria-label="Abrir carrito">
                <img src="cart_icon_apple.png" alt="Carrito"> Carrito (<span id="cart-count">0</span>)
            </button>
            <button id="profile-button" class="icon-button" aria-label="Abrir perfil de usuario">
                <img src="profile_icon_apple.png" alt="Perfil"> Perfil
            </button>
        </div>
    </header>

    <main id="product-grid">
        <!-- Productos se cargarán aquí por JS -->
    </main>

    <footer>
        <p>&copy; 2025 Apple-Jet. Página web dinámica e interactiva para la visualización, 
            compra y promoción de productos Apple.</p>
    </footer>

    <!-- Modal de Detalles del Producto -->
    <div id="product-details-modal" class="modal">
        <div class="modal-content">
            <span class="close-button" data-modal-id="product-details-modal">&times;</span>
            <h2 id="modal-product-name">Nombre del Producto</h2>
            <img id="modal-product-image" src="" alt="Imagen del producto" />
            <p id="modal-product-description">Descripción detallada del producto.</p>
            <p id="modal-product-price" class="price">Precio</p>
            <button id="modal-add-to-cart-button" class="add-to-cart-btn">Añadir al Carrito</button>
        </div>
    </div>

    <!-- Modal del Carrito -->
    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close-button" data-modal-id="cart-modal">&times;</span>
            <h2>Tu Carrito</h2>
            <div id="cart-items-container">
                <!-- Items del carrito se cargarán aquí -->
            </div>
            <p class="total-price">Total: <span id="cart-total">0 COP</span></p>
            <button id="checkout-button">Realizar Compra</button>
            <button id="clear-cart-button" class="secondary">Vaciar Carrito</button>
        </div>
    </div>

    <!-- Modal de Checkout -->
    <div id="checkout-modal" class="modal">
        <div class="modal-content">
            <span class="close-button" data-modal-id="checkout-modal">&times;</span>
            <h2>Datos de Envío y Pago</h2>
            <form id="checkout-form" method="POST" action="../../controlador/compra.php">
                <label for="checkout-name">Nombre Completo:</label>
                <input type="text" id="checkout-name" name="nombre" required>
                
                <label for="checkout-email">Correo Electrónico:</label>
                <input type="email" id="checkout-email" name="correo" required>
                
                <label for="checkout-address">Dirección de Envío:</label>
                <input type="text" id="checkout-address" name="direccion" required>
                
                <label for="checkout-phone">Teléfono:</label>
                <input type="tel" id="checkout-phone" name="telefono" pattern="[0-9]{7,10}" title="Número de teléfono (7-10 dígitos)" required>
                
                <button type="submit" name="compra">Confirmar Compra</button>
            </form>
            <div id="checkout-success-message" style="display:none; text-align:center; padding: 20px; color: green;">
                ¡Gracias por tu compra! Tu pedido ha sido procesado.
            </div>
        </div>
    </div>

    <!-- Modal de Perfil de Usuario -->
    <div id="profile-modal" class="modal">
        <div class="modal-content">
            <span class="close-button" data-modal-id="profile-modal">&times;</span>
            <h2>Perfil de Usuario</h2>
            <div id="user-info">
                <p>Nombre: <span id="profile-name">N/A</span></p>
                <p>Correo: <span id="profile-email">N/A</span></p>
                <p>Dirección: <span id="profile-address">N/A</span></p>
                <p>Teléfono: <span id="profile-phone">N/A</span></p>
            </div>
            <button id="logout-button">Cerrar Sesión</button>
        </div>
    </div>
    
    <script type="importmap">
    {
        "imports": {}
    }
    
    </script>
    <script type="module" src="script.js"></script>
</body>
</html>