
window.onload = function(){
/*
    let personaje = "P";

    let momia = "M";

    let camino = 1;*/
    var mapa = [];
    var divMapa=document.getElementById("mapa");

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
        

            //filas que no chocan con las cajas que contienen cofres llaves etc..
            if(filas==0 | filas==1 | filas==4 | filas==7 | filas==10 | filas==13 | columnas==0 | columnas==4 | columnas==8 | columnas==12 | columnas==16 | columnas==20){
                mapa[columnas][filas]=1;

                console.log(mapa[columnas][filas]);

                //creamos div 
                var para = document.createElement("div");    
                //creamos texto
                t = document.createTextNode(mapa[columnas][filas]); 
                //metemos texto en div
                para.appendChild(t);
                //insertamos div en html
                document.getElementById("main").appendChild(para); 
                
                this.console.log(para);
                
            }else{ 

                mapa[columnas][filas]="2";
                

                t = document.createTextNode(mapa[columnas][filas]); 
                para.appendChild(t);
                document.getElementById("main").appendChild(para); 

            }
        }

    }


    console.log(mapa);


  
   /*
    var classDiv = document.getElementsByClassName("cuadrado");
    classDiv.classList.add("cuadradp");*/

};