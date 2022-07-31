/*Now There Is Replace JavaScript*/
// 将ak设置为你认为列表中最多的关键词,否则会出大问题的啦~建议不要小于50哦~
var ak=1000
// 你只能上面语句修改=后面的数字,不要加双/单引号!
// 这里的代码不要动,懂了你会后悔的
var i = "out('i')变量 i = 'u' out('a') 大于 条件循环"
var CNKey = [
    "out",
    "终端",
    "输出日志",
    "变量循环",
    "整数",
    "浮点",
    "变量",
    "长度",
    "条件循环",
    "如果",
    "常量",
    "让",
    "函数",
    "在",
    "为",
    "抛出",
    "大于",
    "加一",
    "文档类型",
    "超文本标记",
    "头",
    "元",
    "编码设置",
    "名字",
    "视图端口",
    "上下文",
    "宽度",
    "设备宽",
    "初始比例",
    "标题",
    "主体",
    "一号字体",
    "语言",
    "简体中文",
    "脚本"
]
var JSKey = [
    "console.log",
    "console",
    "log",
    "for",
    "int",
    "float",
    "var",
    "length",
    "while",
    "if",
    "const",
    "let",
    "function",
    "in",
    " = ",
    "throw",
    " > ",
    "++",
    "DOCTYPE",
    "html",
    "head",
    "meta",
    "charset",
    "name",
    "viewport",
    "content",
    "width",
    "device-width",
    "initial-scale",
    "title",
    "body",
    "h1",
    "lang",
    "zh-cn",
    "script"
]
var now = 0
while (now <= ak) {
    for (s in CNKey) {
        var i = i.replace(CNKey[s], JSKey[s])
    }
    now += 1
}
console.log(i)
alert(i)
