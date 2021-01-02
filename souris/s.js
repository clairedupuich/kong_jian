
 var canvas = document.getElementById("canvas");
 canvas.width = document.documentElement.clientWidth;
 canvas.height = document.documentElement.clientHeight;
 var ctx = canvas.getContext("2d");
 var flag = false;       //启动的标志
 var particles = [];     //粒子数组
 var color = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];
　      // 实现动画方法　　　
 animate();
 function animate() {
     setInterval(function () {
         render();           // 渲染particles中的粒子
         area();             // 删除particles中微小的粒子
     }, 1000 / 60)　　　　　　// 相当于：60帧 / 1秒 
 }

 // 鼠标处理
 canvas.onmousedown = function (event) {
     var e = event || window.event;
     flag = true;
     do_spawn(e, 35 * Math.random() + 35);
 };
 canvas.onmouseup = function () {
     flag = false;
 };
 canvas.onmouseout = function () {
     flag = false;
 };
 canvas.onmousemove = function (event) {
     var e = event || window.event;
     if (flag) {
         do_spawn(e, 9);
     }
 };

 // 手势处理
 canvas.ontouchstart = function (e) {
     flag = true;
     do_spawn(e, 35 * Math.random() + 35);
 };
 canvas.ontouchend = function (e) {
     flag = false;
 };
 canvas.ontouchmove = function (e) {
     if (flag) {
         do_spawn(e, 9);
     }
 };

 function do_spawn(e, n) {   //设置孵化器的生产数量
     var x = e.clientX || e.touches[0].pageX;  //鼠标坐标||移动端触摸坐标
     var y = e.clientY || e.touches[0].pageY;
     // 生成n个粒子
     for (var i = 0; i < n; i++) {
         spawn(x, y);
     }
 }

 function spawn(x, y) {   //孵化器，生成一个原点对象
     var particle = new Particle();
     particle.init(x, y);
     particles.push(particle);
 }

 function render() {    //把生成的原点渲染出来
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     for (var i = 0, len = particles.length; i < len; i++) {
         particles[i].draw();
         particles[i].update();
     }
 }

 function area() {  //半径足够小的时候删除该点
     var n = 0;
     for (var i = 0, l = particles.length; i < l; i++) {
         if (particles[i].r > 1) {
             particles[n++] = particles[i];     // 将半径大于1，凑起来 
         }
     }

     //删除>n(半径<1)的粒子, 最多保留700个 
     while (particles.length > Math.min(700, n)) {
         particles.pop();
     }
 }

 function Particle() { }  //构造函数，小球原型
 Particle.prototype = {
     init: function (x, y) {  //初始化小球各项数据
         this.x = x || 0.0;
         this.y = y || 0.0;
         this.r = 10 * Math.random() + 10 || 40;
         this.color = color[~~(Math.random() * 8)];
         this.theta = Math.random() * 2 * Math.PI;
         this.R = Math.random() * 4 + 2;
         this.vx = Math.cos(this.theta) * this.R;
         this.vy = Math.sin(this.theta) * this.R;
     },
     draw: function () {    //画出一个球的方法
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
         ctx.fillStyle = this.color;
         ctx.fill();
     },
     update: function () {    //改变球的各项属性（位置、大小、颜色）的方法
         this.x += this.vx;
         this.y += this.vy;
         this.vx += Math.cos(this.theta) * .1;
         this.vy += Math.sin(this.theta) * .1;
         this.vx *= .94;
         this.vy *= .94;    //给速度设置一个衰减系数
         this.r *= .92;     //园圈越来越小(衰减)
         this.color = color[~~(Math.random() * 8)]; //动态改变圆点的颜色达到闪烁的效果
     }
 };
      
        
        
    