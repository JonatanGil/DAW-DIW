<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <form action="10.1.php" method="POST">

       <?php
        
        if (isset($_COOKIE["micookie"]))
        {
            echo "saludos: ";
            echo $_COOKIE["micookie"];
            echo "</form>";
        }  
        else{
            


            echo "<input type='text' name='nombre'>";
            echo "<input type='submit'>";
            echo "</form>";

            if($_POST["nombre"]!=""){
  
                $name="micookie";
                $value=$_POST["nombre"]; # Podría ser una cadena de texto
                $expires=time()+60; # 60 segundos después del momento actual
                $path="/";
                $domain="";
                $secure=false;
                $HttpOnly=true;
               
                # Es preciso asegurarse de llamar a setcookie() antes de enviar
                # ninguna otra salida al navegador
                setcookie ($name,$value,$expires,$path,$domain,$secure,$HttpeOnly);
               
                header("Location: 10.1.php");

        }
    }
    
    ?>


     
  </body>

    </body>
</html>