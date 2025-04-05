// Este script alterna la visibilidad de los enlaces de navegación en el navbar
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const links = document.querySelector(".navbar__links");
  
    toggle.addEventListener("click", () => {
      links.classList.toggle("active");
    });
  });
  