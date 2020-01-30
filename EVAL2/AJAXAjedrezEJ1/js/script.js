window.onload = init;

function init() {


    var boton = document.getElementById("buscar");
    //boton.addEventListener("click", obtenerJSON);

    boton.addEventListener("click", obtenerJSONFech);



}

function obtenerJSONFech() {

    var data = {nombre: "Angel"};

    fetch("http://192.168.4.92/rest-get.php?nombre=Angel", {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        }
    }).then(resjson => {
        console.log(resjson);

       document.getElementById("datos").innerHTML = "Nombre:" + resjson.nombre + "  Edad:" + resjson.edad;

    }).catch(function (err) {
    });

}




//htmlrequest
function obtenerJSON() {


    var nick = document.getElementById("nombre");

    console.log(nick) + "adsa";

    var requestURL = "https://api.chess.com/pub/player/" + nick.value + "/games/";

    console.log(requestURL);

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {

        var gotjson = request;
        imprimirJuegos(gotjson.response.games);



    }
}

function imprimirJuegos(jsonGAMES) {


    var pagina = document.getElementById("datos");
    var checked = document.getElementById("ranked");

    if (checked.checked) {
        const juegosRANKEDS = jsonGAMES.filter(juego => juego.rated == true);
        jsonGAMES = juegosRANKEDS;
    }


    jsonGAMES.forEach(juego => {

        var padre = document.createElement("div");

        if (juego.black.split("/")[5] == "aberlanas") {
            var enemigo = juego.white.split("/")[5];
        } else {
            var enemigo = juego.black.split("/")[5];
        }

        var html = "<div>" +
            "<h1>" + juego.url + "</h1>" +
            "<h4>EL ENEMIGO: " + enemigo + "</h4>" +
            "<p>" + juego.pgn + "</p>" +
            "<p>Negras:" + juego.black + "</p>" +
            "<p>Blancas" + juego.white + "</p>" +
            "</div><br>";

        padre.innerHTML = html;
        pagina.appendChild(padre);

    });



}




/*
//FECH

function obtenerJSONFech(){


    var nick = document.getElementById("nombre");

    console.log(nick) + "adsa";

    var requestURL = "https://api.chess.com/pub/player/" + nick.value + "/games/";

        fetch(requestURL)
            .then(function (res) {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
            }).then(resjson => {
                imprimirJuegos(resjson.games);
            }).catch(function (err) {
            });


}
*/


//POSTTT pasamos los datos son  JSON.stringify(data) donde data son los campos 
//"http://192.168.4.92/rest-get.php?nombre=Angel"
/*
function obtenerJSONFech() {

    var data = {nombre: "Angel"};


    fetch("http://192.168.4.92/rest-post.php", {
        method: 'POST', // or 'PUT' , 'GET'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        }
    }).then(resjson => {
        console.log(resjson);

       document.getElementById("datos").innerHTML = "Nombre:" + resjson.nombre + "  Edad:" + resjson.edad;

    }).catch(function (err) {
    });

}

*/



//

/*
function obtenerJSONFech() {

    var data = {nombre: "Angel"};

    fetch("http://192.168.4.92/rest-get.php?nombre=Angel", {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        }
    }).then(resjson => {
        console.log(resjson);

       document.getElementById("datos").innerHTML = "Nombre:" + resjson.nombre + "  Edad:" + resjson.edad;

    }).catch(function (err) {
    });

}
*/