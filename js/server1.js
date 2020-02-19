var express = require('express')

var app = express();

app.all('*', function(req, res, next){
	
	res.header("Access-Control-Allow-Origin", "*");
	next()
	
})
app.use(express.static(__dirname + '/upload'))

app.get('/lists', function(req, res){
	if(req.query.id == 1) {
		res.json({
			success: true,
			list: [{
				title: '【香港直邮】意大利kiko 口红唇膏4系 3.5g',
				price: 54.00,
				img: 'goods1.jpg'
			},{
				title: '【香港直邮】kiko双头唇彩新款',
				price: 95.00,
				img: 'goods2.jpg'
			},{
				title: 'Givenchy纪梵希禁忌之吻霓虹唇膏口红',
				price: 888.00,
				img: 'goods3.jpg'
			},{
				title: 'Dior迪奥 魅惑粉漾闪亮唇妆唇膏女士不掉色 变色唇膏 001浅粉色/004偏橘色',
				price: 888.00,
				img: 'goods4.jpg'
			},{
				title: 'Dior迪奥 魅惑粉漾闪亮唇妆唇膏女士不掉色 变色唇膏 001浅粉色/004偏橘色',
				price: 888.00,
				img: 'goods13.jpg'
			}]
			
		})
	
	}else if(req.query.id == 2) {

		res.json({
			success: true,
			list: [{
				title: '贝拉米有机奶粉2段',
				price: 290.00,
				img: 'goods5.jpg'
			},{
				title: 'A2奶粉1段 900g罐装',
				price: 260.00,
				img: 'goods6.jpg'
			},{
				title: '爱他美金装奶粉4段 灌装900g',
				price: 289.00,
				img: 'goods7.jpg'
			},{
				title: '牛栏奶粉4段',
				price: 156.00,
				img: 'goods8.jpg'
			},{
				title: '牛栏奶粉4段',
				price: 156.00,
				img: 'goods15.jpg'
			}]
		})	
	}else {
		res.json({
			success: true,
			list: [{
				title: '蜜丝佛陀水漾魔幻触感粉底霜11.5g',
				price: 89.00,
				img: 'goods9.jpg'
			},{
				title: '蜜丝佛陀 持久无暇防晒粉底液3合一 45#',
				price: 179.00,
				img: 'goods10.jpg'
			},{
				title: '蜜丝佛陀透滑粉饼10g 02#象牙白 01#玉瓷色',
				price: 89.00,
				img: 'goods11.jpg'
			},{
				title: '蜜丝佛陀柔滑自然粉饼21g',
				price: 79.00,
				img: 'goods12.jpg'
			},{
				title: '蜜丝佛陀柔滑自然粉饼21g',
				price: 79.00,
				img: 'goods14.jpg'
			}]
		})	
	}
	
})

app.get('/getBanner', function(req, res){
	res.json({
		success: true,
		list: [{
			name: 'banner',
			img: 'Tulips.jpg'
		},{
			name: 'banner',
			img: 'banner2.jpg'
		},{
			name: 'banner',
			img: 'banner3.jpg'
		},{
			name: 'banner',
			img: 'Koala.jpg'
		},{
			name: 'banner',
			img: 'banner5.jpg'
		}]
	})
})

app.listen(3001)
