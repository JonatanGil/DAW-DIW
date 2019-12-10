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

    caption{
        padding:20px;
        background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
        border: 1px solid purple;
        color: white;

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
<table class="tablita">
  <?php
    
    
    $numero= 1;
    echo "<caption>Numeros del 1 al 10</caption>";
    for ($i=1; $i <=10 ; $i++) { 
        
        echo "<tr>";
        if($i%2==0){
            echo "<td>".$i."El numero es par</td>";
        }else{
            echo "<td>".$i."El numero no es par<br>"."</td>";
        }

        if(primo($i)){
            echo "<td>".$i."El numero es primo:<br>"."</td>";
        }else{
            echo "<td>".$i."El numero no es primo:<br>"."</td>";
        }

        echo "</tr>";
    }

    function primo($num){
        $cont=0;
        // Funcion que recorre todos los numero desde el 2 hasta el valor recibido
       
        for ($i=1; $i<=$num ; $i++) { 
            # code...
        

            if($i=1 | $i=2){return true;}

            if($num%$i==0){

                # Si se puede dividir por algun numero mas de una vez, no es primo
                if(++$cont>1) {return false;}
        
            }
        

     }
     return true;
    }


  ?>
</table>
<br><br>
  <p>...After the script.</p>

</body>

</html>
