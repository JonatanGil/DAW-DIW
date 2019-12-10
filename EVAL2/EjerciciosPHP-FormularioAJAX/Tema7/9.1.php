    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
      
      .tablita td{
        border: 1px solid red;
    }

    .tablita {
        border: 1px solid red;
    }
    tr:nth-child(1n){
        background-color:white;
    }

    caption{
        padding:20px;
        background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
        border: 1px solid purple;
        color: black;

    }
    td{
        color:white;
    }
    td:nth-child(1n){
        background-color: brown;
    }
    td:nth-child(2n){
        background-color: black;
    }
    td:nth-child(3n){
        background-color: purple;
    }

    </style>

    </head>
    <body>
        <?php
            $servidor = "localhost"; # Puede ser una IP o un nombre DNS
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "bdprueba";

            # Crear conexión. Opcionalmente se puede poner como quinto parámetro
            # el puerto
            $conn = mysqli_connect($servidor, $username, $password, $basedatos);

            # Comprobar conexión
            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            echo "Conexi&oacuten con &eacutexito <br><br>";
           
            # A continuación se usa un "SELECT", pero igualmente podría ser
            #  INSERT, DELETE o UPDATE. El código PHP sería idéntico.
            $consulta = "SELECT * FROM empleados";
          
            # A continuación se ejecuta la consulta y se devuelve el resultado
            # en el caso de que se trate de un SELECT. En otro caso devuelve
            # TRUE. Salvo si hay fallo, en cuyo caso devuelve FALSE.
            $result = mysqli_query($conn, $consulta);
           
            # Es preciso iterar para extrar una a una las filas del resultado
            echo "<table class='tablita'>";
            echo "<caption>TABLA</caption>";
            $unavez = 1;
            while ($fila = mysqli_fetch_array($result)) {
            
                echo "<tr>";
                echo "<td>".$fila[0]."</td>";
                echo "<td>".$fila[1]."</td>";
                echo "<td>".$fila[2]."</td>";
                echo "</tr>";

               
            }



            /*
                echo $fila[0] . ': ' . $fila[1];
                echo '<br>';
                 # Esta es una manera alternativa de mostrar la fila, habida
                 # cuenta de que mysqli_fetch_array devuelve un array
                 # asociativo
                echo $fila["DNI"] . ': ' . $fila["nombre"]; //o bien echo $fila[DNI].':'.$fila[nombre];

                echo '<br>';
                echo '<br>';*/



            echo "</table>";
           
            # En el caso de haber usado un SELECT:
            echo "El resultado es de " . mysqli_num_rows($result) . " filas<br>";
           
            # Y para cualquier otro caso (INSERT, DELETE, UPDATE, SELECT),
            # el número de filas de la última operación se obtiene así:
            echo "El resultado es de " . mysqli_affected_rows($conn) . " filas<br>";
           
            mysqli_free_result($result);
           
           
            # Cerrar la conexión es una buena práctica, para liberar recursos
            # inmediatamente, pero si no se pone, no pasa nada porque PHP
            # cierra la conexión automáticamente al salir:
           
            mysqli_close($conn);
                                    
        ?>
       
    </body>
    </html>