/**
 * Created by 班莹 on 2016/2/22.
 **/

// 左右移动表单类型  
/* 
   leftMain（左面内容区域）, rightMain（右面内容区域）, 
   leftAll（左面全选按钮）, rightAll（又面全选按钮）, 
   removeLeft(向左移动), removeRight（向右移动）, removeAllLeft（全部向左移动）, removeAllRight（全部向右移动）
   */
jQuery.selectForm = function(leftMain, rightMain, leftAll, rightAll, removeLeft, removeRight, removeAllLeft, removeAllRight) {
    //向左移动
    $(removeLeft).on('click', this,
    function(e) {
        $(rightMain + ' input:checked').parents('li').each(function() {
            $(this).remove().prependTo(leftMain);
        });
        inputCheckleft();
        inputCheckright()
    });

    //向右移动
    $(removeRight).on("click", this,
    function(e) {
        $(leftMain + " input:checked").parents("li").each(function() {
            $(this).remove().prependTo(rightMain);
        });
        inputCheckleft();
        inputCheckright()

    });
    //全部向左移动
    $(removeAllLeft).on('click', this,
    function(e) {
         $(rightMain + " li").each(function() {
            $(rightMain + " input").attr('checked', true);
            $(this).remove().prependTo(leftMain);

        });
        inputCheckleft();
        inputCheckright()
    });
    //全部向右移动
    $(removeAllRight).on('click', this,
    function(e) {
       
		$(leftMain + " li").each(function() {
            $(leftMain + " input").attr('checked', true);
            $(this).remove().prependTo(rightMain);
        });
        inputCheckleft();
        inputCheckright()
    });

    //全选
    $(leftAll).on('click', this,
    function(e) {
        allCheck();

    });
    $(rightAll).on('click', this,
    function(e) {
        allCheck();;
    });
    $(leftMain).on('click', 'li',
    function(e) {
        inputCheckleft()

    });
    $(rightMain).on('click', 'li',
    function(e) {
        inputCheckright();

    });

    function allCheck() {
        if ($(leftAll).prop("checked") == true) {
            $(leftMain + " input").prop("checked", true);
        } else {
            $(leftMain + " input").prop("checked", false);
        };
        if ($(rightAll).prop("checked") == true) {
            $(rightMain + " input").prop("checked", true);
        } else {
            $(rightMain + " input").prop("checked", false);
        }
    };

    function inputCheckleft() {
        var inputNum = $(leftMain + " input").length;
        var checkedNum = $(leftMain + " input:checked").length;
        if (inputNum - checkedNum > 0) {
            $(leftAll).prop("checked", false);
        };
        if (checkedNum > 0 && inputNum > 0 && inputNum == checkedNum) {
            $(leftAll).prop("checked", true);
        };
        if (checkedNum == 0 && inputNum == 0) {
            $(leftAll).prop("checked", false);
        };

    };

    function inputCheckright() {
        var inputNum = $(rightMain + " input").length;
        var checkedNum = $(rightMain + " input:checked").length;
        if (inputNum - checkedNum > 0) {
            $(rightAll).prop("checked", false);
        };
        if (checkedNum > 0 && inputNum > 0 && inputNum == checkedNum) {
            $(rightAll).prop("checked", true);
        };
        if (checkedNum == 0 && inputNum == 0) {
            $(rightAll).prop("checked", false);
        };

    };

}