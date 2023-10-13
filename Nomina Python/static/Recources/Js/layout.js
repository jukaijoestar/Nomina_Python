function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


//EFECTO DE ESCRITURA
var typed = new Typed(".auto-type", {
  strings: [
    "Competitividad 📈",
    "Pasión 💻",
    "Calidad 🧩",
    "Trabajo en equipo 🤝",
    "Líderes del futuro 🏆",
  ],
  typeSpeed: 100,
  backSpeed: 90,
  looped: true,
});

//CARUSEL DE IMAGENES

$(document).ready(function () {
    const $carousel = $('.carousel');
    const $prevButton = $('.prev-button');
    const $nextButton = $('.next-button');
    const slideWidth = $('.carousel-slide').outerWidth();
    let currentSlide = 0;

    $nextButton.on('click', function () {
      currentSlide++;
      if (currentSlide >= $('.carousel-slide').length) {
        currentSlide = 0;
      }
      updateCarousel();
    });

    $prevButton.on('click', function () {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = $('.carousel-slide').length - 1;
      }
      updateCarousel();
    });

    function updateCarousel() {
      const translateX = -currentSlide * slideWidth;
      $carousel.css('transform', `translateX(${translateX}px)`);
    }
});

//BOTON FLOTANTE 
document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scroll-to-top");

  // Mostrar u ocultar el botón flotante en función del desplazamiento
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  
  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


const loginButton = document.getElementById('login-button');

// Agrega un manejador de eventos al botón para mostrarlo
loginButton.addEventListener('click', () => {
  loginButton.classList.remove('show'); // Elimina la clase "show" para ocultar el botón nuevamente
});

// Agrega un manejador de eventos a algún otro botón o elemento que activará el botón de inicio de sesión
document.querySelector('.activate-login-button').addEventListener('click', () => {
  loginButton.classList.add('show'); // Agrega la clase "show" para mostrar el botón
});
