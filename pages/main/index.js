document.addEventListener("DOMContentLoaded", ready);

function ready() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".nav-item-link");
  const logo = document.querySelector(".logo");
  const shadow = document.querySelector(".menu-shadow");
  const header = document.querySelector("header");

  function toggleMenu(event) {
    console.log("click hamburger");
    menu.classList.toggle("open");
    hamburger.classList.toggle("is-active");
    if (menu.classList.contains("open")) {
      logo.style.visibility = "hidden";
      document.body.style.overflowY = "hidden";
      shadow.style.display = "block";
      header.style.backgroundColor = "unset";
    } else {
      setTimeout(() => {
        document.body.style.overflowY = "auto";
        logo.style.visibility = "visible";
        shadow.style.display = "none";
        header.style.backgroundColor = null;
      }, 500);
    }
  }

  function closeMenu(event) {
    if (event.target.classList.contains("nav-item-link")) {
      console.log("click links");
    }
    document.body.style.overflowY = "auto";
    hamburger.classList.remove("is-active");
    logo.style.visibility = "visible";
    menu.classList.remove("open");
    shadow.style.display = "none";
    header.style.backgroundColor = null;
  }

  hamburger.addEventListener("click", toggleMenu);
  navLinks.forEach((el) => el.addEventListener("click", closeMenu));
  shadow.addEventListener("click", closeMenu);
  initPagination();
}
