$(document).ready(function(){
  $('.half-and-half').slick({
    dots: true,
    mobileFirst: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }
    ]
  });
});