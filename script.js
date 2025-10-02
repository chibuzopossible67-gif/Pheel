// Add hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const menuToggle = document.createElement("button");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰"; // hamburger icon
  nav.prepend(menuToggle);

  const navMenu = nav.querySelector("ul");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
