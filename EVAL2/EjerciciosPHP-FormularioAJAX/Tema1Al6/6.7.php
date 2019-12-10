<html>
<head>
    <style>
    .tablita td{
        border: 1px solid red;
    }

    .tablita {
        border: 1px solid red;
    }
    tr:nth-child(1n){
        background-color:white;
    }

    
    td{
        color:white;
    }
    td:nth-child(1n){
        background-color: brown;
    }
    td:nth-child(2n){
        background-color: black;
    }
    td:nth-child(3n){
        background-color: purple;
    }
    </style>

</head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "jonatan";
    $letrasDown=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","u","v","w","x","y","z"];
    /*$letrasUper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];*/
    $numerosDown = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    $aux = "";
    $cadenaC = strtolower($cadenaC);
    $bucleCadena = strlen($cadenaC);
    $bucleAbecedario = count($letrasDown);

    echo $cadenaC."<br>";

    for ($i=0; $i < $bucleCadena; $i++) {
      for ($b=0; $b < $bucleAbecedario; $b++) { 

        //si posicion 1 hasta la 26 es la primera de la cadena sumar uno a esa letras, hasta la cadena.lengt del string
        if($letrasDown[$b]==$cadenaC[$i]){
            $numero = $numerosDown[$b];
            $numerosDown[$b]=$numero+1;
        }

      } 
    }

    echo "<table class='tablita'>";
    for ($b=0; $b < count($letrasDown); $b++) { 
        echo "<tr>";
      echo "<td>".$letrasDown[$b]."</td>"."<td>".$numerosDown[$b]."</td>";
      echo "</tr>";
    }
    echo "</table>";
  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
