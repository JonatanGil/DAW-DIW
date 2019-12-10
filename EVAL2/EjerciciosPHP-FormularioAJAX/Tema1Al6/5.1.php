<html>
<head>
    <style>
    
    .tablita td{
        border: 1px solid red;
    }

    .tablita {

        border: 1px solid red;
    }

    </style>

</head>
<body>

  <p>Before the script...</p>
<table class="tablita">
  <?php
    
    $numero = 1;

    while($numero<=10){
        echo "<tr>";
        if($numero%2==0){
            echo "<td>".$numero."El numero es par</td>";
        }else{
            echo "<td>".$numero."El numero no es par<br>"."</td>";
        }

        if(primo($numero)){
            echo "<td>".$numero."El numero es primo:<br>"."</td>";
        }else{
            echo "<td>".$numero."El numero no es primo:<br>"."</td>";
        }

        $numero++;

        echo "</tr>";

    }

    function primo($num){
        $cont=0;
        // Funcion que recorre todos los numero desde el 2 hasta el valor recibido
        $i=2;
        while($i<=$num) {

            if($num%$i==0){

                # Si se puede dividir por algun numero mas de una vez, no es primo
                if(++$cont>1) return false;
        }
        $i++;
     }
        return true;
    }

  ?>
</table>
<br><br>
  <p>...After the script.</p>

</body>

</html>
