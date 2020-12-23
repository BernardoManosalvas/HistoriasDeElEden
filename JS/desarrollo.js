function myFunction() {
  var x = document.getElementById("losLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById('HAMBURGUESA').src = "../IMG/MENU.png";
  } else {
    x.style.display = "block";
      document.getElementById('HAMBURGUESA').src = "../IMG/MENUX.png";
  }
}

//Intenamos con un addEventListener
document.getElementById('Boton').addEventListener('click', function(){
cambiarSlides1(1);
}, false);

document.getElementById('Boton2').addEventListener('click', function(){
cambiarSlides1(-1);
}, false);

document.getElementById('Boton4').addEventListener('click', function(){
cambiarSlides2(1);
}, false);

document.getElementById('Boton3').addEventListener('click', function(){
cambiarSlides2(-1);
}, false);

document.getElementById('Boton6').addEventListener('click', function(){
cambiarSlides3(1);
}, false);

document.getElementById('Boton5').addEventListener('click', function(){
cambiarSlides3(-1);
}, false);



//Para el carrusel de fotos
var indiceCarrusel1 = 1;
mostrarFotos1(indiceCarrusel1);
//Para los controles del siguiente y el anterior


function cambiarSlides1(n){
  mostrarFotos1(indiceCarrusel1 += n);
}
function mostrarFotos1(n) {
  var i;
  var fotos = document.getElementsByClassName("Carrusel1");
  if (n > fotos.length) {
    indiceCarrusel1 = 1
  }
    if (n < 1) {
      indiceCarrusel1 = fotos.length
    }
      for (i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "none";
      }
  var ic = (indiceCarrusel1-1);
  fotos[ic].style.display = "block";
}

//Para el carrusel de fotos
var indiceCarrusel2 = 1;
mostrarFotos2(indiceCarrusel2);
//Para los controles del siguiente y el anterior


function cambiarSlides2(n){
  mostrarFotos2(indiceCarrusel2 += n);
}
function mostrarFotos2(n) {
  var i;
  var fotos = document.getElementsByClassName("Carrusel2");
  if (n > fotos.length) {
    indiceCarrusel2 = 1
  }
    if (n < 1) {
      indiceCarrusel2 = fotos.length
    }
      for (i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "none";
      }
  var ic = (indiceCarrusel2-1);
  fotos[ic].style.display = "block";
}

//Para el carrusel de fotos
var indiceCarrusel3 = 1;
mostrarFotos3(indiceCarrusel3);
//Para los controles del siguiente y el anterior


function cambiarSlides3(n){
  mostrarFotos3(indiceCarrusel3 += n);
}
function mostrarFotos3(n) {
  var i;
  var fotos = document.getElementsByClassName("Carrusel3");
  if (n > fotos.length) {
    indiceCarrusel3 = 1
  }
    if (n < 1) {
      indiceCarrusel3 = fotos.length
    }
      for (i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "none";
      }
  var ic = (indiceCarrusel3-1);
  fotos[ic].style.display = "block";
}
