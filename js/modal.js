/* ------------ modal -------------- */

$('.form').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $('#modal');
  const content = modal.find('.modal__content');

  modal.removeClass("error-modals");

  [name, phone, comment, to].forEach(field => {
    field.removeClass("input-error");
    if (field.val().trim() === "") {
      field.addClass("input-error")
    }
  })

  const errorFields = form.find(".input-error");
  if (errorFields.length === 0) {

    $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val()
      },
      success: data => {
        content.text(data.message);
        /* console.log(data) */
        $.fancybox.open({
          src: "#modal",
          type: "inline",
        })
      },
      error: data => {
        const message = data.responseJSON.message;
        content.text(message);
        modal.addClass("error-modals");
        $.fancybox.open({
          src: "#modal",
          type: "inline",
        })
        /* console.log(data) */
      }
    });

  }



  /* $.fancybox.open({
    src: "#modal",
    type: "inline",
  }) */
})

$('.app-close-modal').click(e => {
  e.preventDefault();
  $.fancybox.close()
})