var barras=false;
var tarta=false;
var montaña=false;


function buildGrafico(){


    var opcion = document.querySelectorAll("option");

    const canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    var tamañoCanvas = canvas.height;

    buildBarras(ctx,tamañoCanvas)


}


function buildBarras(ctx,tamañoCanvas){

    // contexto -> ctx

    var datos = document.querySelectorAll("input");
    var total = 0;
    var inicial = 0;

    for (let b = 1; b < datos.length; b++) {
        if(b%2==0){
            total+=parseInt(datos[b].value);
        }
    }

for (let index = 1; index < datos.length; index++) {

    if(index%2!=0){

        ctx.font="14px Comic Sans MS";
		ctx.strokeText(datos[index].value,inicial+5,tamañoCanvas-5); 

    }else{

        tamañoBarra=datos[index];

        ctx.beginPath();
        ctx.rect(inicial, tamañoCanvas-20, 40, -tamañoCanvas*(datos[index].value*100/total)/100);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
        
        inicial+=70;

    }


}

}


function selectOption(){

    console.log(this);

}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
    document.querySelectorAll("option")
    document.querySelectorAll("option").forEach(element => element.addEventListener("click", selectOption));
}


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;