<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "jonyqro@gmail.com";

    echo $cadenaC."<br>";
    
    $posicionArroba = strpos($cadenaC,"@");

    $primerTexto = substr($cadenaC,0,$posicionArroba);
    $segundoTexto = substr($cadenaC,$posicionArroba+1);

    echo "nombre del correo:  ".$primerTexto."<br>";
    echo "organizacion Direccion: ".$segundoTexto;
    
  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
