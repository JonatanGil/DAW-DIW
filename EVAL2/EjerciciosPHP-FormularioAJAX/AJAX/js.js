


//FETCH

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
        .then(function (response) {
            if (response.status == 200) {
                return response.text();
            } else { throw "ERROR TOTAL"; }
        })
        .then(function (data)
            alert(document.getElementById("nombre") + " " + data;)
        .catch (function(err) console.error("ERROR: " + err););
}
        

