window.onload = init;



const fallasUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
var secciones = ['TODAS'];
var seccionDirecto="TODAS";
var principal=true;

function init() {

  mostrarSecciones();

  document.getElementById("buscador").addEventListener("click", buscador);
  document.getElementById("FundacionDesde").addEventListener("click", fundacionDesde);
  document.getElementById("FundacionHasta").addEventListener("click", fundacionHasta);
  document.getElementById("tipoFallasPrincipales").addEventListener("click", tipoFalla);
  document.getElementById("tipoFallasInfantiles").addEventListener("click", tipoFalla);
  document.getElementById("sectores").addEventListener("click", MostrarFallaPorSeccion);

  fetch(fallasUrl)
    .then(function (response) { return response.json(); })
    .then(function (myJson) { imprimirFallas(myJson["features"]); });

    //initMap();

  /*var grid = document.querySelector('fallas');
  waterfall(grid);
  console.log(grid);*/

}

var map, markerA, markerB;
function initMap() {
  // 1. Initialize map
  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {
          lat: 6.066385702972249,
          lng: -74.07493328924413
      }
  });

  // 2. Put first marker in Bucaramanga
  markerA = new google.maps.Marker({
      position: {
          lat: 7.099473939079819, 
          lng: -73.10677064354888
      },
      map: map,
      icon: {
          url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'
      },
      title: "Marker A"
  });
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
    contenidoInsertar.appendChild(imagen);
    contenidoInsertar.appendChild(nombre);
    contenidoInsertar.appendChild(ubicacionBoton);

    //crear estrellas
    var estrellas = document.createElement("estrellas");
    estrellas.classList.add("valoracion");
    for (let i = 1; i <= 5; i++) {
      var estrella = document.createElement("button");
      estrella.value=i;
      estrellas.appendChild(estrella);
    }
    contenidoInsertar.appendChild(estrellas);



    contenedor.appendChild(contenidoInsertar);



  }

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
