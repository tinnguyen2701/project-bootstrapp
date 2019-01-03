 $(document).ready(function(){
     function count(c1,c2,c3,d){
         var i1 = 0;
         var i2 = 0;
         var i3 = 0;
         var d1 = d/c1;
         var d2 = d/c2;
         var d3 = d/c3;
         var progress1 = setInterval(function(){
             i1++;
             if(i1 == c1)  clearInterval(progress1);
             $('.total-user .c1').text(i1 + ', ');
         },d1);
         var progress2 = setInterval(function(){
             i2++;
             if(i2 == c2)  clearInterval(progress2);
             $('.total-user .c2').text(i2 + ', ');
         },d2);
         var progress3 = setInterval(function(){
             i3++;
             if(i3 == c3)  clearInterval(progress3);
             $('.total-user .c3').text(i3);
         },d3);
     }
     var flag = true;
    $('.total-user').mouseenter(function(){
        if(flag == true){
            count(12,476,891,2000);
        }
        flag = false;
    });
     
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:5,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
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
    });
    setInterval(function(){
        $('.active-item').removeClass('active-item').parent().next().children('.item').addClass('active-item');
    },4000); 
     
     $(window).scroll(function(){
        var windowTop = $(this).scrollTop() + $(window).outerHeight();
         if(windowTop > 0){
             $('.top').css('opacity','1');
             $('.toTop').each(function(i){
                if($(this).offset().top < windowTop ){
                    $(this).addClass('slideToTop');
                } 
             });
             $('.toRight').each(function(i){
                if($(this).offset().top < windowTop ){
                    $(this).addClass('slideToRight');
                } 
             });
             $('.toBottom').each(function(i){
                if($(this).offset().top < windowTop ){
                    $(this).addClass('slideToBottom');
                } 
             });
             $('.toLeft').each(function(i){
                if($(this).offset().top < windowTop ){
                    $(this).addClass('slideToLeft');
                } 
             });
         }else{
             $('.top').css('opacity','0');
         }
     });
     
    $(".navbar a, .top a").on('click', function(event) {
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
  
});