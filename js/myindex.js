window.onload=function(){
	carosoul()
}
function carosoul(){
	/*轮播图
 * 1.计算移动盒子的宽度
 * 2.使盒子移动  每次移动距离为图片的宽度
 * 3.定时执行第2步的运动
 * 4.判断运动到最后一张返回显示第一张
 * */
/*移动盒子*/

var index = 1
var dotIndex = 0
//speed=-10
var bannerCarosoal = document.querySelector('.banner-cursoal')
var slideBox = document.querySelector('.carosoal-slide')
var imgList = document.querySelectorAll('.carosoal-slide img')

var aDot = document.querySelectorAll('.carosoal-dot li')

var aBtn = document.querySelectorAll('.carosoal-btn')
//图片宽度
var imgWidth = imgList[0].offsetWidth
//图片长度
var imgLength = imgList.length
slideBox.style.width = imgWidth * imgLength + 'px'

//3.定时执行第2步的运动
speed = -10
var autoInterval = null
autoAnimate()

function autoAnimate() {
	autoInterval = setInterval(function() {
		animate(-10, 'left')
	}, 2000)
}
//2.使盒子移动  每次移动距离为图片的宽度
function animate(speed, position) {

	changeDot(position)

	var timer = setInterval(function() {
		var left = slideBox.offsetLeft + speed
		slideBox.style.left = left + 'px'

		var curIndex = 0; //表示即将要运动到图片的下标
		if(position == 'left') {
			curIndex = index + 1

		} else {
			curIndex = index - 1
		}
		//当当前盒子的left值小于等于目标值时 停止动画
		//(left <= -(curIndex)*imgWidth && speed <0)  往左移
		//(left >= -curIndex*imgWidth && speed > 0)   往右移
		if((left <= -(curIndex) * imgWidth && speed < 0) || (left >= -curIndex * imgWidth && speed > 0)) {
			clearInterval(timer)
			index = curIndex
			//			 4.判断运动到最后一张返回显示第一张
			if(index >= imgLength - 1) {
				index = 1;
				slideBox.style.left = -imgWidth + 'px'
			}
		}
	}, 10)
}

function leftAnimate(speed, position) {
	changeDot(position)
	var time2 = setInterval(function() {
		var left = slideBox.offsetLeft + speed
		slideBox.style.left = left + 'px'

		if(left >= -(index - 1) * imgWidth) {
			clearInterval(time2)
			index--
			if(index <= 0) {
				index = imgLength - 2
				slideBox.style.left = -index * imgWidth + "px"
			}
		}
	}, 10)
}

//移入轮播盒子 停止动画 移除开始
bannerCarosoal.onmouseenter = function() {
	clearInterval(autoInterval)
}
bannerCarosoal.onmouseleave = function() {
	autoAnimate()
}

//给左右按钮加点击事件
for(var i = 0; i < aBtn.length; i++) {
	aBtn[i].onclick = function() {
		//获取类名
		var className = this.className
		if(className.indexOf('prev') >= 0) {
			//点击左按钮
			leftAnimate(10, 'right')
		} else {
			//点击右按钮
			animate(-10, 'left')
		}
	}

}

//添加圆点
function changeDot(position) {
	if(position == 'left') {
		dotIndex++
	} else {
		dotIndex--
	}
	if(dotIndex > aDot.length - 1) {
		dotIndex = 0
	} else if(dotIndex < 0) {
		dotIndex = aDot.length - 1
	}

	for(var i = 0; i < aDot.length; i++) {

		aDot[i].classList.remove('on')
	}

	aDot[dotIndex].classList.add('on')

}

//给圆点添加点击事件
for(var i = 0; i < aDot.length; i++) {
	aDot[i].dot = i;
	aDot[i].onclick = function() {
		if(this.dot < dotIndex) {
			speed = Math.abs(speed)
			index = this.dot + 2

			dotIndex = this.dot + 1
			animate(40, 'right')
		} else {
			speed = -Math.abs(speed)
			index = this.dot
			dotIndex = this.dot - 1
			animate(-40, 'left')
		}
	}
}
//当浏览器最小化 或者切换不同标签时执行的动作
document.addEventListener('webkitvisibilitychange', function() {
	var isHidden = document.webkitVisibilityState;
	if(isHidden == 'hidden') {
		clearInterval(autoInterval)
	} else {
		autoAnimate();
	}
})

countDownHtml()

var countInterval = setInterval(countDownHtml, 1000)

function countDownHtml() {
	//倒计时
	var countDownTime = countDown("2019-8-9 10:39:00")
	console.log(countDownTime)
	if(parseInt(countDownTime) <= 0) {
		clearInterval(countInterval)
	}

	//将字符串转成数组
	var arrTime = countDownTime.split('')
	var html = `<span>本场还剩</span>
		<span class="time">${arrTime[0]}</span>	
		<span class="time">${arrTime[1]}</span>	
		<span>:</span>
		<span class="time">${arrTime[2]}</span>
		<span class="time">${arrTime[3]}</span>	
		<span>:</span>	
		<span class="time">${arrTime[4]}</span>
		<span class="time">${arrTime[5]}</span>`

	document.querySelector('.count-down').innerHTML = html
}
}
