$(document).ready(function () {

    $('.accordeon__title').on("click", function (ever) {
      
    /* $this = $(event.target); */
    $('.accordeon__description--active').removeClass('accordeon__description--active');
    $(this).next().addClass('accordeon__description--active');
    
  });
  
})