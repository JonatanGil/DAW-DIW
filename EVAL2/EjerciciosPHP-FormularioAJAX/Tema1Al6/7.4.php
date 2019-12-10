<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $miarray=array("apellido1" => "pepe", "apellido1" => "pardo");
    $miarray["apellido2"]="ramos";
    $miarray["apellido3"]="goku";
    $miarray["apellido4"]="teemo";

        reset($miarray); #pasamos al principio 
        $tam=count ($miarray); #cuenta el nñumero de elementos;


        # Alternativamente, para obtener el nombre de cada posición:
        foreach ($miarray as $posicion => $valor){
            
        $miarray[$posicion] = ucfirst($valor);
        $valor =  $miarray[$posicion];

        echo $posicion." ----> ".$valor."<br>";

        }

        
        echo "<br>";
        print_r($miarray);


        


           # Las funciones para el manejo del puntero son:
          
           # current():     devuelve el valor correspondiente a la posición actual
           # next():        pasa a la posición siguiente
           # prev():        pasa a la posición anterior
           # reset():       pasa a la primera posición
           # end():         pasa a la posición final
           # key():         devuelve el índice del puntero sin cambiarlo
  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
