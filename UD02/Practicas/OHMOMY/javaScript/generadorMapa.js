
window.onload = function(){

    let hombrecillo = "P";
    let momia = "M";
    let figura="";

    let camino = 1;
    let caminoPisado = 2;

    //y largo, x ancho
    var momiaX = 20;
    var momiaY = 13;


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
        if(filas==momiaY && columnas==momiaX){

            mapa[columnas][filas]="M";
            addFigura("M");

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
            /*console.log(mapa[columnas][filas]);
            this.console.log(columnas+" "+filas);*/

        }

    }


    function addFigura(figura){

        
    }

    function addDiv(colum,fil,style,figura){
          
      //creamos div 
      var para = document.createElement("div");

      if(style==0){
        if(colum==8 && fil==0){ para.classList.add("divCamino"); }}else{
        if(style==1){ para.classList.add("divCamino"); } else{
            para.classList.add("divCaja");
        }
    }

      //creamos texto
      var t = document.createTextNode(mapa[colum][fil]); 
      //metemos texto en div
      para.appendChild(t);



      if(figura=="M"){
          console.log();
        para.classList.add("momia");
    }


      //insertamos div en html
      document.getElementById("main").appendChild(para);  




}

    console.log(mapa);


  
   /*
    var classDiv = document.getElementsByClassName("cuadrado");
    classDiv.classList.add("cuadradp");*/

};