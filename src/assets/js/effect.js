
//倒计时
function countDown(d,h,m,s,ms) {
  d=document.querySelector(".count-down li:nth-of-type(1) em").innerHTML;
  h=document.querySelector(".count-down li:nth-of-type(2) em").innerHTML;
  m=document.querySelector(".count-down li:nth-of-type(3) em").innerHTML;
  s=document.querySelector(".count-down li:nth-of-type(4) em").innerHTML;
  ms=document.querySelector(".count-down li:nth-of-type(5) em").innerHTML;
  if(d==null||h==null||m==null||s==null||ms==null){
    return;
  }
  // init="00";
  let timer=setInterval(function () {
    ms-=1;
    if(ms<=0){
      s--;
      ms=10;
      if(s<=0){
        m--;
        s=59;
        if(m<=0){
          h--;
          m=59;
          if(h<=0){
            d--;
            h=23;
            if(d<=0){
              clearInterval(timer)
            }
          }
        }
      }
    }
    if(s<10){
      document.querySelector("ul li:nth-of-type(4) em").innerHTML="0"+s;
    }
    if(m<10){

      document.querySelector("ul li:nth-of-type(3) em").innerHTML="0"+m;
    }
    if(h<10){
      document.querySelector("ul li:nth-of-type(3) em").innerHTML="0"+h;
    }
    document.querySelector("ul li:nth-of-type(5) em").innerHTML=ms;
    document.querySelector("ul li:nth-of-type(4) em").innerHTML=s;
    document.querySelector("ul li:nth-of-type(3) em").innerHTML=m;
    document.querySelector("ul li:nth-of-type(2) em").innerHTML=h;
    document.querySelector("ul li:nth-of-type(1) em").innerHTML="0"+d;
  },80)
}

function parabolaTop() {
  let cartE=document.querySelector(".cart");
  var ev = event || window.event;
  var startX = ev.clientX;
  var startY = ev.clientY;

  let ball = document.createElement("em");
  ball.style.position = "fixed";
  ball.style.width = ".13rem";
  ball.style.height = ".13rem";

  // 初始化位置
  ball.style.left = startX + "px";
  ball.style.top = startY + "px";

  ball.style.borderRadius = "50%";
  ball.style.backgroundColor = "#199bf4";
  ball.style.zIndex = 1000;
  document.body.appendChild(ball);

  var endX = 293;
  var endY = 20;

  // 计算p
  var x = endX - startX;
  var y = endY - startY;
  //y^2=2px;
  let p = y * y / (2 * x);
  // 开始运动
  let left1 = 0;
  let top1 = Math.sqrt((2 * p * left1));

  let direction = -1;
  let timeSpace = 500 / left1
  // if(startX!=endX){
  let timer = setInterval(function () {
    // 1.改数据

    if (startX < endX) {
      left1 += 1 * direction;
      top1 = Math.sqrt(2 * p * left1);
      // 2.边界
      if (left1 <=0) {
        left1 = 0
        direction = 1;
      }
      else if (left1 >= endX - startX) {
        left1 = endX - startX
        window.clearInterval(timer)
        f()
      }

      ball.style.left = left1 + startX + "px";
      ball.style.top = -1 * top1 + startY + "px";

    }
    else
    if (startX > endX) {
      left1 += .6*direction;
      top1 = Math.sqrt(2 * p * left1);

      if (left1 <= endX - startX) {
        left1 = endX - startX
        window.clearInterval(timer);
        f()
      }

      ball.style.left = left1 + startX + "px";
      ball.style.top = -1 * top1 + startY + "px";

    }
  }, timeSpace);
  // }
  function f() {
    setTimeout(function () {
      document.body.removeChild(ball)
    },200)

    //购物车效果
    cartE.style.animation="cartE .8s";
    setTimeout(function () {
      cartE.style.animation=""
    },800);
  }
}
function parabolaBottom() {
  let num=document.querySelector(".num");
  let cartE=document.querySelector(".cart");
  var ev = event || window.event;
  var startX = ev.clientX;
  var startY = ev.clientY;

  let ball = document.createElement("em");
  ball.style.position = "fixed";
  ball.style.width = ".13rem";
  ball.style.height = ".13rem";

  // 初始化位置
  ball.style.left = startX + "px";
  ball.style.top = startY + "px";

  ball.style.borderRadius = "50%";
  ball.style.backgroundColor = "#199bf4";
  ball.style.zIndex = 1000;
  document.body.appendChild(ball);

  var endX = 230;
  var endY = 620;

  // 计算p
  var x = endX - startX;
  var y = endY - startY;
  //x^2=-2py;
  let p = x * x / (-2 * y);
  // 开始运动
  let top1 = 0;
  let left1 = Math.sqrt((-2 * p * top1));

  let direction = 1;
  let timeSpace = 500 / top1;
  // timeSpace=500/top1/1.5
  // if(startX!=endX){
  let timer = setInterval(function () {
    // 1.改数据

    if (startX < endX) {
      left1 += .8 * direction;
      p=y*y/(2*x)
      top1 = Math.sqrt(2 * p * left1);
      // 2.边界
      // if (top1 <=0) {
      //   top1 = 0
      //   direction = -1;
      // }
      // else
        if (left1 >= endX - startX) {
          left1 = endX - startX
        window.clearInterval(timer)
        f()
      }

      ball.style.left = 1*left1 + startX + "px";
      ball.style.top = 1 * top1 + startY + "px";

    }
    else
    if (startX > endX) {
      top1 += 2.5*direction;
      left1 = Math.sqrt(-2 * p * top1);

      if (top1 >= endY - startY) {
        top1 = endY - startY
        window.clearInterval(timer);
        f()
      }

      ball.style.left = -1*left1 + startX + "px";
      ball.style.top = 1* top1 + startY + "px";

    }
  }, timeSpace);
  // }
  function f() {
    setTimeout(function () {
      document.body.removeChild(ball)
    },200)

    //购物车效果
    cartE.style.animation="cartE .8s";
    setTimeout(function () {
      cartE.style.animation=""
    },800);
  }
}
export {countDown,parabolaTop,parabolaBottom}
