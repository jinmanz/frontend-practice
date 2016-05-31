function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}/*
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className; //如果为1个元素定义多个类 类名中间用空格分开
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}*/

/*大图滚动播出效果：
1. setInterval(roll,2000);函数设置重复调用的函数roll（）去换背景图
2. 在body里写一个隐藏的<input type="hidden" value="1" id="imgIndex"/>，来储存 value，
value作为pics数组的index
3.pics数组存放所有图片的url
4.如果index=最大，则归零；否则index++
5.注意：对index进行运算时 必须先把index转化成number 才能++运算，否则是字符串的合并
*/
function changePic(){
  var pics = ["image/ocean.png","image/car.png","image/bridge.png"];
  function roll(){
    
    var div = document.getElementById("bigpic");
    var index = document. getElementById("imgIndex").value;
    div.style.backgroundImage="url("+pics[index]+")";
    


    
    if(new Number(index)==2){
      document.getElementById("imgIndex").value = '0';
      $("li.navcircleli").eq(2).addClass("current").siblings().removeClass("current");

    } else{
      document.getElementById("imgIndex").value = new Number(index) + 1;
       //这里用jquery选择match index值得小圈节点，加current类，再把兄弟节点移除current类
       $("li.navcircleli").eq((Number(index))).addClass("current").siblings().removeClass("current");
    }

  }


  setInterval(roll,3000);
}

function navcircle(){

	var circles = document.getElementsByTagName("li");
	var pics = ["image/ocean.png","image/car.png","image/bridge.png"];
 	var div = document.getElementById("bigpic");
 //以下用的jQuery代码 因为想通过this来获得当前li的title 再赋值给index
 	$("li").click(function(){
 		var index = $(this).attr("value");
	div.style.backgroundImage="url("+pics[index]+")";

  $(this).addClass("current").siblings().removeClass("current");

  
 		})
 			
	
}

addLoadEvent(changePic);
addLoadEvent(navcircle);