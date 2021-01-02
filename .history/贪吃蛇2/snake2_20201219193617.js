<script>    
    var box = document.getElementById('_box');
    var start = document.getElementById('_start');
    var pause = document.getElementById('_pause');
    var over = document.getElementById('_over');
    var music = document.getElementById('music');
    // 每个小方块的宽度
    var squareWidth = 30;
    // 存放蛇；
    var snakeArr = [];
    //存放食物对象的数组
    var foods = [];
    // 设置定时器
    var timer = null;
    // 设置定时器时间
    var speed;
    // 分数
    var score = 0;
    // 每次只能一个方向改变
    var block = true;
    // 蛇头蛇身对象
    var snakeType = {
        head : {value: 0,url:"img/head.png"},
        body : {value: 1,url:'img/body.png'},
    }
    // 记录运动的方向，及蛇头旋转的角度
    var toward = {
        up: {rotate : 270,x:0,y:-squareWidth },
        right:{rotate: 0,x:squareWidth,y:0},
        down:{rotate: 90,x:0,y:squareWidth},
        left:{rotate:180,x:-squareWidth,y:0}
    }
    // 记录当前的运动方向
    var nowToward = toward.right;// 默认为右
    // 食物集合
    var foodSet = [
        // 苹果
        {
            name: 'apple',
            value: 2,
            url:'img/pingguo.png',
            maxNum: 2,
            // 蛇吃到食物后的方法
            action: function(){
                //蛇吃到食物后创建一个蛇头 并且产生的蛇身就在所吃食物的位置
                var snakebody = createSquare(this.row,this.col,snakeType.head);
                // 重新渲染之前的蛇头小方块，使之变为蛇身
                renderSquare(snakeArr[0],snakeType.body);
                // 将产生的蛇头方块添加在最前面
                snakeArr.unshift(snakebody);
                // 吃到食物后移除
                box.removeChild(this.foodSquare);
                // foods数组里面也将其删除（splice删除指定位置的对象）
                foods.splice(foods.indexOf(this),1);
                // 分数加10
                score += 10;
            },
            maxCtrl: function () {
            return this.maxNum;
        }
        },
        // 菠萝
        {
            name: 'pineapple',
            value: 3,
            url:'img/菠萝.png',
            maxNum: 2,
            // 蛇吃到食物后的方法
            action: function(){
                //蛇吃到食物后创建一个蛇头 并且产生的蛇身就在所吃食物的位置
                var snakebody = createSquare(this.row,this.col,snakeType.head);
                // 重新渲染之前的蛇头小方块，使之变为蛇身
                renderSquare(snakeArr[0],snakeType.body);
                // 将产生的蛇头方块添加在最前面
                snakeArr.unshift(snakebody);
                // 吃到食物后移除
                box.removeChild(this.foodSquare);
                // foods数组里面也将其删除（splice删除指定位置的对象）
                foods.splice(foods.indexOf(this),1);
                // 分数加10
                score += 10;
            } ,
            maxCtrl: function () {
            return this.maxNum;
        }
        },
        // 草莓
        {
            name: 'strawberry',
            value: 4,
            url:'img/caomei.png',
            maxNum: 2,
            // 蛇吃到食物后的方法
            action: function(){
                //蛇吃到食物后创建一个蛇头 并且产生的蛇身就在所吃食物的位置
                var snakebody = createSquare(this.row,this.col,snakeType.head);
                // 重新渲染之前的蛇头小方块，使之变为蛇身
                renderSquare(snakeArr[0],snakeType.body);
                // 将产生的蛇头方块添加在最前面
                snakeArr.unshift(snakebody);
                // 吃到食物后移除
                box.removeChild(this.foodSquare);
                // foods数组里面也将其删除（splice删除指定位置的对象）
                foods.splice(foods.indexOf(this),1);
                // 分数加10
                score += 10;
            },
            maxCtrl: function () {
            return this.maxNum;
        }
        },
        // 炸弹
        {
            name: 'bomb',
            value: 5,
            url:'img/bomb.png',
            maxNum: 2,
            // 蛇吃到食物后的方法
            action: function(){
                 gameOver();
                 return;
            },
            maxCtrl: function () {
            return Math.floor(score / 80) + 2;
        }
        }

    ]
    function Food(row,col,foodtype){
        this.foodtype = foodtype;
        this.row = row;
        this.col = col;
        this.url = foodtype.url;
        this.action = foodtype.action;
        this.foodSquare = null;
        // init()创建一个食物小方块
        this.init = function(){
        this.foodSquare = createSquare(this.row,this.col,this.foodtype);
        }
    }
    function generatefood() {
        for(var  i = 0;i < foodSet.length;i++)
        {
            // filter()方法把传入的函数作用于每个元素，
            // item表示foods数组里面某一对象，filter()返回的是一个数组
            var nowLen = foods.filter(function(item){
                if(item.foodtype.value == foodSet[i].value)
                {
                    return item;
                }
            }).length;
            if(nowLen < foodSet[i].maxNum)// 每个食物产生的个数不能大于它的maxNum;
            {
                var row ,col;
                do{
                    // 随机的行与列
                    row = Math.floor(Math.random()*20);
                    col = Math.floor(Math.random()*20);
                }while(existFood(row,col));// 如果已经存在则重新产生行与列
                // 产生一个食物对象
                var food = new Food(row,col,foodSet[i]);
                food.init();
                foods.push(food);// 将这个对象放入数组中
            }
        }
    }
    function existFood(row,col){
        for(var  i = 0; i < foods.length;i++)
        {
            if(foods[i].row == row && foods[i].col == col)
            {
                return true;
            }
            return false;
        }
    }
    init();
    // 初始化
    function init(){
        // 初始化蛇
        var head =  createSquare(0,3,snakeType.head);
        var body1 =  createSquare(0,2,snakeType.body);
        var body2 =  createSquare(0,1,snakeType.body);
        var body3 =  createSquare(0,0,snakeType.body);
        // 存入数组
        snakeArr.push(head,body1,body2,body3);
        //运动
      
    }
    // 创建蛇 
    function createSquare(row,col,squareType) {
        var span = document.createElement('span');
        span.classList.add('snake');
        // 确定位置
        span.style.top = row * squareWidth + 'px';
        span.style.left = col * squareWidth + 'px';
        // 渲染
        renderSquare(span,squareType);
        box.appendChild(span);
        return span;
    }
    // 渲染蛇头蛇身
    function renderSquare(span,snakeType){
        span.value = snakeType.value;
        span.style.backgroundImage = 'url('+snakeType.url+')';

    }
    // 蛇运动
    start.onclick = function(){
        run();   
        music.play();
    }
     // 键盘操作
     document.onkeydown = function(event){
        var event = event || window.event;
        var code = event.keyCode;
        changeTowrad(code);
    }
    pause.onclick = function(){
        clearTimeout(timer);
        music.pause();
       
    }
    function run(){
        speed =  400 -(Math.min( Math.floor(score / 50)*50,300));// 最小不小于100
        clearTimeout(timer);
        timer =  setTimeout(function(){
            // 检查碰撞
            var flag = checkCrash();
            if(flag.result == -1)
            {
                gameOver();
                return;
            }
            else if(flag.result == 1)
            {
                flag.target.action();
                block = true;
                document.getElementById('_score').innerHTML = score;
            }
            else{
                // move
                move();
                //产生食物
                 generatefood();
                // 移动一次将锁打开
                block = true ;
            }
            for (var i = 0; i < foodSet.length; i++) {
            foodSet[i].maxNum = foodSet[i].maxCtrl();
             };
            if(timer != null)
            {
                run();
            }
           
       },speed);
     
    }
    // 蛇移动
    function move(){
        // 将头变成蛇身
        renderSquare(snakeArr[0],snakeType.body);
        // 将最后一个变为蛇头
        var last = snakeArr.pop()// 移除数组最后一个；
        last.style.left = snakeArr[0].offsetLeft +  nowToward.x  +'px';
        last.style.top = snakeArr[0].offsetTop + nowToward.y + 'px';
        // 让蛇头旋转
        last.style.transform = "rotate(" + nowToward.rotate + "deg)";
        snakeArr.unshift(last);// 放在最前面
        // 将蛇身变为蛇头
        renderSquare(snakeArr[0],snakeType.head);    
    }
    function changeTowrad(code){
        if(!block)
        {
            return;
        }
        // 按下一次键盘后将锁关闭，等移动一次后再开启，保证每次只能按一个键
        block = false;    
        if(code == 40 && (nowToward.x & toward.down.x)==0 && (nowToward.y & toward.down.y)== 0)
        {
            nowToward = toward.down;
        }
        else if(code == 38 && (nowToward.x & toward.up.x)==0 && (nowToward.y & toward.up.y)== 0)
        {
            nowToward = toward.up;
        }
        else if(code == 37 && (nowToward.x & toward.left.x)==0 && (nowToward.y & toward.left.y)== 0)
        {
            nowToward = toward.left;
        }
        else if(code == 39 && (nowToward.x & toward.right.x)==0 && (nowToward.y & toward.right.y)== 0)
        {
            nowToward = toward.right;
        }
     }
    function checkCrash(){
        //碰到边界
        if(snakeArr[0].offsetLeft +nowToward.x  >= box.clientWidth || 
        snakeArr[0].offsetLeft <= 0)
        {
            return {result: -1,target:null};
        } 
        else if(snakeArr[0].offsetTop + nowToward.y >= box.clientHeight ||
        snakeArr[0].offsetTop + nowToward.y < 0)
        {
            return {result: -1,target:null};
        }
      
        // 碰到自己的身体
        else{
            for(var i = 3; i < snakeArr.length - 1; i++)
            {
                if(snakeArr[0].offsetLeft + nowToward.x == snakeArr[i].offsetLeft &&
                snakeArr[0].offsetTop + nowToward.y == snakeArr[i].offsetTop)
                {
                    return {result: -1,target: null};
                }
            }
             // 碰到道具
        for( var i = 0;i < foods.length;i++)
        {
            if(snakeArr[0].offsetLeft + nowToward.x == foods[i].foodSquare.offsetLeft &&
            snakeArr[0].offsetTop + nowToward.y == foods[i].foodSquare.offsetTop)
            {
                return {result: 1,target: foods[i]};
            }
        }
        }
       
        return 0;
    }
    function gameOver(){
        clearTimeout(timer);
        timer = null;
        // alert('游戏结束');
        var leader = over.offsetTop;
        var target = box.offsetHeight / 2 - over.offsetHeight /2;
        over.timer = setInterval(function(){
            leader = leader + (target - leader ) /10;
            over.style.top = leader + 'px';
        },8)
        over.style.display = 'block';
        music.pause();
        return;
    }
   
</script>