$(document).ready(function () {

  /* $('.accordeon__title').on("click", function (ever) {

    $this = $(event.target);
    $('.accordeon__description--active').removeClass('accordeon__description--active');
    $(this).next().addClass('accordeon__description--active');

    ('.accordeon__title').toggle();
  }); */

  var add = $('.accordeon__description');
  $('.accordeon__title').on("click", function (e) {


    if (!$(this).next().hasClass('accordeon__description--active')) {
      add.removeClass('accordeon__description--active');
      $(this).next().addClass('accordeon__description--active');
    } else {
      add.removeClass('accordeon__description--active');

    }

  })

})