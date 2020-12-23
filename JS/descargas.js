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
