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

function getElementsByClassName(n) {
    var classElements = [],allElements = document.getElementsByTagName('*');
    for (var i=0; i< allElements.length; i++ )
   {
       if (allElements[i].className == n ) {
           classElements[classElements.length] = allElements[i];
        }
   }
   return classElements;
}


 function scroll(){
 	
 	var page=1;
 	
 	$("span#next").click(function(){
 		var $parent = $(this).parent("div#bigimg");
 		var $v_show = $parent.find("div#imgbox");
 		var v_width = $parent.width();

 		var page_count = 3;

    if(!$v_show.is(":animated")){//此处判断内容展示区是否正处于动画，不是的话再移动。 这样就不会出现快速点击然后图片被添加到队列一直移动
   		if(page == page_count){
   			$v_show.animate({left:'0px'},"normal");
   			page = 1;
   		}else{
   			$v_show.animate({left:'-=' + v_width},"normal");
   			page++;
   		}
    }
    var $highlight = $parent.find("div.highlight");
    $highlight.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");

 	});

    $("span#pre").click(function(){
    var $parent = $(this).parent("div#bigimg");
    var $v_show = $parent.find("div#imgbox");
    var v_width = $parent.width();

    var page_count = 3;

    if(!$v_show.is(":animated")){//此处判断内容展示区是否正处于动画，不是的话再移动。 这样就不会出现快速点击然后图片被添加到队列一直移动
      if(page == 1){
        $v_show.animate({left:'-=' + v_width*(page_count-1)},"normal");
        page = page_count;
      }else{
        $v_show.animate({left:'+=' + v_width},"normal");
        page--;
      }
    }
    var $highlight = $parent.find("div.highlight");
    $highlight.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");

  });

 	/*点击next，图片left=-xxx；
 	next.onclick=function(){
 		$("img#img1").animate({left:'-100%'});
 		$("img#img2").animate({left:'-100%;'});
 		$("img#img3").animate({left:'-100%'});
 	}*/
 }

function login(){
  var log = document.getElementById("login");

  log.onclick = function(){
 
    $("#logdiv").css({
      display:"block"
    });
     
    $("#formdiv").css({
      position:"absolute",
      left: ($(window).width() - $("#formdiv").outerWidth())/2, 
      top: ($(window).height() - $("#formdiv").outerHeight())/2 
    });
    return false; // return false keep the div stay here; or it will dispear after a flash
  };
}

addLoadEvent(login);
addLoadEvent(scroll);