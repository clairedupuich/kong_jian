// 给小黄人所在块添加鼠标移动事件 eyeball
document.querySelector('.body-face').addEventListener('mousemove', eyeball);
// 事件函数
function eyeball() {
  // 根据css选择器 获取到元素 放入数组
  let eye = document.querySelectorAll('.eye');
  // 调用数组中的每个元素
  eye.forEach(function(eye) {
    // 元素相对于窗口左边的距离  元素左边距离页面左边的距离; eye.clientLeft 是左边框的宽度 
    let x = (eye.getBoundingClientRect().left + (eye.clientLeft));//我认为 除2或者不除2都会一样运行，甚至不加边框也是一样的，不同是对于之后使用的函数来说更加严谨，这样眼珠就不会太靠近眼眶边缘
    // 同上
    let y = (eye.getBoundingClientRect().top + (eye.clientTop /* / 2 */));
    // pageX 鼠标指针的位置，相对于文档左边缘 pageX/y都是相对于整个页面即body而言的x,y轴距离; 而加上event.前缀是获取鼠标坐标
     
    let radian = Math.atan2(event.pageX - x, event.pageY -y);// 计算弧度 
    let angle = (radian * (180 / Math.PI) * -1) + 270;// 计算角度 //* 270是调整眼睛的角度，即鼠标在下方时要保证眼珠也在下面，-1是调整眼睛转动的方向要于鼠标游走方向一致。
    /*PI一般用来代表圆周率π
     角度 = 弧度 * 180 / Math.PI;
    弧度= 角度 * Math.PI / 180; */
    // 修改旋转角度
    // eye.style.transform = 'rotate('+angle +'deg)';//?????此处引号的用法很费解//deg是角度的意思   transform: rotate(旋转角度deg) ?????????????????????????????????????
    eye.style.transform = "rotate(" + angle + "deg)";//""里是字符串显示，变量和数字是不需要引号的。
    
  })
}

/* 获取转动的角度

使用 Math.atan2() 函数可以非常高效的实现之，它是返回点与原点之间的倾斜角，如图所示，如果想计算出点 (x1,y1) 与 原点 (cx,cy) 与X轴的角度，不过这样我们得到的是一个弧度值,在一般情况下我们需要把它转换为一个角度.只需要执行：

Math.atan2(y1 - cy, x1 - cx)  我们得到的是一个弧度值

需要注意的是，它的取值范围是[-PI, PI]。
当 (x1, y1) 在第一象限, 0 < θ < PI/2

当 (x1, y1) 在第二象限 PI/2 < θ≤PI

当 (x1, y1) 在第三象限, -PI < θ < -PI/2

当 (x1, y1) 在第四象限, -PI/2 < θ < 0
3.2 角度与弧度之间的转换

角度 = 弧度 * 180 / Math.PI; //转换为角度值
弧度= 角度 * Math.PI / 180;

3.3 组件中心点位置计算

使用getBoundingClientRect() 的方法可以获取出容器的位置信息，用当前位置减去宽/高的一半，即可获取中心点位置。

  //中心点 此处与本例子无关
  cx = x + width / 2;
  cy = y + height / 2;


  关于鼠标坐标

鼠标坐标一般是用event事件获取，其中有以下几个方法：

    pageX , pageY
    *screenX , *screenY
    *clientX , *clientY

其中以pageX , pageY方法使用得较多，其他的方法则不太常使用（*标明）。
一张图说明三者的区别：

如图☝
pageX是指光标相对于该网页的水平位置（网页实际大小），以当前文档的左上角为基准点。
所以我们如何获取鼠标坐标？根据自己的需求来调用这些方法就行了~

    ...
    var x = event.pageX;
    var y = event.pageY;
    ...


旋转：transform: rotate();

（1）以x、y、z轴进行旋转，默认是z轴；

（2）rotateX（）、rotateY（）、rotateZ（）

（3）（）内的值单位是：deg角度

比如：transform: rotate(45deg);

作者：丶chlorine
链接：https://www.jianshu.com/p/6c7c9443b919
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */