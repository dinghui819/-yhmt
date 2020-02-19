//1.定义网络请求实例
var request=new XMLHttpRequest
var requestUrl='http://192.168.97.223:3001/'
//2.打开请求
request.open("GET",requestUrl+"getBanner",true)

//3.发送请求到后台
request.send()

//4.请求监听
request.onreadystatechange=function(){
	console.log(request.readyState)
	
	if(request.readyState == 4){
		
		//请求成功后的数据 request.responseText 
//		console.log(request.responseText)
		
		//字符串转为JSON对象 request.responseText打印出来是一个JSON字符串 
		var result=JSON.parse(request.responseText)
		console.log(result)
		//后台返回一个字段  判断返回的数据是否正确   如果为true 就正确
		if (result.success == true) {
			//banner 的个数   数组
			var lists=result.list
			
			//把banner往slide里面加
			var slideone=document.querySelector('.carosoal-slide')
			
			var html=`<img src="${requestUrl+lists[lists.length-1].img}"/> `
			for(var i=0;i<lists.length;i++){
				
				html+=`<img src="${requestUrl+lists[i].img}"/>`
			}
			html+=`<img src="${requestUrl+lists[0].img}"/>`
			slideone.innerHTML=html
			carosoul()
		}
	}
}

request.open("get",requestUrl+"lists",true)
request.send()

request.onreadystatechange=function(){
	if(request.readyState == 4){
		console.log(request.responseText)
	}
}

//图片渲染
var requestUrl = "http://192.168.97.223:3001/"
for (j=0;j<3;j++) {
			sendAjax(j)
		}
		function sendAjax(id){
			console.log(id)
			$.ajax({
			//请求类型
			type:"get",
			//请求的地址
			url:requestUrl+"lists?id="+id,
			//请求是否异步
			async:true,
			//请求返回的数据类型  json xml html script
			dataType:"json",
			//请求成功回调
			success:function(res){
				
				if(res.success){
					var lists=res.list;
					var html=''
					for (var i=0 ; i<lists.length;i++) {
						html+=`<li>
								<img src="${requestUrl+lists[i].img}"/>
								<div class="text-ellipsis">
									${lists[i].title}
								</div>
								<span class="text-main">￥${lists[i].price}</span>
								</li>`		
					}
					
					$(".recommand-lists").eq(id).html(html)
				}
			}
		});
		}
		