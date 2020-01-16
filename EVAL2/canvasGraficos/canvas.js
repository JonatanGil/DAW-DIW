function buildGrafico(){

    const canvas = document.querySelector("canvas");

    // contexto -> ctx
    let ctx = canvas.getContext("2d");


    var datos = document.querySelectorAll("input");



for (let index = 1; index < array.length; index++) {

    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();


    
}

    console.log(datos);


}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
}


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;