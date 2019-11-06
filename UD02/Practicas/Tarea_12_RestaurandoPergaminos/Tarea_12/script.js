/* 
 
    ^(;,;)^ : Fragmento perdido

*/
window.onload=init();

function init(e){
    
  this.document.querySelector("button").addEventListener('click',InsertarCaja);


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

  
  
  var valor = this.getAttribute("value");

  //si es dos pongo chutulu y paro
  if(valor==2){
    this.classList.add("ultimate");
  }else{
    valor++;
    this.classList.toggle("evoluciona");
    this.setAttribute("value", valor);
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



