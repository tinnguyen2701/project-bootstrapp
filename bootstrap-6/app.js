$(document).ready(function(){
    $("#ceo-Carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll:"vertical"
    });
    $("#project-Carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll:"vertical"
    });
    
    var owl = $('.owl-carousel');
     owl.owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if( winTop > 0 ){
            $('nav').addClass('navbar-black');
        }else{
            $('nav').removeClass('navbar-black');
        }
    });
    
    $(".navbar a, .slidedown a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
          });
        } // End if
      });
});