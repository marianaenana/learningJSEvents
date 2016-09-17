$(function(){
  // Mi código aquí
  var titulo = $("#tituloPrincipal");

  titulo.text("Queso roñoso con jQuery");
  var boton = $("#boton-accion");

  boton.click(function(boton){
    var titulo = $("#tituloPrincipal");
    //titulo.css("color","red");
    titulo.slideToggle(2000);
  });

});
