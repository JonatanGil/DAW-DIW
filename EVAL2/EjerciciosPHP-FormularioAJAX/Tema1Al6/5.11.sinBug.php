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
           
            # Posicionar de las pelotas
            {
                $pelotaX = rand (1,$tamañoMapa-2);
                $pelotaY = rand (1,$tamañoMapa-2);
                
                $pelotaX2 = rand (1,$tamañoMapa-2);
                $pelotaY2 = rand (1,$tamañoMapa-2);

                $pelotaX3 = rand (1,$tamañoMapa-2);
                $pelotaY3 = rand (1,$tamañoMapa-2);
            } while ( $pelotaX<$tamañoMapa/2 && $pelotaY<$tamañoMapa/2&&$pelotaX<$tamañoMapa/2&&$pelotaY<$tamañoMapa/2);
            

            # Posicion de suma x y de la pelota
            $direcX = 1;
            $direcY = 1;
            $direcX2 = 1;
            $direcY2 = 1;
            $direcX3 = 1;
            $direcY3 = 1;

            

     
            if($pelotaY==0){    
                $direcX+=1;
                $direcY+=1;
            }



            # Con la línea precedente nos aseguramos de que la posición inicial de la paloma
            # y su casa disten como mínimo la mitad del mapa. La función abs() devuelve el valor
            # absoluto, esto es, la cifra sin signo.
           
            do
            {
               

                if($pelotaY==0 || $pelotaY+1==$tamañoMapa){
                    $direcY=$direcY*-1;
                    $bucle++;
                }
                if($pelotaX==0 || $pelotaX+1==$tamañoMapa){
                    $direcX=$direcX*-1;
                    $bucle++;
                }

  
                if($pelotaY2==0 || $pelotaY2+1==$tamañoMapa){
                    $direcY2=$direcY2*-1;
                    $bucle++;
                }
                if($pelotaX2==0 || $pelotaX2+1==$tamañoMapa){
                    $direcX2=$direcX2*-1;
                    $bucle++;
                }

  
                if($pelotaY3==0 || $pelotaY3+1==$tamañoMapa){
                    $direcY3=$direcY3*-1;
                    $bucle++;
                }
                if($pelotaX3==0 || $pelotaX3+1==$tamañoMapa){
                    $direcX3=$direcX3*-1;
                    $bucle++;
                }

                $pelotaX+=$direcX;
                $pelotaY+=$direcY;

                $pelotaX2+=$direcX2;
                $pelotaY2+=$direcY2;

                $pelotaX3-=$direcX3;
                $pelotaY3-=$direcY3;
                   
                #Mostrar el mapa actual
                echo '<div class="map" style="width: ' . $tamañoMapa . 'em;"><pre>';
                # Recuérdese que con la etiqueta <pre> los saltos de línea que haya se reflejan en la pantalla
               
                for ($y=0; $y<$tamañoMapa; $y++)
                {
                    for ($x=0; $x<$tamañoMapa; $x++)
                    {
                        if ($x == $pelotaX && $y == $pelotaY){
                            echo '<span class="casa">1</span>'; //Casa

                       
                        }elseif($x == $pelotaX2 && $y == $pelotaY2){

                            echo '<span class="aire">2</span>'; #Aire
                            
                    }elseif($x == $pelotaX3 && $y == $pelotaY3){

                            echo '<span class="aire">3</span>'; #Aire
                    }else{

                            echo '<span class="aire">.</span>'; #Aire
                    }
                
                

                       
                        echo ($x != $tamañoMapa -1) ? " " : ""; #siempre se añade un carácter de espacio en cada celda, salvo al final.
                    }
                   
                    echo "\n"; #Salto de línea. como se está dentro de un <pre>, se reflejará en la pantalla.
                }
               
                echo "</pre>PelotaX=$pelotaX pelotaY=$pelotaY\n";
                echo "</pre>PelotaX2=$pelotaX2 pelotaY2=$pelotaY2\n";
                echo "</pre>PelotaX3=$pelotaX3 pelotaY3=$pelotaY3\n</div>";
            } while ($bucle<20);
          
            ?>   
           
        </h1>
       
    </body>

</html>