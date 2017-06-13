// JavaScript Document
$(function() {
    $('#giantScreen').click(function() {
        $('.giant-screen').addClass('giant-screen-show')
    });
	 $("#UI").click(function() {
        $('.giant-screen').removeClass('giant-screen-show')
    });
})