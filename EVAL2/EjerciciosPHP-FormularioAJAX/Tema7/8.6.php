<html>
    <body>
       
        <!-- La condificación multipart/form-data es para enviar archivos
             de la misma manera que en los adjuntos de correo electrónico
             (MIME)
        -->
       
        <form action="8.6.php" method = "post" enctype="multipart/form-data">
           
            Elija un fichero para subir al servidor:<br>
           
            <input type="text" name="nombreCarpeta">
            <input type="file" name="archivo1">
             <br>
           
            <input type="submit" value="enviar">
           
        </form>


        <?php
    if(!isset($_FILES["archivo1"])==null){
            /*echo "El nombre del fichero es: ".$_FILES["archivo1"]["name"]."<br>";
            echo "El tamaño en bytes es: ".$_FILES["archivo1"]["size"]."<br>";
            echo "El tipo de archivo es: ".$_FILES["archivo1"]["type"]."<br>";
            echo "Se ha guardado en: ".$_FILES["archivo1"]["tmp_name"];*/

            $carpeta = $_POST["nombreCarpeta"];

            mkdir($carpeta, 0777);
            chmod($carpeta, 0777);

            move_uploaded_file ($_FILES["archivo1"]["tmp_name"], $carpeta."/".$_FILES["archivo1"]["tmp_name"]);
            
            //copy($_FILES["archivo1"], './'.$_POST["nombreCarpeta"]);


            # Con la siguiente instrucción movemos el archivo desde su ubicación
            # temporal     a la que se requiera. Si el archivo ya existe, se
            # sorb    reescribe
           
}
     
?>

    </body>
   
</html>