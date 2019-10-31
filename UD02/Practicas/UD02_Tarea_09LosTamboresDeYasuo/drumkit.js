function IniciarSonido(e){
console.log(e);
const sonido = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if(!sonido){return} //delete funcion
sonido.currentTime=0;
sonido.play();
const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
div.classList.add("sombra");

}

function removeTrans(){
    this.classList.remove("sombra");
}

window.addEventListener('keydown',IniciarSonido);

const key = document.querySelectorAll("div");
key.forEach(boton => {boton.addEventListener('transitionend', removeTrans);});
