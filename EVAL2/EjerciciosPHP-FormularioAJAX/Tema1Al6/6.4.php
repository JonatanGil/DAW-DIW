<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "123456789AEEaaaSDFDSaAAAa";
    echo $cadenaC." cambiar las (a)   por (e)<br>";
    $aux = "";
    echo strlen($cadenaC)."tamaño de la cadena para el for(las A mayus no las cambio)<br>";

    for ($i=0; $i <= strlen($cadenaC); $i++) { 
        if($cadenaC[$i]=="a"){
            $aux = $aux."e";
        }else{
            $aux = $aux.$cadenaC[$i];
        }
    }

    echo $aux;

  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
