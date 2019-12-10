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
           
            if ( $_GET["nombre"] == "")
            {
                # Esta instrucción debe contener lo primero que se envíe al
                # navegador, y además se termina con exit, para que no se
                # envíe nada más.
                header ( "Location: 8.7.html");
                exit;
            }
           
            else
            {
                header ( "Location: 8.7.2.html");
            }   
           
           
        ?>
    </body>
</html>