<?php
session_start();
require '../modelo/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Recibir y limpiar datos
    $nombreComprador = trim($_POST['nombre'] ?? '');
    $correo = trim($_POST['correo'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');
    $direccion = trim($_POST['direccion'] ?? '');
    $nombreProducto = trim($_POST['nombreProducto'] ?? '');
    $categoria = trim($_POST['categoria'] ?? '');
    

    // Obtener idUsuario de la sesión (añadido aquí)
    $idUsuario = $_SESSION['idUsuario'] ?? null;

    // 2. Procesar el precio formateado (sin cambiar el JavaScript)
    $precioFormateado = $_POST['precio'] ?? '';
    $precio = 0;
    
    if (!empty($precioFormateado)) {
        // Eliminar símbolos de moneda y separadores de miles
        $precioLimpio = preg_replace('/[^0-9,]/', '', $precioFormateado);
        // Reemplazar coma por punto para decimales
        $precioLimpio = str_replace(',', '.', $precioLimpio);
        $precio = (float) $precioLimpio;
    }

    $cantidad = isset($_POST['cantidad']) ? (int) $_POST['cantidad'] : 0;

    if ($precio <= 0) {
        echo "<script>alert('Error: El precio debe ser mayor que cero. Valor recibido: ".htmlspecialchars($precioFormateado)."'); history.back();</script>";
        exit();
    }

    // Resto del código para insertar en la base de datos...
    $conexionObj = new Conexion();
    $conn = $conexionObj->getConexion();

    try {
        // Insertar compra
        $sqlCompra = "INSERT INTO compra (nombre, correo, telefono, direccion, idUsuario) VALUES (?, ?, ?, ?, ?)";
        $stmtCompra = $conn->prepare($sqlCompra);
        $stmtCompra->bind_param("sssss", $nombreComprador, $correo, $telefono, $direccion, $idUsuario);
        $stmtCompra->execute();
        
        $idCompra = $conn->insert_id;

        // Insertar producto
        $sqlProducto = "INSERT INTO producto (
            nombreComprador, 
            nombreProducto, 
            precio, 
            cantidad, 
            categoria, 
            idCompra,
            idUsuario
        ) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        $stmtProducto = $conn->prepare($sqlProducto);
        $stmtProducto->bind_param("ssdisii", 
            $nombreComprador,
            $nombreProducto,
            $precio,
            $cantidad,
            $categoria,
            $idCompra,
            $idUsuario
        );
        $stmtProducto->execute();

        
        $_SESSION['usuario'] = $nombreComprador;
        $_SESSION['correo'] = $correo;
        $_SESSION['telefono'] = $telefono;
        $_SESSION['direccion'] = $direccion;

        header("Location: ../vista/home/index.php");
        exit();

    } catch (Exception $e) {
        echo "<script>alert('Error al procesar la compra: ".addslashes($e->getMessage())."'); history.back();</script>";
        exit();
    } finally {
        if (isset($stmtCompra)) $stmtCompra->close();
        if (isset($stmtProducto)) $stmtProducto->close();
        $conn->close();
    }
}
?>