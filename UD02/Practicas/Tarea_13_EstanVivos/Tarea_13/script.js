/* 
 
    ^(;,;)^ : Fragmento perdido

*/
window.onload=init();

girarCthulu=false;
dvdCthulu=false;
stop=true;

function init(e){
    
  this.document.querySelector("button").addEventListener('click',InsertarCaja);
  this.document.querySelectorAll("img").forEach(tipoAnimacion => tipoAnimacion.addEventListener("click", animacion));

}




  function animacion(){
    var animacionOK = this.getAttribute("value");

    switch (animacionOK) {
      case "girarCthulu":{
        girarCthulu=true;dvdCthulu=false; stop=false;
      }break;
      case "dvdCthulu":{
        girarCthulu=false;dvdCthulu=true; stop=false;
      }break;
      case "stop":{
        girarCthulu=false; dvdCthulu=false; stop=true;
      }break;
    }

    console.log(girarCthulu);
    console.log(dvdCthulu);
    console.log(stop);

  }



function InsertarCaja(){

    //creamos box
    var caja = document.createElement("box");
    //insertamos div en html
    document.querySelector("container").appendChild(caja);  
    //listener para el cuadrao
    caja.addEventListener('click', mover);
    //pongo hover
   
    //creamos texto
    //var t = document.createTextNode(mapa[colum][fil]); 
    //metemos texto en box caja no utilizo en este caso
    //caja.appendChild(t);

}



function mover(){

  
  //la primera vez que lo obtengo es null
  var valor = this.getAttribute("value");

  //si es dos pongo chutulu y paro
  if(valor==2){
      this.classList.add("ultimate");
      this.removeEventListener("click", mover, false);
      //para que no repinte el chutlu lo pinta una vez y se para el bucle
      valor=3;
  }else{
    //si es null o uno continue derecha izquierda y para
    if(valor==null || valor==1){
      valor++;
      this.classList.toggle("evoluciona");
      this.setAttribute("value", valor);
    }
  }
  

  
    if(girarCthulu){
      console.log("girarCthulu entra");
      if(!this.classList.contains("girarCthulu") && !this.classList.contains("dvdCthulu") || this.classList.contains("stop")){
        this.classList.add("girarCthulu");
        girarCthulu=false;
        console.log(girarCthulu);
      }
    }
    if (dvdCthulu) {
      if(!this.classList.contains("girarCthulu") && !this.classList.contains("dvdCthulu") || this.classList.contains("stop")){
        this.classList.add("dvdCthulu");
        dvdCthulu=false;
      }
    }
    if(stop){
      if(this.classList.contains("girarCthulu") || this.classList.contains("dvdCthulu")){
        this.classList.remove("girarCthulu");
        this.classList.remove("dvdCthulu");
        stop=false;
      }
    }
  
  
  //si es dos paro el event 
  /*
  if(valor==2){
    this.removeEventListener("click", mover, false);
  }else{
    this.removeEventListener("click", mover, false);
    this.addEventListener('transitionend',function(){this.addEventListener('click',mover)});
    
  }*/
 

}



