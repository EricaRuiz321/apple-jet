<?php
require 'conexion.php';

$id = $_GET['id'];
$sql = "SELECT * FROM personas WHERE id = '$id'";
$resultado=$mysqli->query($sql);
$row =$resultado->fetch_array(MYSQLI_ASSOC);

 ?>


 <html lang="es">

<head>

<meta name="viewport" content="width=device-width, initial-scale=1">
 <link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/bootstrap-theme.css" rel="stylesheet"> 
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</head>

<body>
<div class="container">
<div class="row">
<h3 style="text-align:center">MODIFICAR REGISTRO</h3>
 </div>

<form class="form-horizontal" method="POST" action="update.php" autocomplete="off"> 
    <div class="form-group">
<label for="nombre" class="col-sm-2 control-label">Nombre</label> 
<div class="col-sm-10">
<input type="text" class="form-control" id="nombre" name="nombre" placeholder> 
    </div>
</div>

<input type="hidden" id="id" name="id" value="<?php echo $row['id']; ?>" />

<div class="form-group">
<label for="email" class="col-sm-2 control-label"> Email</label>
 <div class="col-sm-10">
<input type="email" class="form-control" id="email" name="email"placeholder>
    </div>
</div>

<div class="form-group">
<label for="telefono" class="col-sm-2 control-label">Telefono</label> 
<div class="col-sm-10">
<input type="tel" class="form-control" id="telefono" name="telefono"placeholder>
 </div>
</div>

<div class="form-group">
<label for="estado_civil" class="col-sm-2 control-label">Estado Civil</label>
 <div class="col-sm-10">
<select class="form-control" id="estado_civil" name="estado_civil">
<option value="SOLTERO" <?php if($row['estado_civil']=='SOLTERO') echo'selected'; ?>>soltero</option> 
<option value="CASADO" <?php if($row['estado_civil']=='CASADO') echo 'selected'; ?>>casado<option>
<option value="OTRO" <?php if($row['estado_civil']=='OTRO') echo 'selected'; ?>>otro</option>
 </select>
</div>
 </div>

 <div class= "form-gruop">
    <label for="hijos" class="col-sm-2 control-label">¿Tienes hijos?</label>

    <div class="col-sm-10">
    <label class="radio-inline">
    <input type="radio" name="hijos" value="1" <?php if (isset($row['hijos']) && $row['hijos'] == 1) echo 'checked'; ?>> Sí
</label>

<label class="radio-inline">
    <input type="radio" name="hijos" value="0" <?php if (isset($row['hijos']) && $row['hijos'] == 0) echo 'checked'; ?>> No
</label>

    </div>
</div>

<div class="form-group">
    <label for="intereses"class="col-sm-2 control-label">intereses</label>
    
            <div class="col-sm-10">
                <label class="checkbox-inline">
                <input type="checkbox" id="intereces[]" name="intereses[]" value="libro[]">Libro
            </label>
           
                <label class="checkbox-inline">
                <input type="checkbox" id="intereces[]" name="intereses[]" value="deportes[]">Deportes
            </label>
         
                <label class="checkbox-inline">
                <input type="checkbox" id="intereces[]" name="intereses[]" value="Musica[]">Musica
            </label>
           
                <label class="checkbox-inline">
                <input type="checkbox" id="intereces[]" name="intereses[]" value="Otros[]">Otros
            </label>
       </div>
        </div>

        <div class= form-group>
            <div class="col-sm-offset-2 col-sm-10">
            <a href= "index.php" class="btn btn-default">Regresar</a>
            <button type="submit"class="btn btn-primary">Guardar</button>
            </div>
        </div>
    </form>
</div>
</body>
</html>