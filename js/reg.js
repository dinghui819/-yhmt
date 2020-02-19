//获取验证码

//4.获取cookie cookie存在，继续倒计时
var cookietime = $.cookie('cookietime')
console.log(cookietime)
if(cookietime){
	countDown(cookietime)
}

$(".get-code").click(function(){
	var _this=this
	
	if($(this).hasClass("disabled")){
		return	
	}
	countDown(60)
//	$(_this).html("60s后重获")
/*	$(this).addClass("disabled") 
	
	var count=5
	$(this).html(count+"s重获")
	var timer=setInterval(function(){
		count--
		$(_this).html(count+"s重获")
		
		//设置cookie
		$.cookie('cookietime',5)
		
		if(count <=0){
			clearInterval(timer)
			$(_this).removeClass("disabled").html("重新获取验证码")
		}
	},1000)*/
})


function countDown(count){
	
	$(".get-code").addClass("disabled") 
	
//	var count=5
	$(".get-code").html(count+"s重获")
	//1.开启倒计时
	var timer = setInterval(function(){
		count--
		$(".get-code").html(count+"s重获")
		
		//3.设置cookie
		$.cookie("cookietime",count)
		//取
		console.log($.cookie('cookietime'))
		
		//2.结束倒计时  
		if(count <= 0){
			clearInterval(timer)
			$(".get-code").removeClass("disabled").html("重新获取验证码")
			$.removeCookie("cookietime")
		}
	},1000)
}
