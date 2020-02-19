/*为每个li添加移入的效果*/
$(function(){
	$(".limit-lists-list>.limit-box").mouseenter(function(){
		$(this).addClass("on").parent(".limit-lists-list").siblings().children(".limit-box").removeClass("on")
	})
})

//倒计时
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
	var countDownTime = countDown("2019-9-2 10:39:00")
	console.log(countDownTime)
	if(parseInt(countDownTime) <= 0) {
		clearInterval(countInterval)
	}

	//将字符串转成数组
	var arrTime = countDownTime.split('')
	var html = `<span>本场还剩</span>
		<span class="time1">${arrTime[0]}</span>	
		<span class="time1">${arrTime[1]}</span>	
		<span>:</span>
		<span class="time1">${arrTime[2]}</span>
		<span class="time1">${arrTime[3]}</span>	
		<span>:</span>	
		<span class="time1">${arrTime[4]}</span>
		<span class="time1">${arrTime[5]}</span>`

	document.querySelector('.text-white').innerHTML = html
}


function countDown(future, histry) {

	if(!histry) {
		//当前时间距离1970年1月1日毫秒数
		histry = new Date().getTime()
	} else {
		histry = new Date(histry).getTime()
	}
	//倒计时结束时间距离1970年的毫秒数
	future = new Date(future).getTime()

	//倒计时相差的毫秒数
	var distance = future - histry

	if(distance <= 0) {
		return '000000'
	}

	//距离毫秒数 - 小时毫秒数 =分钟毫秒数 + 秒的毫秒数
	//1小时  1*60*60*1000
	//向下取整Math.floor()
	var hours = Math.floor(distance / (60 * 60 * 1000))

	//1分钟
	var minutes = Math.floor((distance - hours * 60 * 60 * 1000) / (60 * 1000))

	var second = Math.floor((distance - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000)

	return changeLenth(hours) + changeLenth(minutes) + changeLenth(second)

//	console.log('dsjh' + changeLenth(hours) + changeLenth(minutes) + changeLenth(second))
}

/*
 * changeLenth 将一位数的时间转换为两位数
 * @param num string|number 表示转换的字符 IS NOT NULL
 * 
 */
function changeLenth(num) {
	//判断长度
	num = String(num)

	if(num.length <= 1) {
		num = '0' + num
	}
	return num
}

