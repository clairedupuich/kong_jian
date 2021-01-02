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

    //开始游戏
    document.onkeydown = function(e){
        var evt = e || window.event;    
            switch(evt.keyCode) {
            //向左移动
            case 37:
                clearInterval(timer);
                timer=window.setInterval(runLeft,10)
                function runLeft(){
                    if (jsSnack.offsetLeft > 0) {
                        jsSnack.style.left = jsSnack.offsetLeft - 1+ "px";
                        jsSnack.style.top = jsSnack.offsetTop + "px";    
                        //记录小蛇的位置
                        srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
                        num++;//记录数组的长度
                    }                        
                }
            break;
            //向上移动
            case 38:
                clearInterval(timer);
                timer=window.setInterval(runTop,10);    
                function runTop(){
                    if (jsSnack.offsetTop > 0) {
                        jsSnack.style.top = jsSnack.offsetTop - 1 + "px";
                        jsSnack.style.left = jsSnack.offsetLeft + "px";
                        //记录小蛇的位置
                        srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
                        num++;//记录数组的长度
                    }                        
                }

            break;
            //向右移动
            case 39:
                clearInterval(timer);
                timer=window.setInterval(runRight,10);
                function runRight(){
                    if (jsSnack.offsetLeft + jsSnack.offsetWidth <= 450) {
                        jsSnack.style.left = jsSnack.offsetLeft + 1 + "px";
                        jsSnack.style.top = jsSnack.offsetTop + "px";
                        //记录小蛇的位置
                        srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
                        num++;//记录数组的长度
                    }                        
                }                    
            break;
            //向下移动    
            case 40:
                clearInterval(timer);
                timer=window.setInterval(runBottom,10);            
                function runBottom(){
                    if (jsSnack.offsetTop + jsSnack.offsetHeight <= 400) {
                        jsSnack.style.top = jsSnack.offsetTop + 1 + "px";
                        jsSnack.style.left = jsSnack.offsetLeft + "px";
                        //记录小蛇的位置
                        srr.push([jsSnack.offsetLeft, jsSnack.offsetTop]);
                        num++;//记录数组的长度
                    }                        
                }                    
            break;
        }
    }

        //食物随机出现
        function Pos(){
            jsFood.style.left=parseInt(Math.random() * (430 - 20 + 1) + 20) + "px";
            jsFood.style.top=parseInt(Math.random() * (380 - 20 + 1) + 20) + "px";
        }
        Pos();