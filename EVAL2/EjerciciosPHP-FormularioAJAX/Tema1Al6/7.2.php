<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $miarray=array("nombre" => "Pepe", "apellido1" => "Pardo");
    $miarray["apellido2"]="Ramos";
    $miarray["apellido3"]="Goku";
    $miarray["apellido4"]="Teemo";

    end($miarray); #pasamos al final 
    $tam=count ($miarray); #cuenta el nñumero de elementos;


    for ($i=0;$i<$tam;$i++){
        echo "Elemento: ". current($miarray). "<br>";
        echo "posicion del array:". key($miarray). "<br>";
        prev($miarray);
    }

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
