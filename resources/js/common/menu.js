// JavaScript Document
$(function() {
    screenSize();
    window.onresize = function() {
        screenSize()
    }
    $('body').on('click', '.menu-icon',
    function() {
        if ($('.content').hasClass('content-sm')) {
            $('.content').removeClass('content-sm');
            $('.menu').removeClass('menu-sm');
            $(this).removeClass('menu-icon-sm')
        } else {
            $('.content').addClass('content-sm');
            $(this).addClass('menu-icon-sm');
            $('.menu').addClass('menu-sm');
        }

    });
    $('#menu').on('click', '.level-one',
    function(e) {
        $('li ul', e.delegateTarget).slideUp();
      
        if ($(this).siblings('ul').is(":hidden")) {
            $(this).siblings('ul').slideDown();
            
        } else {
            $(this).siblings('ul').slideUp();
         
        };

    });

});
function screenSize() {
    var screenWidth = $(window).width();
    if (screenWidth < 1360) {
        $('.menu-icon').show();
		 $('.content').addClass('content-sm');
		 $('.menu-icon').addClass('menu-icon-sm');
         $('.menu').addClass('menu-sm');
    } else {
        $('.menu-icon').hide();
        $('.content').removeClass('content-sm');
        $('.menu-icon').removeClass('menu-icon-sm');
        $('.menu').removeClass('menu-sm');
    }
};
function menuFoc(menuId, i, si) {
    $(menuId + ' li').eq(0).children('.level-one').removeClass('level-one-foc');
    $(menuId + ' li').eq(i).children('.level-one').addClass('level-one-foc')
	$(menuId + ' li').eq(i).children('ul').show().children('li').eq(si).addClass('level-two-foc');
  
}