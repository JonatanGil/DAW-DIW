
<html>
   
   <body>
      
       
  
                   
       <form action="7.4.php" method = "POST">
                      
                      Numero1:
                      <input type="text" name="numero1"><br><br>
                      Numero2:
                      <input type="text" name="numero2"><br><br>
      
                      Operación:<br><br>
                      <input type="radio" name="operacion" value="*">Multiplicar<br><br>
                      <input type="radio" name="operacion" value="/">Dividir<br><br>
                      <input type="radio" name="operacion" value="+">Sumar<br><br>
                      <input type="radio" name="operacion" value="-">Restar<br><br>
      
                      <input type="submit" name="boton" value="enviar">
      
       <?php
      
            # Si no hay una pulsación previa, muestra el formulario
             $numero1=0;
             $numero2=0;
             $operacion="";
            if ( !isset ( $_POST["boton"] ) )
            {
           # En caso contrario (es decir, si se ha pulsado antes el botón)...
           }
           else
           {
            foreach($_POST as $nombre => $value){
                
                 if($nombre=="boton"){
                    echo "<br><br>resultado de:".$numero1." ".$operacion." ".$numero2."=";
                    switch ($operacion) {
                        case '*':{
                            echo $numero1*$numero2;
                            
                        }break;
                        case '/':{
                            echo $numero1/$numero2;
                            
                        }break;
                        case '+':{
                            echo $numero1+$numero2;
                            
                        }break;
                        case '-':{
                            echo $numero1-$numero2;
                            
                        }break;
                        
                        default:
                            echo "0";
                            break;
                    }

                 }else{
                    if($nombre=="numero1"){$numero1=$value;}
                    if($nombre=="numero2"){$numero2=$value;}
                    if($nombre=="operacion"){$operacion=$value;}

                 }
                
               }
              
           }
      
       ?>
      
   </body>
</html>