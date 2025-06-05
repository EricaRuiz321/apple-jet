<?php
session_start();
require '../modelo/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contraseña = sha1($_POST['contraseña']);

    $conexionObj = new Conexion();
    $conn = $conexionObj->getConexion();

    $sql = "INSERT INTO usuario (nombre, correo, contraseña) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $correo, $contraseña);

    if ($stmt->execute()) {
            $idUsuario = $conn->insert_id;

            $_SESSION['usuario'] = $nombre;
            $_SESSION['correo'] = $correo;
            $_SESSION['idUsuario'] = $idUsuario;

            header("Location: ../vista/home/index.php");
            exit();
        } else {
            echo "<script>alert('❌ Error al registrar: " . $stmt->error . "'); window.location='../vista/login/index.php';</script>";
        }

    $stmt->close();
    $conn->close();
}
?>