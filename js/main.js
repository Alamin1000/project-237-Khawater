(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });

  // sticky-menu
  var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 5) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
  $(window).on('load resize',function(){
    $('.header-section').height($('.header-in').outerHeight());
    $('body').css('--header-height',$('.header-in').outerHeight() + 'px');
  });

  // hero-ex-slider
  $('.hero-ex-slider-active').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    nav:false,
    // autoplay:true,
    center:true,
    rtl:true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
            items:1,
            stagePadding: 90,
            margin:45,
            // stagePadding: 50,
            // margin:8,
        },
        410:{
          items:1,
          stagePadding: 110,
          margin:55,
        },
        576:{
            items:3,
            margin:12,
        },
        1000:{
            items:3,
        }
    }
  });


  // adjust-ratio
  $(window).on('resize load',adjustRatio);
  function adjustRatio() {
    $('.know-width').each(function(){
      var knowwv = $(this).outerWidth();
      $(this).css('--this-width', knowwv + 'px');
      $(this).css('--this-width-number', knowwv);
      });
  }

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})











