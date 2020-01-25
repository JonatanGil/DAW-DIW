function rayasImprimir(datos,ctx,tamanoCanvasHeigth,tamanoCanvasWidth){

}

function tartaImprimir(datos,ctx,tamanoCanvasHeigth,tamanoCanvasWidth){

    console.log("Quesitos");

    let empezar = -0.5*Math.PI;
    var total = 0;
    
    ctx.font="10pt Verdana";
    ctx.textBaseline = "middle"; 

    for (let b = 1; b < datos.length; b++) {
        if(b%2==0){
            total +=parseInt(datos[b].value);
        }
    }

    //imprimimos
    for (let a = 1; a < datos.length; a++) {

        if(a%2==0){
            //imprime tarta
            let acabar= ((2*Math.PI*datos[a].value)/total)+empezar;

            ctx.beginPath();

            ctx.fillStyle=datos[a].src;

            console.log(datos[a].name);
            if(datos[a].name=="value_1"){
                ctx.fillStyle="black";
                }else{
                if(datos[a].name=="value_2"){
                    ctx.fillStyle="red";
                        }else{
                    if(datos[a].name=="value_3"){
                        ctx.fillStyle="green";
                        }else{
                        ctx.fillStyle="yellow";
                    }
                }
            }
            
            
            ctx.arc(tamanoCanvasWidth/2, tamanoCanvasHeigth/2, tamanoCanvasWidth/4,empezar,acabar);

            ctx.lineTo(tamanoCanvasWidth/2,tamanoCanvasHeigth/2);

            ctx.fill();

            empezar = acabar;
        }else{
            //imprime nombre

        }

    }

}

function barrasImprimir(datos,ctx,tamanoCanvasHeigth,tamanoCanvasWidth){

    var inicioDibujo=0  ;
    var total = 0;
    var longitud = 0;

    for (let b = 1; b < datos.length; b++) {
        if(b%2==0){
            total +=parseInt(datos[b].value);
        }
    }


    for (let a = 1; a < datos.length; a++) {

        if(a%2==0){
            longitud = datos[a].value;
            longitud = (longitud*100)/total;
            longitud = (300*longitud)/100;
            
            ctx.beginPath(); 
            ctx.rect(inicioDibujo, tamanoCanvasHeigth-20, 40, -longitud);
            ctx.stroke();

            ctx.fillStyle="red"; 
            ctx.fill();
            inicioDibujo+=50;

        }else{
            
            var nombre = datos[a].value;
    		ctx.font="10pt Verdana";
		    ctx.strokeStyle="black";
		    ctx.lineWidth = 2;
            ctx.strokeText(nombre,inicioDibujo+5,tamanoCanvasHeigth-5);
        }

    }


}

function buildGrafico(){

    var datos = document.querySelectorAll("input");


    const canvas = document.querySelector("canvas")
    let ctx = canvas.getContext("2d");

    var tamanoCanvasHeigth = canvas.height;
    var tamanoCanvasWidth = canvas.width

    ctx.clearRect(0,0,tamanoCanvasWidth, tamanoCanvasHeigth);

    if(barrasGrafico)barrasImprimir(datos,ctx, tamanoCanvasHeigth ,tamanoCanvasWidth);
    if(rayasGrafico)rayasImprimir(datos,ctx, tamanoCanvasHeigth ,tamanoCanvasWidth);
    if(tartaGrafico)tartaImprimir(datos,ctx, tamanoCanvasHeigth ,tamanoCanvasWidth);




}

function cambiarGrafico(){

    switch (this.value) {
        case "barras":{
            barrasGrafico = true;
            rayasGrafico = false;
            tartaGrafico = false;
        }break;
        case "redondo":{
            barrasGrafico = false;
            rayasGrafico = false;
            tartaGrafico = true;
        }break;
        case "montañas":{
            barrasGrafico = false;
            rayasGrafico = true;
            tartaGrafico = false;
            }break;
        default:
            break;
    }

}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
    document.querySelectorAll("option").forEach(opcion => opcion.addEventListener("click", cambiarGrafico));
}

var barrasGrafico = false;
var rayasGrafico = false;
var tartaGrafico = true;


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;