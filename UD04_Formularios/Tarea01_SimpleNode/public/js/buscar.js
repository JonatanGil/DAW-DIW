// Simple script to use with datosAbiertos

// Author : Angel Berlanas Vicente
//         <berlanas_ang@gva.es>
// This script is licensed under GPLv3 or higher


// Algunos valores


// http://mapas.valencia.es/lanzadera/opendata/cia_fuentes/JSON
const plantasUrl = "http://mapas.valencia.es/lanzadera/opendata/arboles/JSON";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

function filtroLetra(elemento){	

    //let letra=document.querySelector(`input[name="calle"]`).value;
    let letra=document.querySelector(`input[name="planta"]`).value;
	//return elemento.properties.calle.startsWith(letra);
	//PRIMERA MAYUSCULAS las demas en minuscula para buscar las plantas
	letra = letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();

	return elemento.properties.planta.startsWith(letra);
	
}


// Pasa a mayuscula el texto de propio input
// se lanza cada vez que se realiza una insercion en
// el texto del nombre.
function toUpp(){
    //document.querySelector(`input[name="calle"]`).value=document.querySelector(`input[name="calle"]`).value.toUpperCase();
    document.querySelector(`input[name="planta"]`).value=document.querySelector(`input[name="planta"]`).value.toUpperCase();
}


function buscar(){

    // Obtenemos el JSON que esta definido
	const fetchPromesa = fetch(plantasUrl);
	console.log("busca");

    // Cuando se resuelva la promesa
    fetchPromesa.then(response => {
	// la pasamos a JSON
	console.log("busca2");
	return response.json();
	// Y entonces
    }).then(respuesta =>{
	// Filtramos los resultados con el filtro definido anteriormente
	console.log(respuesta.features[1].properties);
	const resultado=respuesta.features.filter(filtroLetra);

	// Una vez tenemos el listado filtrado pasamos a crear
	// cada uno de los <li> que representan
	let listado=document.createElement("ul");

	// Por cada uno de ellos 
	resultado.forEach(planta=>{
	    // Creamos un <li>
	    let plantaLI=document.createElement("li");
	    plantaLI.innerHTML=planta.properties.planta+" -- ["+planta.geometry.coordinates+"]";
	    // Lo anyadimos
	    listado.appendChild(plantaLI);	    
	});

	/*// Por cada uno de ellos 
	resultado.forEach(fuente=>{
	    // Creamos un <li>
	    let calleli=document.createElement("li");
	    calleli.innerHTML=fuente.properties.calle+" -- ["+fuente.geometry.coordinates+"]";
	    // Lo anyadimos
	    listado.appendChild(calleli);	    
	});*/

	// Establecemos el listado en la Web
	document.querySelector(".resultados").innerHTML="";
	document.querySelector(".resultados").appendChild(listado);
    });
}

function init() {

    // Binding de los eventos correspondientes.

    // Click en el boton de buscar
    document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
    // Texto cambia en el <input>
    document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);
}

// The mother of the lamb.
window.onload=init;
    
