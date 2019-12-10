<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php


    $bisiesto="2020";

    if(strlen($bisiesto)<4 | strlen($bisiesto)>4){
        echo("error");
    }else{
        if($bisiesto%4==0){
            echo("Es bisiesto:".$bisiesto);
        }else{
            echo("No es bisiesto:".$bisiesto);
        }
    }

  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
