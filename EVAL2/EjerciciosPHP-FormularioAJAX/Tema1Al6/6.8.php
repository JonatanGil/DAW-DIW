<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "jonatan aeiou individuo";
    $aux = "";

    echo $cadenaC."<br>";

    for ($i=0; $i < strlen($cadenaC); $i=$i+2) {

        $aux = substr( $cadenaC,$i+1,1).$aux;
        $aux = substr( $cadenaC,$i,1).$aux;

    }

    echo $aux;

    $aux2="";
    $iPara=0;

    


/*
    for ($i=0; $i < strlen($cadenaC); $i=$i+2) {

        switch (substr( $cadenaC,$i+1,1)) {


            case "a":{
                $aux = "e".$aux;
             } break;
            case "e":{
                $aux = "i".$aux;
            } break;
            case "i":{
                $aux = "o".$aux;
            } break;
            case "o":{
                $aux = "u".$aux;
            } break;
            case "u":{
                $aux = "a".$aux;
            } break;

            default:{
                $aux = substr( $cadenaC,$i+1,1).$aux;
            }break;
        }

        switch (substr( $cadenaC,$i,1)) {


            case "a":{
                $aux = "e".$aux;
             } break;
            case "e":{
                $aux = "i".$aux;
            } break;
            case "i":{
                $aux = "o".$aux;
            } break;
            case "o":{
                $aux = "u".$aux;
            } break;
            case "u":{
                $aux = "a".$aux;
            } break;

            default:{
                $aux = substr( $cadenaC,$i,1).$aux;
            }break;
        }


          
    }*/

  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
