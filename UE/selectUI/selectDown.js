/**
 * Created by 班莹 on 2016/2/23.
 **/
 
// jqueryUI 选择
jQuery.selectDownUI = function(selectBoxId, clickId, BoxId) {
    $(clickId).selectable({
        stop: function() {
            var result = $(BoxId).empty();
            var aa = $(clickId + ' .ui-selected').length;
            console.log("text", aa);
            for (i = 0; i < aa; i++) {
                var bb = $(clickId + ' .ui-selected').eq(i).text();
                console.log("text", bb);
                result.append(" " + bb + "、");
            };
            if ($(BoxId).text().length == 0) {
                $(BoxId).text('请选择')
            }
        }
    });

    $(BoxId).siblings("i").click(function() {
        if ($(this).hasClass('select-up')) {
            //闭合
            $(this).removeClass('select-up');
            $(clickId).parents('.select-list').slideUp();
            $(this).addClass('select-down');
        } else {
            //展开
            $(this).removeClass('select-down');
            $(clickId).parents('.select-list').slideDown();
            $(this).addClass('select-up');
        }
    });
    $(document).bind("click",
    function(e) {
        var target = $(e.target);
        if (target.closest(selectBoxId).length == 0) {
            $(BoxId).siblings("i").removeClass('select-up');
            $(BoxId).siblings("i").addClass('select-down');
            $(clickId).parents('.select-list').slideUp();

        }

    });

};

// Z-tree 选择
jQuery.selectDownZTree = function(selectBoxId, clickId, BoxId) {
    var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            onCheck: onCheck
        }
    };
    var zNodes = [{
        id: 1,
        pId: 0,
        name: "Text A",
        open: true
    },
    {
        id: 11,
        pId: 1,
        name: "Text A-1",
        open: true
    },
    {
        id: 111,
        pId: 11,
        name: "Text A-1-1"
    },
    {
        id: 112,
        pId: 11,
        name: "Text A-1-2"
    },
    {
        id: 12,
        pId: 1,
        name: "Text A-2",
        open: false
    },
    {
        id: 121,
        pId: 12,
        name: "Text A-2-1"
    },
    {
        id: 13,
        pId: 1,
        name: "Text A-3"
    }];
    var code;
    function setCheck() {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        py = $("#py").attr("checked") ? "p": "",
        sy = $("#sy").attr("checked") ? "s": "",
        pn = $("#pn").attr("checked") ? "p": "",
        sn = $("#sn").attr("checked") ? "s": "",
        type = {
            "Y": py + sy,
            "N": pn + sn
        };
        zTree.setting.check.chkboxType = type;
        showCode('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
    }
    function showCode(str) {
        if (!code) code = $("#code");
        code.empty();
        code.append("<li>" + str + "</li>");
    }
    $(document).ready(function() {
        $.fn.zTree.init($(clickId), setting, zNodes);
        /*setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);*/
    });
    function onCheck(e, treeId, treeNode) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getCheckedNodes(true),
        v = "";
        for (var i = 0,
        l = nodes.length; i < l; i++) {
            v += nodes[i].name + "、";
        }
        if (v.length > 0) v = v.substring(0, v.length - 1);
        if (v.length == 0) v = "请选择"
        var cityObj = $(BoxId);
        cityObj.text("").append(v);

    };
    $(BoxId).siblings("i").click(function() {
        if ($(this).hasClass('select-up')) {
            //闭合
            $(this).removeClass('select-up');
            $(clickId).parents('.select-list').slideUp();
            $(this).addClass('select-down');
        } else {
            //展开
            $(this).removeClass('select-down');
            $(clickId).parents('.select-list').slideDown();
            $(this).addClass('select-up');
        }
    });
    $(document).bind("click",
    function(e) {
        var target = $(e.target);
        if (target.closest(selectBoxId).length == 0) {
            $(BoxId).siblings("i").removeClass('select-up');
            $(BoxId).siblings("i").addClass('select-down');
            $(clickId).parents('.select-list').slideUp();

        }

    });

};

// 原生 select 选择 dome
jQuery.selectDome = function(selectId, elemId) {
    $(selectId).change(function() {
        var selectOption = $(selectId + ' option:selected').val();
        var optionlength = $(selectId + ' option:selected').val().length;
        if (optionlength == 0) {
            $(elemId).children('div').hide();
        } else {
            $(elemId).find("#" + selectOption).show();
            $(elemId).find("#" + selectOption).siblings('div').hide();
        }
    })

};	

// 模拟选择
jQuery.selectDownJquery = function(BoxId,BoxTextId, ListId) {
    $(BoxTextId).siblings("i").click(function() {
        if ($(ListId).parent('div').is(':hidden')) {
            $(ListId).parent('div').slideDown();
			$(BoxTextId).siblings("i").removeClass('select-down');
			$(BoxTextId).siblings("i").addClass('select-up')
        } else {
            $(ListId).parent('div').slideUp();
			$(BoxTextId).siblings("i").removeClass('select-up');
			$(BoxTextId).siblings("i").addClass('select-down')
        }
    });
    $(ListId + ' li').click(function() {
        var liValue = $(this).text();
        $(BoxTextId).text(liValue);
		$(ListId).parent('div').slideUp();
		$(BoxTextId).siblings("i").removeClass('select-up');
		$(BoxTextId).siblings("i").addClass('select-down')

    });
	 $(document).bind("click",
    function(e) {
        var target = $(e.target);
        if (target.closest(BoxId).length == 0) {
              $(ListId).parent('div').slideUp();
			$(BoxTextId).siblings("i").removeClass('select-up');
			$(BoxTextId).siblings("i").addClass('select-down')

        }

    });
	   
};
	
