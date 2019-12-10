<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php


        $libro1=array(
            "titulo"=>"Don Quijote",
            "autor"=>"Cervantes",
            "fecha"=>1615);
        $libro2=array(
            "titulo"=>"El hobbit",
            "autor"=>"Tolkien",
            "fecha"=>1937);
        $libro3=array(
            "titulo"=>"Marvel",
            "autor"=>"Stan lee",
            "fecha"=>1922);

        $biblioteca=array("lib1"=>$libro1,"lib2"=>$libro2,"lib3"=>$libro3);
         
        echo "<pre>";       
        print_r($biblioteca);
        echo "</pre>";     


        foreach ($biblioteca as $v1) {
                echo "Libro <br>";
            foreach ($v1 as $posicion => $v2) {
                echo "$posicion:$v2/\n";
            }
            echo "<br>";
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
