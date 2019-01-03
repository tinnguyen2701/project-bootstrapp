$(document).ready(function(){
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
    $(window).scroll(function(){
        var windowTop = $(this).scrollTop();
         if(windowTop > 0){
             $('nav.navbar').css('background-color','rgba(0,0,0,1)');
             $('nav.navbar').css('padding','0px');
             $('.top').css('opacity','1');
         }else{
             $('nav.navbar').css('background-color','rgba(0,0,0,.7)');
             $('nav.navbar').css('padding','10px');
             $('.top').css('opacity','0');
         }
     });
    
    
//    slide touchSwipe
    $("#people-carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll:"vertical"
    });
    $("#about-carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll:"vertical"
    });
    
//    gallery
    //    code for isotope
    $('#gallery .element-item').css('padding','20px');
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
    });

    // filter functions
    var filterFns = {
    };

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
//  end code isotope
    var index;
    $('#gallery .image-item').click(function(e){
        $('#slider-gallery .modal-body .col-xs-10 img').remove();
        $('#slider-gallery .modal-body .text-left p').remove();
        
        var $img = $(this).find('img').clone(true);
        var $caption = $(this).find('.caption');
        index = $img.attr('alt');
        
        $('#slider-gallery .modal-body .col-xs-10').append($img);
        $('#slider-gallery .modal-body .text-left').append($caption);
        $('#slider-gallery .modal-body .text-right .index').text(index);
        $("#slider-gallery").modal();
        
        index = index - 1;
        
    });
    var arrImage = $('#gallery .image-item img');
    var arrCaption = $('#gallery .caption');
    $('#slider-gallery button.prev').click(function(){
        $('#slider-gallery .modal-body .col-xs-10 img').remove();
        $('#slider-gallery .modal-body .text-left p').remove();
        
        index = index - 1;
        if(index < 0) index = arrImage.length - 1;
        var $img = arrImage.eq(index).clone(true);
        var $caption = arrCaption.eq(index).clone(true);
        
        $('#slider-gallery .modal-body .col-xs-10').append($img);
        $('#slider-gallery .modal-body .text-left').append($caption);
        $('#slider-gallery .modal-body .text-right .index').text(index+1);
    });
    $('#slider-gallery button.next').click(function(){
        $('#slider-gallery .modal-body .col-xs-10 img').remove();
        $('#slider-gallery .modal-body .text-left p').remove();
        
        index = index + 1;
        if(index == arrImage.length) index = 0;
        var $img = arrImage.eq(index).clone(true);
        var $caption = arrCaption.eq(index).clone(true);
        
        $('#slider-gallery .modal-body .col-xs-10').append($img);
        $('#slider-gallery .modal-body .text-left').append($caption);
        $('#slider-gallery .modal-body .text-right .index').text(index+1);
    });
    
    
//    coming-soon
//    var minutes = 1000 * 60;
    var timeEnd = new Date('february 5, 2019 00:00:00').getTime();
    var time = setInterval(function(){
        var now = new Date().getTime();
        var distance = timeEnd - now;
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);
        $('#coming-soon .day').text(d);
        $('#coming-soon .hour').text(h);
        $('#coming-soon .min').text(m);
        $('#coming-soon .sec').text(s);
    },1000);
    
    
//    fun-fact
    var options = {
      useEasing: true, 
      useGrouping: true, 
      separator: '', 
      decimal: '0', 
    };
    var flag2 = true;
    $('#fun-fact').hover(function(){
        if(flag2 == true){
            var demoProject = new CountUp('counter-project', 0, 5119, 0, 2.5, options);
            if (!demoProject.error) {
              demoProject.start();
            } else {
              console.error(demoProject.error);
            }
            var demoProject = new CountUp('counter-project', 0, 5119, 0, 2.5, options);
            if (!demoProject.error) {
              demoProject.start();
            } else {
              console.error(demoProject.error);
            }
            var demoProject = new CountUp('counter-project', 0, 5119, 0, 2.5, options);
            if (!demoProject.error) {
              demoProject.start();
            } else {
              console.error(demoProject.error);
            }
            var demoClient = new CountUp('counter-client', 0, 487, 0, 2.5, options);
            if (!demoClient.error) {
              demoClient.start();
            } else {
              console.error(demoClient.error);
            }
            var demoCoffee = new CountUp('counter-coffee', 0, 13730, 0, 2.5, options);
            if (!demoCoffee.error) {
              demoCoffee.start();
            } else {
              console.error(demoCoffee.error);
            }
            var demoAwards = new CountUp('counter-awards', 0, 154, 0, 2.5, options);
            if (!demoAwards.error) {
              demoAwards.start();
            } else {
              console.error(demoAwards.error);
            }
            flag2 = false;
        }
    });
    
//    skill
    var flag3 = true;
    $('#skill').hover(function(){
        if( flag3 == true){
            $('#circle-a').circleProgress({
                value : 0.83,
            });
            $('#circle-b').circleProgress({
                value : 0.51,
            });
            $('#circle-c').circleProgress({
                value : 0.64,
            });
            $('#circle-d').circleProgress({
                value : 0.90,
            });

            flag3 = false;
        }
        
    });
    var progressBarOptions = {
        startAngle: -1.55,
        size: 200,
        value: 0,
        fill: {
            color: '#0baf4e'
        },
        emptyFill: 'rgba(255,255,255,1)',
        animation: {
            duration: 2000
        }
    }
    
    $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        //$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });
});