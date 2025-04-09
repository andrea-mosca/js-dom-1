const lampButton = document.getElementById("lamp-button");
const lampImg = document.getElementById("lampadina-img");

// lampButton.addEventListener("click", function() {
//     lampImg.src = "./img/yellow_lamp.png";
//     lampImg.style.transform = "scaleX(-1)"; // specchia la nuova immagine per sostituirla nella stessa posizione visiva della precedente
//   });


lampButton.addEventListener("click", function() {
    if (lampButton.textContent.includes("Accendi")) {
      lampImg.src = "./img/yellow_lamp.png";
      lampImg.style.transform = "scaleX(-1)";
      lampButton.textContent = "Spegni";
    } else {
      lampImg.src = "./img/white_lamp.png";
      lampImg.style.transform = "scaleX(1)";
      lampButton.textContent = "Accendi";
    }
  });