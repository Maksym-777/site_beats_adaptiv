const burgerMenu = document.querySelector(".menu-mobile__block");
const menu = document.querySelector(".menu-mobile__list");
const closeMenu = document.querySelector(".menu-mobile__close");
const menuMobile = document.querySelector(".menu-mobile");

burgerMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menuMobile.style.visibility = 'visible';
});

closeMenu.addEventListener('click', function (e) {
  e.preventDefault();
  menuMobile.style.visibility = 'hidden';

});

/* --------- accordeon team --------------- */

$(document).ready(function () {

  $(".team__block--mobile").hide();
  if (window.matchMedia('(max-width: 768px)').matches) {
    $(".team__item").css("width", "60%");
    $(".team__block--pc").hide();
    $(".team__block--mobile").show();
  }

  /*  $('.team__name').on("click", function (ever) {
     $this = $(event.target);
     $('.team__accordion--active').removeClass("team__accordion--active");
     $('.team__name--active').removeClass("team__name--active");
     $this.next().addClass("team__accordion--active");
     $this.addClass("team__name--active"); */



  /*  $('.team__name').click(function () {
     $(this).next().slideToggle("slow");
     $(this).toggleClass('team__name--active'); */

  /* $(this).next().toggleClass('team__accordion--active');
  $(this).toggleClass('team--active') */
  /* }); */

  var add = $('.team__accordion');
  var add2 = $('.team__name');
  $('.team__name').on("click", function (e) {

    if (!$(this).next().hasClass('team__accordion--active')) {
      add.removeClass('team__accordion--active');
      add2.removeClass('team__name--active');

      $(this).next().addClass('team__accordion--active');
      $(this).addClass("team__name--active")
    } else {
      add.removeClass('team__accordion--active');
      add2.removeClass('team__name--active');

    }

  })
})



/* --------- slider --------------- */

$(document).ready(function () {
  $('.slider__image').slick({
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: document.querySelector('#my-arrow-prev'),
  });
});



/* ----------- reviews ------------ */

$(".reviews__item").not(":first").hide();

$(".reviews .reviews__switcher-item").click(function () {
  $(".reviews .reviews__switcher-item").removeClass("reviews__switcher-item--active").eq($(this).index()).addClass("reviews__switcher-item--active");
  $(".reviews__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("reviews__switcher-item--active");