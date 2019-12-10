<?php
    $_POST[''];

 
    $servidor = "localhost";
    $username = "miusuario";
    $password = "mipassword";
    $basedatos = "bdprueba";
    
    # Crear conexión
    $conn = mysqli_connect($servidor, $username, $password, $basedatos);
    
    if (!$conn) {
        die("Conexi&ocacuten fallida: " . mysqli_connect_error());
    }else{echo "Conexi&oacuten con &eacutexito <br><br>";}



    //Construiremos un INSERT que lanza


    //Si se inserta bien, escribimos OK
    //SI no NOOK
?>