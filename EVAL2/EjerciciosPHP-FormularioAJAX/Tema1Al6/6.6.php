<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php

    $cadenaC = "jonatas";
    $aux = "";

    echo $cadenaC."<br>";

    for ($i=0; $i <= strlen($cadenaC); $i=$i+2) {

      switch ($cadenaC[$i+1]) {


          case "a":{
              $aux = $aux."e";
           } break;
          case "e":{
              $aux = $aux."i";
          } break;
          case "i":{
              $aux = $aux."o";
          } break;
          case "o":{
              $aux = $aux."u";
          } break;
          case "u":{
              $aux = $aux."a";
          } break;

          default:{
              $aux = $aux.$cadenaC[$i+1];
          }break;
      }


      switch ($cadenaC[$i]) {


          case "a":{
              $aux = $aux."e";
           } break;
          case "e":{
              $aux = $aux."i";
          } break;
          case "i":{
              $aux = $aux."o";
          } break;
          case "o":{
              $aux = $aux."u";
          } break;
          case "u":{
              $aux = $aux."a";
          } break;

          default:{
              $aux = $aux.$cadenaC[$i];
          }break;
      }


        
  }

  echo $aux."  codificado<br>";

    
    $aux2Prueba="";
   

    for ($i=0; $i <= strlen($aux); $i=$i+2) {
        
        
        switch ($aux[$i+1]) {
            case "a":{
                $aux2Prueba = $aux2Prueba."u";
             } break;
            case "e":{
                $aux2Prueba = $aux2Prueba."a";
            } break;
            case "i":{
                $aux2Prueba = $aux2Prueba."e";
            } break;
            case "o":{
                $aux2Prueba = $aux2Prueba."i";
            } break;
            case "u":{
                $aux2Prueba = $aux2Prueba."o";
            } break;

            default:{
                $aux2Prueba = $aux2Prueba.$aux[$i+1];
            }break;
        }

        switch ($aux[$i]) {
          case "a":{
              $aux2Prueba = $aux2Prueba."u";
           } break;
          case "e":{
              $aux2Prueba = $aux2Prueba."a";
          } break;
          case "i":{
              $aux2Prueba = $aux2Prueba."e";
          } break;
          case "o":{
              $aux2Prueba = $aux2Prueba."i";
          } break;
          case "u":{
              $aux2Prueba = $aux2Prueba."o";
          } break;

          default:{
              $aux2Prueba = $aux2Prueba.$aux[$i];
          }break;
      }
    
    
    
    }

    echo $aux2Prueba;
  

  ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
