<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>7.2Tema7</title>
</head>
<body>

  <p>Before the script...</p>

    <?php


         foreach($_POST as $nombre => $value){
            
            
                if (!isset($_GET ["nombre"]) && $nombre=="nombre"){
                    echo "<br>No a indocado:".$nombre."<br>";
                }else{
                    echo "<br>".$nombre.":".$value."<br>";
                }
   
            }
      ?>

<br><br>
<p>...After the script.</p>
    
</body>
</html>