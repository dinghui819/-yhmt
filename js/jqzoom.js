(function($){
	$.fn.jqzoom = function(options){
		
		//添加移入的图片上的区域选择的盒子
		$(this).mouseenter(function(){
			console.log(111)
			$(this).append('<div class="popDiv" style="position:absolute;background:#fff;width:100px;height:100px;top:0;opacity:0.5"></div>')
		})
		
		//移除移入的图片上的区域选择的盒子
		$(this).mouseleave(function(){
			$(this).find(".popDiv").remove()
		})
		
		$(this).mousemove(function(event){
			//当前鼠标的位置距离页面的坐标
			var pageX=event.pageX
			var pageY=event.pageY
			
			var img =$(this).find("img")
			
			var positionX = img.offset().left
			var positionY = img.offset().top
			
			var popDiv = $(this).find(".popDiv")
			
			var width=popDiv.width()
			var height=popDiv.height()
			
			var x = pageX-positionX - width/2
			var y = pageY-positionY - height/2
			
			x = x < 0 ? 0:x
			y = y < 0 ? 0:y
			
			x = x > (img.width() - width) ? (img.width() - width) : x
			y = y > (img.height() - height) ? (img.height() - height) : y
			
			
			popDiv.css({
				left:x,
				top:y
			})
		})
	}
})(jQuery)
