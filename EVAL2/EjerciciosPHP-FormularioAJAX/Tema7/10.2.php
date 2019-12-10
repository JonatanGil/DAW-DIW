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

        if(isset($_POST["eliminar"])){
            echo "hola";
            setcookie("micookie", "", time() -3600);
            
        }


        if(isset($_COOKIE["micookie"])){
  
            $servidor = "localhost";
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "bdprueba";
    
            $conn = mysqli_connect($servidor, $username, $password, $basedatos);
    
            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }

            echo "valor de la coookie ".$_COOKIE["micookie"]."<br>";

            $consulta = "SELECT nombre FROM ejercicio102 WHERE id=".$_COOKIE["micookie"];
            $nombre = mysqli_query($conn, $consulta);
            
    
            echo "Saludos ".mysqli_fetch_array($nombre)[0]."    WEL CO ME";
            mysqli_free_result($nombre);
            mysqli_close($conn);

            echo "<form action='10.2.php' method='POST'>";
            echo "<input type='submit' value='EliminarCookie' name='eliminar'>";
            echo "</form>";

        }elseif(!isset($_POST["boton"])){
     
            echo "<form action='10.2.php' method='POST'>";
            echo "<input type='text' name='nombre'>";
            echo "<input type='submit' value='enviar post' name='boton'>";
            echo "</form>";

        }else{

            $servidor = "localhost";
            $username = "miusuario";
            $password = "mipassword";
            $basedatos = "bdprueba";
            # Crear conexión
            $conn = mysqli_connect($servidor, $username, $password, $basedatos);
            
            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }else{echo "Conexi&oacuten con &eacutexito <br><br>";}

            $consulta = mysqli_query($conn, "SELECT MAX(id) FROM ejercicio102");


            while ($fila = mysqli_fetch_array($consulta)){ 
                echo $fila[0];
                $id=$fila[0];
            }



            $name="micookie";
            $value=$id+1; # Podría ser una cadena de texto
            $expires=time()+600; # 60 segundos después del momento actual
            $path="/";
            $domain="";
            $secure=false;
            $HttpOnly=true;

            setcookie($name, $value, $expires, $path, $domain, $secure, $HttpeOnly);
                
            echo "<br>".$_POST["nombre"]."<br>";
            $nombreConsulta = $_POST["nombre"];
            $consulta = mysqli_query($conn, "INSERT INTO ejercicio102(nombre) VALUES ('$nombreConsulta')");
    
            if(!$consulta){
                echo "<br>id nombre insertado  error<br>";
            }  else{
                echo "<br>id nombre insertado corectamente<br>";
            }

            mysqli_close($conn);

            header("Location: 10.2.php");

        }
    
    
    ?>


     
  </body>

    </body>
</html>