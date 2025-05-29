
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apple Login</title>
    <link rel="stylesheet" href="style.css">
    <script type="importmap">
    {
        "imports": {
            
        }
    }
    </script>
</head>
<body>
    <div class="container">
        <div class="logo-container">
            <img src="APPLE-JET.png" alt="Apple Logo" class="apple-logo">
        </div>
        <div class="form-wrapper">
            <div class="tabs">
                <button id="signInTab" class="tab-button active" data-form="signInForm">Iniciar Sesión</button>
                <button id="registerTab" class="tab-button" data-form="registerForm">Registrarse</button>
            </div>

            <form id="signInForm" class="form active" method="POST" action="../../controlador/iniciarSesion.php">
                <div class="input-group">
                    <label for="signInName">Nombre de usuario</label>
                    <input type="text" id="signInName" name="nombre" required>
                </div>
                <div class="input-group">
                    <label for="signInPassword">Contraseña</label>
                    <input type="password" id="signInPassword" name="contraseña" required>
                </div>
                <button type="submit" name="iniciarSesion" class="submit-button">Iniciar Sesión</button>

                <div class="or-divider">
                    <span class="line"></span>
                    <span class="text">o</span>
                    <span class="line"></span>
                </div>
                
                <button type="button" class="google-signin-button">
                    <img src="google_logo.png" alt="Google G" class="google-logo">
                    Iniciar sesión con Google
                </button>
            </form>

            <form id="registerForm" class="form" method="POST" action="../../controlador/registro.php">
                <div class="input-group">
                    <label for="registerName">Nombre completo</label>
                    <input type="text" id="registerName" name="nombre" required>
                </div>
                <div class="input-group">
                    <label for="registerEmail">Correo Electrónico</label>
                    <input type="email" id="registerEmail" name="correo" required>
                </div>
                <div class="input-group">
                    <label for="registerPassword">Contraseña</label>
                    <input type="password" id="registerPassword" name="contraseña" required>
                </div>
                <button type="submit" name="registrarse" class="submit-button">Registrarse</button>
                
                <button type="button" class="google-signin-button">
                    <img src="google_logo.png" alt="Google G" class="google-logo">
                    Iniciar sesión con Google
                </button>
            </form>
        </div>
    </div>
    <script src="script.js" type="module"></script>
</body>
</html>