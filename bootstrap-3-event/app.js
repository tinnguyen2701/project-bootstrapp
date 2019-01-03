$(document).ready(function(){
    function star(){
        var $colmd4 = $('#explore .collect .col-md-4');
        var maxHeight = $colmd4.eq(0).outerHeight();
        $colmd4.each(function(i){
           if($(this).outerHeight() > maxHeight){
               maxHeight = $(this).outerHeight();
           } 
        });

        $colmd4.each(function(i){
           $(this).css('height', maxHeight +1 + 'px'); 
        });
    }
    star();
    var i = 1;
    setInterval(function(){
        i++;
        if(i == 4){ i = 1}
        $('#site').css('background-image','url(https://ducphuc1202.github.io/bootstrap3/images/banner' + i + '.jpg)')
    },5000);
    
    var scrollOld = 100;
    var scrollNew = 0;
    $(document).scroll(function(){
        scrollNew = $(this).scrollTop();
        if(scrollNew > scrollOld){
            $('.navbar').css('opacity','0');
            scrollOld = scrollNew;
        }else{
            $('.navbar').css('opacity','1');
            scrollOld = scrollNew;
        }
    });
});