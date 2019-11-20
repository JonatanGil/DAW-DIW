/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

/*

FUNCIONES PERDIDAS
^(;,;)^

*/
function startMigration(){

    // Fragmentos perdidos
    // ^(;,;)^
    //var pasos = document.querySelectorAll("data-step");
    //obtener los elementos de toda la pagina y obtener elementos con x atributo


    var etapas = ObtenerEtapas();
    //etapas.forEach(boton => {boton.addEventListener('transitionend', iniciarTransiciones(etapas,0))});
    //setInterval(function(){ etapas[a].classList.toggle("estabaEscondido"); }, etapas[a].getAttribute("data-step"));

    etapas[0].addEventListener('transitionend', iniciarTransiciones(etapas,etapas[0].getAttribute("data-step")-1));
    etapas[0].classList.toggle("estabaEscondido");
    

}


function iniciarTransiciones(etapas,numero){

    if(numero<5){
        numero++;
        console.log(numero);
        etapas[numero].addEventListener('transitionend', iniciarTransiciones(etapas,numero));
        
        etapas[numero].classList.toggle("estabaEscondido");
        console.log("ok");
    }

}
















function ObtenerEtapas(){
    //inicamos el array de todos los elementos
    var elementos = document.getElementsByTagName("*");
    var elementosConElAtributo = [];
    //el contador para sumar dentro del for la posicion 0 del array a devolver
    contador=0;

    for (var i = 0; i < elementos.length; i++) {
        if(elementos[i].getAttribute("data-step") != null){  
            //obtenemos el atributo q tiene el step
            elementosConElAtributo[contador]=elementos[i];
            contador++;
        }
    }
    return elementosConElAtributo;
    
}

function init(){


    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);
    




}

// Init the environment when all is ready
window.onload=init;
