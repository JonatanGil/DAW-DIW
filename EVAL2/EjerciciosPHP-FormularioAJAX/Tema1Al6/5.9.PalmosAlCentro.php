<html>
    <head>
        <title>
            Simulador de paloma mensajera
        </title>
        <link rel="stylesheet" type="text/css" href="common.css" />
        <style type="text/css">
            div.map {
                float:left;
                text-align: center;
                border: 1px solid #666;
                background-color: #fcfcfc;
                margin: 5px;
                padding: 1em;
            }
            span.casa, span.paloma {
                font-weight: bold;
                color: red;
            }
            span.aire {
                color: blue;
            }
               
        </style>
    </head>
    <body>
       
        <h1>
            <?php

            $tamañoMapa=10;
           
            # Posicionar la paloma
           

            $casaX = $tamañoMapa-$tamañoMapa/2;
            $casaY = $tamañoMapa-$tamañoMapa/2;
            $bucle=0;

            do
            {
                /* modifico la casa para que sea el centro, para q vayan para ya.
                $casaX = rand (0,$tamañoMapa-1);
                $casaY = rand (0,$tamañoMapa-1);
                */
                $palomaX = rand (0,$tamañoMapa-1);
                $palomaY = rand (0,$tamañoMapa-1);
                $paloma2X = rand (0,$tamañoMapa-1);
                $paloma2Y = rand (0,$tamañoMapa-1);
            } while (false);
            
            # Con la línea precedente nos aseguramos de que la posición inicial de la paloma
            # y su casa disten como mínimo la mitad del mapa. La función abs() devuelve el valor
            # absoluto, esto es, la cifra sin signo.
           
            do
            {
                $bucle++;
                #Acercar la paloma 1 a su casa
                if ($palomaX<$paloma2X){
                    $palomaX++;}else{$palomaX--;}
               
                if ($paloma2X<$palomaX){
                    $paloma2X++;}else{$paloma2X--;}
               
                if($palomaY!=$paloma2Y){
                    if ($palomaY<$paloma2Y){
                        if($palomaY+1==$paloma2Y){
                        $palomaY++;
                    }else{
                        $paloma2Y++;
                    }
                    }else{
                        if($paloma2Y+1==$palomaY){
                            $paloma2Y++;
                        }else{
                            $paloma2Y++;
                            $palomaY++;
                        }
                    }
        
                }

             
                   
                #Mostrar el mapa actual
                echo '<div class="map" style="width: ' . $tamañoMapa . 'em;"><pre>';
                # Recuérdese que con la etiqueta <pre> los saltos de línea que haya se reflejan en la pantalla
               
                for ($y=0; $y<$tamañoMapa; $y++)
                {
                    for ($x=0; $x<$tamañoMapa; $x++)
                    {
                        if ($x == $casaX && $y == $casaY){
                            echo '<span class="aire">.</span>'; //Casa

                        }elseif($paloma2Y==$palomaY && $paloma2X==$palomaX && $x == $paloma2X && $y == $paloma2Y){

                            echo '<span class="paloma">*</span>'; #Paloma
                            }elseif ($x == $palomaX && $y == $palomaY)  {

                            echo '<span class="paloma">1</span>'; #Paloma solapada, las dos en el mismo hueco

                        } else {

                        if($x == $paloma2X && $y == $paloma2Y){

                            echo '<span class="paloma">2</span>'; #Paloma
                        }else{
                            echo '<span class="aire">.</span>'; #Aire
                        }
                    }
                

                       
                        echo ($x != $tamañoMapa -1) ? " " : ""; #siempre se añade un carácter de espacio en cada celda, salvo al final.
                    }
                   
                    echo "\n"; #Salto de línea. como se está dentro de un <pre>, se reflejará en la pantalla.
                }
                echo "</pre>palomax=$palomaX palomaY=$palomaY\n";
                echo "</pre>paloma2x=$paloma2X paloma2Y=$paloma2Y</div>\n";

            } while ($paloma2X!=$palomaX && $palomaY != $paloma2Y);
          
            ?>   
           
        </h1>
       
    </body>

</html>