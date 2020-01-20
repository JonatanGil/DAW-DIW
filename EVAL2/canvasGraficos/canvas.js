function buildGrafico(){

    var datos = document.querySelectorAll("input");
    console.log(datos);


    const canvas = document.querySelector("canvas")
    var tamanoCanvas = canvas.height;
    // contexto -> ctx
    let ctx = canvas.getContext("2d");

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
            ctx.rect(inicioDibujo, tamanoCanvas-20, 40, -longitud);
            ctx.stroke();
            ctx.fillStyle="red";
            ctx.fill();
            console.log(inicioDibujo);
        }else{
            var nombre = datos[a].value;

            if(a!=1)inicioDibujo+=50;
        
    		ctx.font="10pt Verdana";
		    ctx.strokeStyle="black";
		    ctx.lineWidth = 2;
            ctx.strokeText(nombre,inicioDibujo+5    ,tamanoCanvas);
            
        }





    }


}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
}


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;