var mapa;
var  momiasX;
var momiasY;
window.onload = function(){

    document.addEventListener("keypress", flechas, false);


    function flechas(flecha){


        var keyCode = event.keyCode;
        console.log(flecha);
        //a = 97
        //s = 115
        //d = 100
        //w = 119
        /*console.log(keyCode);*/

        if(keyCode == 119){
            moverPersonaje("up","personaje");
        }
        if(keyCode == 115){
            moverPersonaje("down","personaje");
        }
        if(keyCode == 100){
            moverPersonaje("rigth","personaje");
        }
        if(keyCode == 97){
            moverPersonaje("left","personaje");
        }


    }

    //el camino pisado en una clase divCaminado(con seta alucinogena)   divCamnino(el negro normal
    let camino = 1;
  
    var figura="";

    //id para los divs
    var divs = 0;

    //la posicion 8 son los divs X
    var personajeX = 8;
    var personajeY = 0;
    //div 8 es la columna
    var posicionDivPersonaje=8;

    mapa = [];
    //añado el numero contando desde 0 de la caja totalmente rodeada
    var cuadradoDescubierto = [];
    //POSICIONES para pintar los cuadrados
    let idDeLaCaja=[43,47,51,55,59,106,110,114,118,122,169,173,177,181,185,232,236,240,244,248];

    //nivel del mapa
    var nivelMapa=1;
    
    //
    var escapar=false;
    var llaveEncontrado=false;
    var urnaEncontrada=false;
    var pergaminoEncontrado=false;
    var cofreEncontrado=false;
    var momiaEncontrada=false;
    var unaVezCofrePorNivel=1; //para que no se repitca suamr puntos cofre infinitamente
    var unavezpergamino=1;
    var unavezmomia=1;

    //despues de crear mapa insertamos momias
    var momiasEnCamino=6; //momias al pasar de nivel aumentamos una
    var momiasX = [];
    var momiasY = [];  

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
    momiasRandom();
    var movMomias = setInterval(moverMomias, 400);

    //moverMomias.setInterval=stop;

    function dibujarMapaInicial(){

        
        //dibujo el mapa

        for (var filas = 0; filas < mapa[0].length; filas++) {
            
            for (var columnas = 0; columnas < mapa.length; columnas++) {
                
        
                //primero vemos si es una momia o jugador. despues imprimimos camino CajaPosicion si no es.
              /*  console.log((filas)+" "+momiaY);
                console.log(columnas+" "+momiaX);*/
               /* if(filas==momiasY[0] && columnas==momiasX[0] ){
                   // console.log("entraMomia");
                    mapa[columnas][filas]="M";
                    addDiv(columnas,filas,1,"M");
        
                }else{*/
        
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
        
               // }
            }
                    /*console.log(mapa[columnas][filas]);
                    this.console.log(columnas+" "+filas);*/
        
                }
                
        
            }


            

    }
    

    function momiasRandom(){

        for (let i = 0; i < momiasEnCamino;) {
            console.log("entra en momiasEncamino "+momiasEnCamino);

            
            var randomX =Math.floor(Math.random() * 20);
            var randomY =Math.floor(Math.random() * 13);
            
            //console.log(mapa[randomX][randomY]);
            
            //insertomio en la posicion x y, los tengo invertidos matematicamente  
            //      x
            //  --------
            //  |
            // y|
            //la y  mayor q x filas para q las momias no se espameen


            if(mapa[randomX][randomY]==1 && randomY>=5){
                console.log("inserto momia en "+randomY+" - "+randomX);
            
                momiasX.push(randomX);
                momiasY.push(randomY);
               // mapa[randomX][randomY]="M";
                i++;
                document.getElementById(randomX+randomY*21).classList.add("momia");
                
            }
    
        }
    }

    atributoDivItems();

    function atributoDivItems(){

       /* var Objetos = ["Llave","Urna","Pergamino","Cofre"]*/

       var Objetos = ["Llave","Urna","Pergamino","Cofre","momia"];

        //cuantas momias quieres es decir nivel del mapa es 5-4 1=momia en una caja   dificultad imposible
       /* for (let b = 0; b < nivelMapa-4; b++) {
            Objetos.push("momia");

        }*/

        for (var i = 0; i < Objetos.length; ) {


            var random =Math.floor(Math.random() * (19 - 0 + 1)) + 0;
            var div = document.getElementById(idDeLaCaja[random]);
            //si no tiene atributo undefined y pasa al siguiente div ee
            
            var divAtributo = div.getAttribute("value");

            if(divAtributo==null || divAtributo=="vacio"){
               // console.log("cambio value");
                div.setAttribute("value", Objetos[i]);
                i++;
               
            }   
            
            console.log(divAtributo+" r_:"+random+"      div id="+idDeLaCaja[random]+" obejtos puntos leng"+Objetos.length);
            console.log(Objetos);
            
        }

    }

    function confirmarCuadrado(mapa){

        var CajaPosicion = 25;
        ///bajas a las cajaas de abajo con los divs

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
              //  console.log("porque es true"+a);
                if(valor == 1){
                    cuadradoIzquierda=true;
                   // console.log("posicion del div: "+a+"      valor==1"+valor+"      numerodelacaja:"+i);
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


/*
            console.log(cuadradoIzquierda+"-izquierda");
            console.log(cuadradoAbajo+"-abajo");
            console.log(cuadradoDerecha+"-derecha");
            console.log(cuadradoArriba+"-arriba\n");
            console.log("*******");*/
        
            if(cuadradoDerecha && cuadradoIzquierda && cuadradoArriba && cuadradoAbajo){




                    if(cuadradoDescubierto.indexOf(i)==-1){
                    cuadradoDescubierto.push(i);
                }
            




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

       // console.log(cuadradoDescubierto+"  mas length de los cuadrados ok"+cuadradoDescubierto.length);

        
        //si en el array de todos los lados = true, metes en cuadradosDescubiertos l caja que esta ok i imprimes
        

            /*hacer function de pintarCajaCuadrado o no*/

            for (let index = 0; index < cuadradoDescubierto.length; index++) {
                
            

                var primeraPosicionDelaCaja = cuadradoDescubierto[index];
                var dibujarObjeto = idDeLaCaja[primeraPosicionDelaCaja];
                
              //  var CajaPosicionParaFondo = document.getElementById(dibujarObjeto+2);
                var CajaPosicion = document.getElementById(dibujarObjeto);
                var valorDiv = CajaPosicion.getAttribute("value");

                //para el fondo


                switch (valorDiv) {
                    case "Llave":{

                       // var CajaPosicion = document.getElementById(dibujarObjeto+23);
                        //CajaPosicionParaFondo.classList.add("fondoCaja");

                        //si es false solo lo hace una vez
                        if(!llaveEncontrado){
                        transparentCaja(dibujarObjeto,CajaPosicion,0);

                        //console.log("cambio llave caja");
                        document.getElementById(dibujarObjeto+22).classList.add("Llave");
                       //document.getElementById(dibujarObjeto+22).classList.add("fondo");
                        llaveEncontrado=true;
                        }
                      break;}
                    case "Cofre":{

                        if(!cofreEncontrado){
                        transparentCaja(dibujarObjeto,CajaPosicion,0);
                       // console.log("cambio llave cofre");
                        document.getElementById(dibujarObjeto+22).classList.add("Cofre");
                        cofreEncontrado=true;
                        }

                      break;}
                    case "Urna":{

                        if(!urnaEncontrada){
                        transparentCaja(dibujarObjeto,CajaPosicion,0);
                        //console.log("cambio llave urna");
                        document.getElementById(dibujarObjeto+22).classList.add("Urna");
                        urnaEncontrada=true;
                        }
                      break;}
                    case "Pergamino":{

                        if(!pergaminoEncontrado){
                        transparentCaja(dibujarObjeto,CajaPosicion,0);
                        //console.log("cambio llave pergamino");
                        document.getElementById(dibujarObjeto+22).classList.add("Pergamino");
                        pergaminoEncontrado=true;
                        }
                      break;}
                    case "momia":{

                        if(!momiaEncontrada){
                        transparentCaja(dibujarObjeto,CajaPosicion,0);
                       // console.log("cambio llave momia");
                        document.getElementById(dibujarObjeto+22).classList.add("momia");

                        var posicionDivXmomia=(dibujarObjeto+22)%21;
                        momiasX.push(parseInt(posicionDivXmomia));
                        var posicionDivYmomia=(dibujarObjeto+22)/21;
                        momiasY.push(parseInt(posicionDivYmomia+1));
                        //añado una momia mas
                        momiasEnCamino++;
                        //reinciiar el intervalo parfa que la momia añadida este, 21/ para la Y  resto para la X
                        clearInterval(movMomias);
                        movMomias = setInterval(moverMomias, 400);
                            
                        /*console.log(momiasX);
                        console.log(momiasY);*/
                        momiaEncontrada=true;
                        }
                      break;}
                    default:{
  
                        transparentCaja(dibujarObjeto,CajaPosicion,1);
                   
                        }
                    
                    }


                    

                    if(cofreEncontrado){
                        if(unaVezCofrePorNivel==1){
                        puntuacion(100*nivelMapa);
                        unaVezCofrePorNivel++;
                    }
                    }

                    if(urnaEncontrada && llaveEncontrado){
                        abrirPuerta();
                    }
                   if(momiaEncontrada && unavezmomia==1){
                        //inserto momia en el campo quitar momia de la caja 
                        document.getElementById(dibujarObjeto+43).classList.add("momia");
                        unavezmomia=2;

                    }

                      //remuevo el color del div caja para los dos after CajaPosicion.classList.remove("divCaja");
                        

    }



    }

    function abrirPuerta(){
        //por hacer
        //console.log(urnaEncontrada+"urna       llave"+llaveEncontrado+"      remuevo peurta");
        var quitarPuerta = document.getElementById("8");
        escapar=true;
        quitarPuerta.classList.remove("insertarPuerta");
        quitarPuerta.classList.add("divCamino");
    }

    //todo
    function puntuacion(puntos){
        var div = document.getElementById("puntuacion");
        var sumarPuntos = div.getAttribute("value");
        sumarPuntos = parseInt(sumarPuntos,10);
        puntos = parseInt(puntos,10);
        var resultado = sumarPuntos+puntos;
        //console.log(sumarPuntos+"   puntos de nivel"+puntos+"   nivel"+nivelMapa);
        
        div.setAttribute("value",parseInt(resultado));
        console.log(resultado);
        console.log(nivelMapa+"nivdel del mapa");



        div.innerHTML = resultado;
        //div.innerHTML.replace(div.getText , eval(puntos+sumarPuntos));
    }

    function transparentCaja(dibujarObjeto,CajaPosicion,caja){

        //caja ==1 para pintarla toda, 0 para pintar solo la posicion 2345 y la primera es la lave y la otra elfondo


        //console.log(dibujarObjeto+"    Cajapos="+CajaPosicion+"     caja 1-0"+caja);
            if(caja==1){
                        //si entra en dafault la caja q esta siendo vista no contiene nada entonces la pintamos de otro color
                        for (let dosveces = 0; dosveces < 2; dosveces++) {
                
                            for (let B = dibujarObjeto; B < dibujarObjeto+3; B++) {
                                var CajaPosicion = document.getElementById(B);
                                //eliminaba la caja pero no ahce falta ponemos el color a transparent
                                //CajaPosicion.classList.remove("divCaja");
                                //CajaPosicion.classList.add("cajaVacia");
                                //ponemos la opacity a vacio
                                CajaPosicion.classList.remove("divCaja");
         
                          }
                             dibujarObjeto  +=21;
                     
                           }
                        }else{
                            //TODO
                             //si entra en dafault la caja q esta siendo vista no contiene nada entonces la pintamos de otro color
                        for (let dosveces = 0; dosveces < 2; dosveces++) {
                
                            for (let B = dibujarObjeto; B < dibujarObjeto+3; B++) {
                                var CajaPosicion = document.getElementById(B);
                                //eliminaba la caja pero no ahce falta ponemos el color a transparent
                                //CajaPosicion.classList.remove("divCaja");
                                //CajaPosicion.classList.add("cajaVacia");
                               // console.log(B+"id");
                                //ponemos la opacity a vacio
                                CajaPosicion.classList.remove("divCaja");
                                
         
                          }
                             dibujarObjeto  +=21;
                     
                           }
                        }

    }

   function moverPersonaje(movimiento){
    
            //obtengo el div viejo
            var posicionPersonajeVieja = document.getElementById(posicionDivPersonaje);

            posicionPersonajeVieja.classList.add("divCaminado");
            
            posicionPersonajeVieja.classList.add("divCamino");

            posicionPersonajeVieja.setAttribute("valor",1);


        if(movimiento=="down"){
            //ir hacia abajo-21
            try {
            
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje+21);
            var movimientoValido = document.getElementById(posicionDivPersonaje+21).innerHTML;

                
        } catch (error) {
         //fallo, no existe div debajo de la ultima fila*, pues no puede mover y peta(fallo de compilacion) en obtener el id de un div que no existe.       
        }

            //si es uno se mueve
            if(posicionDivPersonaje!=8){
                if(movimientoValido==1){
                    personajeY+=1;
                //remover individuo
                posicionPersonajeVieja.classList.remove("personaje");
                posicionDivPersonaje+=21;
                //añado personaje al cuadrao nuevo
                PosicionPersonajeNueva.classList.add("personaje");
                }else{
                posicionPersonajeVieja.classList.add("personaje");
                }
            }else{

                personajeY+=1;
                posicionPersonajeVieja.classList.remove("personaje");
                posicionPersonajeVieja.classList.remove("divCaminado");
                posicionPersonajeVieja.classList.remove("divCamino");
                posicionPersonajeVieja.classList.add("insertarPuerta");

                posicionDivPersonaje+=21;
                //añado personaje al cuadrao nuevo
                PosicionPersonajeNueva.classList.add("personaje");

        }
        }
        if(movimiento=="up"){

            try {
            
                //ir hacia abajo-21
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje-21);
            //obtenemos el valor del texto, si es uno puede mover si es dos o no existe no se mueve
            var movimientoValido = document.getElementById(posicionDivPersonaje-21).innerHTML;

                    
            } catch (error) {
             //fallo, no existe div debajo de la ultima fila*, pues no puede mover y peta(fallo de compilacion) en obtener el id de un div que no existe.       
            }
          

            
            if(posicionDivPersonaje==29){

            if(escapar){
                personajeX-=1;
                //remover individuo
                posicionPersonajeVieja.classList.remove("personaje");
            
                PosicionPersonajeNueva.classList.add("personaje");
                posicionDivPersonaje-=21;
                siguienteNivel();
            
            
            }else{

                posicionPersonajeVieja.classList.add("personaje");
            }
            }else{

                if(movimientoValido==1){
                    personajeY-=1;
                    //remover individuo
                    posicionPersonajeVieja.classList.remove("personaje");
                    posicionDivPersonaje-=21;
                    //añado personaje al cuadrao nuevo
                    PosicionPersonajeNueva.classList.add("personaje");
                }else{
                posicionPersonajeVieja.classList.add("personaje");
                }
            }
        }

        if(movimiento=="rigth"){
            if((posicionDivPersonaje+1)%21==0) return;
            //ir hacia la derecha +1
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje+1);
            var movimientoValido = document.getElementById(posicionDivPersonaje+1).innerHTML;
            //si es uno se mueve
            if(movimientoValido==1){
                //sumo una a la columna "Y"
                personajeX+=1;
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
            //ir hacia a la izquierda -11
            var PosicionPersonajeNueva = document.getElementById(posicionDivPersonaje-1);
            var movimientoValido = document.getElementById(posicionDivPersonaje-1).innerHTML;
            //si es uno se mueve
            if(movimientoValido==1){
                //sumo una a la fila "Y"
                personajeX-=1;
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

   function siguienteNivel(){
       //queryselector obtiene todos los elementos que contengan divCaminado
       var divs = document.querySelectorAll(".divCaminado");
       console.log(divs);
       for (let i = 0; i < divs.length; i++) {
           divs[i].setAttribute("valor",0);
           divs[i].classList.remove("divCaminado")
       }
       reiniciarMapa();
       puntuacion(nivelMapa*100);

       console.log("nuevo nivel");
       
   }

   function reiniciarMapa(){


    console.log("esconder");

    clearInterval(movMomias);

    //para esconder las cajas
    for (let i = 0; i < idDeLaCaja.length; i++) {
        
        var dibujarObjeto = idDeLaCaja[i];
        
        console.log("id de la caja "+dibujarObjeto);

    for (let dosveces = 0; dosveces < 2; dosveces++) {
                
        for (let B = dibujarObjeto; B < dibujarObjeto+3; B++) {
            var CajaPosicion = document.getElementById(B);

            CajaPosicion.classList.add("divCaja");

      }
      dibujarObjeto=dibujarObjeto+21;

    }
    }
 
    //quitar los items de las cajas y despues alatorizar
try {
    
    var quitarItem = document.querySelector("div[value='Llave']");
    quitarItem.setAttribute("value","vacio");
    var quitarItem = document.querySelector(".Llave");
    quitarItem.classList.remove("Llave");
} catch (error) {
    console.log("Llave error");
}

try {
    
    var quitarItem = document.querySelector("div[value='Urna']");
    quitarItem.setAttribute("value","vacio");
    var quitarItem = document.querySelector(".Urna");
    quitarItem.classList.remove("Urna");

} catch (error) {
    
    console.log("urna error");
}

try {
    
    var quitarItem = document.querySelector("div[value='Pergamino']");
    quitarItem.setAttribute("value","vacio");
    var quitarItem = document.querySelector(".Pergamino");
    quitarItem.classList.remove("Pergamino");

} catch (error) {
    
    console.log("pergamino error");
}

try {
    
    var quitarItem = document.querySelector("div[value='Cofre']");
    quitarItem.setAttribute("value","vacio");
    var quitarItem = document.querySelector(".Cofre");
    quitarItem.classList.remove("Cofre");

} catch (error) {
    
    console.log("cofre error");
}
    //remover todas las momias
        //quitarmomia de la caja apra aleatoriazar
        try {
            
        var quitarItem = document.querySelector("div[value='momia']");
        quitarItem.setAttribute("value","vacio");
        } catch (error) {
            console.log("momia");
        }

        try {
            var quitarmomias = document.querySelectorAll(".momia");
            
        } catch (error) {
                console.log("no ahi momias");
        }

        for (let i = 0; i < quitarmomias.length; i++) {
            quitarmomias[i].classList.remove("momia")
        }
    
        momiaEncontrada=false;
        cofreEncontrado=false;
        llaveEncontrado=false;
        pergaminoEncontrado=false;
        urnaEncontrada=false;
        escapar=false;
        momiasEnCamino++;
        personajeX=8;
        personajeY=0;
        unaVezCofrePorNivel=1;
        unavezpergamino=1;
        unavezmomia=1;
        cuadradoDescubierto = [];
        momiasX=[];
        momiasY=[];

        //random items
        atributoDivItems();



        console.log(cuadradoDescubierto);
        momiasRandom();
        
        alert("next level up");

        movMomias = setInterval(moverMomias, 400);
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
/* kaka
    if(figura=="M"){
       // console.log("añado momia");
        if(style==1 | style==0){
            para.classList.add("divCamino");
        }else{
            para.setAttribute("value","momia");
            para.classList.add("divCamino");
        }
      para.classList.add("momia");
    }*/
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

    moverMomias();  


    function moverMomias(){

        /*              Y
                    |-------
                   x|
                    |
        */
        
        for (let i = 0; i < momiasX.length; i++) {
            posicionMomiaX = momiasX[i];
            posicionMomiaY = momiasY[i];
/*
            // mover derecha
            if (posicionMomiaX < personajeX) {
                
            }
            else if(){

            }*/
            //mover derecha
            console.log( !document.getElementById((posicionMomiaX+1)+posicionMomiaY*21).classList.contains("momia"));
            if(posicionMomiaX<personajeX && mapa[posicionMomiaX+1][posicionMomiaY]==1 && !document.getElementById((posicionMomiaX+1)+posicionMomiaY*21).classList.contains("momia")){
                    console.log("se mueve derecha");
                    document.getElementById(posicionMomiaX+posicionMomiaY*21).classList.remove("momia");
                    document.getElementById((posicionMomiaX+1)+posicionMomiaY*21).classList.add("momia");
                    momiasX[i]=posicionMomiaX+1;
                    //mover izquierda
            }
            else if (posicionMomiaX>personajeX && mapa[posicionMomiaX-1][posicionMomiaY]==1 && !document.getElementById((posicionMomiaX-1)+posicionMomiaY*21).classList.contains("momia")) {
                     document.getElementById(posicionMomiaX+posicionMomiaY*21).classList.remove("momia");
                     document.getElementById((posicionMomiaX-1)+posicionMomiaY*21).classList.add("momia");
                     momiasX[i]=posicionMomiaX-1;
                    
            }
            

          else if(posicionMomiaY<personajeY && mapa[posicionMomiaX][posicionMomiaY+1]==1 && !document.getElementById(posicionMomiaX+(posicionMomiaY+1)*21).classList.contains("momia")){
                    console.log("se mueve arriba");
                    document.getElementById(posicionMomiaX+posicionMomiaY*21).classList.remove("momia");
                    document.getElementById(posicionMomiaX+(posicionMomiaY+1)*21).classList.add("momia");
                    momiasY[i]=posicionMomiaY+1;
                    //mover izquierda
                    
            }
            else if(posicionMomiaY>personajeY && mapa[posicionMomiaX][posicionMomiaY-1]==1 && !document.getElementById(posicionMomiaX+(posicionMomiaY-1)*21).classList.contains("momia")){
                        console.log("se mueve abajo");
                     document.getElementById(posicionMomiaX+posicionMomiaY*21).classList.remove("momia");
                     document.getElementById(posicionMomiaX+(posicionMomiaY-1)*21).classList.add("momia");
                     momiasY[i]=posicionMomiaY-1;
                    
            }

            //ELIMINAR MOMIA QUITAR VIDA POERGAMINO NO QUITAR VIDA
            if(personajeY==posicionMomiaY && personajeX==posicionMomiaX){
                if(pergaminoEncontrado && unavezpergamino==1){
                    document.getElementById(posicionMomiaX+posicionMomiaY*21).classList.remove("momia");
                    momiasX.splice(i,1);
                    momiasY.splice(i,1);
                    momiasEnCamino--;
                    pergaminoEncontrado=false;
                    unavezpergamino=2;
            }else{
                vidasAEliminar(1);
                document.getElementById(posicionMomiaX+posicionMomiaY*21).classList.remove("momia");
                momiasX.splice(i,1);
                momiasY.splice(i,1);
             /*   console.log(momiasX);
                console.log(momiasY);*/
                momiasEnCamino--;
            }

            }

            vidasGameOver = parseInt(vidas.getAttribute("value"));
            console.log(vidasGameOver);
            if(vidasGameOver==0){
                GAMEOVER();
            }
        

            //console.log(momiasX);
            //console.log(posicionMomiaX+"momiaX          momiaY"+posicionMomiaY);


           
        }

    }


    function GAMEOVER(){
        var contenedor = document.getElementById("pagina");
        contenedor.classList.add("defeat");
        clearInterval(movMomias);
        //para no mover personaje
        document.removeEventListener("keypress", flechas, { capture: false }); 
    }
   
    function vidasAEliminar(vidasActuales){
        
        var div = document.getElementById("vidas");
        var vidasAtributo = div.getAttribute("value");
        vidasAtributo = parseInt(vidasAtributo,10);
        vidasActuales = parseInt(vidasActuales,10);
        //console.log(vidasAtributo + "  hola   "+ vidasActuales);
        resultado= vidasAtributo-vidasActuales;
        div.setAttribute("value",parseInt(resultado));


        div.innerHTML = resultado;
        //div.innerHTML ,vidas);
    }


    function AjustarAlturaPagina(){

        var altura = window.innerHeight-18+"px";
        
        document.getElementById("pagina").style.height=altura;

        dibujarMapaInicial();


}




};
/* TODO

window.addEventListener('resize', function(){
    AjustarAlturaPagina();
});*/