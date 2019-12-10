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
  
    if(!isset($_FILES["archivo1"])==null){
        echo "El nombre del fichero es: ".$_FILES["archivo1"]["name"]."<br>";
        echo "El tamaño en bytes es: ".$_FILES["archivo1"]["size"]."<br>";
        echo "El tipo de archivo es: ".$_FILES["archivo1"]["type"]."<br>";
        echo "Se ha guardado en: ".$_FILES["archivo1"]["tmp_name"]."<br>";

        # Con la siguiente instrucción movemos el archivo desde su ubicación
        # temporal a la que se requiera. Si el archivo ya existe, se
        # sorbreescribe
        mkdir($_FILES["archivo1"]["name"],0777);
        echo move_uploaded_file ( $_FILES["archivo1"]["tmp_name"], "/home/daw/Escritorio/archivoUpload.txt")? "true": "false";
    }

    ?>

     
</body>
</html>