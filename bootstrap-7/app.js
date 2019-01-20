$(window).on('load', function () {
    $('.pre-load').fadeOut('slow', function () {
        $(this).remove();
        
    });
});

    var flag = true;
    $(window).scroll(function(){
        var windowTop = $(this).scrollTop() + $(window).outerHeight();
        $('.content-skill .pg').each(function(){
            if($(this).offset().top < windowTop){
                $(this).animate({width:  $(this).attr('data-skill')},1000)
            }
        })
        
        if($('#service').offset().top < windowTop){
            if(flag == true){
                runCount();
                flag = false;
            }
        }
        if($(this).scrollTop() > 100){
           $('nav.navbar').removeClass('bg-transparent').addClass('bg-black');
        }
        else{
            $('nav.navbar').removeClass('bg-black').addClass('bg-transparent');
        }
    });
    $(".navbar a").on('click', function(event) {
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 900, function(){
              window.location.hash = hash;
              });
        }
    });
    
//    team, pricing-carousel
   $('#team-carousel, #pricing-carousel').owlCarousel({
        loop:true,
        margin:10,
//        nav:true,
        pagination: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    
//news-carousel
    $('#news-carousel').owlCarousel({
        loop:true,
        margin:40,
        pagination: true,
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
    })
    
//    tesimonial-carousel
    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        pagination: true,
        responsive:{
            0:{
                items:1
            }
        }
    })
    
//    partner
    $('#partner-carousel').owlCarousel({
        loop:true,
        margin:0,
        pagination: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
    
    var options = {
      useEasing: true, 
      useGrouping: true, 
      separator: '', 
      decimal: '0', 
    };
    function runCount(){
        var demoUpload = new CountUp('counter-upload', 0, 991, 0, 2.5, options);
        if (!demoUpload.error) {
          demoUpload.start();
        } else {
          console.error(demoUpload.error);
        }
        var demoProject = new CountUp('counter-project', 0, 7394, 0, 2.5, options);
        if (!demoProject.error) {
          demoProject.start();
        } else {
          console.error(demoProject.error);
        }
        var demoCode = new CountUp('counter-code', 0, 18745, 0, 2.5, options);
        if (!demoCode.error) {
          demoCode.start();
        } else {
            console.error(demoCode.error);
        }
        var demoClient = new CountUp('counter-client', 0, 8423, 0, 2.5, options);
        if (!demoClient.error) {
          demoClient.start();
        } else {
         console.error(demoClient.error);
        }
    }