const burgerMenuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLink = document.querySelectorAll(".mobile-menu__link");
const body = document.getElementById("body");

const mobileMenuToggle = (e) => {
  body.classList.toggle("body-scroll-off");
  burgerMenuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-open");
};

burgerMenuBtn.addEventListener("click", mobileMenuToggle);

mobileMenuLink.forEach((link) =>
  link.addEventListener("click", mobileMenuToggle)
);
