<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
       



    <form action="9.6.php" method = "post">
      
        Introduzca su nombre:
        <br>
        <input type="text" name="nombre">
        <br>
        Sueldo
        <input type="number" name="sueldo">
        <br>
        Plus:
        <input type="number" name="plus" value="0">
        <br>
        <input type="submit" value="enviar">
    </form>



    <?php


        if ( !isset ( $_POST["nombre"] ) )  {
           # En caso contrario (es decir, si se ha pulsado antes el botón)...
           }else{



        $servidor = "localhost";
        $username = "miusuario";
        $password = "mipassword";
        $basedatos = "bdprueba";

        # Crear conexión
        $conn = mysqli_connect($servidor, $username, $password, $basedatos);
    
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }
        echo "Conexi&oacuten con &eacutexito <br><br>";

        $dni = mysqli_query($conn, "SELECT MAX(dni) FROM ejercicio92;");
        
        if(!$dni){
            echo "selector fallido<br>";
        }  else{
            echo "selector con exito<br>";
        }


        while ($fila = mysqli_fetch_array($dni)){ 
            echo $fila[0];
            $dniNumero=$fila[0];
        }

        //sumamos una al id dni
        $dniNumero++;

        $dniSumado= $dniNumero;
        $nombreE = $_POST['nombre'];
        $sueldo = $_POST["sueldo"];
        $plus = $_POST["plus"];

        $consulta = "INSERT INTO ejercicio92(dni,nombre,sueldo,plus) VALUES ($dniSumado,'$nombreE',$sueldo,$plus);";
        echo $consulta."<br>";
        $result2 = mysqli_query($conn,$consulta);
        if ($result2==TRUE){
            echo "Se ha insertado la fila: ".$dninumero."/ ".$nombreE."/ ".$sueldo."/ ".$plus ."<br>";
        }else{
            # La siguiente función muestra el último error, en caso
            # de haberlo.
            echo mysqli_error($conn);
            die ("Hubo un error");
        }   # Como no se trata de un SELECT, mysqli_query devuelve TRUE
            


        mysqli_close($conn);
    }

    $servidor = "localhost";
    $username = "miusuario";
    $password = "mipassword";
    $basedatos = "bdprueba";

    # Crear conexión
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);

    if (!$conn) {
        die("<br><br>Conexi&ocacuten fallida: " . mysqli_connect_error());
    }
    echo "<br><br>Conexi&oacuten con &eacutexito <br><br>";
    
    $empleados = mysqli_query($conn, " SELECT * from ejercicio92;");
        
        if(!$empleados){
            echo "selector fallido<br>";
        }  else{
            echo "selector con exito<br>";
        }
/*
        while ($fila = mysqli_fetch_array($empleados)){ 
            echo $fila[0];
            $dniNumero=$fila[0];
        }*/


    ?>

    <form action="9.7.php" method="POST">

        <select name="eliminar">
        <?php foreach ($empleados as $r): ?>

            <option value="<?php echo $r['DNI']; ?>"> <?php echo $r['DNI']; ?> : <?php echo $r['nombre']; ?> </option>

        <?php endforeach; ?>
        </select>
        <br>
        <input type="submit" value="DELETE">

    </form>


    <?php
    if(!isset($_POST["eliminar"])){
           # En caso contrario (es decir, si se ha pulsado antes el botón)...
    }else{

    $servidor = "localhost";
    $username = "miusuario";
    $password = "mipassword";
    $basedatos = "bdprueba";

    # Crear conexión
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);

    if (!$conn) {
        die("<br><br>Conexi&ocacuten fallida: " . mysqli_connect_error());
    }
    echo "<br><br>Conexi&oacuten con &eacutexito <br>";
    
    $dniEliminar = $_POST["eliminar"];
    echo "<br> DNI a eliminar".$dniEliminar.":".$_POST["eliminar"]."<br>";
    $consulta = "DELETE FROM ejercicio92 WHERE DNI LIKE $dniEliminar;";
    $resultado = mysqli_query($conn,$consulta);
    if ($resultado==TRUE){
        echo "Se ha eliminado el dni".$dniEliminar."<br>";
    }else{
        # La siguiente función muestra el último error, en caso
        # de haberlo.
        echo mysqli_error($conn);
        die ("Hubo un error");
    }   # Com
    
   

    mysqli_close($conn);

    }



    ?>


</body>
</html>