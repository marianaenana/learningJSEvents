//querySelector busca algo del DOM y lo trae en la variable


//DOMContentLoaded - cuando la página cargue
window.addEventListener("DOMContentLoaded", funcionX);

function funcionX(){
  setTimeout(cambiaTitulo, 3000);
  var boton = document.querySelector("#boton-accion");
  boton.addEventListener("click", cambiarColor);
}

function cambiaTitulo(elemento){
  var titulo = document.querySelector("#tituloPrincipal");

  titulo.innerText = "Queso roñoso";
}

function cambiarColor(boton){
  var titulo = document.querySelector("#tituloPrincipal");

  titulo.style = "color: red";
}
