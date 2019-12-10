<html>
<head></head>
<body>

  <p>Before the script...</p>

  <?php
            echo "Encantado de conocerte, ";
            echo htmlspecialchars($_POST["nombre"])."<br>";

            echo "Contraseña, ";
            echo htmlspecialchars($_POST["enviar"])."<br>";

            echo "Lenguaje de programación, ";
            echo htmlspecialchars($_POST["programar"])."<br>";

            echo "Sistema operativo, ";
            echo htmlspecialchars($_POST["OS"])."<br>";

            echo "CheckBox, ";
            echo htmlspecialchars($_POST["PrimerCheckBox"])."<br>";

            echo "Opiniones, ";
            echo htmlspecialchars($_POST["texto"])."<br>";

    foreach($_POST as $key => $value){
        echo "<br>".$value."<br>";
    }

        ?>

<br><br>
  <p>...After the script.</p>

</body>

</html>
