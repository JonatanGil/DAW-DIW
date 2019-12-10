<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "aaeeiioouu  aioeaeioai";
    echo $cadenaC." cambiar las (a)   por (e)<br>";
    $aux = "";
    echo strlen($cadenaC)."tamaño de la cadena para el for(las A mayus no las cambio)<br>";

    for ($i=0; $i <= strlen($cadenaC); $i++) { 

        switch ($cadenaC[$i]) {
            case "e":{
                $aux = $aux."a";
             } break;
            case "i":{
               $aux = $aux."e";
            } break;
            case "o":{
              $aux = $aux."i";
            } break;
            case "u":{
             $aux = $aux."o";
            } break;
            case "a":{
              $aux = $aux."u";
            } break;

            
            default:{
            $aux = $aux.$cadenaC[$i];
            }break;
        }

    }

    echo $aux;

  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
