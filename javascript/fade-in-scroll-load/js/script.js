
// Main Visual
// -------------------------------

$(function () {
   // this function loads the class  as active to the header on webpage load
    $(document).ready(function(){
            $(".js-window-trigger").each(function () {
                    $(this).addClass('is-active');
            });
        });
  });

// jquery function

 // the function aninamtes the header to fade in using the css provided in common.css
$(function () {
  
  if ($('.js-scroll-trigger').length) {
    scrollAnimation();
  }

  function scrollAnimation() {
      $(window).scroll(function () {
          $(".js-scroll-trigger").each(function () {
              let position = $(this).offset().top,
                  scroll = $(window).scrollTop(),
                  windowHeight = $(window).height();

              if (scroll > position - windowHeight + 80) {
                  $(this).addClass('is-active');
              }
          });
      });
  }
  // window loading trigger
  $(window).trigger('scroll');
});

//plugin by Wakasato on www.jqueryscript.net