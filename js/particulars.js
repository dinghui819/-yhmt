//发表评论
$(function(){
	$(".none-com").hide()	
	var send=$(".send")
	var remark=$("[name=remark]").val()
	send.click(function(){
		$(".none-com").toggle()
		remark=$("[name=remark]").val()
		if(remark){
			
				var html=
				`<li class="com-list clearfix">
							<img src="img/goods.png "/>
							<div class="com-text dis-in-block" >
								<div>好评 | 2019-11-29 16:10:45</div>
								<p>
								${remark}
								</p>
							</div>	
						</li>`
				$(".com").prepend(html)	
				$(".none-com").hide()
				$("[name=remark]").val("")	
			
		}		
	})
	
	//数量加号
	$(".plus").click(function(){
		var n = $(this).siblings(".number-input").val()
		n++
		$(this).siblings(".number-input").val(n)
	})
	$(".sub").click(function(){
		var n = $(this).siblings(".number-input").val()
		if(n == 1){
			return false
		}
		n--
		$(this).siblings(".number-input").val(n)
	})
})
