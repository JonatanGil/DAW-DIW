
window.onload=init();


function init(){

    fetch('http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON')
  .then(function(response) {return response.json();})
  .then(function(myJson) {
    console.log("hola");


    /*
    var para = document.createElement("div");                       // Create a <p> node
    var t = document.createTextNode("This is a paragraph.");      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("main").appendChild(para);           // Append <p> to <div> with id="myDIV" */

    contenedor = document.getElementById("contenedorFallas");

    for (let i = 0; i < 20; i++) {

        var contenidoInsertar = document.createElement("content");
       /* var figura = document.createElement("figure");*/
        var imagen = document.createElement("img");
       /* var figurecaption = document.createElement("figcaption"); */
        var nombre = document.createElement("h1");
        var ubicacionBoton = document.createElement("button");
        /* figurecaption.innerHTML=myJson["features"][i]["properties"]["nombre"];
        figura.appendChild(imagen);
        figura.appendChild(figurecaption);*/ 

        imagen.src=myJson["features"][i]["properties"]["boceto"];
        nombre.innerHTML=myJson["features"][i]["properties"]["nombre"];
        ubicacionBoton.innerHTML="UBICACION";
        contenidoInsertar.appendChild(imagen);
        contenidoInsertar.appendChild(nombre);

        contenidoInsertar.appendChild(ubicacionBoton);
        contenedor.appendChild(contenidoInsertar);


    }
    
    
    
    
    
    
    
    
    
    });

    

}