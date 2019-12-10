
<html>
   
   <body>
      
       <?php
      
           # Si no hay una pulsación previa, muestra el formulario
          
           if ( !isset ( $_POST["boton"] ) )
           {
       ?>   
  
                   
       <form action="7.3.php" method = "POST">
                      
                      Introduzca su nombre:<br>
                      <input type="text" name="nombre"><br><br>
      
                      Contraseña:
                      <input type="password" name="password"><br><br>
      
                      Que es mejor:<br>
                      <input type="radio" name="programar" value="php">PHP<br>
                      <input type="radio" name="programar"  value="html">HTML<br>
                      <select name="OS">
                              <option value="windowsVista">Windows Vista</option> 
                              <option value="windows7">Windows 7</option> 
                              <option value="windwosXP">Windows XP</option>
                              <option value="FEDORA">Fedora</option> 
                              <option value="DEBIAN">Debian</option> 
                              <option value="SUSE">Suse</option> 
                      </select>
                      <br>
                      <br>
                      CheckBox:
                      <input type="checkbox" name="PrimerCheckBox" value="1[]">Marca o no marca<br><br>
                      <input type="checkbox" name="PrimerCheckBox" value="2[]">Marca o no marca<br><br>
      
                      Opiniones:
                      <input type="textarea" name="texto"><br>
                      <input type="submit" name="boton" value="enviar">
       </form>
      
       <?php
          
           # En caso contrario (es decir, si se ha pulsado antes el botón)...
           }
           else
           {
            foreach($_POST as $nombre => $value){
                      
                if (!isset($_GET ["nombre"]) && $nombre=="nombre"){
                    echo "<br>No a indocado:".$nombre."<br>";
                }else{
                    echo "<br>".$nombre.":".$value."<br>";
                }
               }
              
           }
      
       ?>
      
   </body>
</html>