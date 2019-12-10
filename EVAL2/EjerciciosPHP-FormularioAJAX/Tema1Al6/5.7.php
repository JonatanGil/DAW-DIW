<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php
  
  $anterior=1;
  $aux=0;

    for ($i=1; $i < 10; $i++) { 
        
        echo ($aux." <br>");
        
        $siguiente=$anterior+$aux;
        $aux=$anterior;
        $anterior=$siguiente;
    }



  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
