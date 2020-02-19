//当鼠标移上去时，改变它的颜色
$(function(){
	$(".group-title>a").mouseenter(function(){
		$(this).addClass("on").siblings("a").removeClass("on")
	})
	
	$(".train-l>li").mouseenter(function(){
		$(this).addClass("active").siblings("li").removeClass("active")
	})
})
