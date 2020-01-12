window.onload = init;



const fallasUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
var secciones = ['TODAS'];
var seccionDirecto="TODAS";
var principal=true;
var ipHost;

function init() {

  mostrarSecciones();

  document.getElementById("buscador").addEventListener("click", buscador);
  document.getElementById("FundacionDesde").addEventListener("click", fundacionDesde);
  document.getElementById("FundacionHasta").addEventListener("click", fundacionHasta);
  document.getElementById("tipoFallasPrincipales").addEventListener("click", tipoFalla);
  document.getElementById("tipoFallasInfantiles").addEventListener("click", tipoFalla);
  document.getElementById("sectores").addEventListener("blur", MostrarFallaPorSeccion);

  fetch(fallasUrl)
    .then(function (response) { return response.json(); })
    .then(function (myJson) { imprimirFallas(myJson["features"]); });

  getIPAddress();

}
//Función que obtiene la ip pública del cliente
function getIPAddress() {
  $.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    ipHost = data.ip;
    console.log(ipHost);
  });
};


//Ubicación, se requiera de coordenadas, nombre y div contenedor del mapa
function crearMapa() {
  eliminarMapa();
  var ubicaciones = this.value.split(",");
  
  let nombre = this.getAttribute("nombreFalla");
  let longitud = parseFloat(ubicaciones[0]);
  let latitud = parseFloat(ubicaciones[1]);

  
  console.log(ubicaciones);

  let contenedorMapa = document.createElement('div');
  let boton = document.createElement('button');
  let divMapa = document.createElement('div');

  contenedorMapa.id = 'divMapa';
  boton.id = 'cerrarMapa';
  boton.innerText = 'X';
  divMapa.id = 'map';
  boton.addEventListener('click', eliminarMapa);
  contenedorMapa.appendChild(boton);
  contenedorMapa.appendChild(divMapa);


  document.getElementById('mapaContenedor').appendChild(contenedorMapa);

  let firstProjection = '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs';

  let secondProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

  let iarCoordinate = [longitud, latitud];

  coordenadas = proj4(firstProjection, secondProjection, iarCoordinate);

  let mapa = L.map('map').setView([coordenadas[1], coordenadas[0]], 17);

  let tilerMapUrl = 'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=FeZF25xvZUuP463NS59g';

  L.tileLayer(tilerMapUrl, {
    attribution: 'MAGIA',
  }).addTo(mapa);

  L.marker(coordenadas).addTo(mapa);

  var punto = new L.Marker([coordenadas[1], coordenadas[0]]);

  punto.addTo(mapa);

  punto.bindPopup(nombre).openPopup();

}

function eliminarMapa() {

  let div = document.getElementById('divMapa');

  if (div !== null) {

    div.parentNode.removeChild(div);

  }
}



function fundacionHasta(){

  var anyo=this.value;

  fetch(fallasUrl)
  .then(function (response) { return response.json(); })
  .then(function (myJson) {
    
    var enviar = new Array;
    if(seccionDirecto=="TODAS"){

      if(principal){
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion<=anyo){
            enviar.push(falla);
          }

        });
      }else{
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion<=anyo){
            falla.properties.boceto = falla.properties.boceto_i;
            enviar.push(falla);
          }

        });

      }

      imprimirFallas(enviar);
    }else{

      if(principal){
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion<=anyo){
            if(falla.properties.seccion==seccionDirecto){
              enviar.push(falla);
            }
          }

        });
      }else{
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion<=anyo){
            if(falla.properties.seccion==seccionDirecto){
              enviar.push(falla);
            }
            
          }

        });
      }

    }

    imprimirFallas(enviar);
    
 });





}

function fundacionDesde(){

  var anyo=this.value;

  fetch(fallasUrl)
  .then(function (response) { return response.json(); })
  .then(function (myJson) {
    
    var enviar = new Array;
    if(seccionDirecto=="TODAS"){

      if(principal){
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion>=anyo){
            enviar.push(falla);
          }

        });
      }else{
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion>=anyo){
            falla.properties.boceto = falla.properties.boceto_i;
            enviar.push(falla);
          }

        });

      }

      imprimirFallas(enviar);
    }else{

      if(principal){
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion>=anyo){
            if(falla.properties.seccion==seccionDirecto){
              enviar.push(falla);
            }
          }

        });
      }else{
        myJson.features.forEach(falla => {
          
          if(falla.properties.anyo_fundacion>=anyo){
            if(falla.properties.seccion==seccionDirecto){
              enviar.push(falla);
            }
            
          }

        });
      }



    }

    imprimirFallas(enviar);
    
 });






}


function MostrarFallaPorSeccion(){

  //para mostrar las infantiles y principales guardamos la seccion
  seccionDirecto=this.value;
  var seccionAbuscar=this.value;
  fetch(fallasUrl)
  .then(function (response) { return response.json(); })
  .then(function (myJson) {

    if(seccionAbuscar!="TODAS"){

      // Filtramos los resultados con el filtro definido anteriormente
      var enviar = new Array;

      myJson.features.forEach(falla => {
        if(falla.properties.seccion==seccionAbuscar){
          if(!principal){
            falla.properties.boceto = falla.properties.boceto_i;
          }
          enviar.push(falla);
        }
      });
  
      // Establecemos el listado en la Web
      imprimirFallas(enviar);

    }else{
      // Establecemos el listado en la Web
      imprimirFallas( myJson["features"]);
    }

  });


}


function mostrarSecciones() {


  fetch(fallasUrl).then(response => { return response.json(); }).then(respuesta => {
    //recorremos las fallas y insertamos en el arrray todas las ssecciones
    respuesta.features.forEach(falla => {seccionesObtener(falla)});
    //metemos todas las secciones para ver y selecionar.
    secciones.sort();
    secciones.forEach(MostrarOpcionSeccion);
  });


}

function MostrarOpcionSeccion(nombreSeccion) {

  var lista = document.getElementById("sectores");
  var elemento = document.createElement("option");
  elemento.value = nombreSeccion;
  elemento.text = nombreSeccion;
  lista.appendChild(elemento);

}

function seccionesObtener(falla) {


  if (!secciones.includes(falla.properties.seccion)) {

    secciones.push(falla.properties.seccion);

  }

}

function imprimirFallas(myJson) {
  document.getElementById("contenedorFallas").innerHTML = "";
  contenedor = document.getElementById("contenedorFallas");
  
  console.log(myJson);
  for (let i = 0; i < myJson.length; i++) {

    var contenidoInsertar = document.createElement("content");
    /* var figura = document.createElement("figure");*/
    var imagen = document.createElement("img");
    /* var figurecaption = document.createElement("figcaption"); */
    var nombre = document.createElement("h1");
    var ubicacionBoton = document.createElement("button");
    /* figurecaption.innerHTML=myJson["features"][i]["properties"]["nombre"];
    figura.appendChild(imagen);
    figura.appendChild(figurecaption);*/

    imagen.src = myJson[i].properties.boceto;
    nombre.innerHTML = myJson[i].properties.nombre;
    ubicacionBoton.value = myJson[i].geometry.coordinates;
    ubicacionBoton.innerHTML = "UBICACIÓN";
    ubicacionBoton.setAttribute("nombreFalla",myJson[i].properties.nombre);
    ubicacionBoton.addEventListener('click',crearMapa);
    contenidoInsertar.appendChild(imagen);
    contenidoInsertar.appendChild(nombre);
    contenidoInsertar.appendChild(ubicacionBoton);

    //crear estrellas
    var estrellas = document.createElement("form");
    estrellas.method="POST";
    estrellas.action="action='puntuaciones/'";
    estrellas.classList.add("valoracion");

    for (let l = 5; l >= 1; l--) {
      var estrella = document.createElement("div");
      estrella.setAttribute('puntuacion',l);
      estrella.setAttribute('idFalla',myJson[i].properties.id);
      estrella.setAttribute('nombreFalla',myJson[i].properties.nombre);
      estrella.addEventListener("click", InsertarPuntuación);
      estrellas.appendChild(estrella); 
    }

    contenidoInsertar.appendChild(estrellas); 

    contenedor.appendChild(contenidoInsertar);


         
  }

}


function InsertarPuntuación(div){
/*
  console.log("se conecta a mongo jajaa");
  console.log(div.target);
  console.log(div.target.getAttribute("idfalla"));
  console.log(ipHost);
  console.log(div.target.getAttribute("puntuacion"));*/

  let datos = JSON.stringify({
    'idFalla':div.target.getAttribute("idfalla"),
    'ip': ipHost,
    'puntuacion': div.target.getAttribute("puntuacion")
  });

  console.log(datos);

  //  Realizar petición HTTP
  InsertarPuntuacionConfirmar(datos);

}



//Comprueba que la ip no ha votado a la falla actual
function InsertarPuntuacionConfirmar(datos) {

  let query = 'http://localhost:3000/api/puntuaciones/encontrar';
  let xhr = new XMLHttpRequest();

  xhr.open("POST", query, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

      if (xhr.responseText == "") {

        //No existe por lo que se procede a crear la puntuacion
        Promise.resolve(añadirPuntuacion(datos)).then(function (value) {
          obtenerPuntuaciones();
        }, function (value) {
          // no es llamada  
        });
      }else{
        console.log("fallo2");
      }
    }else{
      console.log("fallo1");
    }
  };

  xhr.send(datos);

}

//Añade a la base de datos la votación
function añadirPuntuacion(datos) {

  let query = 'http://localhost:3000/api/puntuaciones'

  let xhr = new XMLHttpRequest();

  xhr.open("POST", query, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 200) {
      //Añadido
    }
  };

  xhr.send(datos);
}



function buscador() {


  /*"features": [
    { "type": "Feature", "properties":},*/

  // Obtenemos el JSON que esta definido
  const fetchPromesa = fetch(fallasUrl);
  // Cuando se resuelva la promesa
  fetchPromesa.then(response => {
    // la pasamos a JSON
    return response.json();
    // Y entonces
  }).then(respuesta => {
    // Filtramos los resultados con el filtro definido anteriormente

    var enviar = new Array;

    for (let b = 0; b < respuesta["features"].length; b++) {
      //compara nomrbe de la falla con el texto en tolowercase los 2
      //console.log(respuesta.features[b].properties.nombre+"/-/"+document.getElementById("textoAbuscar").value);
      if (respuesta.features[b]["properties"]["nombre"].toLowerCase().indexOf(document.getElementById("textoAbuscar").value.toLowerCase()) != -1) {
        enviar.push(respuesta.features[b]);
      }

    }


    // Establecemos el listado en la Web
    imprimirFallas(enviar);

  });

}


function tipoFalla() {

  fallasAbuscar = this.value;
  var enviar = new Array;

  fetch(fallasUrl)
    .then(function (response) { return response.json(); })
    .then(function (myJson) {
      //imprimir principales sin mas

      if (fallasAbuscar == "principales") {
        //si son todas imprimo todas
        if(seccionDirecto=="TODAS"){
          imprimirFallas(myJson.features);
        }else{
          //busco seccion si es la que e pulsado la ultima y la añado a enviar para impimir despues
          myJson.features.forEach(falla => {
            if(falla.properties.seccion==seccionDirecto){
              enviar.push(falla);
            }
          });
          imprimirFallas(enviar);
        }


      } else {
        //cambiar boceto principal por infaltin y imprimir normalmente
        principal=false;

        if(seccionDirecto=="TODAS"){
          myJson.features.forEach(falla => {
            falla.properties.boceto = falla.properties.boceto_i;
            enviar.push(falla);
          });
        }else{
          //busco seccion si es la que e pulsado la ultima y la añado a enviar para impimir despues
          //cambio imagen a infantil
          myJson.features.forEach(falla => {
            if(falla.properties.seccion==seccionDirecto){
              falla.properties.boceto = falla.properties.boceto_i;
              enviar.push(falla);
            }
          });
        }
       
        imprimirFallas(enviar);
      }


    });

}
