
window.onload = function(){

    document.addEventListener("keypress", flechas, false);


    function flechas(flecha){


        var keyCode = event.keyCode;
        //a = 97
        //s = 115
        //d = 100
        //w = 119
        /*console.log(keyCode);*/

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
    var momiaY = 5;

    var personajeX = 8;
    var personajeY = 0;
    //div 8 es la columna
    var posicionDivPersonaje=8;

    var mapa = [];
    var cuadradoDescubierto = [];

    //creo 21 columnas 
    for(var i=0; i<21; i++) {
        //dentro de las columnas creo las filas 14
        mapa[i] = new Array(14);
    }


    
    /*
    var para = document.createElement("div");                       // Create a <p> node
    var t = document.createTextNode("This is a paragraph.");      // Create a text node
    para.appendChild(t);                                          // Append the text to <p>
    document.getElementById("main").appendChild(para);           // Append <p> to <div> with id="myDIV" */


    for (var filas = 0; filas < mapa[0].length; filas++) {

    for (var columnas = 0; columnas < mapa.length; columnas++) {
        

        //primero vemos si es una momia o jugador. despues imprimimos camino CajaPosicion si no es.
        console.log((filas)+" "+momiaY);
        console.log(columnas+" "+momiaX);
        if(filas==momiaY && columnas==momiaX ){
            console.log("entraMomia");
            mapa[columnas][filas]="M";
            addDiv(columnas,filas,1,"M");

        }else{

            if(filas==personajeY && columnas==personajeX){

                console.log("entraPersonaje");
                mapa[columnas][filas]="1";
                addDiv(columnas,filas,1,"P");

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
                    console.log(columnas+" columna"+" filas"+filas);
                    if(columnas==8){
                    //primera fila solo el start
                    mapa[columnas][filas]="1";
                    //la primera linea solo marcamos el start 0 para el style vacio
                    addDiv(columnas,filas,0,figura);
                }else{
                    if(columnas==8 && filas==0){
                        alert("1");
                        //primera fila solo el start
                        mapa[columnas][filas]="1";
                        //la primera linea solo marcamos el start 0 para el style vacio
                        addDiv(columnas,filas,0,figura);
                    }else{
                        //primera fila solo el start
                        mapa[columnas][filas]="0";
                        //la primera linea solo marcamos el start 0 para el style vacio
                        addDiv(columnas,filas,0,figura);
                    }
                   
                }

                }else{

                    //añadimos el 2 para el style de la CajaPosicion
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

        var CajaPosicion = 25;
        ///sumas al bucle 47 para pasar de la quinta caja a las sextacon los divs* para pintar y saber si esta rodeado
        var contarCajas = 47;

        var cuadradoDerecha=false;
        var cuadradIzquierda=false;
        var cuadradoArriba=false;
        var cuadradoAbajo=false;

        let posicionDelCuadradoDiv=[43,47,51,55,59,106,110,114,118,122,169,173,177,181,183,232,236,240,244,248];

        for (var i = 0; i < 1; i++) {


            for (let index = CajaPosicion; index > CajaPosicion-5; index--) {

                var cajas = document.getElementById(index);
                var valor = cajas.getAttribute("valor");

                console.log(index+"posicion     valor"+valor+"  izquierda");
                
                if(valor == 1){
                    cuadradIzquierda=true;
                }else{
                    cuadradIzquierda=false;
                    //es falso salimos false el bolean
                    console.log("sale");
                    index=Number.MAX_VALUE;
                }
            }
            


            //arriba a abajo
            CajaPosicion=CajaPosicion-4+21;
            console.log(CajaPosicion+21+21+" cajanormal"+CajaPosicion);

            for (var index = CajaPosicion; index <= CajaPosicion+21+21; index=index+21) {

                var cajas = document.getElementById(index);
                var valor = cajas.getAttribute("valor");
                
                console.log(index+"posicion     valor"+valor+"  abajo");
                if(valor == 1){
                    cuadradoAbajo=true;
                }else{
                    cuadradoAbajo=false;
                    //es falso salimos false el bolean
                    index=Number.MAX_VALUE;
                }


            }


            CajaPosicion=CajaPosicion+21+21;
            //derecha
            for (let index = CajaPosicion; index < CajaPosicion+5; index++) {

                var cajas = document.getElementById(index);
                var valor = cajas.getAttribute("valor");

                console.log(index+"posicion     valor"+valor+"  derecha");
                
                if(valor == 1){
                    cuadradoDerecha=true;
                }else{
                    cuadradoDerecha=false;
                    //es falso salimos false el bolean
                    console.log("sale");
                    index=Number.MAX_VALUE;
                }
            }


            CajaPosicion=CajaPosicion+4-21;

            for (let index = CajaPosicion; index > CajaPosicion-21-21; index=index-21) {

                var cajas = document.getElementById(index);
                var valor = cajas.getAttribute("valor");

                console.log(index+"posicion     valor"+valor+"  arriba");
                if(valor == 1){
                    cuadradoArriba=true;
                }else{
                    cuadradoArriba=false;
                    //es falso salimos false el bolean
                    console.log("sale");
                    index=Number.MAX_VALUE;
                }
                
            }
            



            console.log(cuadradIzquierda+"-izquierda");
            console.log(cuadradoAbajo+"-abajo");
            console.log(cuadradoDerecha+"-derecha");
            console.log(cuadradoArriba+"-arriba");
        
            if(cuadradoDerecha && cuadradIzquierda && cuadradoArriba && cuadradoAbajo){
                if(cuadradoDescubierto.indexOf(i,0)){
                    cuadradoDescubierto.push(i);
            }
            }
            cuadradoDerecha=false;
            cuadradIzquierda=false;
            cuadradoArriba=false;
            cuadradoAbajo=false;



        }

        console.log(cuadradoDescubierto);
/*
        for (let index = 0; index <= 1; index++) {

        

        //obetenesmoes el div para pintar las caja 3 a la derecgha y abajo repetimos
            var primeraPosicionDelaCaja = cuadradoDescubierto.shift();
            var pintarCaja = posicionDelCuadradoDiv[primeraPosicionDelaCaja];
            console.log(primeraPosicionDelaCaja+"cuadrad a pintar             "+pintarCaja+"numero de la caja prierma a pintar");
            for (let dosveces = 0; dosveces < 2; dosveces++) {
                
                for (let B = pintarCaja; B < pintarCaja+3; B++) {
                    var CajaPosicion = document.getElementById(B);
                    
                    CajaPosicion.classList.add("visibleCaja");
                    
                }
                pintarCaja  +=21;
            
           
        }
    }
*/


    }




   function moverPerosnaje(movimiento){

            //obtengo el div viejo
            var posicionPersonajeVieja = document.getElementById(posicionDivPersonaje);

            posicionPersonajeVieja.classList.add("divCaminado");

            posicionPersonajeVieja.setAttribute("valor",1);


        if(movimiento=="down"){
            //sumo una a la fila "Y"
            personajeY+=1;
            //ir hacia abajo-21
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje+21);
            var movimientoValido = document.getElementById(posicionDivPersonaje+21).innerHTML;
            //si es uno se mueve
            if(movimientoValido==1){
            //remover individuo
            posicionPersonajeVieja.classList.remove("personaje");
            posicionDivPersonaje+=21;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
            }else{
            posicionPersonajeVieja.classList.add("personaje");
            }
        }
        if(movimiento=="up"){
            //sumo una a la fila "Y"
            personajeY-=1;
            //ir hacia abajo-21
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje-21);
            //obtenemos el valor del texto, si es uno puede mover si es dos o no existe no se mueve
            var movimientoValido = document.getElementById(posicionDivPersonaje-21).innerHTML;
            //si es uno se mueve
            if(movimientoValido==1){
                //remover individuo
                posicionPersonajeVieja.classList.remove("personaje");
            posicionDivPersonaje-=21;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
        }else{
        posicionPersonajeVieja.classList.add("personaje");
        }
        }
        if(movimiento=="rigth"){
            //sumo una a la columna "Y"
            personajeY-=1;
            //ir hacia la derecha +1
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje+1);
            var movimientoValido = document.getElementById(posicionDivPersonaje+1).innerHTML;
            //si es uno se mueve
            if(movimientoValido==1){
                //remover individuo
                posicionPersonajeVieja.classList.remove("personaje");
            posicionDivPersonaje+=1;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
            }else{
            posicionPersonajeVieja.classList.add("personaje");
            }
        }
        if(movimiento=="left"){
            //sumo una a la fila "Y"
            personajeY-=1;
            //ir hacia a la izquierda -11
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje-1);
            var movimientoValido = document.getElementById(posicionDivPersonaje-1).innerHTML;
            //si es uno se mueve
            if(movimientoValido==1){
                //remover individuo
                posicionPersonajeVieja.classList.remove("personaje");
            posicionDivPersonaje-=1;
            //añado personaje al cuadrao nuevo
            PosicionPersonajeNueva.classList.add("personaje");
            }else{
            posicionPersonajeVieja.classList.add("personaje");
            }
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




  
   /*
    var classDiv = document.getElementsByClassName("cuadrado");
    classDiv.classList.add("cuadradp");*/

};