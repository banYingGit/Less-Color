    $(function () {
     $('.by-code li').click(function(){
		 $(this).addClass('on').children('by-code-box').show();
		 $(this).siblings('li').removeClass('on').children('by-code-box').hide();
		 })
    })