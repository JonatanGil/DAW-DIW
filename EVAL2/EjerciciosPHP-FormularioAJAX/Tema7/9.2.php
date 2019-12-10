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

        

/*
        if (mysql_num_rows($consulta) > 0) {
            while ($fila = mysql_fetch_assoc($resultado)) {
                print_r($fila);
                //imprime todos los campos de cada tabla, dice si es varchar
                // tamaño nombre de cada fila etc,.,.
            }
        }*/



        $sql = "CREATE TABLE ejercicio92 (
            DNI INT(11) PRIMARY KEY NOT NULL,
            nombre VARCHAR(30),
            sueldo decimal(6,2)
            )";
   
        // Se verifica si la tabla ha sido creado
        if ($conn->query($sql) === TRUE) {
            echo "la tabla ejercicio92 ha sido creadA<br>";
        } else {
            echo "Hubo un error al crear la tabla ejercicio92: " . $conn->error."<br>";
        }


        $consulta = "SELECT * FROM empleados";
        $result = mysqli_query($conn, $consulta);

        $contador=0;

        # A continuación se ejecuta la consulta y se devuelve el resultado
        # en el caso de que se trate de un SELECT. En otro caso devuelve
        # TRUE. Salvo si hay fallo, en cuyo caso devuelve FALSE.
        // mysqli_affected_rows($conn) son las filas que ahi apra insertar las cosas
        while ($fila = mysqli_fetch_array($result)){ 
            echo $fila[0]." / ".$fila[1]." / ".$fila[2]."<br>";
            $consulta = "INSERT INTO ejercicio92(DNI,nombre,sueldo) VALUES ($fila[0],'$fila[1]',$fila[2]);";
            $result2 = mysqli_query($conn, $consulta);
            # Como no se trata de un SELECT, mysqli_query devuelve TRUE
            # si se ha hecho correctamente y FALSE si ha habido error.
            if ($result2==TRUE){
                echo "Se ha insertado correctamente el la fila $contador <br>";
            }else{
                # La siguiente función muestra el último error, en caso
                # de haberlo.
                echo mysqli_error($conn);
                die ("Hubo un error");
            } 
            $contador++;
        }


        mysqli_close($conn);
                                 
    ?>
    
</body>
</html>