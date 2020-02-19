//左边菜单
$(function(){
	//给类名为.menuGroup添加点击事件
	$(".help-lists>.menuGroup").click(function(){
		//点击标题.menuGroup ，对应的.help-two-lists显示，他的兄弟下面的.menuGroup隐藏
		$(this).children(".help-two-lists").slideToggle(1000).parent().siblings(".menuGroup").children(".help-two-lists").slideUp()
	})
})
