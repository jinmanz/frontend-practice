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
//min-960 showTab
function showTab(){
	var list = document.getElementById("list");
	var li = list.children;
	var len = li.length;

	for(var i=0;i<len;i++){
		li[i].index=i;
		
		li[i].onmouseover=(function(){
			if(this.children[1]){ 
				this.children[1].style.display = "block";
			}

		});

		li[i].onmouseleave=(function(){
			if(this.children[1]){
				this.children[1].style.display = "none";
			}

		});
	}
	
}
//max-960 showTab
function collapseShowTab(){
	var list = document.getElementById("nav-collapse");
	var ul = list.children[0];
	var li = list.children[0].getElementsByTagName("li");

	for(var i=0;i<li.length;i++){
		li[i].index = i;
		li[i].onclick = function(){

			if(this.children[1]){ 
				if(this.children[1].style.display=="none"){ 
					this.children[1].style.display="block";
					
				} else{
					this.children[1].style.display="none";
				}

			}
			return false;
		};
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

function scrollPic(){

	addr = ["images/1.png","images/2.png"];
	var mainDiv = document.getElementById("mainDiv");
	var img = mainDiv.getElementsByTagName("img")[0];
	var index=document.getElementById("index").value;
	
	if(new Number(index)<2){
		img.src = addr[index];
		
		document.getElementById("index").value= new Number(index)+1;
	}else{
		document.getElementById("index").value='0';
	}


	setTimeout(scrollPic,1500);
}
function goTop(){
	var button = document.getElementById("goTop");
	button.onclick=(function(){
		document.getElementsByTagName('body')[0].scrollTop=0;
	});
}
addLoadEvent(scrollPic);
addLoadEvent(collapseShowTab);
addLoadEvent(showTab);
addLoadEvent(showNav);
addLoadEvent(goTop);