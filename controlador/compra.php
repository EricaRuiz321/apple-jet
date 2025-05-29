<?php
session_start();
require '../modelo/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];

    $conexionObj = new Conexion();
    $conn = $conexionObj->getConexion();

    $sql = "INSERT INTO compra (nombre, correo, telefono, direccion) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $correo, $telefono, $direccion);

    if ($stmt->execute()) {
            $_SESSION['usuario'] = $nombre;

            header("Location: ../vista/home/index.php");
            exit();
        } else {
            echo "<script>alert('❌ Error al registrar: " . $stmt->error . "'); window.location='../vista/login/index.php';</script>";
        }

    $stmt->close();
    $conn->close();
}
?>