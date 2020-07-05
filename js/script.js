const burgerMenu = document.querySelector(".menu-mobile__block");
const menu = document.querySelector(".menu-mobile__list");
const closeMenu = document.querySelector(".menu-mobile__close");
const menuMobile = document.querySelector(".menu-mobile");

burgerMenu.addEventListener('click', function (e) {
  e.preventDefault();
  /* menuMobile.style.display = 'block'; */
  menuMobile.style.visibility = 'visible';
});

closeMenu.addEventListener('click', function (e) {
  e.preventDefault();
  /* menuMobile.style.display = 'none'; */
  menuMobile.style.visibility = 'hidden';

});

$(document).ready(function () {
  $('.team__name').click(function () {
    $(this).next().slideToggle("slow");
    $(this).toggleClass('team__name--active')

    /* $(this).next().toggleClass('team__accordion--active');
    $(this).toggleClass('team--active') */
  });
})


$(document).ready(function () {
  $('.slider__image').slick({
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: document.querySelector('#my-arrow-prev')
  });
});



$(".reviews__item").not(":first").hide();

$(".reviews .reviews__switcher-item").click(function () {
  $(".reviews .reviews__switcher-item").removeClass("reviews__switcher-item--active").eq($(this).index()).addClass("reviews__switcher-item--active");
  $(".reviews__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("reviews__switcher-item--active");



