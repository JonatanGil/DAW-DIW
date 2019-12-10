<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "el luciano no sabe el codigo jajael";
    $aux="";
    $posicionesCambiar = [];
    $posicion_coincidencia=0;
    $i=0;

    do{

        $posicion_coincidencia = strpos($cadenaC, "el",$posicion_coincidencia);
        
        if($posicion_coincidencia!=0){
        if($posicion_coincidencia==false){
            echo "no he encontrado.";
        }else{
            echo "cambiar posicion :".$posicion_coincidencia."<br>";
            $posicionesCambiar[$i]=$posicion_coincidencia;
            $i++;
            $posicion_coincidencia++;
            
            
        }
    }else{
      echo "cambiar posicion :".$posicion_coincidencia."<br>";
      $posicionesCambiar[$i]=$posicion_coincidencia;
      $i++;
      $posicion_coincidencia++;

    }

        
    }while($posicion_coincidencia!=false);
    
    $i=0;
    for ($b=0; $b < strlen($cadenaC); $b++) {

        if($b==$posicionesCambiar[$i]){
            $aux = $aux."the";
            $b++;
            $i++;
        }else{
            $aux = $aux.$cadenaC[$b];
        }


    }
    echo "<br>".$aux;
    
  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
