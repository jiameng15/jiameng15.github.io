$(function(){
	var flag;
	$("#navButton").on("click",function(){
		var height;
		if($(window).width()<460){
			height = 150;
		}else{
			height = 230;
		}
		if(!flag){			
			$(".hide_nav").animate({"height":height},500);
			$(".hide_nav li").animate({"display":"block"},300);
		$(".hide_nav li").css("display","block");
		flag=true;
		}else{
				$(".hide_nav").animate({"height":0},500);
				setTimeout(function(){
					$(".hide_nav li").css("display","none");
				},400)
			flag=false;
		}
	})
})
