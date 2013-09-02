$(function(){
	$(".circle").hide();
	$(".circle").each(function(index, element){
		$(this).delay(index*500).fadeIn(1000);
	});
	function enter(){
		$(this).css({
			border:"solid 15px #ccc",
			borderRadius:"0%"
		});
		$(this).find(".text").css({
			marginTop:"50%"
		});
	}
	function leave(){
		$(this).css({
			border:"solid 15px #999",
			borderRadius:"50%"
		});
		$(this).find(".text").css({
			marginTop:"100%"
		});
	}
	$(".circle").each(function(){
		$(this).attr("value", 0);
	});
	$(".circle").click(function(){
		if($(this).attr("value"))
		{
			$(this).css({
				borderRadius: "50%"
			}).animate({
				height: 200,
				width: 200,
				position: "absolute"
			}, function(){
				$(this).siblings().stop().fadeIn(300);
			});
			$(this).bind("mouseenter", enter);
			$(this).bind("mouseleave", leave);
			$(this).attr("value", 0);
		}
		else
		{
			$(this).css({
				borderRadius: 0
			}).animate({
				width: "100%",
				position: "relative"
			}, function(){
				$(this).animate({
					height: "100%"
				}, {
					delay: 1000
				});
			});
			$(this).siblings().stop().fadeOut(300);
			$(this).unbind("mouseleave");
			$(this).unbind("mouseenter");
			$(this).attr("value", 1);
		}
	});
	
	var social_status = 1;
	
	$("#social").click(function(){
		if(social_status)
		{
			$(this).css({
				"border-radius": 0,
				"-webkit-border-radius":0,
				"-moz-border-radius":0,
				"-o-border-radius":0,
				"-ms-border-radius":0,
				"transform":"rotate(0deg)",
				"-webkit-transform":"rotate(0deg)",
				"-moz-transform":"rotate(0deg)",
				"-o-transform":"rotate(0deg)",
				"-ms-transform":"rotate(0deg)"
			});
			$(this).find("span").stop().hide();
			$(this).animate({
				width:400
			}, 500, function(){
				$(this).css("background-color", "rgba(0,0,0,0)");
				$(this).find("#icons").stop().fadeIn();
				social_status = 0;
			});
		}
	});
	$("#social").mouseleave(function(){
		if(social_status==0)
		{
			$(this).css({
				"border-radius": "50%",
				"-webkit-border-radius":"50%",
				"-moz-border-radius":"50%",
				"-o-border-radius":"50%",
				"-ms-border-radius":"50%",
				"background-color":"rgba(0,0,0,0.65)"
			});
			$(this).animate({
				width:400
			}, 500, function(){
				$(this).css({
					"transform":"rotate(-45deg)",
					"-webkit-transform":"rotate(-45deg)",
					"-moz-transform":"rotate(-45deg)",
					"-o-transform":"rotate(-45deg)",
					"-ms-transform":"rotate(-45deg)"
				});
				$(this).find("span").stop().show();
				social_status = 1;
			});
			$(this).find("#icons").stop().hide();
		}
	});
	
	$("#icons > li > a").hover(function(){
		$(this).stop().fadeTo("normal", 0);
		//$(this).siblings().stop().fadeTo("normal", 1);
	}, function(){
		$(this).stop().fadeTo("normal", 1);
		//$(this).siblings().stop().fadeTo("normal", 0);
	});
	
	$(".circle").mouseenter(enter);
	$(".circle").mouseleave(leave);
});