// GLOBAL SCRIPT

const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

if (btn) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
