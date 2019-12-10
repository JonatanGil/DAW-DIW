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
    
    $numero=1;
    $i=1;
    echo "<caption>Tabla de multiplicar</caption>";

    echo "<tr>";



    for ($i=1; $i <= 10; $i++) { 
    
    
    echo "<td>Tabla del numero $i";

    echo "</td>";
}

echo "</tr>";

for ($numero=$numero;$numero <= 10  ; $numero++) { 
    # code...

    echo "<tr>";

for ($i=1; $i <=10 ; $i++) { 
    # code...

    
    echo "<td>".$i*$numero;

    echo "</td>";
}
echo "</tr>";
}


  ?>
</table>
<br><br>
  <p>...After the script.</p>

</body>

</html>
