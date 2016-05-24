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

function scroll(){
	var page=1;
	$("div#next").click(function(){
		var $parent = $(this).parent("div#imgbar");
		var $v_show = $parent.find("ul#v_show")
		var $v_width = $parent.width();
		page_count = 2;

		if(!$v_show.is(":animated")){
			if(page==page_count){
				$v_show.animate({left:'0'},"normal");
				page=1;
			}else{
				$v_show.animate({left:'-='+$v_width},"normal");
				page++;
			}
		}

	});

	$("div#pre").click(function(){
		var $parent = $(this).parent("div#imgbar");
		var $v_show = $parent.find("ul#v_show")
		var $v_width = $parent.width();
		page_count = 2;

		if(!$v_show.is(":animated")){
			if(page==1){
				$v_show.animate({left:'-='+$v_width*(page_count-1)},"normal");
				page=page_count;
			}else{
				$v_show.animate({left:'+='+$v_width},"normal");
				page--;
			}
		}

	});

}


function listscroll(){
	var page=1;
	$("div.next").click(function(){
		var $parent = $(this).parent("div.list-img");
		var $v_show = $parent.find("ul.v_show")
		var $v_width = $parent.width();
		page_count = 2;

		if(!$v_show.is(":animated")){
			if(page==page_count){
				$v_show.animate({left:'0'},"normal");
				page=1;
			}else{
				$v_show.animate({left:'-='+$v_width},"normal");
				page++;
			}
		}

	});

	$("div.pre").click(function(){
		var $parent = $(this).parent("div.list-img");
		var $v_show = $parent.find("ul.v_show")
		var $v_width = $parent.width();
		page_count = 2;

		if(!$v_show.is(":animated")){
			if(page==1){
				$v_show.animate({left:'-='+$v_width*(page_count-1)},"normal");
				page=page_count;
			}else{
				$v_show.animate({left:'+='+$v_width},"normal");
				page--;
			}
		}

	});

}

function showTab(){
		var tabs = document.getElementById("tabs");

		var list=tabs.getElementsByTagName("li");
		var cons = document.getElementById("con");
		var con = cons.getElementsByTagName("div");

		for(var i=0;i<list.length;i++){
			list[i].index = i;
			list[i].onmouseover = function(){
				for (var j=0;j<con.length;j++){
					con[j].className="";
					list[j].className="";
				}
				con[this.index].className="active";
				var curLeft = list[this.index].offsetLeft;
				var curTop = list[this.index].offsetBottom;
				con[this.index].style.left=curLeft+"px";
				con[this.index].style.top = curTop +"px";
				list[this.index].className="active";

			}; 
			/*list[i].onmouseleave = function(){
				for (var j=0;j<con.length;j++){
					con[j].className="";
					list[j].className="";
					
				}
			};*/

		for(var n=0;n<con.length;n++){
		

			con[n].index = n;
			con[n].onmouseleave=function(){/*onmouseleave 不会发生鼠标到子元素时触发父元素的mouseleave；onmouseout则会触发*/
				
				con[this.index].className="";
				list[this.index].className="";

			};
		}	 
		}	
}

function showFlag(){
	var parent = document.getElementById("parent");
	
	var flag=document.getElementById("hidden");
	parent.onmouseover=function(){
		flag.style.display="inline";
	};
	parent.onmouseleave=function(){
		flag.style.display="none";
	};

}
addLoadEvent(showFlag);
addLoadEvent(showTab);
addLoadEvent(scroll);
addLoadEvent(listscroll);
