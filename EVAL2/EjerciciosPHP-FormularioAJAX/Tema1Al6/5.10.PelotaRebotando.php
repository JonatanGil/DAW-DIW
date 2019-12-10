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
            $cont=-1;
           
            # Posicionar de la pelota
           

            $pelotaX = 2;
            $pelotaY = 5;
            # Posicion de suma x y de la pelota
            $direcX = 1;
            $direcY = 1;

            $bucle=0;


            /*
            do
            {
                // modifico la casa para que sea el centro, para q vayan para ya.
                $pelotaX = rand (0,$tamañoMapa-1);
                $pelotaY = rand (0,$tamañoMapa-1);
                

                $palomaX = rand (0,$tamañoMapa-1);
                $palomaY = rand (0,$tamañoMapa-1);
                $paloma2X = rand (0,$tamañoMapa-1);
                $paloma2Y = rand (0,$tamañoMapa-1);
            } while ((abs($pelotaX-$palomaX)<$tamañoMapa/2)&&(abs($pelotaY-$palomaY)<$tamañoMapa/2)&&(abs($pelotaX-$paloma2X)<$tamañoMapa/2)&&(abs($pelotaY-$paloma2Y)<$tamañoMapa/2));
            */


            # Con la línea precedente nos aseguramos de que la posición inicial de la paloma
            # y su casa disten como mínimo la mitad del mapa. La función abs() devuelve el valor
            # absoluto, esto es, la cifra sin signo.
           
            do
            {

                $rebote=3;
                //  0 0
               
                if($pelotaY==0 || $pelotaY+1==$tamañoMapa){
                    $direcY=$direcY*-1;
                    $bucle++;
                }
                if($pelotaX==0 || $pelotaX+1==$tamañoMapa){
                    $direcX=$direcX*-1;
                    $bucle++;
                }


                $pelotaX+=$direcX;
                $pelotaY+=$direcY;
                
                   
                #Mostrar el mapa actual
                echo '<div class="map" style="width: ' . $tamañoMapa . 'em;"><pre>';
                # Recuérdese que con la etiqueta <pre> los saltos de línea que haya se reflejan en la pantalla
               
                for ($y=0; $y<$tamañoMapa; $y++)
                {
                    for ($x=0; $x<$tamañoMapa; $x++)
                    {
                        if ($x == $pelotaX && $y == $pelotaY){
                            echo '<span class="casa">*</span>'; //Casa

                       
                        }else{
                            echo '<span class="aire">.</span>'; #Aire
                        
                    }
                

                       
                        echo ($x != $tamañoMapa -1) ? " " : ""; #siempre se añade un carácter de espacio en cada celda, salvo al final.
                    }
                   
                    echo "\n"; #Salto de línea. como se está dentro de un <pre>, se reflejará en la pantalla.
                }
               
                echo "</pre>PelotaX=$pelotaX pelotaY=$pelotaY\n</div>";
            } while ($bucle<6);
          
            ?>   
           
        </h1>
       
    </body>

</html>