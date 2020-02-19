var requestUrl = "http://192.168.97.223:3001/"
for (j=0;j<3;j++) {
			sendAjax(j)
		}
		function sendAjax(id){
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
					
					$("ul").eq(id).html(html)
				}
			}
		});
		}