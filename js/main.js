const lampButton = document.getElementById("lamp-button");
const lampImg = document.getElementById("lampadina-img");

lampButton.addEventListener("click", function() {
    lampImg.src = "./img/yellow_lamp.png";
    lampImg.style.transform = "scaleX(-1)"; // specchia la nuova immagine per sostituirla nella stessa posizione visiva della precedente
  });