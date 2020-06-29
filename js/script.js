const burgerMenu = document.querySelector(".menu-mobile__block");
const menu = document.querySelector(".menu-mobile__list");
const closeMenu = document.querySelector(".menu-mobile__close");
const menuMobile = document.querySelector(".menu-mobile");

burgerMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menuMobile.style.display = 'none';
  
});