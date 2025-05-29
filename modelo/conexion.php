<?php
class Conexion{
    private $conexion;
    
    public function __construct()
    {
        $this->conexion = new mysqli('localhost','root','','apple');
    }

    public function getConexion() {
        return $this->conexion;
    }

    public function consultaActualizar($sql)
    {
        $this->conexion->query($sql);
    }

    public function consultaTabla($sql)
    {
        $consulta = $this->conexion->query($sql);
        return $consulta->fetch_all(MYSQLI_ASSOC);
    }

    public function consultaFilas ($sql)
    {
        $consulta = $this->conexion->query($sql);
        return $consulta->fetch_assoc();
    }
}
?>