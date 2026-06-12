function fmoney(s, n) {
	n = n > 0 && n <= 20 ? n : 2;
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
	var l = s.split(".")[0].split("").reverse(),
		r = s.split(".")[1];
	t = "";
	for (i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
	}
	return t.split("").reverse().join("") + "." + r;
}
$('#zsedition a').click(function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var certedition = $(this).attr('datavalue');
	if (certedition != "渠道版") {
		var pinglei = $('#zspinglei .cur').attr('datavalue');
		var brand = $('#zsbrands .cur').attr('datavalue');
		var algorithm = $('#zsalgorithm .cur').attr('datavalue');
		var types = $('#zstype .cur').attr('datavalue');
		var fits = $('#fitsfw .cur').attr('datavalue');
		var url = "ajaxbuycertificate.php?";
		if (certedition) {
			url = url + "certedition=" + certedition + "&";
		}
		if (pinglei) {
			url = url + "pinglei=" + pinglei + "&";
		}
		if (brand) {
			url = url + "brand=" + brand + "&";
		}
		if (algorithm) {
			url = url + "algorithm=" + algorithm + "&";
		}
		if (types) {
			url = url + "types=" + types + "&";
		}
		if (fits) {
			url = url + "fits=" + fits + "&";
		}
		url = url.substring(0, url.length - 1);
		// var url1="public.html";
		// var action="certselectinfo"
		// $.ajax({
		// 	type: "POST",
		// 	url: url1,
		// 	data: {
		// 		'action': action,
		// 		'brand': brand,
		// 		'algorithm': algorithm,
		// 		'types': types,
		// 		'fits': fits
		// 	},
		// 	success: function(data) {
		// 		$('#secondpartselect').html(data);
		// 	}
		// })
		$('.dingbox').html('');
		$('#secondpartselect').fadeIn();
		$.ajax({
			type: "POST",
			url: url,
			data: {},
			success: function(data) {
				$('.dingbox').html(data);
			}
		})
	} else {
		// $('#zsbrands').fadeIn().remove();
		// $('#zsalgorithm').fadeIn().remove();
		// $('#zstype').fadeIn().remove();
		// $('#fitsfw').fadeIn().remove();
		$('#secondpartselect').hide();
		$('.dingbox').html('');
		var url = "public.html";
		var action = "channelselectinfo";
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action
			},
			success: function(data) {
				$('.dingbox').html(data);
				$('.channelcontinfo').fadeIn();
				changepagesize1();
			}
		})
	}
})
$('#zspinglei a').click(function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var certedition = $('#zsedition .cur').attr('datavalue');
	if (certedition != "渠道版") {
		var pinglei = $(this).attr('datavalue');
		if (pinglei == "SSL证书") {
			var i = 0;
			var j = 0;
			$('#zstype p a').show();
			$('#fitsfw p a').show();
			$('#zstype p a').each(function() {
				if (i > 3) {
					$('#zstype p a').eq(i).hide();
				}
				$('#zstype p a').eq(i).removeClass('cur');
				i++;
			})
			$('#fitsfw p a').each(function() {
				if (j > 4) {
					$('#fitsfw p a').eq(j).hide();
				}
				$('#fitsfw p a').eq(j).removeClass('cur');
				j++;
			})
			$('#zstype p a').eq(0).show();
			$('#zstype p a').eq(0).removeClass('cur').addClass('cur');
			$('#fitsfw p a').eq(0).show();
			$('#fitsfw p a').eq(0).removeClass('cur').addClass('cur');
			var types = "";
			var fits = "";
		} else if (pinglei == "邮件签名") {
			$('#zstype p a').show();
			$('#fitsfw p a').show();
			var i = 0;
			var j = 0;
			$('#zstype p a').each(function() {
				if (i < 4) {
					$('#zstype p a').eq(i).hide();
				}
				$('#zstype p a').eq(i).removeClass('cur');
				i++;
			})
			$('#fitsfw p a').each(function() {
				if (j < 5) {
					$('#fitsfw p a').eq(j).hide();
				}
				$('#fitsfw p a').eq(j).removeClass('cur');
				j++;
			})
			$('#zstype p a').eq(0).show();
			$('#zstype p a').eq(0).removeClass('cur').addClass('cur');
			$('#fitsfw p a').eq(0).show();
			$('#fitsfw p a').eq(0).removeClass('cur').addClass('cur');
			var types = "";
			var fits = "";
		} else if (pinglei == "代码签名") {
			$('#zstype p a').show();
			$('#fitsfw p a').show();
			var i = 0;
			var j = 0;
			$('#zstype p a').each(function() {
				if (i == 1 || i > 3) {
					$('#zstype p a').eq(i).hide();
				}
				$('#zstype p a').eq(i).removeClass('cur');
				i++;
			})
			$('#fitsfw p a').each(function() {
				if (j < 5) {
					$('#fitsfw p a').eq(j).hide();
				}
				$('#fitsfw p a').eq(j).removeClass('cur');
				j++;
			})
			$('#zstype p a').eq(0).show();
			$('#zstype p a').eq(0).removeClass('cur').addClass('cur');
			$('#fitsfw p a').eq(0).show();
			$('#fitsfw p a').eq(0).removeClass('cur').addClass('cur');
			var types = "";
			var fits = "";
		} else {
			$('#zstype p a').show();
			$('#fitsfw p a').show();
			var types = $('#zstype .cur').attr('datavalue');
			var fits = $('#fitsfw .cur').attr('datavalue');
		}
		var brand = $('#zsbrands .cur').attr('datavalue');
		var algorithm = $('#zsalgorithm .cur').attr('datavalue');
		var url = "ajaxbuycertificate.php?";
		if (certedition) {
			url = url + "certedition=" + certedition + "&";
		}
		if (pinglei) {
			url = url + "pinglei=" + pinglei + "&";
		}
		if (brand) {
			url = url + "brand=" + brand + "&";
		}
		if (algorithm) {
			url = url + "algorithm=" + algorithm + "&";
		}
		if (types) {
			url = url + "types=" + types + "&";
		}
		if (fits) {
			url = url + "fits=" + fits + "&";
		}
		url = url.substring(0, url.length - 1);

		$.ajax({
			type: "POST",
			url: url,
			data: {},
			success: function(data) {
				$('.dingbox').html(data);
			}
		})
	}
})
$('#zsbrands a').live('click', function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var certedition = $('#zsedition .cur').attr('datavalue');
	var pinglei = $('#zspinglei .cur').attr('datavalue');
	var brand = $(this).attr('datavalue');
	var algorithm = $('#zsalgorithm .cur').attr('datavalue');
	var types = $('#zstype .cur').attr('datavalue');
	var fits = $('#fitsfw .cur').attr('datavalue');
	var url = "ajaxbuycertificate.php?";
	if (certedition) {
		url = url + "certedition=" + certedition + "&";
	}
	if (pinglei) {
		url = url + "pinglei=" + pinglei + "&";
	}
	if (brand) {
		url = url + "brand=" + brand + "&";
	}
	if (algorithm) {
		url = url + "algorithm=" + algorithm + "&";
	}
	if (types) {
		url = url + "types=" + types + "&";
	}
	if (fits) {
		url = url + "fits=" + fits + "&";
	}
	url = url.substring(0, url.length - 1);
	$.ajax({
		type: "POST",
		url: url,
		data: {},
		success: function(data) {
			$('.dingbox').html(data);
		}
	})
})

$('#zsalgorithm a').live('click', function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var certedition = $('#zsedition .cur').attr('datavalue');
	var pinglei = $('#zspinglei .cur').attr('datavalue');
	var brand = $('#zsbrands .cur').attr('datavalue');
	var algorithm = $(this).attr('datavalue');
	var types = $('#zstype .cur').attr('datavalue');
	var fits = $('#fitsfw .cur').attr('datavalue');
	var url = "ajaxbuycertificate.php?";
	if (certedition) {
		url = url + "certedition=" + certedition + "&";
	}
	if (pinglei) {
		url = url + "pinglei=" + pinglei + "&";
	}
	if (brand) {
		url = url + "brand=" + brand + "&";
	}
	if (algorithm) {
		url = url + "algorithm=" + algorithm + "&";
	}
	if (types) {
		url = url + "types=" + types + "&";
	}
	if (fits) {
		url = url + "fits=" + fits + "&";
	}
	url = url.substring(0, url.length - 1);
	$.ajax({
		type: "POST",
		url: url,
		data: {},
		success: function(data) {
			$('.dingbox').html(data);
		}
	})
})
$('#zstype a').live('click', function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var certedition = $('#zsedition .cur').attr('datavalue');
	var pinglei = $('#zspinglei .cur').attr('datavalue');
	var brand = $('#zsbrands .cur').attr('datavalue');
	var algorithm = $('#zsalgorithm .cur').attr('datavalue');
	var types = $(this).attr('datavalue');
	var fits = $('#fitsfw .cur').attr('datavalue');
	var url = "ajaxbuycertificate.php?";
	if (certedition) {
		url = url + "certedition=" + certedition + "&";
	}
	if (pinglei) {
		url = url + "pinglei=" + pinglei + "&";
	}
	if (brand) {
		url = url + "brand=" + brand + "&";
	}
	if (algorithm) {
		url = url + "algorithm=" + algorithm + "&";
	}
	if (types) {
		url = url + "types=" + types + "&";
	}
	if (fits) {
		url = url + "fits=" + fits + "&";
	}
	url = url.substring(0, url.length - 1);

	$.ajax({
		type: "POST",
		url: url,
		data: {},
		success: function(data) {
			$('.dingbox').html(data);
		}
	})
})
$('#fitsfw a').live('click', function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var certedition = $('#zsedition .cur').attr('datavalue');
	var pinglei = $('#zspinglei .cur').attr('datavalue');
	var brand = $('#zsbrands .cur').attr('datavalue');
	var algorithm = $('#zsalgorithm .cur').attr('datavalue');
	var types = $('#zstype .cur').attr('datavalue');
	var fits = $(this).attr('datavalue');
	var url = "ajaxbuycertificate.php?";
	if (certedition) {
		url = url + "certedition=" + certedition + "&";
	}
	if (pinglei) {
		url = url + "pinglei=" + pinglei + "&";
	}
	if (brand) {
		url = url + "brand=" + brand + "&";
	}
	if (algorithm) {
		url = url + "algorithm=" + algorithm + "&";
	}
	if (types) {
		url = url + "types=" + types + "&";
	}
	if (fits) {
		url = url + "fits=" + fits + "&";
	}
	url = url.substring(0, url.length - 1);
	$.ajax({
		type: "POST",
		url: url,
		data: {},
		success: function(data) {
			$('.dingbox').html(data);
		}
	})
})

$('#appchannelversition').live('click', function() {
	$('#channeltanchu').fadeIn();
	$('.channellayer').addClass('show');
})

$('.closechannellayer').click(function() {
	$('#channeltanchu').fadeOut();
	$('.channellayer').removeClass('show');
})

// $('#c_certpack a,#c_algorithm a,#c_type a,#c_fits a,#c_certnums a,#c_certpacktimes a').live('click',function() {   //0422修改
// 	$(this).addClass('cur').siblings().removeClass('cur');
// 	var c_certpack = $('#c_certpack .cur').attr('datavalue');
// 	if(c_certpack=="free"){
// 		$('.channelbox li p .isshow').hide();
// 		$('#c_certnums p a').removeClass('cur');
// 		$('#c_certnums p a:nth-child(5)').addClass('cur');
// 	}else if(c_certpack=="pay"){
// 		$('.channelbox li p .isshow').show();

// 	}
// 	var c_algorithm = $('#c_algorithm .cur').attr('datavalue');
// 	var c_type = $('#c_type .cur').attr('datavalue');
// 	var c_fits = $('#c_fits .cur').attr('datavalue');
// 	var c_certnums = $('#c_certnums .cur').attr('datavalue');
// 	var c_certpacktimes = $('#c_certpacktimes .cur').attr('datavalue');
// 	var url="public.html";
// 	var action="getchannelprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action,
// 			'c_certpack': c_certpack,
// 			'c_algorithm': c_algorithm,
// 			'c_type': c_type,
// 			'c_fits': c_fits,
// 			'c_certnums': c_certnums,
// 			'c_certpacktimes': c_certpacktimes
// 		},
// 		success: function(data) {
// 			if(data=="error"){
// 				tips = "对不起，操作有误或者系统出错了，请联系客服处理";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			}else{
// 				$('.feiydxs1 em').html(data);
// 			}
// 		}
// 	})

// })

$('#c_certpack a,#c_algorithm a,#c_type a,#c_fits a,#c_certnums a,#c_certpacktimes a').live('click', function() {
	$(this).addClass('cur').siblings().removeClass('cur');
	var c_certpack = $('#c_certpack .cur').attr('datavalue');
	if (c_certpack == "free") {
		$('.channelbox li p .isshow').hide();
		// $('#c_certnums p a').removeClass('cur');
		if ($(this).attr('datavalue') == "free") {
			$('#c_certnums p a').removeClass('cur');
			$('#c_certnums p a:nth-child(2)').addClass('cur');
		}

		if ($(this).attr('datavalue') == 20 || $(this).attr('datavalue') == 50 || $(this).attr('datavalue') ==
			100) {
			$('#c_certnums p a').removeClass('cur');
			$('#c_certnums p a:nth-child(2)').addClass('cur');
			tips = "您暂时无法申请10张以上免费渠道版证书，请联系客户经理";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	} else if (c_certpack == "pay") {
		$('.channelbox li p .isshow').show();

	}
	var c_algorithm = $('#c_algorithm .cur').attr('datavalue');
	var c_type = $('#c_type .cur').attr('datavalue');
	var c_fits = $('#c_fits .cur').attr('datavalue');
	var c_certnums = $('#c_certnums .cur').attr('datavalue');
	var c_certpacktimes = $('#c_certpacktimes .cur').attr('datavalue');
	var url = "public.html";
	var action = "getchannelprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'c_certpack': c_certpack,
			'c_algorithm': c_algorithm,
			'c_type': c_type,
			'c_fits': c_fits,
			'c_certnums': c_certnums,
			'c_certpacktimes': c_certpacktimes
		},
		success: function(data) {
			//var dataarr=data.split('|-|');
			if (data == "error") {
				tips = "对不起，操作有误或者系统出错了，请联系客服处理";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				$('.feiydxs1 span').html(data);
			}
		}
	})

})

$('#paychannel').click(function() {
	var isreadxieyi = $('#readxieyi').is(':checked');
	if (!isreadxieyi) {
		tips = "请先阅读并勾选接受《安全产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var c_certpack = $('#c_certpack .cur').attr('datavalue');

	var c_algorithm = $('#c_algorithm .cur').attr('datavalue');
	var c_type = $('#c_type .cur').attr('datavalue');
	var c_fits = $('#c_fits .cur').attr('datavalue');
	var c_certnums = $('#c_certnums .cur').attr('datavalue');
	var c_certpacktimes = $('#c_certpacktimes .cur').attr('datavalue');
	var url = "public.html";
	var action = "savecustomerchannel";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'c_certpack': c_certpack,
			'c_algorithm': c_algorithm,
			'c_type': c_type,
			'c_fits': c_fits,
			'c_certnums': c_certnums,
			'c_certpacktimes': c_certpacktimes
		},
		success: function(data) {
			//console.log(data);
			data = data.replace(/\s/g, '');
			if (data == "1001") {
				tips = "对不起，操作有误或者系统出错了，请联系客服处理";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "1002") {
				tips = "对不起，免费证书包每个账户一年只能领取一次";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "1003") {
				tips = "对不起，您暂无渠道版证书包使用权限";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "1004") {
				tips = "对不起，您暂无渠道版免费证书包使用权限";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				window.location.href = data;
			}
		}
	})
})

$('.createchannelbth').live('click', function() {
	var activeid = $(this).attr('dataid');
	var url = "public.html";
	var action = "createchannelinfo";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid
		},
		success: function(data) {
			//console.log(data);
			if (data == 1) {
				tips = "您选择的证书包已用完或者已过期，请重新购买申请";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips = "您账户里已有十个证书没有签发，暂不可申请渠道版";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==3){
				tips = "您账户里已有二十个证书没有签发，暂不可申请渠道版";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				window.location.href = data;
			}
		}
	})
})


$('.ordercheck a').live('click', function() {
	var certedition = $('#zsedition .cur').attr('datavalue');
	var pinglei = $('#zspinglei .cur').attr('datavalue');
	var brand = $('#zsbrands .cur').attr('datavalue');
	var algorithm = $('#zsalgorithm .cur').attr('datavalue');
	var types = $('#zstype .cur').attr('datavalue');
	var fits = $('#fitsfw .cur').attr('datavalue');
	var url = "ajaxbuycertificate.php?";
	if (certedition) {
		url = url + "certedition=" + certedition + "&";
	}
	if (pinglei) {
		url = url + "pinglei=" + pinglei + "&";
	}
	if (brand) {
		url = url + "brand=" + brand + "&";
	}
	if (algorithm) {
		url = url + "algorithm=" + algorithm + "&";
	}
	if (types) {
		url = url + "types=" + types + "&";
	}
	if (fits) {
		url = url + "fits=" + fits + "&";
	}

	if (!$('.ordercheck a').hasClass('sanup') && !$('.ordercheck a').hasClass('sandown')) {
		url = url + "ordercheck=1";
	} else if ($('.ordercheck a').hasClass('sanup')) {
		url = url + "ordercheck=2";
	} else if ($('.ordercheck a').hasClass('sandown')) {
		url = url + "ordercheck=1";
	}

	$.ajax({
		type: "POST",
		url: url,
		data: {},
		success: function(data) {
			$('.tablebox .biaogetable').html(data);
			if (!$('.ordercheck a').hasClass('sanup') && !$('.ordercheck a').hasClass('sandown')) {
				$('.ordercheck a').addClass('sanup');
			} else if ($('.ordercheck a').hasClass('sanup')) {
				$('.ordercheck a').removeClass('sanup');
				$('.ordercheck a').addClass('sandown');
			} else if ($('.ordercheck a').hasClass('sandown')) {
				$('.ordercheck a').removeClass('sandown');
				$('.ordercheck a').addClass('sanup');
			}
		}
	})
})

// $('.ordercheck .sanup').live('click', function() {
// 	var certedition = $('#zsedition .cur').attr('datavalue');
// 	var pinglei = $('#zspinglei .cur').attr('datavalue');
// 	var brand = $('#zsbrands .cur').attr('datavalue');
// 	var types = $('#zstype .cur').attr('datavalue');
// 	var fits = $('#fitsfw .cur').attr('datavalue');

// 	var url = "ajaxbuycertificate.php?";
// 	if (certedition) {
// 		url = url + "certedition=" + certedition + "&";
// 	}
// 	if (pinglei) {
// 		url = url + "pinglei=" + pinglei + "&";
// 	}
// 	if (brand) {
// 		url = url + "brand=" + brand + "&";
// 	}
// 	if (types) {
// 		url = url + "types=" + types + "&";
// 	}
// 	if (fits) {
// 		url = url + "fits=" + fits + "&";
// 	}
// 	url = url + "ordercheck=2";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {},
// 		success: function(data) {
// 			$('.tablebox .biaogetable').html(data);
// 			$('.ordercheck a').removeClass('cur');
// 			$('.ordercheck .sandown').addClass('cur');
// 		}
// 	})
// })

// $('#buycertnum .shang #add').live('click', function() {
// 	_this = $(this);
// 	nowcertnum = parseFloat(_this.parent().find('input').val()) + parseFloat(1);
// 	var certid = $(this).parent().parent().parent().parent().find('.paybtn').attr('dataid');
// 	var url = "public.html";
// 	var action = "checkopenchannel";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action,
// 			'nowcertnum': nowcertnum,
// 			'certid': certid
// 		},
// 		success: function(data) {
// 			if (data == 1) {
// 				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else if (data == 2) {
// 				tips = "对不起，单产品一次下单数量不能超过5个";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else {
// 				_this.parent().find('input').val(nowcertnum);
// 			}
// 		}
// 	})
// })

// $('#buycertnum .shang #remove').live('click', function() {
// 	nowcertnum = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
// 	if (nowcertnum < 1) {
// 		nowcertnum = 1;
// 	}
// 	$(this).parent().find('input').val(nowcertnum);

// })

// $('.paybtn').live('click', function() {
// 	var certid = $(this).attr('dataid');
// 	var certnum = $(this).parent().parent().find('.dingdanshul input').val();
// 	var url = "public.html";
// 	var action = "buycertificatecart";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action,
// 			'certid': certid,
// 			'certnum': certnum
// 		},
// 		success: function(data) {
// 			if (data == 1) {
// 				tips = "渠道版选择数量不能超过赠送的数量";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else if (data == 2) {
// 				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else if (data == 3) {
// 				tips = "对不起，单产品一次下单数量不能超过5个";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else {
// 				$('#buycert').fadeIn();
// 				$('#buycert .tablebox').html(data);
// 			}
// 		}
// 	})
// })



// $('.renewbtn').live('click', function() {
// 	var certid = $(this).attr('dataid');
// 	var activeid = $(this).attr('dataactiveid');

// 	var url = "public.html";
// 	var action = "renewcertificatecart";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action,
// 			'certid': certid,
// 			'activeid': activeid
// 		},
// 		success: function(data) {

// 			if (data == 1) {
// 				tips = "渠道版选择数量不能超过赠送的数量";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else {
// 				$('#buycert').fadeIn();
// 				$('#buycert .tablebox').html(data);
// 				$('#buycertlist h2').html('证书续签');
// 				//$('select.newselect').select();
// 			}
// 		}
// 	})
// })

// $('.renewoldcertbtn').live('click', function() {

// 	var activeid = $(this).attr('dataactiveid');
// 	var url = "public.html";
// 	var action = "renewoldcertlayer";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action,
// 			'activeid': activeid
// 		},
// 		success: function(data) {
// 			$('#buycert').fadeIn();
// 			$('.buycertlist h2').html('证书续签');
// 			$('#buycert .tablebox').html(data);
// 		}
// 	})
// })

// $('.renewoldcert').live('click', function() {

// 	var activeid = $(this).attr('dataactiveid');
// 	var url = "public.html";
// 	var action = "renewoldcert";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action,
// 			'activeid': activeid
// 		},
// 		success: function(data) {
// 			//console.log(data);
// 			if (data == 1) {
// 				tips = "该证书已完成续签不可重复操作！";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else if (data == 2) {
// 				tips = "操作错误，请不要非法操作";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 				return false;
// 			} else {
// 				window.location.href = data;
// 				tips = "续签请求已提交，页面跳转中";
// 				$('#alert1 .sy-content').html(tips);
// 				syalert.syopen('alert1');
// 			}
// 		}
// 	})
// })


$('#newselect').live('change', function() {
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var algorithmlist = "";
	var perproductprice = "";
	var oldactiveid = $('#paybuynow').attr('dataactive');

	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#newselect').val();
			procodeall = procodeall + eachprocode + ",";
			var productsprice = _this.find('#productsprice');
			var hejitimes = _this.find('#hejitimes');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			totalcouponums = totalcouponums + couponnums + ",";
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			totalcouponcode = totalcouponcode + couponcode + ",";
			var eachalgorithm = _this.find('#algorithmselect').val();
			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}
			var action = "getperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'eachalgorithm': eachalgorithm,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else if (data == 4) {
						tips = "优惠码已使用或者已被占用";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else if (data == 5) {
						tips = "请勿非法操作";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						perproductpriceval = data.split('|')[0];
						hejitimesval = data.split('|')[1];
						productsprice.html(perproductpriceval);
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	var nowcouponid = $(this).parent().parent().find('#couponcodebox .shiyong .ldiscountid').html();
	var nowcouponcode = $(this).parent().parent().find('#couponcodebox .shiyong .ldiscountcode').html();
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'algorithmlist': algorithmlist,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'nowcouponcode': nowcouponcode,
			'nowcouponid': nowcouponid,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})

})

$('#algorithmselect').live('change', function() {
	var num = 0;
	var url = "public.html";
	var algorithm = $(this).val();
	var parentthis = $(this).parent().parent();
	var nowprocode = parentthis.find('#newselect').val();
	var buyyears = parentthis.find('#newselect').get(0).selectedIndex + 1;
	var procodeall = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var algorithmtxtlist = "";
	var eachalgorithmtxt;
	var algorithmlist = "";
	var perproductprice = "";
	var oldactiveid = $('#paybuynow').attr('dataactive');
	var action2 = "changesingledomainprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action2,
			'procode': nowprocode,
			'buyyears': buyyears,
			'algorithm': algorithm,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			if (data == 1) {
				tips = "您的证书算法与系统不匹配，请重新选择算法";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				parentthis.find('#newselect').html(data);
				$('.buycertlist .tablebox tr').each(function() {
					num++;
					if (num > 1) {
						var _this = $(this);
						var eachprocode = _this.find('#newselect').val();
						procodeall = procodeall + eachprocode + ",";
						var productsprice = _this.find('#productsprice');
						var hejitimes = _this.find('#hejitimes');
						var productsprice = _this.find('#productsprice');
						var couponnums = _this.find('.shiyong .ldiscountid').html();
						totalcouponums = totalcouponums + couponnums + ",";
						var couponcode = _this.find('.shiyong .ldiscountcode').html();
						totalcouponcode = totalcouponcode + couponcode + ",";
						var eachalgorithm = _this.find('#algorithmselect').val();
						if (algorithmlist) {
							algorithmlist = algorithmlist + eachalgorithm + ",";
						} else {
							algorithmlist = eachalgorithm + ",";
						}
						if (eachalgorithm == "国际算法") {
							eachalgorithmtxt = "国际算法证书，适配所有主流系统及浏览器";
						} else if (eachalgorithm == "国密算法") {
							eachalgorithmtxt = "国密算法证书，适配信创国产系统及国密浏览器";
						} else if (eachalgorithm == "双算法") {
							eachalgorithmtxt = "双算法包含国际/国密双证书，全球可信、国密合规";
						}
						if (algorithmtxtlist != "undefined") {
							if (algorithmtxtlist.indexOf(eachalgorithmtxt) < 0) {
								algorithmtxtlist = algorithmtxtlist + eachalgorithmtxt +
								"；";
							}
						} else {
							algorithmtxtlist = eachalgorithmtxt + "；";
						}
						algorithmtxtlist = algorithmtxtlist.replace('undefined；', '');

						var action = "getperproprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action,
								'eachprocode': eachprocode,
								'eachalgorithm': eachalgorithm,
								'couponnums': couponnums,
								'couponcode': couponcode,
								'oldactiveid': oldactiveid
							},
							success: function(data) {

								if (data == 1) {
									tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
									$('#alert1 .sy-content').html(tips);
									syalert.syopen('alert1');
									return false;
								} else if (data == 2) {
									tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
									$('#alert1 .sy-content').html(tips);
									syalert.syopen('alert1');
									return false;
								} else if (data == 3) {
									tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
									$('#alert1 .sy-content').html(tips);
									syalert.syopen('alert1');
									_this.removeClass("cur");
									return false;
								} else if (data == 4) {
									tips = "优惠码已使用或者已被占用";
									$('#alert1 .sy-content').html(tips);
									syalert.syopen('alert1');
									_this.removeClass("cur");
									return false;
								} else {
									perproductpriceval = data.split('|')[0];
									hejitimesval = data.split('|')[1];
									productsprice.html(perproductpriceval);
									hejitimes.html(hejitimesval);
								}
							}
						})
					}
				})
				procodeall = procodeall.substring(0, procodeall.length - 1);
				totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
				totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
				algorithmtxtlist = algorithmtxtlist.substring(0, algorithmtxtlist.length - 1);
				algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
				var nowcouponid = $(this).parent().parent().find(
					'#couponcodebox .shiyong .ldiscountid').html();
				var nowcouponcode = $(this).parent().parent().find(
					'#couponcodebox .shiyong .ldiscountcode').html();
				$('.renewtipstd .renewtips').html('<i><img src="images/ico105.svg"></i>' +
					algorithmtxtlist + '。');
				var action1 = "getallproprice";
				$.ajax({
					type: "POST",
					url: url,
					data: {
						'action': action1,
						'procodeall': procodeall,
						'algorithmlist': algorithmlist,
						'totalcouponums': totalcouponums,
						'totalcouponcode': totalcouponcode,
						'nowcouponcode': nowcouponcode,
						'nowcouponid': nowcouponid,
						'oldactiveid': oldactiveid
					},
					success: function(data) {
						$('.feiydxs span em').html(data);
					}
				})
			}
		}
	})

})


$('#algorithmmultiselect').live('change', function() {
	var num = 0;
	var url = "public.html";
	var algorithm = $(this).val();
	var parentthis = $(this).parent().parent();
	var nowprocode = parentthis.find('#newmultiselect').val();
	var buyyears = parentthis.find('#newmultiselect').get(0).selectedIndex + 1;
	var singledomainnum = parseFloat(parentthis.find('#singledomainnum .shang input').val()) + parseFloat(1);
	var multidomainnum = parentthis.find('#multidomainnum .shang input').val();

	var oldactiveid = $('#paybuynow').attr('dataactive');
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var buyyearslist = "";
	var algorithmlist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var perproductprice = "";
	var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
	var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
	var algorithmtxtlist = "";
	var eachalgorithmtxt;
	var action2 = "changemultidomainprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action2,
			'procode': nowprocode,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'algorithm': algorithm,
			'buyyears': buyyears,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			parentthis.find('#newmultiselect').html(data);
		}
	})
	$('.buycertlist .tablebox tr').each(function() {

		num++;
		if (num > 1) {

			var _this = $(this);
			var eachprocode = _this.find('#newmultiselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}

			var eachalgorithm = _this.find('#algorithmmultiselect').val();
			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}

			if (eachalgorithm == "国际算法") {
				eachalgorithmtxt = "国际算法证书，适配所有主流系统及浏览器";
			} else if (eachalgorithm == "国密算法") {
				eachalgorithmtxt = "国密算法证书，适配信创国产系统及国密浏览器";
			} else if (eachalgorithm == "双算法") {
				eachalgorithmtxt = "双算法包含国际/国密双证书，全球可信、国密合规";
			}
			if (algorithmtxtlist != "undefined") {
				if (algorithmtxtlist.indexOf(eachalgorithmtxt) < 0) {
					algorithmtxtlist = algorithmtxtlist + eachalgorithmtxt + "；";
				}
			} else {
				algorithmtxtlist = eachalgorithmtxt + "；";
			}
			algorithmtxtlist = algorithmtxtlist.replace('undefined；', '');

			var productsprice = _this.find('#productsprice');
			var hejitimes = _this.find('#hejitimes');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			if (totalcouponums) {
				totalcouponums = totalcouponums + couponnums + ",";
			} else {
				totalcouponums = couponnums + ",";
			}
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			if (totalcouponcode) {
				totalcouponcode = totalcouponcode + couponcode + ",";
			} else {
				totalcouponcode = couponcode + ",";
			}
			var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val()) +
				parseFloat(1);

			var multidomainnum = _this.find('#multidomainnum .shang input').val();
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			if (lisrenew == 1) {
				var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
				if (buyyears == 0) {
					buyyears = 90;
				}
			} else {
				var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
			}

			if (buyyearslist) {
				buyyearslist = buyyearslist + buyyears + ",";
			} else {
				buyyearslist = buyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}

			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}

			var action = "getperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'eachalgorithm': eachalgorithm,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'buyyears': buyyears,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						perproductpriceval = data.split('|')[0];
						hejitimesval = data.split('|')[1];
						productsprice.html(perproductpriceval);
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
	algorithmtxtlist = algorithmtxtlist.substring(0, algorithmtxtlist.length - 1);
	$('.renewtipstd .renewtips').html('<i><img src="images/ico105.svg"></i>' + algorithmtxtlist + '。');
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'algorithmlist': algorithmlist,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'buyyearslist': buyyearslist,
			'singledomainnumlist': singledomainnumlist,
			'multidomainnumlist': multidomainnumlist,
			'oldactiveid': oldactiveid,
			'nowcouponid': nowcouponid,
			'nowcouponcode': nowcouponcode
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})

})

$('#renewselect').live('change', function() {
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	//var algorithmlist="";
	var oldactiveid = $('#paybuynow').attr('dataactive');

	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#renewselect').val();
			procodeall = procodeall + eachprocode + ",";
			var relproductsprice = _this.find('#relproductsprice');
			var youhuiprice = _this.find('#youhuiprice');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			totalcouponums = totalcouponums + couponnums + ",";
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			totalcouponcode = totalcouponcode + couponcode + ",";
			// var eachalgorithm=_this.find('#algorithmselect').val();
			// if (algorithmlist) {
			// 	algorithmlist = algorithmlist + eachalgorithm + ",";
			// } else {
			// 	algorithmlist = eachalgorithm + ",";
			// }	
			var hejitimes = _this.find('#hejitimes');
			var action = "getrenewperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {

					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else if (data == 4) {
						tips = "优惠码已使用或者已被占用";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else if (data == 5) {
						tips = "请勿非法操作";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						var relproductspricevalue = data.split('|-|')[0];
						var youhuipricevalue = data.split('|-|')[1];
						relproductsprice.html(relproductspricevalue);
						youhuiprice.html(youhuipricevalue);
						hejitimesval = data.split('|-|')[3];
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	var nowcouponid = $(this).parent().parent().find('#couponcodebox .shiyong .ldiscountid').html();
	var nowcouponcode = $(this).parent().parent().find('#couponcodebox .shiyong .ldiscountcode').html();
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'nowcouponcode': nowcouponcode,
			'nowcouponid': nowcouponid,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})

})


$(".shiyong").live('click', function() {
	var nowhr = $(this).parent().parent().index() + 1;
	var proid = $(this).attr('datapid');

	var isrenew = $(this).attr('dataisrenew');
	if ($(this).parent().parent().find('#singledomainnum .shang input').val()) {
		var singledomainnum = parseFloat($(this).parent().parent().find('#singledomainnum .shang input')
		.val()) + parseFloat(1);
	} else if ($(this).parent().parent().find('#resingledomainnum .shang input').val()) {
		var singledomainnum = parseFloat($(this).parent().parent().find('#resingledomainnum .shang input')
		.val()) + parseFloat(1);
	} else {
		var singledomainnum = 0;
	}

	if ($(this).parent().parent().find('#multidomainnum .shang input').val()) {
		var multidomainnum = $(this).parent().parent().find('#multidomainnum .shang input').val();
	} else if ($(this).parent().parent().find('#remultidomainnum .shang input').val()) {
		var multidomainnum = parseFloat($(this).parent().parent().find('#remultidomainnum .shang input')
		.val()) + parseFloat(1);
	} else {
		var multidomainnum = 0;
	}



	if (isrenew == 1) {
		var algorithm = $(this).parent().parent().find('#algorithmtxt').html();
		var buyyears = 5 - $(this).parent().parent().find('.newselect').get(0).selectedIndex; //购买年限
	} else {
		var algorithm = $(this).parent().parent().find('.algorithmselect').val();
		var buyyears = $(this).parent().parent().find('.newselect').get(0).selectedIndex + 1; //购买年限
	}

	var nowdiscountid = $(this).find('.ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $(this).find('.ldiscountcode').html();
	var discountid = ""; //先遍历已经使用的优惠券和优惠码
	var discountcode = "";
	var i = 0;
	var j = 0;
	$('.buycertlist .tablebox tr').each(function() {
		i++;
		if ($(this).find('.shiyong .ldiscountid').html() && nowhr != i) {
			discountid = discountid + $(this).find('.shiyong .ldiscountid').html() + ",";
		}
	})

	$('.buycertlist .tablebox tr').each(function() {
		j++;
		if ($(this).find('.shiyong .ldiscountcode').html() && nowhr != j) {
			discountcode = discountcode + $(this).find('.shiyong .ldiscountcode').html() + ",";
		}
	})
	var _this = $(this);
	var discountid = discountid.substring(0, discountid.length - 1);
	var discountcode = discountcode.substring(0, discountcode.length - 1);
	var url = "public.html";
	var action = "couponlist";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'pid': proid,
			'buyyears': buyyears,
			'algorithm': algorithm,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'nowdiscountid': nowdiscountid,
			'nowdiscountcode': nowdiscountcode,
			'discountid': discountid,
			'discountcode': discountcode,
			'isrenew': isrenew,
			'nowhr': nowhr
		},
		success: function(data) {
			//console.log(data);
			if (data == 1) {
				tips = "优惠券已用完";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				_this.parent().find('.couponcodebox ul').html(data);

			}
		}
	})
	_this.parent().find('.couponcodebox').slideToggle();
})

$('tr .alignright .couponcodebox li .btnhover').live('click', function() {
	var couponinfo = $(this).parent().parent().find("li input:radio[name='ldiscountid']:checked")
.val(); //获取优惠券ID，如果不是优惠券，则是优惠码
	_this = $(this).parent().parent().parent().parent();
	_this1 = $(this).parent().parent().parent().parent().parent();
	_this2 = $(this).parent().parent().parent();
	var oldactiveid = $('#paybuynow').attr('dataactive');
	var nowhr = _this1.index() + 1; //获取当前行数
	var tdiscountid = "";
	var tdiscountcode = "";
	var procodeall = "";
	var buyyearslist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var algorithmlist = "";
	var j = 0;
	$('.buycertlist .tablebox tr').each(function() { //遍历所有的优惠券ID
		j++;
		if ($(this).find('.shiyong .ldiscountid').html() && nowhr != j) {
			tdiscountid = tdiscountid + $(this).find('.shiyong .ldiscountid').html() + ",";
		}
	})
	var tdiscountid = tdiscountid.substring(0, tdiscountid.length - 1);
	var j = 0;
	$('.buycertlist .tablebox tr').each(function() { //遍历所有的优惠码
		j++;
		if ($(this).find('.shiyong .ldiscountcode').html() && nowhr != j) {
			tdiscountcode = tdiscountcode + $(this).find('.shiyong .ldiscountcode').html() + ",";
		}
	})
	var tdiscountcode = tdiscountcode.substring(0, tdiscountcode.length - 1);

	var proid = _this.find('.shiyong').attr('datapid'); //产品pid
	if (_this1.find('#singledomainnum .shang input').val()) { //多域名新增单域名数量
		var singledomainnum = parseFloat(_this1.find('#singledomainnum .shang input').val()) + parseFloat(1);
	} else if (_this1.find('#resingledomainnum .shang input').val()) {
		var singledomainnum = parseFloat(_this1.find('#resingledomainnum .shang input').val()) + parseFloat(1);
	} else {
		var singledomainnum = 0;

	}

	if (_this1.find('#multidomainnum .shang input').val()) { //多域名新增通配符数量
		var multidomainnum = _this1.find('#multidomainnum .shang input').val();
	} else if (_this1.find('#remultidomainnum .shang input').val()) {
		var multidomainnum = _this1.find('#remultidomainnum .shang input').val();
	} else {
		var multidomainnum = 0;
	}
	var isrenew = _this.find('.shiyong').attr('dataisrenew');

	if (isrenew == 1) {
		var totalbuyyears = _this1.find('select option').index();
		var buyyears = totalbuyyears - _this1.find('.newselect').get(0).selectedIndex; //购买年限
		var algorithm = "国际算法";
		_this.find('.shiyong').html('我要继续优惠');
	} else {
		var buyyears = _this1.find('.newselect').get(0).selectedIndex + 1; //购买年限
		var algorithm = _this1.find('.algorithmselect').val();
		_this.find('.shiyong').html('我要优惠');
	}

	var num = 0;
	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('.newselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}
			if (_this.find('#singledomainnum .shang input').val()) {
				var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val()) +
					parseFloat(1);
			} else if (_this.find('#resingledomainnum .shang input').val()) {
				var singledomainnum = parseFloat(_this.find('#resingledomainnum .shang input').val()) +
					parseFloat(1);
			}
			if (_this.find('#multidomainnum .shang input').val()) {
				var multidomainnum = _this.find('#multidomainnum .shang input').val();
			} else if (_this.find('#remultidomainnum .shang input').val()) {
				var multidomainnum = _this.find('#remultidomainnum .shang input').val();
			}
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			if (lisrenew == 1) {
				var totalbuyyears = _this.find('select option').index();
				var lbuyyears = totalbuyyears - _this.find('.newselect').get(0).selectedIndex; //购买年限
			} else {
				var lbuyyears = _this.find('.newselect').get(0).selectedIndex + 1; //购买年限
			}

			if (buyyearslist) {
				buyyearslist = buyyearslist + lbuyyears + ",";
			} else {
				buyyearslist = lbuyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}
			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}
			if (lisrenew == 1) {
				var eachalgorithm = "国际算法";
			} else {
				var eachalgorithm = _this.find('.algorithmselect').val();
			}

			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}

		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);

	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);

	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);

	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	// alert(procodeall);
	// alert(buyyearslist);
	// alert(singledomainnumlist);
	// alert(multidomainnumlist);

	var url = "public.html";
	if (couponinfo) { //如果优惠信息不能为空
		if (couponinfo == "优惠码") { //如果是优惠码
			var couponcode = $(this).parent().parent().find("li .ldiscountcode").val(); //获取优惠码

			if (!dyfrom_null(couponcode)) {
				tips = "优惠码不能为空";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}

			var action = "checkrelcouponcode";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'pid': proid,
					'buyyears': buyyears,
					'algorithm': algorithm,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'tdiscountcode': tdiscountcode,
					'isrenew': isrenew,
					'couponcode': couponcode
				},
				success: function(data) {
					// /console.log(data);
					if (data == 1) {
						tips = "未检测到匹配的优惠码或优惠码已被占用";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else {
						if (isrenew == 1) {
							var relproductspricevalue = data.split('|-|')[0];
							var youhuipricevalue = data.split('|-|')[1];
							_this1.find('#relproductsprice').html(relproductspricevalue);
							_this.find('#youhuiprice').html(youhuipricevalue);
						} else {
							_this.find('#productsprice').html(data);
						}

						//_this.find('.shiyong').html('优惠码：<i class="ldiscountcode">'+couponcode+'</i>');
						//_this1.find('td::nth-child(8)').html(couponcode);
						_this2.slideUp();
						var action2 = "vcouponcodeprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action2,
								'couponcode': couponcode
							},
							success: function(data) {
								_this.find('.shiyong').html('已优惠' + data +
									'<i class="ldiscountcode" style="display:none;">' +
									couponcode + '</i>');
							}
						})
						totalcouponums = "";
						totalcouponcode = "";
						j = 0;
						$('.buycertlist .tablebox tr').each(function() { //遍历所有的优惠券ID
							j++;
							if (j > 1) {
								if (j == 2) {
									totalcouponums = $(this).find('.shiyong .ldiscountid')
										.html() + ",";
								} else {
									totalcouponums = totalcouponums + $(this).find(
										'.shiyong .ldiscountid').html() + ",";
								}
							}
						})
						var totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);

						var k = 0;
						$('.buycertlist .tablebox tr').each(function() { //遍历所有的优惠码
							k++;
							// alert($(this).find('.shiyong .ldiscountcode').html());
							if (k > 1) {
								if (k == nowhr) {
									if (totalcouponcode != "undefined") {
										totalcouponcode = totalcouponcode + couponcode +
										",";
									} else {
										totalcouponcode = couponcode + ",";
									}
								} else {
									if (totalcouponcode != "undefined") {
										totalcouponcode = totalcouponcode + $(this).find(
											'.shiyong .ldiscountcode').html() + ",";
									} else {
										totalcouponcode = $(this).find(
											'.shiyong .ldiscountcode').html() + ",";
									}
								}
							}
						})
						var totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length -
							1);
						var action1 = "getallproprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action1,
								'procodeall': procodeall,
								'algorithmlist': algorithmlist,
								'totalcouponums': totalcouponums,
								'totalcouponcode': totalcouponcode,
								'buyyearslist': buyyearslist,
								'singledomainnumlist': singledomainnumlist,
								'oldactiveid': oldactiveid,
								'multidomainnumlist': multidomainnumlist,
								'nowcouponcode': couponcode
							},
							success: function(data) {

								$('.feiydxs span em').html(data);
							}
						})

					}
				}
			})
		} else {
			var action = "checkrelcouponid";

			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'pid': proid,
					'buyyears': buyyears,
					'algorithm': algorithm,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'tdiscountid': tdiscountid,
					'isrenew': isrenew,
					'couponnum': couponinfo
				},
				success: function(data) {
					//console.log(data);
					if (data == 1) {
						tips = "优惠券已被占用或对应品牌无权使用该优惠券";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else {
						if (isrenew == 1) {
							var relproductspricevalue = data.split('|-|')[0];
							var youhuipricevalue = data.split('|-|')[1];
							_this1.find('#relproductsprice').html(relproductspricevalue);
							_this.find('#youhuiprice').html(youhuipricevalue);
						} else {
							_this.find('#productsprice').html(data);
						}
						//_this.find('.shiyong').html('优惠券：<i class="ldiscountid">'+couponinfo+'</i>');
						//_this1.find('td:nth-child(6)').html(couponinfo);
						_this2.slideUp();
						j = 0;
						totalcouponums = "";
						totalcouponcode = "";
						$('.buycertlist .tablebox tr').each(function() { //遍历所有的优惠券ID
							j++;
							if (j > 1) {
								if (j == nowhr) {
									if (totalcouponums != "undefined") {
										totalcouponums = totalcouponums + couponinfo + ",";
									} else {
										totalcouponums = couponinfo + ",";
									}
								} else {
									if (totalcouponums != "undefined") {
										totalcouponums = totalcouponums + $(this).find(
											'.shiyong .ldiscountid').html() + ",";
									} else {
										totalcouponums = $(this).find(
											'.shiyong .ldiscountid').html() + ",";
									}
								}
							}
						})
						var totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
						var k = 0;
						$('.buycertlist .tablebox tr').each(function() { //遍历所有的优惠码
							k++;
							if (k > 1) {
								if (k == 2) {
									totalcouponcode = $(this).find(
										'.shiyong .ldiscountcode').html() + ",";
								} else {
									totalcouponcode = totalcouponcode + $(this).find(
										'.shiyong .ldiscountcode').html() + ",";
								}
							}
						})
						var totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length -
							1);

						var action1 = "getallproprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action1,
								'procodeall': procodeall,
								'algorithmlist': algorithmlist,
								'totalcouponums': totalcouponums,
								'totalcouponcode': totalcouponcode,
								'buyyearslist': buyyearslist,
								'singledomainnumlist': singledomainnumlist,
								'oldactiveid': oldactiveid,
								'multidomainnumlist': multidomainnumlist,
								'nowcouponid': couponinfo
							},
							success: function(data) {
								$('.feiydxs span em').html(data);
							}
						})
						var action2 = "vcouponidprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action2,
								'couponinfo': couponinfo
							},
							success: function(data) {
								_this.find('.shiyong').html('已优惠' + data +
									'<i class="ldiscountid" style="display:none;">' +
									couponinfo + '</i>');
							}
						})
					}

				}
			})
		}
	} else {
		if (isrenew == 1) {
			_this.find('.shiyong').html('我要继续优惠');
		} else {
			_this.find('.shiyong').html('我要优惠');
		}

		_this2.slideUp();
	}

})

// $(".couponcode").live('click',function(){
// 	var nowhr=$(this).parent().parent().index()+1;
// 	$('.youhuicode').attr('datanum',nowhr);
// 	$("#couponcode").fadeIn();
// })

$(".vshiyong").live('click', function() {
	var nowhr = $(this).parent().parent().index() + 1;
	var procode = $(this).parent().parent().attr('datacode');
	var singledomainnum = parseFloat($(this).parent().parent().find('td:nth-child(4)').html()) + parseFloat(1);
	var multidomainnum = $(this).parent().parent().find('td:nth-child(5)').html();
	var nowdiscountid = $(this).find('.ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $(this).find('.ldiscountcode').html();
	var algorithm = $(this).parent().parent().find('.peralgorithm').html();

	var _this = $(this);
	var url = "public.html";
	var action = "vcouponlist";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'procode': procode,
			'algorithm': algorithm,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'nowdiscountid': nowdiscountid,
			'nowdiscountcode': nowdiscountcode,
			'nowhr': nowhr
		},
		success: function(data) {
			if (data == 1) {
				tips = "优惠券已用完";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				_this.parent().find('.vcouponcodebox ul').html(data);
			}
		}
	})
	_this.parent().find('.vcouponcodebox').slideToggle();
})

$('#delpercerinfo').live('click', function() {
	_this = $(this).parent().parent();
	var nowhr = _this.index() + 1; //获取当前行数
	var proid = $(this).attr('datapid');
	var toptrnum = parseInt(_this.find('.vcouponcodebox').attr('datatoptrnum')) + 2;
	_this.remove();
	var action = "delpercerinfo";
	var url = "public.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'pid': proid,
			'nowtrnum': nowhr,
			'toptrnum': toptrnum
		},
		success: function(data) {
			var num1 = data.split('*')[0];
			var num2 = data.split('*')[1];
			if (num1 == 0) {
				$('#shopcart table tr:nth-child(' + toptrnum + ')').remove();
				$('#buycert').fadeOut();
				$('.fudong li em').html(num2);
			} else {
				$('.tablebox table tr:nth-child(' + toptrnum + ') td:nth-child(5) #lproductsbuynum')
					.html(num1);
				$('.fudong li em').html(num2);

			}
			var action1 = "vgetallproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action1,
					'pid': proid
				},
				success: function(data) {
					if (num1 > 0) {
						$('.feiydxs span em').html(data);
						$('.tablebox table tr:nth-child(' + toptrnum +
							') td:nth-child(6) #lproductsprice').html(data);
					}
					var isadditionalpro = $('#checkaddpro').is(':checked');
					var azservicenum = $('#azservicenum .shang input').val();
					var checknum = "";
					$('#shopcart tr').each(function() {
						if ($(this).find('.checks').is(':checked')) {
							if ($(this).index() != 0) {
								checknum = checknum + $(this).index() + ",";
							}
						}
					})
					checknum = checknum.substring(0, checknum.length - 1);
					var action2 = 'carttotalprice';
					$.ajax({
						type: "POST",
						url: url,
						data: {
							'action': action2,
							'checknum': checknum,
							'isadditionalpro': isadditionalpro,
							'azservicenum': azservicenum
						},
						beforeSend: function() {},
						success: function(data) {
							$('.feiydxs1 em').html(data);
						},
					})
				}
			})
		},
	})
})

$('tr .alignright .vcouponcodebox li .btnhover').live('click', function() {
	_this = $(this).parent().parent().parent().parent();
	_this1 = $(this).parent().parent().parent().parent().parent();
	_this2 = $(this).parent().parent().parent();
	_this3 = $(this).parent().parent();
	_this.find('.shiyong').html('我要优惠');
	var couponinfo = _this3.find("li input:radio[name='ldiscountid']:checked").val(); //获取优惠券ID，如果不是优惠券，则是优惠码
	var nowhr = _this1.index() + 1; //获取当前行数
	var proid = _this.find('.vshiyong').attr('datapid');

	var toptrnum = parseInt(_this2.attr('datatoptrnum')) + 2;
	var profits = _this1.attr('datafits');
	var url = "public.html";
	if (couponinfo) { //如果优惠信息不能为空
		if (couponinfo == "优惠码") { //如果是优惠码
			var couponcode = $(this).parent().parent().find("li .ldiscountcode").val(); //获取优惠码
			if (!dyfrom_null(couponcode)) {
				tips = "优惠码不能为空";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}
			var action = "vcheckrelcouponcode";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'pid': proid,
					'nowhr': nowhr,
					'couponcode': couponcode
				},
				success: function(data) {
					if (data == 1) {
						tips = "未检测到匹配优惠码或优惠码已被占用";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else {
						_this.find('#productsprice').html(data);
						_this2.slideUp();
						//_this1.find('td::nth-child(8)').html(couponcode);
						// if (profits != "多域名") {
						// 	_this1.find('td:nth-child(9)').html(couponcode);
						// } else {
						// 	_this1.find('td:nth-child(11)').html(couponcode);
						// }

						var action1 = "vgetallproprice";
						var action2 = "vcouponcodeprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action1,
								'pid': proid
							},
							success: function(data) {
								$('.feiydxs span em').html(data);

								$('.tablebox table tr:nth-child(' + toptrnum +
									') td:nth-child(6) #lproductsprice').html(data);

								var isadditionalpro = $('#checkaddpro').is(':checked');
								var azservicenum = $('#azservicenum .shang input').val();
								var checknum = "";
								$('#shopcart tr').each(function() {
									if ($(this).find('.checks').is(
										':checked')) {
										if ($(this).index() != 0) {
											checknum = checknum + $(this)
											.index() + ",";
										}
									}
								})
								checknum = checknum.substring(0, checknum.length - 1);
								var action = 'carttotalprice';
								var url = "public.php";
								$.ajax({
									type: "POST",
									url: url,
									data: {
										'action': action,
										'checknum': checknum,
										'isadditionalpro': isadditionalpro,
										'azservicenum': azservicenum
									},
									beforeSend: function() {},
									success: function(data) {
										$('.feiydxs1 em').html(data);
									},
								})
							}
						})

						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action2,
								'couponcode': couponcode
							},
							success: function(data) {

								// if (profits != "多域名") {
								// 	_this1.find('td:nth-child(8)').html(data);
								// } else {
								// 	_this1.find('td:nth-child(10)').html(data);
								// }
								_this.find('.vshiyong').html('已优惠' + data +
									'<i class="ldiscountcode" style="display:none;">' +
									couponcode + '</i>');
							}
						})
					}
				}
			})
		} else {
			var action = "vcheckrelcouponid";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'pid': proid,
					'nowhr': nowhr,
					'couponnum': couponinfo
				},
				success: function(data) {

					if (data == 1) {
						tips = "优惠券已被占用或对应品牌无权使用该优惠券";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "优惠券价格超过产品实际价格";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else {
						_this.find('#productsprice').html(data);

						_this2.slideUp();

						// if (profits != "多域名") {
						// 	_this1.find('td:nth-child(7)').html(couponinfo);
						// } else {
						// 	_this1.find('td:nth-child(9)').html(couponinfo);
						// }
						var action1 = "vgetallproprice";
						var action2 = "vcouponidprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action2,
								'couponinfo': couponinfo
							},
							success: function(data) {
								// if (profits != "多域名") {
								// 	_this1.find('td:nth-child(6)').html(data);
								// } else {
								// 	_this1.find('td:nth-child(8)').html(data);
								// }
								_this.find('.vshiyong').html('已优惠' + data +
									'<i class="ldiscountid" style="display:none;">' +
									couponinfo + '</i>');
							}
						})
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action1,
								'pid': proid
							},
							success: function(data) {
								$('.feiydxs span em').html(data);
								$('.tablebox table tr:nth-child(' + toptrnum +
									') td:nth-child(6) #lproductsprice').html(data);
								var isadditionalpro = $('#checkaddpro').is(':checked');
								var azservicenum = $('#azservicenum .shang input')
							.val();
								var checknum = "";
								$('#shopcart tr').each(function() {
									if ($(this).find('.checks').is(
										':checked')) {
										if ($(this).index() != 0) {
											checknum = checknum + $(this)
											.index() + ",";
										}
									}
								})
								checknum = checknum.substring(0, checknum.length - 1);
								var action = 'carttotalprice';
								var url = "public.php";
								$.ajax({
									type: "POST",
									url: url,
									data: {
										'action': action,
										'checknum': checknum,
										'isadditionalpro': isadditionalpro,
										'azservicenum': azservicenum
									},
									beforeSend: function() {},
									success: function(data) {
										$('.feiydxs1 em').html(data);
									},
								})
							}
						})

					}

				}
			})
		}
	} else {
		_this.find('.vshiyong').html('我要优惠');
		_this2.slideUp();
	}

})

$('#buycert .tanchubox .close').click(function() {
	$('#buycert').hide();
})

$('#coupon .tanchubox .close').click(function() {
	$('#coupon').hide();
	$("#content_2").mCustomScrollbar("destroy");
})

$('#couponcode .tanchubox .close').click(function() {
	$('#couponcode').hide();
	$("#content_2").mCustomScrollbar("destroy");
})



$('#newmultiselect').live('change', function() {
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var buyyearslist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var multidomainnumlist = "";
	var algorithmlist = "";
	var perproductprice = "";
	var parentthis = $(this).parent().parent().parent().parent();
	var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
	var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
	var oldactiveid = $('#paybuynow').attr('dataactive');
	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#newmultiselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}
			var productsprice = _this.find('#productsprice');
			var hejitimes = _this.find('#hejitimes');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			if (totalcouponums) {
				totalcouponums = totalcouponums + couponnums + ",";
			} else {
				totalcouponums = couponnums + ",";
			}
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			if (totalcouponcode) {
				totalcouponcode = totalcouponcode + couponcode + ",";
			} else {
				totalcouponcode = couponcode + ",";
			}
			var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val()) +
				parseFloat(1);
			var multidomainnum = _this.find('#multidomainnum .shang input').val();
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			if (lisrenew == 1 || oldactiveid) {
				var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
				if (buyyears == 0) {
					buyyears = 90;
				}
			} else {
				var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
			}

			if (buyyearslist) {
				buyyearslist = buyyearslist + buyyears + ",";
			} else {
				buyyearslist = buyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}
			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}
			var eachalgorithm = _this.find('#algorithmmultiselect').val();
			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}
			var action = "getperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'eachalgorithm': eachalgorithm,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'buyyears': buyyears,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						perproductpriceval = data.split('|')[0];
						hejitimesval = data.split('|')[1];
						productsprice.html(perproductpriceval);
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'algorithmlist': algorithmlist,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'buyyearslist': buyyearslist,
			'singledomainnumlist': singledomainnumlist,
			'multidomainnumlist': multidomainnumlist,
			'oldactiveid': oldactiveid,
			'nowcouponid': nowcouponid,
			'nowcouponcode': nowcouponcode
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})

})



$('#renewmultiselect').live('change', function() {
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var buyyearslist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var parentthis = $(this).parent().parent().parent().parent();
	var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
	var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
	var oldactiveid = $('#paybuynow').attr('dataactive');
	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#renewmultiselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}
			var relproductsprice = _this.find('#relproductsprice');
			var youhuiprice = _this.find('#youhuiprice');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			if (totalcouponums) {
				totalcouponums = totalcouponums + couponnums + ",";
			} else {
				totalcouponums = couponnums + ",";
			}
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			if (totalcouponcode) {
				totalcouponcode = totalcouponcode + couponcode + ",";
			} else {
				totalcouponcode = couponcode + ",";
			}
			var singledomainnum = parseFloat(_this.find('#resingledomainnum .shang input').val()) +
				parseFloat(1);
			var multidomainnum = _this.find('#remultidomainnum .shang input').val();
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			var hejitimes = _this.find('#hejitimes');
			// if (lisrenew == 1) {

			// } else {
			// 	var buyyears = _this.find('#renewmultiselect').get(0).selectedIndex + 1; //购买年限
			// }

			var buyyears = 3 - _this.find('#renewmultiselect').get(0).selectedIndex; //购买年限
			// if (buyyears == 0) {
			// 	buyyears = 90;
			// }

			if (buyyearslist) {
				buyyearslist = buyyearslist + buyyears + ",";
			} else {
				buyyearslist = buyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}
			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}

			var action = "getrenewperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'buyyears': buyyears,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						var relproductspricevalue = data.split('|-|')[0];
						var youhuipricevalue = data.split('|-|')[1];
						var totalpricevalue = data.split('|-|')[2];
						relproductsprice.html(relproductspricevalue);
						youhuiprice.html(youhuipricevalue);
						$('.feiydxs span em').html(totalpricevalue);
						hejitimesval = data.split('|-|')[3];
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})

})




$('.buycertlist .tablebox tr td #singledomainnum .shang #add,.buycertlist .tablebox tr td #multidomainnum .shang #add')
	.live('click', function() {
		num = parseFloat($(this).parent().find('input').val()) + parseFloat(1);
		$(this).parent().find('input').val(num);
		var parentthis = $(this).parent().parent().parent().parent();
		var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
		var algorithm = parentthis.find('#algorithmmultiselect').val();
		var singledomainnum = parseFloat(parentthis.find('#singledomainnum .shang input').val()) + parseFloat(1);
		var multidomainnum = parentthis.find('#multidomainnum .shang input').val();
		var procode = parentthis.find('.newselect').val();
		var oldactiveid = $('#paybuynow').attr('dataactive');
		var num = 0;
		var url = "public.html";
		var procodeall = "";
		var totalcouponums = "";
		var totalcouponcode = "";
		var buyyearslist = "";
		var algorithmlist = "";
		var singledomainnumlist = "";
		var multidomainnumlist = "";
		var perproductprice = "";
		var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
		var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
		var action2 = "changemultidomainprice";
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action2,
				'procode': procode,
				'singledomainnum': singledomainnum,
				'multidomainnum': multidomainnum,
				'algorithm': algorithm,
				'buyyears': buyyears,
				'oldactiveid': oldactiveid
			},
			success: function(data) {
				parentthis.find('#newmultiselect').html(data);
			}
		})
		$('.buycertlist .tablebox tr').each(function() {
			num++;
			if (num > 1) {

				var _this = $(this);
				var eachprocode = _this.find('#newmultiselect').val();
				if (procodeall) {
					procodeall = procodeall + eachprocode + ",";
				} else {
					procodeall = eachprocode + ",";
				}

				var productsprice = _this.find('#productsprice');
				var hejitimes = _this.find('#hejitimes');
				var couponnums = _this.find('.shiyong .ldiscountid').html();
				if (totalcouponums) {
					totalcouponums = totalcouponums + couponnums + ",";
				} else {
					totalcouponums = couponnums + ",";
				}
				var couponcode = _this.find('.shiyong .ldiscountcode').html();
				if (totalcouponcode) {
					totalcouponcode = totalcouponcode + couponcode + ",";
				} else {
					totalcouponcode = couponcode + ",";
				}
				var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val()) +
					parseFloat(1);

				var multidomainnum = _this.find('#multidomainnum .shang input').val();
				var lisrenew = _this.find('.shiyong').attr('dataisrenew');
				if (lisrenew == 1) {
					var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
					if (buyyears == 0) {
						buyyears = 90;
					}
				} else {
					var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
				}

				if (buyyearslist) {
					buyyearslist = buyyearslist + buyyears + ",";
				} else {
					buyyearslist = buyyears + ",";
				}
				if (singledomainnumlist) {
					singledomainnumlist = singledomainnumlist + singledomainnum + ",";
				} else {
					singledomainnumlist = singledomainnum + ",";
				}

				if (singledomainnumlist) {
					multidomainnumlist = multidomainnumlist + multidomainnum + ",";
				} else {
					multidomainnumlist = multidomainnum + ",";
				}
				var eachalgorithm = _this.find('#algorithmmultiselect').val();
				if (algorithmlist) {
					algorithmlist = algorithmlist + eachalgorithm + ",";
				} else {
					algorithmlist = eachalgorithm + ",";
				}
				var action = "getperproprice";
				$.ajax({
					type: "POST",
					url: url,
					data: {
						'action': action,
						'eachprocode': eachprocode,
						'singledomainnum': singledomainnum,
						'multidomainnum': multidomainnum,
						'buyyears': buyyears,
						'eachalgorithm': eachalgorithm,
						'couponnums': couponnums,
						'couponcode': couponcode,
						'oldactiveid': oldactiveid
					},
					success: function(data) {
						if (data == 1) {
							tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
							$('#alert1 .sy-content').html(tips);
							syalert.syopen('alert1');
							return false;
						} else if (data == 2) {
							tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
							$('#alert1 .sy-content').html(tips);
							syalert.syopen('alert1');
							return false;
						} else if (data == 3) {
							tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
							$('#alert1 .sy-content').html(tips);
							syalert.syopen('alert1');
							_this.removeClass("cur");
							return false;
						} else {
							perproductpriceval = data.split('|')[0];
							hejitimesval = data.split('|')[1];
							productsprice.html(perproductpriceval);
							hejitimes.html(hejitimesval);
						}
					}
				})
			}
		})
		procodeall = procodeall.substring(0, procodeall.length - 1);
		algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
		totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
		totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
		buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
		singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
		multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
		var action1 = "getallproprice";
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action1,
				'procodeall': procodeall,
				'algorithmlist': algorithmlist,
				'totalcouponums': totalcouponums,
				'totalcouponcode': totalcouponcode,
				'buyyearslist': buyyearslist,
				'singledomainnumlist': singledomainnumlist,
				'multidomainnumlist': multidomainnumlist,
				'oldactiveid': oldactiveid,
				'nowcouponid': nowcouponid,
				'nowcouponcode': nowcouponcode
			},
			success: function(data) {
				$('.feiydxs span em').html(data);
			}
		})

	})

$('.buycertlist .tablebox tr td #resingledomainnum .shang #add,.buycertlist .tablebox tr td #remultidomainnum .shang #add')
	.live('click', function() {
		num = parseFloat($(this).parent().find('input').val()) + parseFloat(1);
		$(this).parent().find('input').val(num);
		var parentthis = $(this).parent().parent().parent().parent();
		var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
		var algorithm = parentthis.find('.algorithmselect').val();
		var singledomainnum = parseFloat(parentthis.find('#resingledomainnum .shang input').val()) + parseFloat(1);
		var multidomainnum = parentthis.find('#remultidomainnum .shang input').val();
		var procode = parentthis.find('.newselect').val();
		var oldactiveid = $('#paybuynow').attr('dataactive');
		var num = 0;
		var url = "public.html";
		var procodeall = "";
		var totalcouponums = "";
		var totalcouponcode = "";
		var buyyearslist = "";
		var singledomainnumlist = "";
		var multidomainnumlist = "";
		var algorithmlist = "";
		var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
		var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
		var action2 = "changemultidomainprice";

		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action2,
				'procode': procode,
				'singledomainnum': singledomainnum,
				'multidomainnum': multidomainnum,
				'algorithm': algorithm,
				'buyyears': buyyears,
				'oldactiveid': oldactiveid
			},
			success: function(data) {
				//console.log(data);
				parentthis.find('#renewmultiselect').html(data);
			}
		})
		$('.buycertlist .tablebox tr').each(function() {

			num++;
			if (num > 1) {

				var _this = $(this);
				var eachprocode = _this.find('#renewmultiselect').val();
				if (procodeall) {
					procodeall = procodeall + eachprocode + ",";
				} else {
					procodeall = eachprocode + ",";
				}

				var relproductsprice = _this.find('#relproductsprice');
				var youhuiprice = _this.find('#youhuiprice');
				var couponnums = _this.find('.shiyong .ldiscountid').html();
				if (totalcouponums) {
					totalcouponums = totalcouponums + couponnums + ",";
				} else {
					totalcouponums = couponnums + ",";
				}
				var couponcode = _this.find('.shiyong .ldiscountcode').html();
				if (totalcouponcode) {
					totalcouponcode = totalcouponcode + couponcode + ",";
				} else {
					totalcouponcode = couponcode + ",";
				}
				var singledomainnum = parseFloat(_this.find('#resingledomainnum .shang input').val()) +
					parseFloat(1);

				var multidomainnum = _this.find('#remultidomainnum .shang input').val();
				var lisrenew = _this.find('.shiyong').attr('dataisrenew');
				// if (lisrenew == 1) {

				// } else {
				// 	var buyyears = parseFloat(_this.find('#newmultiselect').get(0).selectedIndex) + parseFloat(1); //购买年限
				// }

				var buyyears = 5 - _this.find('#renewmultiselect').get(0).selectedIndex; //购买年限
				// if (buyyears == 0) {
				// 	buyyears = 90;
				// }
				var hejitimes = _this.find('#hejitimes');
				if (buyyearslist) {
					buyyearslist = buyyearslist + buyyears + ",";
				} else {
					buyyearslist = buyyears + ",";
				}
				if (singledomainnumlist) {
					singledomainnumlist = singledomainnumlist + singledomainnum + ",";
				} else {
					singledomainnumlist = singledomainnum + ",";
				}

				if (singledomainnumlist) {
					multidomainnumlist = multidomainnumlist + multidomainnum + ",";
				} else {
					multidomainnumlist = multidomainnum + ",";
				}
				var eachalgorithm = _this.find('#algorithmmultiselect').val();
				if (algorithmlist) {
					algorithmlist = algorithmlist + eachalgorithm + ",";
				} else {
					algorithmlist = eachalgorithm + ",";
				}

				var action = "getrenewperproprice";
				$.ajax({
					type: "POST",
					url: url,
					data: {
						'action': action,
						'eachprocode': eachprocode,
						'eachalgorithm': eachalgorithm,
						'singledomainnum': singledomainnum,
						'multidomainnum': multidomainnum,
						'buyyears': buyyears,
						'couponnums': couponnums,
						'couponcode': couponcode,
						'oldactiveid': oldactiveid
					},
					success: function(data) {
						if (data == 1) {
							tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
							$('#alert1 .sy-content').html(tips);
							syalert.syopen('alert1');
							return false;
						} else if (data == 2) {
							tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
							$('#alert1 .sy-content').html(tips);
							syalert.syopen('alert1');
							return false;
						} else if (data == 3) {
							tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
							$('#alert1 .sy-content').html(tips);
							syalert.syopen('alert1');
							_this.removeClass("cur");
							return false;
						} else {
							var relproductspricevalue = data.split('|-|')[0];
							var youhuipricevalue = data.split('|-|')[1];
							relproductsprice.html(relproductspricevalue);
							youhuiprice.html(youhuipricevalue);
							hejitimesval = data.split('|-|')[3];
							hejitimes.html(hejitimesval);
						}
					}
				})
			}
		})
		procodeall = procodeall.substring(0, procodeall.length - 1);
		algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
		totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
		totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
		buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
		singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
		multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
		var action1 = "getallproprice";
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action1,
				'procodeall': procodeall,
				'algorithmlist': algorithmlist,
				'totalcouponums': totalcouponums,
				'totalcouponcode': totalcouponcode,
				'buyyearslist': buyyearslist,
				'singledomainnumlist': singledomainnumlist,
				'multidomainnumlist': multidomainnumlist,
				'oldactiveid': oldactiveid,
				'nowcouponid': nowcouponid,
				'nowcouponcode': nowcouponcode
			},
			success: function(data) {
				$('.feiydxs span em').html(data);
			}
		})

	})


// $('.buycertlist .tablebox tr td #singledomainnum .shang #remove').live('click', function() {
// 	var parentthis = $(this).parent().parent().parent().parent();
// 	var totaldomainum=parseFloat(parentthis.find('#singledomainnum .shang input').val())+parseFloat(1)+parseFloat(parentthis.find('#multidomainnum .shang input').val());
// 	if(totaldomainum>3){
// 		num = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
// 		if (num < 0) {
// 			num = 0;
// 		}
// 		$(this).parent().find('input').val(num);
// 	}else{
// 		tips = "多域名数量必须大于3个";
// 		$('#alert1 .sy-content').html(tips);
// 		syalert.syopen('alert1');
// 		return false;
// 	}

// 	var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
// 	var algorithm=parentthis.find('.algorithmselect').val();
// 	var singledomainnum = parseFloat(parentthis.find('#singledomainnum .shang input').val())+parseFloat(1);
// 	var multidomainnum = parentthis.find('#multidomainnum .shang input').val();
// 	var nowcouponid=parentthis.find('.shiyong .ldiscountid').html();
// 	var nowcouponcode=parentthis.find('.shiyong .ldiscountcode').html();
// 	var procode = parentthis.find('.newselect').val();
// 	var oldactiveid = $('#paybuynow').attr('dataactive');
// 	var num = 0;
// 	var url = "public.html";
// 	var procodeall = "";
// 	var totalcouponums = "";
// 	var totalcouponcode = "";
// 	var buyyearslist = "";
// 	var singledomainnumlist = "";
// 	var multidomainnumlist = "";
// 	var algorithmlist = "";
// 	var perproductprice="";
// 	var action2 = "changemultidomainprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action2,
// 			'procode': procode,
// 			'algorithm': algorithm,
// 			'singledomainnum': singledomainnum,
// 			'multidomainnum': multidomainnum,
// 			'buyyears': buyyears,
// 			'oldactiveid': oldactiveid
// 		},
// 		success: function(data) {
// 			parentthis.find('#newmultiselect').html(data);
// 		}
// 	})
// 	$('.buycertlist .tablebox tr').each(function() {
// 		num++;
// 		if (num > 1) {
// 			var _this = $(this);
// 			var eachprocode = _this.find('#newmultiselect').val();
// 			if (procodeall) {
// 				procodeall = procodeall + eachprocode + ",";
// 			} else {
// 				procodeall = eachprocode + ",";
// 			}
// 			var productsprice = _this.find('#productsprice');
// 			var hejitimes = _this.find('#hejitimes');
// 			var couponnums = _this.find('.shiyong .ldiscountid').html();
// 			if (totalcouponums) {
// 				totalcouponums = totalcouponums + couponnums + ",";
// 			} else {
// 				totalcouponums = couponnums + ",";
// 			}
// 			var couponcode = _this.find('.shiyong .ldiscountcode').html();
// 			if (totalcouponcode) {
// 				totalcouponcode = totalcouponcode + couponcode + ",";
// 			} else {
// 				totalcouponcode = couponcode + ",";
// 			}
// 			var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val())+parseFloat(1);
// 			var multidomainnum = _this.find('#multidomainnum .shang input').val();
//                 var lisrenew = _this.find('.shiyong').attr('dataisrenew');
// 				if (lisrenew == 1) {
// 					var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
// 					if (buyyears == 0) {
// 						buyyears = 90;
// 					}
// 				} else {
// 					var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
// 				}
// 			if (buyyearslist) {
// 				buyyearslist = buyyearslist + buyyears + ",";
// 			} else {
// 				buyyearslist = buyyears + ",";
// 			}
// 			if (singledomainnumlist) {
// 				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
// 			} else {
// 				singledomainnumlist = singledomainnum + ",";
// 			}
// 			if (singledomainnumlist) {
// 				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
// 			} else {
// 				multidomainnumlist = multidomainnum + ",";
// 			}
// 			   var eachalgorithm = _this.find('#algorithmmultiselect').val();
// 			   if (algorithmlist) {
// 				  algorithmlist = algorithmlist + eachalgorithm + ",";
// 			   } else {
// 				  algorithmlist = eachalgorithm + ",";
// 			   }

// 			var action = "getperproprice";
// 			$.ajax({
// 				type: "POST",
// 				url: url,
// 				data: {
// 					'action': action,
// 					'eachprocode': eachprocode,
// 					'eachalgorithm': eachalgorithm,
// 					'singledomainnum': singledomainnum,
// 					'multidomainnum': multidomainnum,
// 					'buyyears': buyyears,
// 					'couponnums': couponnums,
// 					'couponcode': couponcode,
// 					'oldactiveid': oldactiveid
// 				},
// 				success: function(data) {
// 					if (data == 1) {
// 						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						return false;
// 					} else if (data == 2) {
// 						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						return false;
// 					} else if (data == 3) {
// 						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						_this.removeClass("cur");
// 						return false;
// 					} else {
// 						perproductpriceval=data.split('|')[0];
// 						hejitimesval=data.split('|')[1];
// 						productsprice.html(perproductpriceval);
// 						hejitimes.html(hejitimesval);
// 					}
// 				}
// 			})
// 		}
// 	})
// 	procodeall = procodeall.substring(0, procodeall.length - 1);
// 	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
// 	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
// 	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
// 	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
// 	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
// 	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
// 	var action1 = "getallproprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action1,
// 			'procodeall': procodeall,
// 			'algorithmlist': algorithmlist,
// 			'totalcouponums': totalcouponums,
// 			'totalcouponcode': totalcouponcode,
// 			'buyyearslist': buyyearslist,
// 			'singledomainnumlist': singledomainnumlist,
// 			'multidomainnumlist': multidomainnumlist,
// 			'oldactiveid': oldactiveid,
// 			'nowcouponid': nowcouponid,
// 			'nowcouponcode': nowcouponcode
// 		},
// 		success: function(data) {
// 			$('.feiydxs span em').html(data);
// 		}
// 	})
// })

$('.buycertlist .tablebox tr td #resingledomainnum .shang #remove').live('click', function() {
	var parentthis = $(this).parent().parent().parent().parent();

	var totaldomainum = parseFloat(parentthis.find('#resingledomainnum .shang input').val()) + parseFloat(1) +
		parseFloat(parentthis.find('#remultidomainnum .shang input').val());
	if (totaldomainum > 3) {
		num = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
		if (num < 0) {
			num = 0;
		}
		$(this).parent().find('input').val(num);
	} else {
		tips = "多域名数量必须大于3个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
	var algorithm = parentthis.find('.algorithmselect').val();
	var singledomainnum = parseFloat(parentthis.find('#resingledomainnum .shang input').val()) + parseFloat(1);
	var multidomainnum = parentthis.find('#remultidomainnum .shang input').val();
	var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
	var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
	var procode = parentthis.find('.newselect').val();
	var oldactiveid = $('#paybuynow').attr('dataactive');
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var algorithmlist = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var buyyearslist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var action2 = "changemultidomainprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action2,
			'procode': procode,
			'algorithm': algorithm,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'buyyears': buyyears,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			parentthis.find('#renewmultiselect').html(data);
		}
	})
	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#renewmultiselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}
			var relproductsprice = _this.find('#relproductsprice');
			var youhuiprice = _this.find('#youhuiprice');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			if (totalcouponums) {
				totalcouponums = totalcouponums + couponnums + ",";
			} else {
				totalcouponums = couponnums + ",";
			}
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			if (totalcouponcode) {
				totalcouponcode = totalcouponcode + couponcode + ",";
			} else {
				totalcouponcode = couponcode + ",";
			}
			var singledomainnum = parseFloat(_this.find('#resingledomainnum .shang input').val()) +
				parseFloat(1);
			var multidomainnum = _this.find('#remultidomainnum .shang input').val();
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			var buyyears = 5 - _this.find('#renewmultiselect').get(0).selectedIndex; //购买年限
			// if (buyyears == 0) {
			// 	buyyears = 90;
			// }
			if (buyyearslist) {
				buyyearslist = buyyearslist + buyyears + ",";
			} else {
				buyyearslist = buyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}
			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}
			var eachalgorithm = _this.find('#algorithmmultiselect').val();
			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}
			var hejitimes = _this.find('#hejitimes');
			//          alert(couponnums);
			// alert(couponcode);
			// alert(eachprocode);
			// alert(buyyears);

			var action = "getrenewperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'eachalgorithm': eachalgorithm,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'buyyears': buyyears,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						var relproductspricevalue = data.split('|-|')[0];
						var youhuipricevalue = data.split('|-|')[1];
						relproductsprice.html(relproductspricevalue);
						youhuiprice.html(youhuipricevalue);
						hejitimesval = data.split('|-|')[3];
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'algorithmlist': algorithmlist,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'buyyearslist': buyyearslist,
			'singledomainnumlist': singledomainnumlist,
			'multidomainnumlist': multidomainnumlist,
			'oldactiveid': oldactiveid,
			'nowcouponid': nowcouponid,
			'nowcouponcode': nowcouponcode
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})
})

$('.buycertlist .tablebox tr td #multidomainnum .shang #remove').live('click', function() {
	var parentthis = $(this).parent().parent().parent().parent();
	var totaldomainum = parseFloat(parentthis.find('#singledomainnum .shang input').val()) + parseFloat(1) +
		parseFloat(parentthis.find('#multidomainnum .shang input').val());
	if (totaldomainum > 3) {
		num = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
		if (num < 0) {
			num = 0;
		}
		$(this).parent().find('input').val(num);
	} else {
		tips = "多域名数量必须大于2个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}

	var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
	var algorithm = parentthis.find('.algorithmselect').val();
	var singledomainnum = parseFloat(parentthis.find('#singledomainnum .shang input').val()) + parseFloat(1);
	var multidomainnum = parentthis.find('#multidomainnum .shang input').val();
	var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
	var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
	var procode = parentthis.find('.newselect').val();
	var oldactiveid = $('#paybuynow').attr('dataactive');
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var algorithmlist = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var buyyearslist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var relproductspricevalue = "";
	var action2 = "changemultidomainprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action2,
			'procode': procode,
			'algorithm': algorithm,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'buyyears': buyyears,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			parentthis.find('#newmultiselect').html(data);
		}
	})
	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#newmultiselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}
			var relproductsprice = _this.find('#productsprice');
			var youhuiprice = _this.find('#youhuiprice');
			var hejitimes = _this.find('#hejitimes');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			if (totalcouponums) {
				totalcouponums = totalcouponums + couponnums + ",";
			} else {
				totalcouponums = couponnums + ",";
			}
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			if (totalcouponcode) {
				totalcouponcode = totalcouponcode + couponcode + ",";
			} else {
				totalcouponcode = couponcode + ",";
			}
			var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val()) +
				parseFloat(1);
			var multidomainnum = _this.find('#multidomainnum .shang input').val();
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			if (lisrenew == 1) {
				var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
				if (buyyears == 0) {
					buyyears = 90;
				}
			} else {
				var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
			}
			if (buyyearslist) {
				buyyearslist = buyyearslist + buyyears + ",";
			} else {
				buyyearslist = buyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}
			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}

			var eachalgorithm = _this.find('#algorithmmultiselect').val();
			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}

			var action = "getperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'eachalgorithm': eachalgorithm,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'buyyears': buyyears,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						relproductspricevalue = data.split('|')[0];
						hejitimesval = data.split('|')[1];
						relproductsprice.html(relproductspricevalue);
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'algorithmlist': algorithmlist,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'buyyearslist': buyyearslist,
			'singledomainnumlist': singledomainnumlist,
			'multidomainnumlist': multidomainnumlist,
			'oldactiveid': oldactiveid,
			'nowcouponid': nowcouponid,
			'nowcouponcode': nowcouponcode
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})
})

$('.buycertlist .tablebox tr td #remultidomainnum .shang #remove').live('click', function() {
	var parentthis = $(this).parent().parent().parent().parent();

	var totaldomainum = parseFloat(parentthis.find('#resingledomainnum .shang input').val()) + parseFloat(1) +
		parentthis.find('#remultidomainnum .shang input').val();
	if (totaldomainum > 3) {
		num = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
		if (num < 0) {
			num = 0;
		}
		$(this).parent().find('input').val(num);
	} else {
		tips = "多域名数量必须大于2个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}

	var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
	var algorithm = parentthis.find('.algorithmselect').val();
	var singledomainnum = parseFloat(parentthis.find('#resingledomainnum .shang input').val()) + parseFloat(1);
	var multidomainnum = parentthis.find('#remultidomainnum .shang input').val();
	var nowcouponid = parentthis.find('.shiyong .ldiscountid').html();
	var nowcouponcode = parentthis.find('.shiyong .ldiscountcode').html();
	var procode = parentthis.find('.newselect').val();
	var oldactiveid = $('#paybuynow').attr('dataactive');
	var num = 0;
	var url = "public.html";
	var procodeall = "";
	var algorithmlist = "";
	var totalcouponums = "";
	var totalcouponcode = "";
	var buyyearslist = "";
	var singledomainnumlist = "";
	var multidomainnumlist = "";
	var action2 = "changemultidomainprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action2,
			'procode': procode,
			'algorithm': algorithm,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'buyyears': buyyears,
			'oldactiveid': oldactiveid
		},
		success: function(data) {
			parentthis.find('#renewmultiselect').html(data);
		}
	})
	$('.buycertlist .tablebox tr').each(function() {
		num++;
		if (num > 1) {
			var _this = $(this);
			var eachprocode = _this.find('#renewmultiselect').val();
			if (procodeall) {
				procodeall = procodeall + eachprocode + ",";
			} else {
				procodeall = eachprocode + ",";
			}
			var relproductsprice = _this.find('#relproductsprice');
			var youhuiprice = _this.find('#youhuiprice');
			var couponnums = _this.find('.shiyong .ldiscountid').html();
			if (totalcouponums) {
				totalcouponums = totalcouponums + couponnums + ",";
			} else {
				totalcouponums = couponnums + ",";
			}
			var couponcode = _this.find('.shiyong .ldiscountcode').html();
			if (totalcouponcode) {
				totalcouponcode = totalcouponcode + couponcode + ",";
			} else {
				totalcouponcode = couponcode + ",";
			}
			var singledomainnum = parseFloat(_this.find('#resingledomainnum .shang input').val()) +
				parseFloat(1);
			var multidomainnum = _this.find('#remultidomainnum .shang input').val();
			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
			// if (lisrenew == 1) {

			// } else {
			// 	var buyyears = _this.find('#renewmultiselect').get(0).selectedIndex + 1; //购买年限
			// }	
			var buyyears = 5 - _this.find('#renewmultiselect').get(0).selectedIndex; //购买年限
			// if (buyyears == 0) {
			// 	buyyears = 90;
			// }
			if (buyyearslist) {
				buyyearslist = buyyearslist + buyyears + ",";
			} else {
				buyyearslist = buyyears + ",";
			}
			if (singledomainnumlist) {
				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
			} else {
				singledomainnumlist = singledomainnum + ",";
			}
			if (singledomainnumlist) {
				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
			} else {
				multidomainnumlist = multidomainnum + ",";
			}
			var eachalgorithm = _this.find('#algorithmmultiselect').val();
			if (algorithmlist) {
				algorithmlist = algorithmlist + eachalgorithm + ",";
			} else {
				algorithmlist = eachalgorithm + ",";
			}
			var hejitimes = _this.find('#hejitimes');
			var action = "getrenewperproprice";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'eachprocode': eachprocode,
					'singledomainnum': singledomainnum,
					'multidomainnum': multidomainnum,
					'buyyears': buyyears,
					'couponnums': couponnums,
					'couponcode': couponcode,
					'oldactiveid': oldactiveid
				},
				success: function(data) {
					if (data == 1) {
						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 2) {
						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else if (data == 3) {
						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						_this.removeClass("cur");
						return false;
					} else {
						var relproductspricevalue = data.split('|-|')[0];
						var youhuipricevalue = data.split('|-|')[1];
						relproductsprice.html(relproductspricevalue);
						youhuiprice.html(youhuipricevalue);
						hejitimesval = data.split('|-|')[3];
						hejitimes.html(hejitimesval);
					}
				}
			})
		}
	})
	procodeall = procodeall.substring(0, procodeall.length - 1);
	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
	var action1 = "getallproprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action1,
			'procodeall': procodeall,
			'algorithmlist': algorithmlist,
			'totalcouponums': totalcouponums,
			'totalcouponcode': totalcouponcode,
			'buyyearslist': buyyearslist,
			'singledomainnumlist': singledomainnumlist,
			'multidomainnumlist': multidomainnumlist,
			'oldactiveid': oldactiveid,
			'nowcouponid': nowcouponid,
			'nowcouponcode': nowcouponcode
		},
		success: function(data) {
			$('.feiydxs span em').html(data);
		}
	})
})


// $('.buycertlist .tablebox tr td #singledomainnum .shang #remove1').live('click', function() {
// 	num = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
// 	if (num < 0) {
// 		num = 0;
// 	}
// 	$(this).parent().find('input').val(num);
// 	var parentthis = $(this).parent().parent().parent().parent();
// 	var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
// 	var algorithm=parentthis.find('.algorithmselect').val();
// 	var singledomainnum = parseFloat(parentthis.find('#singledomainnum .shang input').val())+parseFloat(1);
// 	var multidomainnum = parentthis.find('#multidomainnum .shang input').val();
// 	var nowcouponid=parentthis.find('.shiyong .ldiscountid').html();
// 	var nowcouponcode=parentthis.find('.shiyong .ldiscountcode').html();
// 	var procode = parentthis.find('.newselect').val();
// 	var oldactiveid = $('#paybuynow').attr('dataactive');
// 	var num = 0;
// 	var url = "public.html";
// 	var procodeall = "";
// 	var algorithmlist = "";
// 	var totalcouponums = "";
// 	var totalcouponcode = "";
// 	var buyyearslist = "";
// 	var singledomainnumlist = "";
// 	var multidomainnumlist = "";
// 	var perproductprice="";
// 	var action2 = "changemultidomainprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action2,
// 			'procode': procode,
// 			'algorithmnum': algorithmnum,
// 			'singledomainnum': singledomainnum,
// 			'multidomainnum': multidomainnum,
// 			'buyyears': buyyears,
// 			'oldactiveid': oldactiveid
// 		},
// 		success: function(data) {
// 			parentthis.find('#newmultiselect').html(data);
// 		}
// 	})
// 	$('.buycertlist .tablebox tr').each(function() {
// 		num++;
// 		if (num > 1) {
// 			var _this = $(this);
// 			var eachprocode = _this.find('#newmultiselect').val();
// 			if (procodeall) {
// 				procodeall = procodeall + eachprocode + ",";
// 			} else {
// 				procodeall = eachprocode + ",";
// 			}
// 			var productsprice = _this.find('#productsprice');
// 			var couponnums = _this.find('.shiyong .ldiscountid').html();
// 			if (totalcouponums) {
// 				totalcouponums = totalcouponums + couponnums + ",";
// 			} else {
// 				totalcouponums = couponnums + ",";
// 			}
// 			var couponcode = _this.find('.shiyong .ldiscountcode').html();
// 			if (totalcouponcode) {
// 				totalcouponcode = totalcouponcode + couponcode + ",";
// 			} else {
// 				totalcouponcode = couponcode + ",";
// 			}
// 			var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val())+parseFloat(1);
// 			var multidomainnum = _this.find('#multidomainnum .shang input').val();
// 			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
// 			if (lisrenew == 1) {
// 				var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
// 				if (buyyears == 0) {
// 					buyyears = 90;
// 				}
// 			} else {
// 				var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
// 			}	
// 			if (buyyearslist) {
// 				buyyearslist = buyyearslist + buyyears + ",";
// 			} else {
// 				buyyearslist = buyyears + ",";
// 			}
// 			if (singledomainnumlist) {
// 				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
// 			} else {
// 				singledomainnumlist = singledomainnum + ",";
// 			}
// 			if (singledomainnumlist) {
// 				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
// 			} else {
// 				multidomainnumlist = multidomainnum + ",";
// 			}
//             var eachalgorithm = _this.find('#algorithmmultiselect').val();
//             if (algorithmlist) {
//             	algorithmlist = algorithmlist + eachalgorithm + ",";
//             } else {
//             	algorithmlist = eachalgorithm + ",";
//             }

// 			var action = "getperproprice";
// 			$.ajax({
// 				type: "POST",
// 				url: url,
// 				data: {
// 					'action': action,
// 					'eachprocode': eachprocode,
// 					'eachalgorithm': eachalgorithm,
// 					'singledomainnum': singledomainnum,
// 					'multidomainnum': multidomainnum,
// 					'buyyears': buyyears,
// 					'couponnums': couponnums,
// 					'couponcode': couponcode,
// 			        'oldactiveid': oldactiveid
// 				},
// 				success: function(data) {
// 					if (data == 1) {
// 						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						return false;
// 					} else if (data == 2) {
// 						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						return false;
// 					} else if (data == 3) {
// 						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						_this.removeClass("cur");
// 						return false;
// 					} else {
// 						perproductpriceval=data.split('|')[0];
// 						hejitimesval=data.split('|')[1];
// 						productsprice.html(perproductpriceval);
// 						hejitimes.html(hejitimesval);
// 					}
// 				}
// 			})
// 		}
// 	})
// 	procodeall = procodeall.substring(0, procodeall.length - 1);
// 	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
// 	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
// 	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
// 	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
// 	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
// 	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
// 	var action1 = "getallproprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action1,
// 			'procodeall': procodeall,
// 			'algorithmlist': algorithmlist,
// 			'totalcouponums': totalcouponums,
// 			'totalcouponcode': totalcouponcode,
// 			'buyyearslist': buyyearslist,
// 			'singledomainnumlist': singledomainnumlist,
// 			'multidomainnumlist': multidomainnumlist,
// 			'oldactiveid': oldactiveid,
// 			'nowcouponid': nowcouponid,
// 			'nowcouponcode': nowcouponcode
// 		},
// 		success: function(data) {
// 			$('.feiydxs span em').html(data);
// 		}
// 	})
// })

// $('.buycertlist .tablebox tr td #multidomainnum .shang #remove1').live('click', function() {
// 	num = parseFloat($(this).parent().find('input').val()) - parseFloat(1);
// 	if (num < 0) {
// 		num = 0;
// 	}
// 	$(this).parent().find('input').val(num);
// 	var parentthis = $(this).parent().parent().parent().parent();
// 	var buyyears = parentthis.find('.newselect').get(0).selectedIndex + 1;
// 	var algorithm=parentthis.find('.algorithmselect').val();
// 	var singledomainnum = parseFloat(parentthis.find('#singledomainnum .shang input').val())+parseFloat(1);
// 	var multidomainnum = parentthis.find('#multidomainnum .shang input').val();
// 	var nowcouponid=parentthis.find('.shiyong .ldiscountid').html();
// 	var nowcouponcode=parentthis.find('.shiyong .ldiscountcode').html();
// 	var procode = parentthis.find('.newselect').val();
// 	var oldactiveid = $('#paybuynow').attr('dataactive');
// 	var num = 0;
// 	var url = "public.html";
// 	var procodeall = "";
// 	var algorithmlist = "";
// 	var totalcouponums = "";
// 	var totalcouponcode = "";
// 	var buyyearslist = "";
// 	var singledomainnumlist = "";
// 	var multidomainnumlist = "";
// 	var perproductprice="";
// 	var action2 = "changemultidomainprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action2,
// 			'procode': procode,
// 			'algorithm': algorithm,
// 			'singledomainnum': singledomainnum,
// 			'multidomainnum': multidomainnum,
// 			'buyyears': buyyears,
// 			'oldactiveid': oldactiveid
// 		},
// 		success: function(data) {
// 			parentthis.find('#newmultiselect').html(data);
// 		}
// 	})
// 	$('.buycertlist .tablebox tr').each(function() {
// 		num++;
// 		if (num > 1) {
// 			var _this = $(this);
// 			var eachprocode = _this.find('#newmultiselect').val();
// 			if (procodeall) {
// 				procodeall = procodeall + eachprocode + ",";
// 			} else {
// 				procodeall = eachprocode + ",";
// 			}
// 			var productsprice = _this.find('#productsprice');
// 			var hejitimes = _this.find('#hejitimes');
// 			var couponnums = _this.find('.shiyong .ldiscountid').html();
// 			if (totalcouponums) {
// 				totalcouponums = totalcouponums + couponnums + ",";
// 			} else {
// 				totalcouponums = couponnums + ",";
// 			}
// 			var couponcode = _this.find('.shiyong .ldiscountcode').html();
// 			if (totalcouponcode) {
// 				totalcouponcode = totalcouponcode + couponcode + ",";
// 			} else {
// 				totalcouponcode = couponcode + ",";
// 			}
// 			var singledomainnum = parseFloat(_this.find('#singledomainnum .shang input').val())+parseFloat(1);
// 			var multidomainnum = _this.find('#multidomainnum .shang input').val();
// 			var lisrenew = _this.find('.shiyong').attr('dataisrenew');
// 			if (lisrenew == 1) {
// 				var buyyears = 5 - _this.find('#newmultiselect').get(0).selectedIndex; //购买年限
// 				if (buyyears == 0) {
// 					buyyears = 90;
// 				}
// 			} else {
// 				var buyyears = _this.find('#newmultiselect').get(0).selectedIndex + 1; //购买年限
// 			}	
// 			if (buyyearslist) {
// 				buyyearslist = buyyearslist + buyyears + ",";
// 			} else {
// 				buyyearslist = buyyears + ",";
// 			}
// 			if (singledomainnumlist) {
// 				singledomainnumlist = singledomainnumlist + singledomainnum + ",";
// 			} else {
// 				singledomainnumlist = singledomainnum + ",";
// 			}
// 			if (singledomainnumlist) {
// 				multidomainnumlist = multidomainnumlist + multidomainnum + ",";
// 			} else {
// 				multidomainnumlist = multidomainnum + ",";
// 			}
//             var eachalgorithm = _this.find('#algorithmmultiselect').val();
//             if (algorithmlist) {
//             	algorithmlist = algorithmlist + eachalgorithm + ",";
//             } else {
//             	algorithmlist = eachalgorithm + ",";
//             }
// 			var action = "getperproprice";
// 			$.ajax({
// 				type: "POST",
// 				url: url,
// 				data: {
// 					'action': action,
// 					'eachprocode': eachprocode,
// 					'eachalgorithm': eachalgorithm,
// 					'singledomainnum': singledomainnum,
// 					'multidomainnum': multidomainnum,
// 					'buyyears': buyyears,
// 					'couponnums': couponnums,
// 					'couponcode': couponcode,
// 					'oldactiveid': oldactiveid
// 				},
// 				success: function(data) {
// 					if (data == 1) {
// 						tips = "对不起您选择的优惠劵已超出了产品的实际价格，请检查";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						return false;
// 					} else if (data == 2) {
// 						tips = "选择的优惠劵中存在着不符合条件优惠劵，请取消";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						return false;
// 					} else if (data == 3) {
// 						tips = "选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
// 						$('#alert1 .sy-content').html(tips);
// 						syalert.syopen('alert1');
// 						_this.removeClass("cur");
// 						return false;
// 					} else {
// 						perproductpriceval=data.split('|')[0];
// 						hejitimesval=data.split('|')[1];
// 						productsprice.html(perproductpriceval);
// 						hejitimes.html(hejitimesval);
// 					}
// 				}
// 			})
// 		}
// 	})
// 	procodeall = procodeall.substring(0, procodeall.length - 1);
// 	algorithmlist = algorithmlist.substring(0, algorithmlist.length - 1);
// 	totalcouponums = totalcouponums.substring(0, totalcouponums.length - 1);
// 	totalcouponcode = totalcouponcode.substring(0, totalcouponcode.length - 1);
// 	buyyearslist = buyyearslist.substring(0, buyyearslist.length - 1);
// 	singledomainnumlist = singledomainnumlist.substring(0, singledomainnumlist.length - 1);
// 	multidomainnumlist = multidomainnumlist.substring(0, multidomainnumlist.length - 1);
// 	var action1 = "getallproprice";
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: {
// 			'action': action1,
// 			'procodeall': procodeall,
// 			'algorithmlist': algorithmlist,
// 			'totalcouponums': totalcouponums,
// 			'totalcouponcode': totalcouponcode,
// 			'buyyearslist': buyyearslist,
// 			'singledomainnumlist': singledomainnumlist,
// 			'multidomainnumlist': multidomainnumlist,
// 			'oldactiveid': oldactiveid,
// 			'nowcouponid': nowcouponid,
// 			'nowcouponcode': nowcouponcode
// 		},
// 		success: function(data) {
// 			$('.feiydxs span em').html(data);
// 		}
// 	})
// })



$('.delcart').live('click', function() {
	var _this = $(this).parent().parent();
	var notrnum = _this.index() - 1;
	var isadditionalpro = $('#checkaddpro').is(':checked');
	var azservicenum = $('#azservicenum .shang input').val();
	var checknum = "";
	var delnum = _this.index();
	_this.remove();
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	//console.log(checknum);
	var url = "public.html";
	var action = "delcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'notrnum': notrnum,
			'checknum': checknum,
			'delnum': delnum,
			'isadditionalpro': isadditionalpro,
			'azservicenum': azservicenum
		},
		success: function(data) {
			// console.log(data);
			// //_this.hide();

			cartnum = data.split('*')[0];
			totalprice = data.split('*')[1];
			$('.fudong li em').html(cartnum);
			if (cartnum == 0) {
				$('.fudong li em').removeClass('chengse');
			}
			$('.feiydxs1 em').html(totalprice);
		}
	})

})

// $(".youhuiquans .oldbuy").click(function(){
// 	tips="该优惠劵不适用于新购产品";
// 	$('#alert1 .sy-content').html(tips);
// 	syalert.syopen('alert1');
// 	return false;
// })

// $(".vyouhuiquans .oldbuy").click(function(){
// 	tips="该优惠劵不适用于新购产品";
// 	$('#alert1 .sy-content').html(tips);
// 	syalert.syopen('alert1');
// 	return false;
// })

$('.tongyix a').live('click', function() {
	$('#tiankuan').fadeIn();
	$("#content_1").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
})

$('#tiankuan .tanchubox .close').click(function() {
	$('#tiankuan').fadeOut(100);
	$("#content_1").mCustomScrollbar("destroy");
})

$('#checkaddpro').click(function() {
	var isadditionalpro = $('#checkaddpro').is(':checked');
	azservicenum = $('#azservicenum .shang input').val();
	var checknum = "";
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	var action = 'carttotalprice';
	var url = "public.php";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'checknum': checknum,
			'isadditionalpro': isadditionalpro,
			'azservicenum': azservicenum
		},
		beforeSend: function() {},
		success: function(data) {
			var azserviceprice = "￥" + fmoney(azservicenum * 300, 2);
			$('#azserviceprice').html(azserviceprice);
			var youfeiprice = azservicenum * 500 - azservicenum * 300;
			youfeipricetxt = "已优惠" + youfeiprice + "元";
			$('#youfeiprice').html(youfeipricetxt);
			$('.feiydxs1 em').html(data);
			if (isadditionalpro) {
				$('#isselectservice').val('1');
			} else {
				$('#isselectservice').val('0');
			}
		},
	})
})

$('#azservicenum .shang #add').live('click', function() {
	var isadditionalpro = $('#checkaddpro').is(':checked');
	var azservicenum = $(this).parent().find('input').val();
	azservicenum = parseFloat(azservicenum) + parseFloat(1);
	var checknum = "";
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	var action = 'carttotalprice';
	var url = "public.php";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'checknum': checknum,
			'isadditionalpro': isadditionalpro,
			'azservicenum': azservicenum
		},
		beforeSend: function() {},
		success: function(data) {
			var azserviceprice = "￥" + fmoney(azservicenum * 300, 2);
			$('#azserviceprice').html(azserviceprice);
			$('#azservicenum .shang input').val(azservicenum);
			var youfeiprice = azservicenum * 500 - azservicenum * 300;
			youfeipricetxt = "已优惠" + youfeiprice + "元";
			$('#youfeiprice').html(youfeipricetxt);
			$('.feiydxs1 em').html(data);
			if (isadditionalpro) {
				$('#isselectservice').val('1');
			} else {
				$('#isselectservice').val('0');
			}
		},
	})
})

$('#azservicenum .shang #remove').live('click', function() {
	var isadditionalpro = $('#checkaddpro').is(':checked');
	var azservicenum = $(this).parent().find('input').val();
	azservicenum = parseFloat(azservicenum) - parseFloat(1);
	if (azservicenum < 1) {
		azservicenum = 1;
	}
	var checknum = "";
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	var action = 'carttotalprice';
	var url = "public.php";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'checknum': checknum,
			'isadditionalpro': isadditionalpro,
			'azservicenum': azservicenum
		},
		beforeSend: function() {},
		success: function(data) {
			var azserviceprice = "￥" + fmoney(azservicenum * 300, 2);
			$('#azserviceprice').html(azserviceprice);
			var youfeiprice = azservicenum * 500 - azservicenum * 300;
			$('#azservicenum .shang input').val(azservicenum);
			youfeipricetxt = "已优惠" + youfeiprice + "元";
			$('#youfeiprice').html(youfeipricetxt);
			$('.feiydxs1 em').html(data);
			if (isadditionalpro) {
				$('#isselectservice').val('1');
			} else {
				$('#isselectservice').val('0');
			}
		},
	})
})

$('#allcheck').click(function() {
	var isadditionalpro = $('#checkaddpro').is(':checked');
	var azservicenum = $('#azservicenum .shang input').val();
	var checkstate = $(this).is(':checked');
	if (checkstate) {
		$('.cartlist .checks').attr("checked", "true");
	} else {
		$('.cartlist .checks').removeAttr("checked");
	}
	var checknum = "";
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	var action = 'carttotalprice';
	var url = "public.php";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'checknum': checknum,
			'isadditionalpro': isadditionalpro,
			'azservicenum': azservicenum
		},
		beforeSend: function() {},
		success: function(data) {
			var azserviceprice = "￥" + fmoney(azservicenum * 300, 2);
			$('#azserviceprice').html(azserviceprice);
			var youfeiprice = azservicenum * 500 - azservicenum * 300;
			$('#azservicenum .shang input').val(azservicenum);
			youfeipricetxt = "已优惠" + youfeiprice + "元";
			$('#youfeiprice').html(youfeipricetxt);
			$('.feiydxs1 em').html(data);
			if (isadditionalpro) {
				$('#isselectservice').val('1');
			} else {
				$('#isselectservice').val('0');
			}
		},
	})
})

$('#sortcheck').live('click', function() {
	var isadditionalpro = $('#checkaddpro').is(':checked');
	var azservicenum = $('#azservicenum .shang input').val();
	var checkstate = $(this).is(':checked');
	if (checkstate) {
		$(this).attr("checked", "true");
	} else {
		$(this).removeAttr("checked");
	}
	var checknum = "";
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	var action = 'carttotalprice';
	var url = "public.php";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'checknum': checknum,
			'isadditionalpro': isadditionalpro,
			'azservicenum': azservicenum
		},
		beforeSend: function() {},
		success: function(data) {
			//console.log(data);
			var azserviceprice = "￥" + fmoney(azservicenum * 300, 2);
			$('#azserviceprice').html(azserviceprice);
			var youfeiprice = azservicenum * 500 - azservicenum * 300;
			$('#azservicenum .shang input').val(azservicenum);
			youfeipricetxt = "已优惠" + youfeiprice + "元";
			$('#youfeiprice').html(youfeipricetxt);
			$('.feiydxs1 em').html(data);
			if (isadditionalpro) {
				$('#isselectservice').val('1');
			} else {
				$('#isselectservice').val('0');
			}
		},
	})
})

$('#paytotalbuynow').live('click', function() {
	var checknum = "";
	var isselectservice = $('#isselectservice').val();
	var isreadxieyi = $('#readxieyi').is(':checked');
	if (!isreadxieyi) {
		tips = "请确认您已阅读、理解并接受《安全产品服务协议》";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var azservicenum = $('#azservicenum .shang input').val();
	$('#shopcart tr').each(function() {
		if ($(this).find('.checks').is(':checked')) {
			if ($(this).index() != 0) {
				checknum = checknum + $(this).index() + ",";
			}
		}
	})
	checknum = checknum.substring(0, checknum.length - 1);
	if (checknum) {
		var action = 'paytotalordernow';
		var url = "public.html";
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'checknum': checknum,
				'isselectservice': isselectservice,
				'azservicenum': azservicenum
			},
			beforeSend: function() {},
			success: function(data) {
				//console.log(data);
				if (data == 1) {
					tips = "优惠劵存在多次使用的情况，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else if (data == 2) {
					tips = "对不起您的没有权限购买渠道版";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else if (data == 3) {
					tips = "购买年限，不能小于1且大于5年";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else if (data == 4) {
					tips = "单域名和通配符总数不能少于3个且必须是正整数";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else if (data == 5) {
					tips = "购物车里产品已清空，请重新购买";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					setTimeout(window.location.reload(), 3000);
					return false;
					// } else if (data == 6) {
					// 	tips = "购买多域名，新增单域名不能少于2个、新增通配符数量不能少于1个";
					// 	$('#alert1 .sy-content').html(tips);
					// 	syalert.syopen('alert1');
					// 	return false;
				} else if (data == 8) {
					tips = "操作有误，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else if (data == 9) {
					tips = "账户内存在多个对应版本实例未签发，请签发成功或取消实例后再下单";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else if (data == 10) {
					tips = "对不起，单产品一次下单数量不能超过5个";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				} else {
					window.location.href = data;
				}
			},
		})
	} else {
		tips = "购物车里的产品至少购买一个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}

})

$('.editpaybtn').live('click', function() {
	var _this = $(this).parent().parent();
	var notrnum = _this.index() - 1;
	$('#buycert').fadeIn();
	var url = "public.html";
	var action = "viewcartinfo";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'notrnum': notrnum
		},
		beforeSend: function() {},
		success: function(data) {
			$('#buycert .tablebox').html(data);
		},
	})
})

$(document).bind("click", function(e) {
	var e = e || window.event; //事件对象，兼容IE
	var target = e.target || e.srcElement; //源对象，兼容火狐和IE
	while (target) {
		if (target.id && target.id == "couponcodebox") {
			return;
		}
		target = target.parentNode;
	}
	$('.couponcodebox').slideUp();
	$('.vcouponcodebox').slideUp();
})
$(document).ready(function(event) {
	$('.newselect').on('mouseenter', 'option', function(e) {
		this.style.background = "#FF0000";
	});
	$('.newselect').on('mouseleave', 'option', function(e) {
		this.style.background = "none";
	});
});

$('.paybtn').live('click',function(){
	var certid = $(this).attr('dataid');
	var url = "public.html";
	var action = "buynewcertificatecart";
	$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'certid': certid
			},
			success: function(data) {
				if (data == 2) {
					tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}else if(data == 3){
					tips = "产品定价出错，请联系客户经理";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}else {
					$('.signssltiplayer').fadeOut();
					$('.buycertlayer').html(data);
					$('#buycertbglayer').fadeIn();
					$("#content_2").mCustomScrollbar({
						autoHideScrollbar: true,
						theme: "light-thin"
					});
					$('.buycertlayer').addClass('show');
				}
			}
	})
	
})
$('.closebuycertlayer').live('click', function() {
	$('#buycertbglayer').fadeOut();
	$("#content_2").mCustomScrollbar("destroy");
	$('.buycertlayer').removeClass('show');
})

$('#bu_edition a').live('click', function() {
	$('#bu_edition a').removeClass('cur');
	$(this).addClass('cur');
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var edition = $('#bu_edition p .cur').attr('datavalue');
	var editiontips;
	if (edition == "体验版") {
		editiontips = "仅限体验试用，适用于临时测试，无人工服务";
	} else if (edition == "标准版" || edition == "Basic" || edition == "Secure site" || edition ==
		"Secure site Pro") {
		editiontips = "境外服务器全球验签，证书申请及审核数据涉及跨境传输";
	} else if (edition == "专业版") {
		editiontips = "等保密评优选，数据不出境，更适合政府/教育/金融单位";
	} else if (edition == "普惠版") {
		editiontips = "经济实惠，安全及兼容性一般，适合个人或小微企业";
	} else if (edition == "教育版") {
		editiontips = "edu.cn域名专用，面向高等院校及教育机构免费提供";
	} else if (edition == "政务版") {
		editiontips = "gov.cn域名专用，面向政府单位及党政机关免费提供";
	} else {
		editiontips = "请选择证书版本";
	}
	$('#bu_edition .butips').html(editiontips);
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var coupontype = $('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	if (coupontype == 1) {
		couponnum = $('.bucouponcode .cur').attr('datavalue');
	} else if (coupontype == 2) {
		couponnum = $('.buyinput230 input').val();
	} else {
		couponnum = "";
	}
	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {                          //0212
				tips = "对不起，30天体验证书因故下架，请选购其它产品";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.feiydxs1 em').html('￥0<i>.00</i>');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				var title = data.split('*')[2];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
				$('.buycerttitle span').html(title);
			}
		}
	})
})

$('#bu_algorithm a').live('click', function() {
	$('#bu_algorithm a').removeClass('cur');
	$(this).addClass('cur');
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	var coupontype = $('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	if (coupontype == 1) {
		couponnum = $('.bucouponcode .cur').attr('datavalue');
	} else {
		couponnum = $('.buyinput230 input').val();
	}
	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {                          //0212
				tips = "对不起，30天体验证书因故下架，请选购其它产品";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.feiydxs1 em').html('￥0<i>.00</i>');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
			}
		}
	})
})

$('#bu_buynum a').live('click', function() {
	$('#bu_buynum a').removeClass('cur');
	$(this).addClass('cur');
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	var coupontype = $('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	if (coupontype == 1) {
		couponnum = $('.bucouponcode .cur').attr('datavalue');
	} else {
		couponnum = $('.buyinput230 input').val();
	}

	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {                          //0212
				tips = "对不起，30天体验证书因故下架，请选购其它产品";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.feiydxs1 em').html('￥0<i>.00</i>');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
			}
		}
	})
})

$('#bu_certcoupontypecheck a').live('click', function() {
	$('#bu_certcoupontypecheck a').removeClass('cur');
	$(this).addClass('cur');
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	var coupontype = $('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var url = "public.html";
	var action = "newcouponlist";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'coupontype': coupontype,
			'checkyears': checkyears,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {

			var content = data.split('*')[0];
			var price = data.split('*')[1];
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				$('#bu_certcouponlist').html(content);
				$('.feiydxs1 em').html(price);
			}

		}
	})
})

$('.bucouponcode a').live('click', function() {
	$('.bucouponcode a').removeClass('cur');
	$(this).addClass('cur');
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	var coupontype = $('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var couponnum = $('.bucouponcode .cur').attr('datavalue');
	var url = "public.html";
	var action = "newcertprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'coupontype': coupontype,
			'checkyears': checkyears,
			'couponnum': couponnum,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			data = data.replace(/\s/g, '');
			var errornum = data.split('*')[1];
			var price = data.split('*')[0];
			if (errornum == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (errornum == 2) {
				tips = "您的优惠券已被占用或者已失效";
				$('.feiydxs1 em').html(price);
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				$('.feiydxs1 em').html(price);
			}

		}
	})
})

$('.buyinput230 input').live('blur', function() {
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	var coupontype = $('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var couponnum = $(this).val();

	var url = "public.html";
	var action = "newcertprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'coupontype': coupontype,
			'checkyears': checkyears,
			'couponnum': couponnum,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			data = data.replace(/\s/g, '');
			var errornum = data.split('*')[1];
			var price = data.split('*')[0];
			if (errornum == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (errornum == 3) {
				tips = "您的优惠码已被占用或者已失效";
				$('.feiydxs1 em').html(price);
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				$('.feiydxs1 em').html(price);
			}

		}
	})
})


$('#singledomainnum .shang #add').live('click', function() {
	var _this = $(this).parent();
	var singledomainnum = parseFloat(_this.find('input').val()) + parseFloat(1);
	if (singledomainnum < 0) {
		tips = "单域名数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	_this.find('input').val(singledomainnum);
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	if (multidomainnum < 0) {
		tips = "通配符数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var totaldomainum = singledomainnum + multidomainnum + parseFloat(1);
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
			}
		}
	})
})

$('#singledomainnum .shang #remove').live('click', function() {
	var _this = $(this).parent();
	var singledomainnum = parseFloat(_this.find('input').val()) - parseFloat(1);
	if (singledomainnum < 0) {
		tips = "单域名数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	if (multidomainnum < 0) {
		tips = "通配符数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var totaldomainum = singledomainnum + multidomainnum + parseFloat(1);
	if (totaldomainum < 3) {
		tips = "多域名数量不能小于3个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	_this.find('input').val(singledomainnum);
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
			}
		}
	})
})


$('#multidomainnum .shang #add').live('click', function() {
	var _this = $(this).parent();
	var multidomainnum = parseFloat(_this.find('input').val()) + parseFloat(1);
	if (multidomainnum < 0) {
		tips = "通配符数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	_this.find('input').val(multidomainnum);
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	if (singledomainnum < 0) {
		tips = "单域名数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var totaldomainum = singledomainnum + multidomainnum + parseFloat(1);
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
			}
		}
	})
})

$('#multidomainnum .shang #remove').live('click', function() {
	var _this = $(this).parent();
	var multidomainnum = parseFloat(_this.find('input').val()) - parseFloat(1);
	if (multidomainnum < 0) {
		tips = "通配符数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	if (singledomainnum < 0) {
		tips = "单域名数量不能小于1个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var totaldomainum = singledomainnum + multidomainnum + parseFloat(1);
	if (totaldomainum < 3) {
		tips = "多域名数量不能小于3个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	_this.find('input').val(multidomainnum);
	var algorithm = $('#bu_algorithm p .cur').attr('datavalue');
	var procode = $('#bu_buynum p .cur').attr('datavalue');
	var edition = $('#bu_edition p .cur').attr('datavalue');
	// var maxyears = $('#bu_buynum p a').length;
	// var checkyears = maxyears - $('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	var url = "public.html";
	var action = "changecertcart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'edition': edition,
			'algorithm': algorithm,
			'checkyears': checkyears,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var html = data.split('*')[0];
				var price = data.split('*')[1];
				$('#buotherblock').html(html);
				$('.feiydxs1 em').html(price);
			}
		}
	})
})


$('#paybuynow').live('click', function() {
	var isreadxieyi=$('#readxieyi').is(':checked');
	if(!isreadxieyi){
		tips="请先阅读并勾选接受《安全产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm=$('#bu_algorithm p .cur').attr('datavalue');
	var procode=$('#bu_buynum p .cur').attr('datavalue');
	var edition=$('#bu_edition p .cur').attr('datavalue');
	var coupontype=$('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears=$('#bu_buynum p a').length;
	// var checkyears=maxyears-$('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	if(coupontype==1){
		couponnum=$('.bucouponcode .cur').attr('datavalue');
	}else{
		couponnum=$('.buyinput230 input').val();
	}
	var activeid;
	var url = "public.html";
	var action = "payordernow";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'procode': procode,
			'edition': edition,
			'algorithm': algorithm,
			'coupontype': coupontype,
			'couponnum': couponnum,
            'checkyears': checkyears,
			'activeid': activeid,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum
		},
		success: function(data) {
			//console.log(data);
			
			if (data == 1) {
				tips = "操作有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data == 2) {
				tips = "优惠券已被占用或者已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {
				tips = "优惠码已被占用或者已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 4) {
				tips = "证书的购买年限有误";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 5) {
				tips = "单域名和通配符总数不能少于3个且必须是正整数";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 6) {
				tips = "单域名数量不能小于0";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 7) {
				tips = "通配符不能小于0";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 8) {
				tips = "非体验版没有30、90天证书";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 9) {                  //0212   
				tips = "对不起，30天体验证书因故下架，请选购其它产品";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				window.location.href = data;
			}
		}
	})
})


$('#addtocart').live('click', function() {
	var singledomainnum = parseFloat($('#singledomainnum .shang input').val());
	var multidomainnum = parseFloat($('#multidomainnum .shang input').val());
	var algorithm=$('#bu_algorithm p .cur').attr('datavalue');
	var procode=$('#bu_buynum p .cur').attr('datavalue');
	var edition=$('#bu_edition p .cur').attr('datavalue');
	var coupontype=$('#bu_certcoupontypecheck p .cur').attr('datavalue');
	// var maxyears=$('#bu_buynum p a').length;
	// var checkyears=maxyears-$('#bu_buynum p a.cur').index();
	var checkyears=$('#bu_buynum p a.cur').index()+1;
	if(coupontype==1){
		couponnum=$('.bucouponcode .cur').attr('datavalue');
	}else{
		couponnum=$('.buyinput230 input').val();
	}
	var url = "public.html";

	var action = "addtocart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'procode': procode,
			'edition': edition,
			'algorithm': algorithm,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'checkyears': checkyears,
			'singledomainnum': singledomainnum,
			'multidomainnum': multidomainnum
		},
		success: function(data) {
			$.trim(data);
			data = data.replace(/\s/g, "");
			if (data == "p1") {
				tips = "操作有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data == "p2") {
				tips = "优惠券已被占用或者已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "p3") {
				tips = "优惠码已被占用或者已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "p4") {
				tips = "证书的购买年限有误";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "p5") {
				tips = "单域名和通配符总数不能少于3个且必须是正整数";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "p6") {
				tips = "单域名数量不能小于0";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == "p7") {
				tips = "通配符不能小于0";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
            } else if (data == "p8") {                      //0212
            	tips = "对不起，30天体验证书因故下架，请选购其它产品";
            	$('#alert1 .sy-content').html(tips);
            	syalert.syopen('alert1');
            	return false;
			} else {
				$('.fudong li em').html(data);
				if (data > 0) {
					$('.fudong li em').addClass('chengse');
				} else {
					$('.fudong li em').removeClass('chengse');
				}
				$('#buycertbglayer').fadeOut();
				$("#content_2").mCustomScrollbar("destroy");
				$('.buycertlayer').removeClass('show');
			}
		}
	})
})


$('.renewbtn').live('click', function() {
	var certid = $(this).attr('dataid');
	var activeid = $(this).attr('dataactiveid');
	var url = "public.html";
	var action = "renewcertificatecart";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'certid': certid,
			'activeid': activeid
		},
		success: function(data) {   //20260420
			//console.log(data);
			if(data==1){
				// tips = "对不起您没有可用的渠道包，请先购买再续签";
				// $('#alert1 .sy-content').html(tips);
				// syalert.syopen('alert1');
				// setTimeout(function() {

				// }, 3000);
				$('#channeltanchu').fadeIn();
				$('.channellayer').addClass('show');
				return false;
			}else if(data==2){
				tips = "对不起当前证书已下架，无法进行续签";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$('.buycertlayer').html(data);
				$('#buycertbglayer').fadeIn();
				$("#content_2").mCustomScrollbar({
					autoHideScrollbar: true,
					theme: "light-thin"
				});
				$('.buycertlayer').addClass('show');
			}
		}
	})
})


$('#renew_buynum a').live('click', function() {
	$('#renew_buynum a').removeClass('cur');
	$(this).addClass('cur');
	var procode = $('#renew_buynum p .cur').attr('datavalue');
	var maxyears=$('#renew_buynum p a').length;
	var checkyears = $('#renew_buynum p a.cur').index()+1;
	var activeid = $('#renewpaybuynow').attr('dataactiveid');
	var url = "public.html";
	var action = "renewprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'checkyears': checkyears,
			'activeid': activeid,
			'procode': procode
		},
		success: function(data) {
			data = data.replace(/\s/g, "");
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "账户内存在多个当前版本实例未签发，请签发成功或取消实例后再下单";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var dataarr=data.split('|-|');
				var t_price=dataarr[0];
				var f_pricetxt=dataarr[1];
				$('#renew_certcoupontypecheck a').removeClass('cur');
				$('#renew_certcouponlist').html('');
				$('.feiydxs1 em').html(t_price);
				$('#renew_buynum .butips').html(f_pricetxt);
			}
		}
	})
})

$('#renew_certcoupontypecheck a').live('click', function() {
	$('#renew_certcoupontypecheck a').removeClass('cur');
	$(this).addClass('cur');
	var procode = $('#renew_buynum p .cur').attr('datavalue');
	var maxyears = $('#renew_buynum p a').length;
	var checkyears = maxyears - $('#renew_buynum p a.cur').index();
	var activeid = $('#renewpaybuynow').attr('dataactiveid');
	var coupontype = $('#renew_certcoupontypecheck p .cur').attr('datavalue');
	var url = "public.html";
	var action = "newrenewcouponlist";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'coupontype': coupontype,
			'checkyears': checkyears,
			'activeid': activeid,
			'procode': procode
		},
		success: function(data) {
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var dataarr=data.split('|-|');
				var t_price=dataarr[0].replace(/\s/g, "");
				var f_pricetxt=dataarr[1];
				$('.feiydxs1 em').html(t_price);
				$('#renew_certcouponlist').html(f_pricetxt);
			}
		}
	})
})


$('.renewcouponcode a').live('click', function() {
	$('.renewcouponcode a').removeClass('cur');
	$(this).addClass('cur');
	var procode = $('#renew_buynum p .cur').attr('datavalue');
	var maxyears = $('#renew_buynum p a').length;
	var checkyears = maxyears - $('#renew_buynum p a.cur').index();
	var activeid = $('#renewpaybuynow').attr('dataactiveid');
	var coupontype = $('#renew_certcoupontypecheck p .cur').attr('datavalue');
	var couponnum = $('.renewcouponcode .cur').attr('datavalue');
	var url = "public.html";
	var action = "renewprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'maxyears': maxyears,
			'checkyears': checkyears,
			'activeid': activeid,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'procode': procode
		},
		success: function(data) {
			data = data.replace(/\s/g, '');
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "您的优惠券已被占用或者已失效";
				//$('.feiydxs1 em').html(price);
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var dataarr=data.split('|-|');
				var t_price=dataarr[0];
				
				var f_pricetxt=dataarr[1];
				$('.feiydxs1 em').html(t_price);
				$('#renew_buynum .butips').html(f_pricetxt);
			}

		}
	})
})



$('.renewbuyinput230 input').live('blur', function() {
	var procode = $('#renew_buynum p .cur').attr('datavalue');
	var maxyears = $('#renew_buynum p a').length;
	var checkyears = maxyears - $('#renew_buynum p a.cur').index();
	var activeid = $('#renewpaybuynow').attr('dataactiveid');
	var coupontype = $('#renew_certcoupontypecheck p .cur').attr('datavalue');
	var couponnum = $(this).val();
	var url = "public.html";
	var action = "renewprice";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'maxyears': maxyears,
			'checkyears': checkyears,
			'activeid': activeid,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'procode': procode
		},
		success: function(data) {
			//data=data.replace(/\s/g,'');
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {
				tips = "您的优惠码已被占用或者已失效";

				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				var dataarr=data.split('|-|');
				var t_price=dataarr[0];
				
				var f_pricetxt=dataarr[1];
				$('.feiydxs1 em').html(t_price);
				$('#renew_buynum .butips').html(f_pricetxt);
			}

		}
	})
})

$('#renewpaybuynow').live('click', function() {
	var isreadxieyi = $('#readxieyi').is(':checked');
	if (!isreadxieyi) {
		tips = "请先阅读并勾选接受《安全产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var procode = $('#renew_buynum p .cur').attr('datavalue');
	var maxyears = $('#renew_buynum p a').length;
	
	var checkyears = $('#renew_buynum p a.cur').index()+1;
	
	var activeid = $('#renewpaybuynow').attr('dataactiveid');
	var coupontype = $('#renew_certcoupontypecheck p .cur').attr('datavalue');
	if (coupontype == 1) {
		var couponnum = $('.renewcouponcode .cur').attr('datavalue');
	} else {
		var couponnum = $('.renewbuyinput230 input').val();
	}
	var url = "public.html";
	var action = "renewpayordernow";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'maxyears': maxyears,
			'checkyears': checkyears,
			'activeid': activeid,
			'coupontype': coupontype,
			'couponnum': couponnum,
			'procode': procode
		},
		success: function(data) {
			//console.log(data);
			if (data == 1) {
				tips = "对不起操作出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "您的优惠券已被占用或者已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {
				tips = "您的优惠码已被占用或者已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 4) {
				tips = "续费时长选择出错";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				window.location.href = data;
			}

		}
	})

})

$('.renewoldcertbtn').live('click', function() {
	var activeid = $(this).attr('dataactiveid');
	var url = "public.html";
	var action = "renewoldcertlayer";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid
		},
		success: function(data) {
			$('.buycertlayer').html(data);
			$('#buycertbglayer').fadeIn();
			$("#content_2").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin"
			});
			$('.buycertlayer').addClass('show');
		}
	})
})

$('.renewoldcert').live('click', function() {
	var isreadxieyi = $('#readxieyi').is(':checked');
	if (!isreadxieyi) {
		tips = "请先阅读并勾选接受《安全产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var activeid = $(this).attr('dataactiveid');
	var url = "public.html";
	var action = "renewoldcert";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid
		},
		success: function(data) {
			//console.log(data);
			if (data == 1) {
				tips = "该证书已完成续签不可重复操作！";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 2) {
				tips = "操作错误，请不要非法操作";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else if (data == 3) {
				tips = "该渠道版证书包已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			} else {
				window.location.href = data;
				tips = "续签请求已提交，页面跳转中";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
			}
		}
	})
})

$('.sy-alert').on('click', '.syalertclose', function() {
	syalert.syhide('alert1');
})


$('.reissuecertbtn').live('click', function() {
	var activeid = $(this).attr('dataactiveid');
	var url = "public.html";
	var action = "reissuecertlayer";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid
		},
		success: function(data) {
			if(data==1){
				tips = "请在到期前30天内进行续签";				$('#alert1 .sy-content').html(tips);				syalert.syopen('alert1');				return false;
			}else{
				$('.buycertlayer').html(data);
				$('#buycertbglayer').fadeIn();
				$("#content_2").mCustomScrollbar({
					autoHideScrollbar: true,
					theme: "light-thin"
				});
				$('.buycertlayer').addClass('show');
			}
		}
	})
})

$('.reissuecertificate').live('click',function(){
	var activeid=$(this).attr('dataactiveid');
	var action="reissuecertificate";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action,
			'activeid':activeid,
		},
		beforeSend:function(){ },
		success:function(data){
			if(data==1){
				tips="对不起，您没有权限重签该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				window.location.href = data;
			}
		}
	})
})