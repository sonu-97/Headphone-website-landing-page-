
// applied toggle class #menu. 
$(document).ready(function () {

  $('#menu').click(function () {

    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');

  });

  // removed toggle class .
  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // add and remove class for anchor tags.
    $('section').each(function () {

      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');

      if (top >= offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#${id}"]').addClass('active')
      }

    });

  });

  // adding function for 
  $('.accordion-heading').click(function () {
    $('.accordion .accordion-content').slideUp();

    $(this).next('.accordion-content').slideDown()
  });


});