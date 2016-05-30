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
}
function showNav(){

	var nav = document.getElementById("nav-collapse");
	
	var button = document.getElementById("navIcon");
	
	button.onclick=(function(){
		
		if(nav.style.display=="none"){
			nav.style.display="block";
		}else{
			
			nav.style.display="none";
		}
		
		return false;//如果你想用JS代码来局部改变一些数据而不引起页面其他部位的变化，那么你就应该在该onclick事件代码的后面加上return false；
	});
	

}
function goTop(){
	var button = document.getElementById("goTop");
	button.onclick=(function(){
		document.getElementsByTagName('body')[0].scrollTop=0;
	});
}

addLoadEvent(showNav);
addLoadEvent(goTop);