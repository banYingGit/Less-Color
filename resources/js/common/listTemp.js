
// 创建数据模板
function ListTemp(templateId,eleId,num){
    //templateId：模版ID   eleId：元素ID   num：数据数量
    var source = templateId.html();
    var template = Handlebars.compile(source);
    var data = {
        list: []
    };
    for (var i = 0; i < num; i++) {
        data.list.push({
			number: i+1
			});
    }
    var list = template(data);
    eleId.append($(list));
}