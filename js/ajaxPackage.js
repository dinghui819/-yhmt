//ajaxPackage 封装ajax请求


function ajaxPackage(options){
	console.log(options)
	//创建请求
var request=new XMLHttpRequest
//打开请求
request.open(options.type || 'get',options.url,options.async || true)

//发送请求
request.send(options.data || null)

//监听请求状态
request.onreadystatechange=function(){
	if(request.readyState == 4 && request.status == 200)
	
	var data=request.responseText

		if(options.dataType == 'json'){
			data=JSON.parse(data)
		}
		options.success(data)
	
	}
}
