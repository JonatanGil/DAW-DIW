<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
      
       
  
                   
      <form action="7.5.php" method = "POST">
                   <?php
                   if(!isset($_POST["boton"])){
                     ?>

                     Nombre:
                     <input type="text" name="nombre"><br><br>
                     <input type="submit" name="boton" value="enviar">

                     <?php
                          } else{
                               //var_dump($_POST);
                     ?>

                     Vehiculo:
                     <input type="text" name="vehiculo"><br><br>

                     <input type="hidden" name="nombre" value=<?php echo $_POST["nombre"]?>><br><br>
      
                     <input type="submit" name="boton2" value="enviar">
                <?php 
                }
              if(isset($_POST["boton2"])){
                  echo "<br><br>Tu nombre ".$_POST["nombre"]." con tu vehiculo ".$_POST["vehiculo"];
              }
            ?>
     
</body>
</html>