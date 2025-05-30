<?php
session_start(); 
require '../modelo/conexion.php'; 

$conexionObj = new Conexion();
$conexion = $conexionObj->getConexion();

$nombre = $_POST['nombre']; 
$contraseña = sha1($_POST['contraseña']); 

$sql = "SELECT * FROM usuario WHERE nombre = ? AND contraseña = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $nombre, $contraseña);
$stmt->execute();
$resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
    $row = $resultado->fetch_assoc();

        $_SESSION['usuario'] = $row['nombre']; 
        $_SESSION['correo'] = $row['correo'];
        
        header("Location: ../vista/home/index.php");
        exit();

    } else { 
    echo "<script>alert('❌ Usuario o contraseña incorrectos.'); window.location='../vista/login/index.php';</script>";
}
    
    ?>