/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

/*

FUNCIONES PERDIDAS
^(;,;)^

*/
async function startMigration(){

    // Fragmentos perdidos
    // ^(;,;)^
    //var pasos = document.querySelectorAll("data-step");
   
    //obtener los elementos de toda la pagina y obtener elementos con x atributo
    var etapas = ObtenerEtapas();
    //etapas.forEach(boton => {boton.addEventListener('transitionend', iniciarTransiciones(etapas,0))});
    //setInterval(function(){ etapas[a].classList.toggle("estabaEscondido"); }, etapas[a].getAttribute("data-step"));





    console.log(etapas);

    await new Promise(resolve => {
        resFunc = resolve;
        etapas[0].addEventListener('transitionend',resFunc);
        etapas[0].classList.add("estabaEscondido");  
        /*resFunc = resolve;
        myEle.addEventListener("transitionend", resFunc);
        myEle.classList.add("animate");*/
    });




   /*
    //its works
    for (let numero = 1; numero < 18; numero++) {
        
        await new Promise(resolve => {
            etapas[numero].addEventListener('transitionend',resolve);
            etapas[numero].classList.add("estabaEscondido");  
        });
        
    }*/



    
    iniciarTransiciones(etapas);

}

var numero=0;
 async function iniciarTransiciones(etapas){

    if(numero<17){

        numero++;

        await new Promise(resolve => {

            if(numero==1 | numero ==4 | numero==7 | numero==10 | numero==13 | numero==16){
                
                etapas[numero].addEventListener('animationend', resolve);
                etapas[numero].classList.add("estabaEscondido");  
                etapas[numero].classList.toggle("progressBarra");
                if(numero==1 | numero==7 | numero==10 | numero==16){
                    etapas[numero].classList.add("barragorda");
                }
                if(numero==13){
                    //barra mas gorda cambiando la propiedad con elstyle q pereza
                    etapas[numero].style.height="45px";
                }
            }else{
                etapas[numero].addEventListener('transitionend', resolve);
                etapas[numero].classList.add("estabaEscondido");  
            }
        });
        //bucle infinito jajaa
        iniciarTransiciones(etapas,numero);
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
