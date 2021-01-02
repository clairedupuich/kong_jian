//获取元素节点
var jsDiv = document.getElementById("playground");
var jsSnack = document.getElementById("snack");    
var jsStart = document.getElementById("start");
var jsFood = document.getElementById("food");
var jsBody = document.getElementById("playground");
var jsScore = document.getElementById("score");
//设置全局变量
var timer;//创建定时器为全局变量
var timer1 = setInterval(eat,10);//检测位置碰撞，并且吃掉食物；
var srr = [];//记录蛇行动的位置
var num = 0 ;//记录数组的长度
var jsSnackBody ;//么米吃掉一个食物，蛇的身体

作者：IT程序狮
链接：https://juejin.cn/post/6844903459297181703
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。