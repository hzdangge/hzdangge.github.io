$(function() {
	$('.tab a').mouseover(function() {
		$(this).addClass('current').siblings().removeClass()
		$('.tab_main li').eq($(this).index()).addClass('current').siblings().removeClass()
	})
	$(".tr").show();
	$(".trcon a").each(function() {
		$(this).hover(function() {
			$(this).find(".tr_h").show();
			$(this).find(".tr").hide();
		}, function() {

			$(this).find(".tr").show();
			$(this).find(".tr_h").hide();
		})
	})

	//	tongren
	$('.tablisttongren_h a').click(function() {
		
	})
//	$(".listscon .listcon_1").hover(function(){
//		$(this).find(".listbg").show();
//	},function(){
//		$(this).find(".listbg").hide();
//	})
//	$(document ).on('mouseover','.listcon_1',function(){
//		$(this).find(".listbg").show();
//	});
//	$(document ).on('mouseout','.listcon_1',function(){
//		$(this).find(".listbg").hide();
//	})

	$(document).on('click','.isvideo',function(){
//	console.log(isvideo);
		var imgsrc=$(this).find(".listimg").attr("src");
//		alert(imgsrc);
		$(".maximg").show();
		$(".maximg img").attr("src",imgsrc);
		w=$(".maximg img").width();
		$(".maximg img").css({"left":"50%","margin-left":-w/2+"px","top":"0"})
	})
	$(".maximg,.maximg img").click(function(){
		$(".maximg").hide();
	})
//		音乐播放控制
//	 var this_music = document.getElementById('my_music');
//	 var flag = true;
//	 this_music.pause();
//	 $(this).find(".musicon").show();
//	 $(this).find(".musicoff").hide();
//	 $(".music").click(function() {
//	 	if(flag) {
//	 		this_music.pause();
//	 		flag = false;
//	 		$(this).find(".musicoff").show();
//	 		$(this).find(".musicon").hide();
//	 	} else {
//	 		flag = true;
//	 		this_music.play();
//	 		$(this).find(".musicon").show();
//	 		$(this).find(".musicoff").hide();
//	 	}
//
//	 })
	//返回顶部功能
	$('.totop').hide();
	$(window).scroll(function() {
		if($(this).scrollTop() > 700) {
			$('.totop').fadeIn("fast");

		} else {
			$('.totop').stop().fadeOut("fast");

		}
	});

	$(".totop").click(function() {
		//					alert("hh")
		jQuery("html,body").animate({
			scrollTop: 0
		}, 1000);
	});
	//cv 
	var cvArr = [
		// {
		// 	'cv_title': '甜甜圈',
		// 	'cvname': '佐仓绫音',
		// 	'cv_d': '有着火热外表的食灵。据说，甜甜圈形状的救生圈是她的专属特制品，而制作方法是商~业~机~密~平日里看起来外观开朗的甜甜圈，其实内心也有不为人知的小害羞哟~',
		// 	'imgsrc': 'images/p1.png',
		// 	"cvtitlesrc":"images/cv1.png",
		// },
		{
			'cv_title': '香菜蛋糕',
			'cvname': '花泽香菜',
			'cv_d': '沉默的小萝莉，胆子很小，说话经常犹豫，偶尔装大人神气。对味道很敏感，喜欢甜食，特别是五颜六色的食物。带着一只名为小绿的熊猫，语气意外的很凶，以保护香菜戚风蛋糕为己任。',
			'imgsrc': 'images/p2.png',
			"cvtitlesrc":"images/cv2.png",
		},
		{
			'cv_title': '白米饭',
			'cvname': '赤尾光',
			'cv_d': '“非常好的人，温柔、博爱、非常天然。在她不知道的地方，“简单教”正在建立起来，而白米饭被作为教祖供奉着。养活了几十亿的人的她，对于朴素的信徒来说，的确是神一般的存在。',
			'imgsrc': 'images/p3.png',
			"cvtitlesrc":"images/cv3.png",
		},
		// {
		// 	'cv_title': '冰糖燕窝',
		// 	'cvname': '嶺内ともみ',
		// 	'cv_d': '清纯略带腼腆的不思议系少女有点宅，追求归属感，喜欢呆在家里。不太擅长打理自己的头发，头变成了燕子窝，非常宠溺头上的两只燕子，但是因为太过宠爱，所以让这两只燕子变得有点胖。',
		// 	'imgsrc': 'images/p4.png',
		// 	"cvtitlesrc":"images/cv4.png",
		// },

		{
			'cv_title': '龙须意面',
			'cvname': '内田真礼',
			'cv_d': '起床的时候没什么精神。即使发困也会做好工作，但是在中途睡着也是经常的事。可一旦睡起觉，叫醒她是非常难的。最喜欢早上的光芒，感觉在清晨的太阳光下睡觉，是人生最大的幸福。',
			'imgsrc': 'images/p5.png',
			"cvtitlesrc":"images/cv5.png",
		},
		{
			'cv_title': '关东煮',
			'cvname': '雨宫夕夏',
			'cv_d': '是个喜欢自由自在，不受约束的少女。一派江户人的气质，讲话有些江户腔。性格稍微有点狂妄，每天背着很多食材但是行动又很灵巧，出乎意料地容易上当。',
			'imgsrc': 'images/p6.png',
			"cvtitlesrc":"images/cv6.png",
		},
		{
			'cv_title': '北京烤鸭',
			'cvname': '钉宫理惠',
			'cv_d': '相当的傲娇，高冷的时候和害羞的时候有很大的反差，一旦撒起娇格外的甜。最喜欢的事情是洗过澡之后香喷喷的躲在被窝里调戏头顶的小白鸭，也是她最好的朋友。',
			'imgsrc': 'images/p7.png',
			"cvtitlesrc":"images/cv7.png",
		},
		{
			'cv_title': '玉子烧',
			'cvname': '花泽香菜',
			'cv_d': '相当的笨手笨脚，性格也比较软弱给人一种软绵绵的感觉。兴趣是呆在花丛发呆，无论多平坦的地面都能施展特技平地摔。散发出一种“让人想保护（想欺负）”的气场，主要是焦急或者被欺负时候那种想哭的表情非常可爱。',
			'imgsrc': 'images/p8.png',
			"cvtitlesrc":"images/cv9.png",
		}
	]

	$('.cv-list a').on('click', function() {
		if($(this).hasClass('on')) {
			return false;
		}
//		动画引用
//		startround();
		var index = $(this).index();
		$(this).addClass("cv" + index).siblings().removeClass("cv0").removeClass("cv1").removeClass("cv2").removeClass("cv3").removeClass("cv4").removeClass("cv5").removeClass("cv6").removeClass("cv7")
		//		$(
		// $(".cv_detial").animate({
		// 	'top': $(this).height() + 'px'
		// }, 'slow', function() { //animate the img above/under the gallery (assuming all pictures are equal height)
		// 	$(this).animate({
		// 		'top': '75'
		// 	}, 'slow', function() { //animate the image back to its original position

		// 	});
		// });
		$('.cv_title').text(cvArr[index]['cv_title']);
		$('.cvname').text(cvArr[index]['cvname']);
		$('.cv_d').text(cvArr[index]['cv_d']);
		//	$('.cvimg').attr('src',cvArr[index]['imgsrc']);
		$(".cvimgcon img").eq(index).show().animate({
			left: 0
		}).siblings().hide().animate({
			left: 1000
		})
		$(this).addClass('on').siblings().removeClass('on');
		setTimeout(function () { 
	        stopround();
	    }, 500);
	    $(".cvtitle img").eq(index).show().siblings().hide();
	})
	
	if($(".cvimgcon img").length > 0){
		var showthis = ($(".cvimgcon img").length)-1;
//		$('.cv_title').text(cvArr[showthis]['cv_title']);
//		$('.cvname').text(cvArr[showthis]['cvname']);
   		$(".cvtitle img").eq(showthis).show().siblings().hide();
		$('.cv_d').text(cvArr[showthis]['cv_d']);
		//	$('.cvimg').attr('src',cvArr[0]['imgsrc']);
		
		$(".cvimgcon img").eq(showthis).show().css("left", "0px");
	}
	

})