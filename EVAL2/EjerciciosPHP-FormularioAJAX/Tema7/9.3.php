<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head> 
<body>
    <?php
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

        

        $consulta = "SELECT * FROM ejercicio92";
        $result = mysqli_query($conn, $consulta);
      
        $contador=0;


        $consulta = "ALTER TABLE ejercicio92 ADD COLUMN plus decimal(6,2);";
        $result = mysqli_query($conn,$consulta);
        if ($result==TRUE){
            echo "Se ha insertado el campo<br>";
        }else{
            # La siguiente función muestra el último error, en caso
            # de haberlo.
            echo mysqli_error($conn);
            die ("Hubo un error");
        } 

        $consulta = "UPDATE ejercicio92 SET plus = 10.0001";
        $result = mysqli_query($conn,$consulta);
        if ($result==TRUE){
            echo "Se ha insertado los valores a plus 1000<br>";
        }else{
            # La siguiente función muestra el último error, en caso
            # de haberlo.
            echo mysqli_error($conn);
            die ("Hubo un error");
        } 


        $consulta = "SELECT * FROM ejercicio92";
        $result = mysqli_query($conn, $consulta);
        # A continuación se ejecuta la consulta y se devuelve el resultado
        # en el caso de que se trate de un SELECT. En otro caso devuelve
        # TRUE. Salvo si hay fallo, en cuyo caso devuelve FALSE.
        // mysqli_affected_rows($conn) son las filas que ahi apra insertar las cosas


        while ($fila = mysqli_fetch_array($result)){ 
            echo $fila[0]." / ".$fila[1]." / ".$fila[2]." / ".$fila[3]."<br>";
            # Como no se trata de un SELECT, mysqli_query devuelve TRUE
            # si se ha hecho correctamente y FALSE si ha habido error.
            $contador++;
        }


        mysqli_close($conn);
                                 
    ?>
    
</body>
</html>