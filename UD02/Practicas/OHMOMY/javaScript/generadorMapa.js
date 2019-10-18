
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

    //el camino pisado en una clase divCaminado(con seta alucinogena)   divCamnino(el negro normal
    let camino = 1;
  
    var figura="";

    //id para los divs
    var divs = 0;

    //x columnas, filas Y
    var momiaX = 20;
    var momiaY = 5;

    var personajeX = 8;
    var personajeY = 0;
    //div 8 es la columna
    var posicionDivPersonaje=8;

    var nivelMapa=5;
    var mapa = [];
    //añado el numero contando desde 0 de la caja totalmente rodeada
    var cuadradoDescubierto = [];
    //POSICIONES para pintar los cuadrados
    let idDeLaCaja=[43,47,51,55,59,106,110,114,118,122,169,173,177,181,185,232,236,240,244,248];

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

    AjustarAlturaPagina();



    function dibujarMapa(){

        
        //dibujo el mapa

        for (var filas = 0; filas < mapa[0].length; filas++) {

            for (var columnas = 0; columnas < mapa.length; columnas++) {
                
        
                //primero vemos si es una momia o jugador. despues imprimimos camino CajaPosicion si no es.
              /*  console.log((filas)+" "+momiaY);
                console.log(columnas+" "+momiaX);*/
                if(filas==momiaY && columnas==momiaX ){
                   // console.log("entraMomia");
                    mapa[columnas][filas]="M";
                    addDiv(columnas,filas,1,"M");
        
                }else{
        
                    if(filas==personajeY && columnas==personajeX){
        
                      //  console.log("entraPersonaje");
                        mapa[columnas][filas]=camino;
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
                          //  console.log(columnas+" columna"+" filas"+filas);
                            if(columnas==8){
                            //primera fila solo el start
                            mapa[columnas][filas]=camino;
                            //la primera linea solo marcamos el start 0 para el style vacio
                            addDiv(columnas,filas,0,figura);
                        }else{
                            if(columnas==8 && filas==0){
                                alert("1");
                                //primera fila solo el start
                                mapa[columnas][filas]=camino;
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


            /*
            do{
            var cofre = Math.random() * (19 - 0) + 0;
            var llave = Math.random() * (19 - 0) + 0;
            var urna = Math.random() * (19 - 0) + 0;
            var pergamino = Math.random() * (19 - 0) + 0;
        }while(cofre!=llave && cofre!=urna && cofre!=pergamino &&
            llave!=cofre && llave!=urna && llave!=pergamino &&
            urna!=cofre && urna!=llave && urna!= pergamino &&
            pergamino!=cofre && pergamino!=llave && pergamino!=urna);
*/

            //undefined el valor del atributo del div, 
            

    }


    atributoDivItems();
    console.log("sale");

    function atributoDivItems(){

       /* var Objetos = ["Llave","Urna","Pergamino","Cofre"]*/

       var Objetos = ["Llave"];

        //cuantas momias quieres es decir nivel del mapa es 5-4 1=momia en una caja
       /* for (let b = 0; b < nivelMapa-4; b++) {
            Objetos.push("momia");

        }*/

        for (var i = 0; i < Objetos.length; ) {


            var random =Math.floor(Math.random() * (19 - 0 + 1)) + 0;
            var div = document.getElementById(idDeLaCaja[0]);
            //si no tiene atributo undefined y pasa al siguiente div ee
            
            var divAtributo = div.getAttribute("value");
            
            if(divAtributo==null){
                console.log("cambio value");
                div.setAttribute("value", Objetos[i]);
                i++;
            }
            
                console.log(divAtributo+" r_:"+random+"      div id="+idDeLaCaja[random]);
            console.log(Objetos);
            
        }

    }


    function confirmarCuadrado(mapa){

        var CajaPosicion = 25;
        ///bajas a las cajaas de abajo con los divs
        var saltarFila = 0;

        var cuadradoDerecha=false;
        var cuadradoIzquierda=false;
        var cuadradoArriba=false;
        var cuadradoAbajo=false;


                        //bucle cuando llege a 5 baja a la segunda fila de las cajas para comprobar
        for (var i = 0, bucle = 1; i < 20; i++,bucle++) {

            try {
                
            
            for (var a = CajaPosicion; a > CajaPosicion-5; a--) {

                var cajas = document.getElementById(a);
                var valor = cajas.getAttribute("valor");

                //console.log(a+"posicion     valor"+valor+"  izquierda");
                console.log("porque es true"+a);
                if(valor == 1){
                    cuadradoIzquierda=true;
                    console.log("posicion del div: "+a+"      valor==1"+valor+"      numerodelacaja:"+i);
                }else{
                    cuadradoIzquierda=false;
                    //es falso salimos false el bolean
                    a=Number.MAX_VALUE;
                }
                //console.log("index"+a+" i"+i);
            }
        
            CajaPosicion=CajaPosicion-4+21;
        } catch (error) {
            CajaPosicion=CajaPosicion-4+21;
            cuadradoIzquierda=false;
    }


    try {
                
            
            //arriba a abajo

            for (var b = CajaPosicion; b <= CajaPosicion+21+21; b=b+21) {

                var cajas = document.getElementById(b);
                var valor = cajas.getAttribute("valor");
                
                //console.log(b+"posicion     valor"+valor+"  abajo");
                if(valor == 1){
                    cuadradoAbajo=true;
                }else{
                    cuadradoAbajo=false;
                    //es falso salimos false el bolean
                    b=Number.MAX_VALUE;
                }


            }

            CajaPosicion=CajaPosicion+21+21;
        } catch (error) {
            CajaPosicion=CajaPosicion+21+21;
            cuadradoAbajo=false;
    }




    try {
              

            //derecha
            for (var c = CajaPosicion; c < CajaPosicion+5; c++) {

                var cajas = document.getElementById(c);
                var valor = cajas.getAttribute("valor");

                //console.log(c+"posicion     valor"+valor+"  derecha");
                
                if(valor == 1){
                    cuadradoDerecha=true;
                }else{
                    cuadradoDerecha=false;
                    //es falso salimos false el bolean
                    c=Number.MAX_VALUE;
                }
            }

            CajaPosicion=CajaPosicion+4-21;
        } catch (error) {
            CajaPosicion=CajaPosicion+4-21;
            cuadradoArriba = false;
    }




    try {
              

            for (var d = CajaPosicion; d > CajaPosicion-21-21; d=d-21) {

                var cajas = document.getElementById(d);
                var valor = cajas.getAttribute("valor");

                //console.log(d+"posicion     valor"+valor+"  arriba");
                if(valor == 1){
                    cuadradoArriba=true;
                }else{
                    cuadradoArriba=false;
                    //es falso salimos false el bolean
                    d=Number.MAX_VALUE;
                }
                
            }
     
        } catch (error) {
            cuadradoArriba=false;
    }



            console.log(cuadradoIzquierda+"-izquierda");
            console.log(cuadradoAbajo+"-abajo");
            console.log(cuadradoDerecha+"-derecha");
            console.log(cuadradoArriba+"-arriba\n");
            console.log("*******");
        
            if(cuadradoDerecha && cuadradoIzquierda && cuadradoArriba && cuadradoAbajo){




                    if(cuadradoDescubierto.indexOf(i)==-1){
                    cuadradoDescubierto.push(i);
                }
            




            }

            
             if(i>8){
                /* console.log(bucle);*/
                    console.log(CajaPosicion+"   i"+i);
            }

                //cuando se la quinta caja(4)  bajara a las 6(5)   para bajar a la segunda fila, sumo +5 para el div para seguir con la siguiente caja cuando bajo de fila* 
                if(bucle==5){
                    CajaPosicion=CajaPosicion+5;
                    bucle=0;
                }else{
                    CajaPosicion=CajaPosicion-21-21+4;
                }

            //alert(" Posicion de las cajas"+CajaPosicion);


            cuadradoDerecha=false;
            cuadradoIzquierda=false;
            cuadradoArriba=false;
            cuadradoAbajo=false;


        }

        console.log(cuadradoDescubierto+"  mas length de los cuadrados ok"+cuadradoDescubierto.length);

        
        //si en el array de todos los lados = true, metes en cuadradosDescubiertos l caja que esta ok i imprimes
        
            for (let index = 0; index < cuadradoDescubierto.length; index++) {
                
            

                var primeraPosicionDelaCaja = cuadradoDescubierto[index];
                var dibujarObjeto = idDeLaCaja[primeraPosicionDelaCaja];
    
                var CajaPosicion = document.getElementById(dibujarObjeto);
                var valorDiv = CajaPosicion.getAttribute("value");
/*
                //para el fondo
                var CajaPosicionParaFondo = document.getElementById(dibujarObjeto+21);*/



               /* console.log(dibujarObjeto+21);
                console.log(valorDiv+"atributo     pos:"+dibujarObjeto);*/
                switch (valorDiv) {
                    case "Llave":{

                      /*  CajaPosicionParaFondo.classList.add("fondo");*/

                        console.log("cambio llave caja");
                        CajaPosicion.classList.add("Llave");
                        
                      break;}
                    case "Cofre":{
                        console.log("cambio llave caja");
                        CajaPosicion.classList.remove("divCaja");
                        CajaPosicion.classList.add("Cofre");
                        
                      break;}
                    case "Urna":{
                        console.log("cambio llave caja");
                        CajaPosicion.classList.remove("divCaja");
                        CajaPosicion.classList.add("Urna");
                        
                      break;}
                    case "Pergamino":{
                        console.log("cambio llave caja");
                        CajaPosicion.classList.remove("divCaja");
                        CajaPosicion.classList.add("Llave");
                        
                      break;}
                    case "Momia":{
                        console.log("cambio llave caja");
                        CajaPosicion.classList.remove("divCaja");
                        CajaPosicion.classList.add("Llave");
                        
                      break;}
                  
                  }





              //  console.log(primeraPosicionDelaCaja+"cuadrad a pintar             "+dibujarObjeto+"numero de la caja prierma a pintar");
                 /* //obetenesmoes el div para pintar las caja 3 a la derecgha y abajo repetimos
               for (let dosveces = 0; dosveces < 2; dosveces++) {
                
                   for (let B = dibujarObjeto; B < dibujarObjeto+3; B++) {
                       var CajaPosicion = document.getElementById(B);
                    
                           CajaPosicion.classList.add("visibleCaja");

                 }
                    dibujarObjeto  +=21;
            
           
                  }*/
    
    }



    }




   function moverPerosnaje(movimiento){

            //obtengo el div viejo
            var posicionPersonajeVieja = document.getElementById(posicionDivPersonaje);

            posicionPersonajeVieja.classList.add("divCaminado");

            posicionPersonajeVieja.classList.add("divCamino");

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
            if((posicionDivPersonaje+1)%21==0) return;
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
            if(posicionDivPersonaje%21==0) return;
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
       // console.log("añado momia");
        if(style==1 | style==0){
            para.classList.add("divCamino");
        }else{
            para.setAttribute("value","momia");
            para.classList.add("divCamino");
        }
      para.classList.add("momia");
    }
    if(figura=="P"){
       // console.log("añado personaje");
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


    function AjustarAlturaPagina(){
        var altura = window.innerHeight-18+"px";
        

        document.getElementById("pagina").style.height=altura;
        dibujarMapa();
}
};