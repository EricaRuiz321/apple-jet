<?php
session_start(); 
require '../db/conexion.php'; 

$conexionObj = new Conexion();
$conexion = $conexionObj->getConexion();

$nombre = $_POST['nombre']; 
$contraseña = sha1($_POST['contraseña']); 

$sql = "SELECT * FROM usuario WHERE nombre='$nombre' AND contraseña='$contraseña'"; 
$resultado = mysqli_query($conexion, $sql);
if (mysqli_num_rows($resultado) == 1) { 
    $row = mysqli_fetch_assoc($resultado); 

    if ($row['rol'] == $rol) {
        $_SESSION['usuario'] = $row['nombre']; 
    
        
        header("Location: ../vista/home/index.html");
        exit();

    } else { 
    echo "<script>alert('❌ Usuario o contraseña incorrectos.'); window.location='../vista/login/index.php';</script>";
}
    }
    ?>