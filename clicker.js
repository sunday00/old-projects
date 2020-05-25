$('html, body').contextmenu(function (e) {
    e.preventDefault();

});


$('html, body').mousedown(function (e) {
    $(".custom_menu").css('display', 'none');
    $('body').append('<div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div><div class="circle circle5"></div>')
    var offsetO = Math.floor(Math.random() * 50);
    var scaleO = Math.floor(Math.random() * 200);

    $('.circle').css('border','3px solid #ff6aba').css('display','inline-block').css('opacity','0').css('position','absolute').css('width','0px').css('height','0px').css('top','0').css('left','0').css('border-radius','100%').css('transform','translate(-50%, -50%)').css('z-index','-1');
    
    
    $('.circle2').css('border','3px solid #986aff').css('z-index','-1');
    $('.circle3').css('border','3px solid #bad449').css('z-index','-1');
    $('.circle4').css('border','3px solid #e68061').css('z-index','-1');
    $('.circle5').css('border','3px solid #f8e57a').css('z-index','-1');
    $('.circle6').css('border','3px solid #bad449').css('z-index','-1');
    
    
    $('.circle1').css('left', e.pageX).css('top', e.pageY).stop().animate({
        opacity: 1,
        width: 0,
        height: 0
    }, 100, function () {
        $('.circle1').stop().animate({
            opacity: 0,
            width: scaleO,
            height: scaleO
        }, 500, function () {
            $('.circle1').css('width', '50').css('height', '50');
        });
    })

    $('.circle2').css('left', e.pageX + offsetO).css('top', e.pageY + offsetO).stop().animate({
        opacity: 1,
        width: scaleO + scaleO,
        height: scaleO + scaleO
    }, 100, function () {
        $('.circle2').stop().animate({
            opacity: 0,
            width: scaleO,
            height: scaleO
        }, 200, function () {
            $('.circle2').css('width', '50').css('height', '50');
        });
    })

    $('.circle3').css('left', e.pageX - offsetO).css('top', e.pageY - offsetO).stop().animate({
        opacity: 1,
        width: scaleO,
        height: scaleO
    }, 100, function () {
        $('.circle3').stop().animate({
            opacity: 0,
            width: scaleO,
            height: scaleO
        }, 300, function () {
            $('.circle3').css('width', '50').css('height', '50');
        });
    })

    $('.circle4').css('left', e.pageX - offsetO + 30).css('top', e.pageY - offsetO - 30).stop().animate({
        opacity: 1,
        width: scaleO + 30,
        height: scaleO + 30
    }, 200, function () {
        $('.circle4').stop().animate({
            opacity: 0,
            width: scaleO,
            height: scaleO
        }, 400, function () {
            $('.circle4').css('width', '50').css('height', '50');
        });
    })

    $('.circle5').css('left', e.pageX - offsetO - 15).css('top', e.pageY - offsetO + 40).stop().animate({
        opacity: 1,
        width: scaleO - 33,
        height: scaleO - 33
    }, 250, function () {
        $('.circle5').stop().animate({
            opacity: 0,
            width: scaleO,
            height: scaleO
        }, 421, function () {
            $('.circle5').css('width', '50').css('height', '50');
        });
    })






})
