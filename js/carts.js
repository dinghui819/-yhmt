//全选
var checkAll=$('.check-all')
//var checkAll=$('.cart-bottom-left input')
var checkList=$('.cart-content input')
checkAll.change(function(){
	//prop 改变属性
	if (this.checked) {
		checkList.prop('checked',true)
	}else{
		checkList.prop('checked',false)
	}
})

//增减商品数量模块  首先声明一个变量，当我们点击+号时（cart-plus），就让这个值++，然后赋值给文本框
//加号按钮
$(".cart-plus").click(function(){
	//得到当前兄弟文本框的值
	var n = $(this).siblings(".itxt").val()
	n++
	$(this).siblings(".itxt").val(n)
	//计算小计模块  根据文本框的值  乘以  当前商品的价格  就是商品的小计
	//当前商品的价格
	var p = $(this).parent().siblings(".unit").children(".p-price").html()
	//console.log(p)
	p = p.substr(1)
	//console.log(p)
	var price = (p*n).toFixed(2)//保留两位小数
	//商品的小计
	$(this).parent().siblings(".money").html("￥"+price)
	getSum()
})
//减号按钮
$(".cart-sub").click(function(){
	//得到当前兄弟文本框的值
	var n = $(this).siblings(".itxt").val()
	if(n == 1){
		return false
	}
	n--
	$(this).siblings(".itxt").val(n)
	//当前商品的价格
	var p = $(this).parent().siblings(".unit").children(".p-price").html()
	//console.log(p)
	p = p.substr(1)
	//console.log(p)
	//商品的小计
	$(this).parent().siblings(".money").html("￥"+(p*n).toFixed(2))	
	getSum()
})

//4.用户修改文本框的值  计算  小计模块
	$(".itxt").change(function(){
		//先得到文本框里面的值  乘以 当前商品的单价
		var n =$(this).val()
		//当前商品的单价
		var p =$(this).parent().siblings(".unit").children(".p-price").html()
		p = p.substr(1)
		$(this).parent().siblings(".money").html("￥"+(p*n).toFixed(2))
		getSum()
	})

//删除商品模块
//1.商品后面的删除按钮
$(".p-action a").click(function(){
	$(this).parents(".shopping").remove()
})
//2.删除选中的商品
$(".remove-batch").click(function(){
	//删除的是小的复选框选中的商品
	$(".j-checkbox:checked").parent(".shopping").remove()
	getSum()
})

//计算总计和总额
getSum()
function getSum(){
	var count = 0 //计算总件数
	var money = 0 //计算总价钱
	
	//遍历  回调
	//总件数
	$(".itxt").each(function(i,ele){
		
		//拿到元素的值 加到count里面
		count += parseInt($(ele).val())
	})
	$(".amount-sum span").text(count)
	//总计
	$(".money").each(function(i,ele){
		money += parseFloat($(ele).text().substr(1))
	})
	$(".price-sum span").text("￥"+money.toFixed(2))
}


