// Este script alterna la visibilidad de los enlaces de navegación en el navbar cuando se hace clic en el botón de menú (hamburguesa).
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.querySelector(".navbar__links");
  
    toggle.addEventListener("click", () => {
      links.classList.toggle("active");
    });
  });
  