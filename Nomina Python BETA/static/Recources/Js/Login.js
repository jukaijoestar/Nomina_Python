const inputs = document.querySelectorAll(".input-field");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const backgroundImages = document.querySelectorAll(".background-image");
  let currentIndex = 0;

  function showNextImage() {
    backgroundImages[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    backgroundImages[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 5000); // Cambia la imagen cada 5 segundos (ajusta el tiempo según tus preferencias)
});