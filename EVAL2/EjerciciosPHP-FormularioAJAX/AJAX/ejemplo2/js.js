function descargar() {
    // Obtener la instancia del objeto XMLHttpRequest
    peticion_http = new XMLHttpRequest();
    // Preparar la función de respuesta
    peticion_http.onreadystatechange = mostrar;
    // Realizar petición HTTP
    peticion_http.open('GET', 'http://localhost/holamundo.txt', true);
    peticion_http.send(null);
    function mostrar() {
    if(peticion_http.readyState == 4 && peticion_http.status == 200) {
    alert(document.getElementById("nombre").value + " " + peticion_http.responseText);
    }
    }
    }


    //AJAX
    function cargarAJAX() {
        // Obtener la instancia del objeto XMLHttpRequest
        peticion_http = new XMLHttpRequest();
        // Preparar la función de respuesta
        peticion_http.onreadystatechange = mostrar;
        // Realizar petición HTTP
        peticion_http.open('GET',
        'http://localhost/holamundo.txt?nombre=alfredo&apellido1=gutiérrez', true);
        //Datos a enviar al servidor en caso del método POST
        peticion_http.send(null);
        function mostrar() {
    try {
        if(peticion_http.readyState == 4 && peticion_http.status ==200) {
            alert(document.getElementById("nombre") + " " +
            peticion_http.responseText);
        }else{ throw "ERROR TOTAL";}
    }catch(err){ 
            console.error("ERROR: " + err);
        }
        }
    }
        

    //FETCH
    /*
    function cargarFETCH() {
        //Creamos un Request con la información de la cabecera
        //para hacer la petición
        var request = new
        Request('http://localhost/holamundo.txt?nombre=alfredo&apellido1=gutiérrez', {
        method: 'GET'
        });
        //Invocamos fetch y adjuntamos el Request creado
        anteriormente
        fetch(request)
        .then(function(response) {
        if (response.status == 200) {
            return response.text();
        }else {throw "ERROR TOTAL";}
        })
        .then(function(data)
            alert(document.getElementById("nombre") +" "+ data;)
        .catch(function(err) console.error("ERROR: " + err););
        }
        }
        */
