//底部 侧边 头部等公共部分的逻辑
//document.getElementById()  只能获取一个  数据类型是 对象{}
//document.getElementsByClassName() 能获取多个  数据类型是 数组[]
//document.getElementsByTagName()
//document.getElementsByName()

//document.querySelector() 只能获取一个  第一个  对象{}
//document.querySelectorAll() 获取多个  数组[]


//返回顶部
var returnTopElem = document.querySelector('.return-top');
returnTopElem.onclick = function() {
	//scrollTop  滚动条距离顶部的距离
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	//setInterval(function(){},10)

	var time = setInterval(function() {
		scrollTop = scrollTop - 100
		document.body.scrollTop = scrollTop
		document.documentElement.scrollTop = scrollTop
		if(scrollTop <= 0) {
			clearInterval(time)
		}
	}, 10)
	//每隔10毫秒执行函数体一次  不间断一直执行，除非手动关闭
	//针对谷歌浏览器
	//	document.body.scrollTop=0;
	//	
	//	//针对ie 、火狐
	//	document.documentElement.scrollTop=0;
}

//滑出点击控件  购物车以及  客服滑出
var slideBars = document.querySelectorAll('.aside-slide-bar')
var asideSlide = document.querySelector('.aside-slide')
for(var i = 0; i < slideBars.length; i++) {
	slideBars[i].onclick = function() {

		var right = ''
		if(asideSlide.currentStyle) {
			right = asideSlide.currentStyle.right
		} else {
			right = getComputedStyle(asideSlide, false)['right']
		}
		right = parseInt(right)
		var speed = 0
		if(right > -264) {
			speed = -12
		} else {
			speed = 12
		}

		var time = setInterval(function() {
			right += speed;
			asideSlide.style.right = right + 'px'
			if(right >= 35 && speed > 0 || right <= -264 && speed < 0) {
				clearInterval(time)
				asideSlide.style.right = 35 + 'px'
			}
		}, 10)

	}

}
//滑出按钮
var slideBar = document.querySelectorAll('.aside-slide-bar')
//滑出盒子
var slideBarBox = document.querySelector('.aside-slide')
//购物车
var slideCar = document.querySelector('.aside-slide-car')
//客服
var sliderServer = document.querySelector('.aside-slide-server')

for(var i = 0; i < slideBar.length; i++) {
	//给按钮添加点击事件
	slideBar[i].onclick = function() {
		//判断按钮上是否有on  通过className判断   className获取元素所有类名  是字符串
		var className = this.className
		var speed = 0;
		//indexOf获取字符串在另一个字符串中的下标  没有为-1
		if(className.indexOf('on') >= 0) {
			speed = -12
			this.classList.remove('on')
		} else {
			speed = 12;
			//classList 获取元素类名  对象类型
			this.classList.add('on')

			//判断点击的是哪一个按钮  通过类名来判断
			//显示的内容是哪一个
			if(className.indexOf('asidebar-bar-cart') >= 0) {
				//获取下一个兄弟元素
				this.nextElementSibling.classList.remove('on')
				slideCar.style.display = 'block'
				sliderServer.style.display = 'none'

			} else {
				//获取上一个兄弟元素
				this.previousElementSibling.classList.remove('on')
				sliderServer.style.display = 'block'
				slideCar.style.display = 'none'
			}
		}
		//		获取盒子的ringht的方法  currentStyle（ie浏览器）
		var right = 0;
		//		slideBox.currentStyle 获取样式属性
		if(slideBarBox.currentStyle) {
			right = slideBarBox.currentStyle.right
		} else {

			right = getComputedStyle(slideBarBox, false)['right']

		}

		right = parseInt(right)

		var time = setInterval(function() {
			right += speed

			if(right > 35 || right < -264) {
				clearInterval(time)
			} else {
				slideBarBox.style.right = right + 'px'
			}
		}, 10)
	}
}


//侧边栏购物车的点击删除

//点击删除 删除当前的父节点
var aBtn=document.querySelectorAll('.delete')
var carConten=document.querySelectorAll('.aside-slide-car-content')
for (var i=0;i<aBtn.length;i++) {
	aBtn[i].index=i
	aBtn[i].onclick=function(){
	//	找到a标签的父级,删除当前的元素
	carConten[this.index].remove()
	}
}