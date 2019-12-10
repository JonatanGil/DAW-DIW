<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $miarray=array("apellido1" => "pepe", "apellido1" => "pardo");
    $miarray["apellido2"]="ramos";
    $miarray["apellido3"]="goku";
    $miarray["apellido4"]="teemo";

    reset($miarray); #pasamos al final 
    $tam=count ($miarray); #cuenta el nñumero de elementos;

    for ($i=0;$i<count($miarray);$i++) {

                $elemento=each($miarray);

                $elemento["key"] = ucfirst($elemento["key"]);
                $elemento["0"] = ucfirst($elemento["0"]);
                $elemento["value"] = ucfirst($elemento["value"]);
                $elemento["1"] = ucfirst($elemento["1"]);

                $miarray[$elemento["key"]] = ucfirst($elemento["value"]);
                
                echo "Nombre de la posici&oacuten: ".$elemento["key"]."<br>";
                echo "Nombre de la posici&oacuten: ".$elemento["0"]."<br>";
          
                echo "Valor: ".$elemento["value"]."<br>";
                echo "Valor: ".$elemento["1"]."<br>";

           }

          
           # Las funciones para el manejo del puntero son:
          
           # current():     devuelve el valor correspondiente a la posición actual
           # next():        pasa a la posición siguiente
           # prev():        pasa a la posición anterior
           # reset():       pasa a la primera posición
           # end():         pasa a la posición final
           # key():         devuelve el índice del puntero sin cambiarlo
           # echo "Valor: ".$miarray[$elemento["key"]]."<br>";
  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
