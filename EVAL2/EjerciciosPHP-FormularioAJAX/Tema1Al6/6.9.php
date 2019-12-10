<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "jonatan aeiou individuo.com";
    $aux = "";

    echo $cadenaC."<br>";

       echo (substr($cadenaC,-4,4) == ".com") ?    "<br>Acaba en .com correo correcto" :  "<br> correo no correcto no acaba en .com";


    echo $aux;

    $aux2="";
    $iPara=0;

    
  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
