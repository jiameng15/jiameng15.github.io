$(function(){
	$(".footer img").eq(0).on("mouseover",function(){
	$(this).attr("src","img/img/mail_h.jpg");
	})
	$(".footer img").eq(0).on("mouseout",function(){
	$(this).attr("src","img/img/mail.jpg");
	})
	$(".footer img").eq(1).on("mouseover",function(){
	$(this).attr("src","img/img/facebook_h.jpg");
	})
	$(".footer img").eq(1).on("mouseout",function(){
	$(this).attr("src","img/img/facebook.jpg");
	})
	$(".footer img").eq(2).on("mouseover",function(){
	$(this).attr("src","img/img/youtube_h.jpg");
	})
	$(".footer img").eq(2).on("mouseout",function(){
	$(this).attr("src","img/img/youtube.jpg");
	})
		$(".footer img").eq(3).on("mouseover",function(){
	$(this).attr("src","img/img/linkedln_h.jpg");
	})
	$(".footer img").eq(3).on("mouseout",function(){
	$(this).attr("src","img/img/linkedln.jpg");
	})
		$(".footer img").eq(4).on("mouseover",function(){
	$(this).attr("src","img/img/twitter_h.jpg");
	})
	$(".footer img").eq(4).on("mouseout",function(){
	$(this).attr("src","img/img/twitter.jpg");
	})
})