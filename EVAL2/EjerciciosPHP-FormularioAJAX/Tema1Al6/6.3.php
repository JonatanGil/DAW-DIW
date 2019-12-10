<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "123456789A";
    echo $cadenaC." cadena a invertir<br>";
    $aux = "";
     echo strlen($cadenaC)."tamaño de la cadena para el for<br>";

    for ($i=strlen($cadenaC); $i >= 0; $i--) { 
        $aux = $aux.$cadenaC[$i];
    }

    echo $aux;

  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
