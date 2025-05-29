<?php
session_start();
session_destroy();
header("Location: ../vista/login/index.php");
exit();
?>