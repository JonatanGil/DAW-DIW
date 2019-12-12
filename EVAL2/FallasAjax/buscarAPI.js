window.onload = init;

const fallasUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

function init() {

  document.getElementById("buscador").addEventListener("click", buscador);

  document.getElementById("tipoFallasPrincipales").addEventListener("click", tipoFalla);
  document.getElementById("tipoFallasInfantiles").addEventListener("click", tipoFalla);

  fetch(fallasUrl)
    .then(function (response) { return response.json(); })
    .then(function (myJson) { imprimirFallas(myJson["features"]); });

}

function imprimirFallas(myJson) {

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
    ubicacionBoton.innerHTML = "UBICACION";
    contenidoInsertar.appendChild(imagen);
    contenidoInsertar.appendChild(nombre);

    contenidoInsertar.appendChild(ubicacionBoton);
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
    console.log("busca2");
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
    document.getElementById("contenedorFallas").innerHTML = "";
    imprimirFallas(enviar);

  });

}


function tipoFalla() {


  fallasAbuscar = this.value;
  var enviar = new Array;

  fetch(fallasUrl)
    .then(function (response) { return response.json(); })
    .then(function (myJson) { 
      console.log(fallasAbuscar);
      if(fallasAbuscar=="principales"){
        imprimirFallas(myJson.features);
      }else{
        myJson.forEach( falla => { enviar.push(falla.properties.boceto=falla.properties.boceto_i)  });
        

        imprimirFallas(myJson.features);
      }


    });






}