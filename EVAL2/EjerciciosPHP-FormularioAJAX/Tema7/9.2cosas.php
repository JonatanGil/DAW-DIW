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

        # Comprobar conexión
        if (!$conn) {
            die("Conexi&ocacuten fallida: " . mysqli_connect_error());
        }
        echo "Conexi&oacuten con &eacutexito <br><br>";
        
        for ($contador=4; $contador<10; $contador++){
            $consulta = "INSERT INTO empleados VALUES ($contador, 'Rigoberto',1000);";
            $result = mysqli_query($conn, $consulta);
            # Como no se trata de un SELECT, mysqli_query devuelve TRUE
            # si se ha hecho correctamente y FALSE si ha habido error.
            if ($result==TRUE){
                echo "Se ha insertado correctamente el $contador <br>";
            }else{
                # La siguiente función muestra el último error, en caso
                # de haberlo.
                echo mysqli_error($conn);
                die ("Hubo un error");
            }   
            
            # Como no se trata de un SELECT, no hace falta el
            # mysqli_free_result($result)
        }

        mysqli_close($conn);
                                 
    ?>
    
</body>
</html>