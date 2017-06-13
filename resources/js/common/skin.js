// JavaScript Document
$(function() {
    $('.skin').on('click', 'span',
    function() {
        var target = $(this).text();
        changeStyle('less_file', 'value_', target);
    });
    var changeStyle = function(id, source, target) {
        var targetLessFile = source + target;
        $('style[id]').each(function() {
            $(this).remove();
        });
        $('#' + id).attr('href', '../../resources/less/skin/' + targetLessFile + '.less');
        less.refresh();
    };

})