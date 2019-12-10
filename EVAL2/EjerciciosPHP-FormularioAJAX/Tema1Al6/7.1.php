<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $miarray=array("hola", "hola1", "hola2");

    $tam=count ($miarray);

    for($i=$tam-1; $i >= 0; $i--) { 
        echo "posicion:".$i." ".$miarray[$i]."<br>";
        
    }



  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
