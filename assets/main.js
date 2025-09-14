// main.js - Handles mobile menu animation and toggling

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menuToggle && mobileMenu && hamburgerIcon && closeIcon) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      hamburgerIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");

      // Animate links one by one
      if (!mobileMenu.classList.contains("hidden")) {
        const links = document.querySelectorAll(".mobile-link");
        links.forEach((link, index) => {
          link.style.opacity = 0;
          link.style.transform = "translateX(-20px)";
          setTimeout(() => {
            link.style.transition = "all 0.4s ease-in-out";
            link.style.opacity = 1;
            link.style.transform = "translateX(0)";
          }, index * 150); // staggered delay
        });
      }
    });
  }
});
