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

cambiarSlides(1);

}, false);

document.getElementById('Boton2').addEventListener('click', function(){

cambiarSlides(-1);

}, false);

//Para el carrusel de fotos
var indiceCarrusel = 1;
mostrarFotos(indiceCarrusel);
//Para los controles del siguiente y el anterior


function cambiarSlides(n){
  mostrarFotos(indiceCarrusel += n);
}
function mostrarFotos(n) {
  var i;
  var fotos = document.getElementsByClassName("Carrusel1");
  if (n > fotos.length) {
    indiceCarrusel = 1
  }
    if (n < 1) {
      indiceCarrusel = fotos.length
    }
      for (i = 0; i < fotos.length; i++) {
        fotos[i].style.display = "none";
      }
  var ic = (indiceCarrusel-1);
  fotos[ic].style.display = "block";
}
