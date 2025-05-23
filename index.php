<?php
require 'conexion.php';

$where = "";
if(!empty($_POST))
{
$valor = $_POST['campo'];
if(!empty($valor)){
$where = "WHERE nombre LIKE '%$valor'";
    }
}
$sql = "SELECT * FROM personas $where";
$resultado = $mysqli->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport"content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-theme.css" rel="stylesheet">
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</head>

<body>
    <div class="container">
        <div class="row mt-3">
            <h2 style="text-align:center">Curso de PHP y MySQL</h2>
    </div>
    

    <div class="row mt-3">
        <a href="nuevo.php"class="btn btn-primary">Nuevo Registro</a>
</div>

<div class="row mt-3">
        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
            <b>Nombre: </b><input type="text"id="campo" name="campo" />
            <input type="submit" id="enviar" name="enviar" value="Buscar" class="btn btn-primary">
            </form>
    </div>
    
    <br>
<div class="row table-responsive">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th></th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <?php while($row = $resultado->fetch_array(MYSQLI_ASSOC)) { ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['nombre']; ?></td>
                <td><?php echo $row['email']; ?></td>
                <td><?php echo $row['telefono']; ?></td>
                <td><a href="modificar.php?id=<?php echo $row['id']; ?>" class="btn btn-warning btn-sm">modificar</a></td>
                <td><button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                data-bs-target="#confirm-delete"data-bs-id="<?php echo $row['id']; ?>">Eliminar</button></td>
             
            </tr>
            <?php } ?>
        </tbody>
    </table>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Eliminar Registro</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>

      <div class="modal-body">
        ¿Desea eliminar este registro?
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <a href="#" class="btn btn-danger btn-ok">Eliminar</a>
      </div>

    </div>
  </div>
</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script>
  const confirmDeleteModal = document.getElementById('confirm-delete');
  confirmDeleteModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const id = button.getAttribute('data-bs-id');
    const modalLink = confirmDeleteModal.querySelector('.btn-ok');
    modalLink.href = 'eliminar.php?id=' + id;
  });
</script>

</body>
</html>