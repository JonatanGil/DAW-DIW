
window.onload = function(){

    document.addEventListener("keypress", flechas, false);


    function flechas(flecha){


        var keyCode = event.keyCode;
        //a = 97
        //s = 115
        //d = 100
        //w = 119
        console.log(keyCode);

        if(keyCode == 119){
            moverPerosnaje("up","personaje");
        }
        if(keyCode == 115){
            moverPerosnaje("down","personaje");
        }
        if(keyCode == 100){
            moverPerosnaje("rigth","personaje");
        }
        if(keyCode == 97){
            moverPerosnaje("left","personaje");
        }


    }


    let hombrecillo = "P";
    let momia = "M";
    let figura="";

    let camino = 1;
    let caminoPisado = 2;

    //id para los divs
    var divs = 0;

    //x columnas, filas Y
    var momiaX = 20;
    var momiaY = 13;

    var personajeX = 8;
    var personajeY = 0;
    //div 8 es la columna
    var posicionDivPersonaje=8;

    var mapa = [];

    //creo 21 columnas 
    for(var i=0; i<21; i++) {
        //dentro de las columnas creo las filas 14
        mapa[i] = new Array(14);
    }


    
    console.log(mapa.length);
    console.log(mapa[0].length);
    /*
    var para = document.createElement("div");                       // Create a <p> node
    var t = document.createTextNode("This is a paragraph.");      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("main").appendChild(para);           // Append <p> to <div> with id="myDIV" */


    for (var filas = 0; filas < mapa[0].length; filas++) {

    for (var columnas = 0; columnas < mapa.length; columnas++) {
        

        //primero vemos si es una momia o jugador. despues imprimimos camino caja si no es.
        console.log((filas)+" "+momiaY);
        console.log(columnas+" "+momiaX);
        if(filas==momiaY && columnas==momiaX ){
            console.log("entraMomia");
            mapa[columnas][filas]="M";
            addDiv(0,0,0,"M");

        }else{

            if(filas==personajeY && columnas==personajeX){

                console.log("entraPersonaje");
                mapa[columnas][filas]="P";
                addDiv(0,0,0,"P");
            }else{

            //filas que no chocan con las cajas que contienen cofres llaves etc..
            if(filas==1 | filas==4 | filas==7 | filas==10 | filas==13 | (columnas==4 && filas!=0) | columnas==8 | 
            //la primera fila en amarillo menos el start 
            (columnas==0 && filas!=0) | (columnas==12 && filas!=0) | (columnas==16 && filas!=0) | (columnas==20 && filas!=0) ){

                //añadimos 1 al valor de ese div, texto, tal vez cambio por value del atributo del div.
                mapa[columnas][filas]=1;
                //los caminos pasamos el 1 para el style
                addDiv(columnas,filas,1,figura);
                
            }else{

                if(filas==0){

                    //primera fila solo el start
                    mapa[columnas][filas]="*";
                    //la primera linea solo marcamos el start 0 para el style vacio
                    addDiv(columnas,filas,0,figura);

                }else{

                    //añadimos el 2 para el style de la caja
                    mapa[columnas][filas]="2";
                    //las cajas pasamos el 2 para el style
                    addDiv(columnas,filas,2,figura);

            }

            }

        }
    }
            /*console.log(mapa[columnas][filas]);
            this.console.log(columnas+" "+filas);*/

        }

    }

    function confirmarCuadrado(mapa){

        var caja = 25;
        var cuadradoDerecha=true;
        var cuadradIzquierda=true;
        var cuadradoArriba=true;
        var cuadradoAbajo=true;
        console.log("entra la funcion confirmacuadraod");
        while(caja<28){
            //hacia a la izquierda
       
            for (let i = 0; i < 4; i++) {
                var cajas = document.getElementById(caja);
                var valor = cajas.getAttribute("valor");
                if(valor == 1){
                    cuadradIzquierda=true;
                }else{
                    cuadradIzquierda=false;
                    break;
                }
                caja--;
            }

            console.log("moverhacialaizquierda"+cuadradIzquierda);
            caja+=21;

            //hacia abajo
            for (let i = 0; i < 3; i++) {
                var cajas = document.getElementById(caja);
                var valor = cajas.getAttribute("valor");
                if(valor == 1){
                    cuadradoAbajo=true;
                }else{
                    cuadradoAbajo=false;
                    break;
                }
                caja+=21;
            }
         console.log("moverhaciaabajo"+cuadradoAbajo);


         caja-=21;
            //hacia la derecha
            for (let i = 0; i < 4; i++) {
                var cajas = document.getElementById(caja);
                var valor = cajas.getAttribute("valor");
                if(valor == 1){
                    cuadradoDerecha=true;
                }else{
                    cuadradoDerecha=false;
                    break;
                }
                console.log(caja);
                caja++;
            }
            console.log("moverhacialaderecha"+cuadradoDerecha);



            //hacia arriba
            for (let i = 0; i < 3; i++) {
                var cajas = document.getElementById(caja);
                var valor = cajas.getAttribute("valor");
                if(valor == 1){
                    cuadradoArriba=true;
                }else{
                    cuadradoArriba=false;
                    break;
                }
                caja-=21;
            }

            //para salir del while
            caja=Number.MAX_VALUE;

        }

        if(cuadradIzquierda && cuadradoDerecha && cuadradoAbajo && cuadradoArriba){
            var primeraCaja=43;
            for (let dosveces = 0; dosveces < 2; dosveces++) {
                
                for (let B = primeraCaja; B < primeraCaja+3; B++) {
                    console.log("cambiar perimrea caja");
                    var caja = document.getElementById(B);
                    caja.classList.add("visibleCaja");
                    
                }
                primeraCaja+=21;
            }
           
        }



    }




   function moverPerosnaje(movimiento){

            //obtengo el div viejo
            var posicionPersonajeVieja = document.getElementById(posicionDivPersonaje);
            //remover individuo
            posicionPersonajeVieja.classList.remove("personaje");

            posicionPersonajeVieja.classList.add("divCaminado");

            posicionPersonajeVieja.setAttribute("valor",1);

       
            console.log(movimiento);

        if(movimiento=="down"){
            //sumo una a la fila "Y"
            personajeY+=1;
            //ir hacia abajo-21
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje+21);
            posicionDivPersonaje+=21;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
        }
        if(movimiento=="up"){
            //sumo una a la fila "Y"
            personajeY-=1;
            //ir hacia abajo-21
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje-21);
            posicionDivPersonaje-=21;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
        }
        if(movimiento=="rigth"){
            //sumo una a la columna "Y"
            personajeY-=1;
            //ir hacia la derecha +1
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje+1);
            posicionDivPersonaje+=1;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
        }
        if(movimiento=="left"){
            //sumo una a la fila "Y"
            personajeY-=1;
            //ir hacia a la izquierda -11
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje-1);
            posicionDivPersonaje-=1;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
        }



        console.log(posicionDivPersonaje+" personajeX:"+personajeX+" personajeY"+personajeY);


        confirmarCuadrado(mapa);


   }

    function addDiv(colum,fil,style,figura){
          
      //creamos div 
      var para = document.createElement("div");

      para.id=divs;
      divs++;
        
      if(style==0){
        if(colum==8 && fil==0){ 
            para.classList.add("divCamino");
        }
    }else{
        if(style==1){ 
            para.classList.add("divCamino");
         } else{
             if(style==3){
                para.classList.add("divCaminado");
             }else{
                para.classList.add("divCaja");
             }
        }
    }

    if(figura=="M"){
        console.log("añado momia");
        if(style==1 | style==0){
            para.classList.add("divCamino");
        }else{
            console.log(style);
            para.setAttribute("value","momia");
            para.classList.add("divCamino");
        }
      para.classList.add("momia");
    }
    if(figura=="P"){
        console.log("añado personaje");
        if(style==1 | style==0){
            para.classList.add("divCamino");
        }else{
            console.log(style);
            para.setAttribute("value","jugador");
            para.classList.add("divCamino");
        }
      para.classList.add("personaje");

    }

      //creamos texto
      var t = document.createTextNode(mapa[colum][fil]); 
      //metemos texto en div
      para.appendChild(t);
      //insertamos div en html
      document.getElementById("main").appendChild(para);  




}

    console.log(mapa);


  
   /*
    var classDiv = document.getElementsByClassName("cuadrado");
    classDiv.classList.add("cuadradp");*/

};