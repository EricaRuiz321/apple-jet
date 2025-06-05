<?php session_start(); ?>

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
                <img src="carrito.jpg" alt="Carrito"> Carrito (<span id="cart-count">0</span>)
            </button>
            <button id="profile-button" class="icon-button" aria-label="Abrir perfil de usuario">
                <img src="usuario.jpg" alt="Perfil"> Perfil
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
        
        <div class="form-wrapper checkout-wrapper">
            <form id="checkout-form" method="POST" action="../../controlador/compra.php">
                <!-- Sección de Producto (visible por defecto) -->
                <div id="product-section">
                    <h2>Datos Productos</h2>
                    <div class="input-group">
                        <label for="product-select">Producto</label>
                        <select id="product-select" name="nombreProducto" required>
                            <option value="">-- Seleccione un producto --</option>
                            <!-- Opciones de productos se llenarán dinámicamente -->
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="product-category">Categoría</label>
                        <input type="text" id="product-category" name="categoria" readonly>
                    </div>
                    
                    <div class="input-group">
                        <label for="product-price">Precio</label>
                        <input type="text" id="product-price" name="precio" readonly>
                    </div>
                    
                    <div class="input-group">
                        <label for="product-quantity">Cantidad</label>
                        <input type="number" id="product-quantity" name="cantidad" min="1" value="1" required>
                    </div>
                    

                    <div class="form-navigation">
                        <button type="button" id="go-to-personal-data" class="primary-button">
                            Datos Personales
                        </button>
                    </div>
                </div>
                
                <!-- Sección de Datos Personales (oculta inicialmente) -->
                <div id="personal-section" style="display:none;">
                    <h2>Datos Personales</h2>
                    <div class="input-group">
                        <label for="checkout-name">Nombre Completo</label>
                        <input type="text" id="checkout-name" name="nombre" required>
                    </div>
                    
                    <div class="input-group">
                        <label for="checkout-email">Correo Electrónico</label>
                        <input type="email" id="checkout-email" name="correo" required>
                    </div>
                    
                    <div class="input-group">
                        <label for="checkout-address">Dirección de Envío</label>
                        <input type="text" id="checkout-address" name="direccion" required>
                    </div>
                    
                    <div class="input-group">
                        <label for="checkout-phone">Teléfono</label>
                        <input type="tel" id="checkout-phone" name="telefono" pattern="[0-9]{7,10}" 
                               title="Número de teléfono (7-10 dígitos)" required>
                    </div>
                    
                    <input type="hidden" name="productos" id="productos-hidden">
                    <input type="hidden" name="idUsuario" value="<?php echo isset($_SESSION['idUsuario']) ? $_SESSION['idUsuario'] : ''; ?>">
                    
                    <div class="form-navigation">
                        <button type="button" id="back-to-products" class="secondary-button">
                            Volver a Productos
                        </button>
                        <button type="submit" name="compra" class="submit-button">
                            Confirmar Compra
                        </button>
                    </div>
                </div>
            </form>
            
            <div id="checkout-success-message" style="display:none; text-align:center; padding: 20px; color: green;">
                ¡Gracias por tu compra! Tu pedido ha sido procesado.
            </div>
        </div>
    </div>
</div>

    <!-- Modal de Perfil de Usuario -->
    <div id="profile-modal" class="modal">
    <div class="modal-content">
        <span class="close-button" data-modal-id="profile-modal">&times;</span>
        <h2>Perfil de Usuario</h2>
        <div id="user-info">
            <p>Nombre: <span id="registerName"><?= $_SESSION['usuario'] ?? 'N/A'; ?></span></p>
            <p>Correo: <span id="registerEmail"><?= $_SESSION['correo'] ?? 'N/A'; ?></span></p>
        </div>
        <a href="../../controlador/logout.php" id="logout-button" class="btn-logout">Cerrar Sesión</a>

    </div>
</div>
    
    <script type="importmap">
    {
        "imports": {}
    }
    
    </script>
    <script type="module" src="script.js"></script>
    
    <script>
    document.getElementById("profile-button").addEventListener("click", function() {
        document.getElementById("profile-modal").style.display = "block";
    });

    document.querySelectorAll(".close-button").forEach(btn => {
        btn.addEventListener("click", function() {
            const modalId = btn.getAttribute("data-modal-id");
            document.getElementById(modalId).style.display = "none";
        });
    });
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Botón para ir a datos personales
    document.getElementById('go-to-personal-data').addEventListener('click', function() {
        document.getElementById('product-section').style.display = 'none';
        document.getElementById('personal-section').style.display = 'block';
    });
    
    // Botón para volver a productos
    document.getElementById('back-to-products').addEventListener('click', function() {
        document.getElementById('personal-section').style.display = 'none';
        document.getElementById('product-section').style.display = 'block';
    });
});
</script>
</body>
</html>