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
	var nav = document.getElementsByTagName("nav");
	var span = nav[0].getElementsByTagName("span");
	var button = span[1];
	var collapse = document.getElementById("nav-collapse");
	button.onclick=(function(){
		
		if(collapse.style.display=="none"){
			collapse.style.display="block";
		}else{
			
			collapse.style.display="none";
		}
		
		return false;//如果你想用JS代码来局部改变一些数据而不引起页面其他部位的变化，那么你就应该在该onclick事件代码的后面加上return false；
	});
	

}

addLoadEvent(showNav);