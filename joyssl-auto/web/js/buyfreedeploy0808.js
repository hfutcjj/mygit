$(".shiyong").live('click', function() {
	var activeid=$('#activeid').val();
	var isrenew=$('#isrenew').val();
	var isupdate=$('#isupdate').val();
	var _this=$(this).parent();
	var nowdiscountid = $(this).find('.ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $(this).find('.ldiscountcode').html();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			selecteditionnum=i;
		}
	})
	
	if(isupdate==0){
	   var buyyearsnum=$('#buyyears input:radio:checked').val();
	}else if(isupdate==1){
	   var buyyearsnum=$('#buyyears').val();
	}
	
	var url = "deploypublic.html";
	var action = "couponlist";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid,
			'nowdiscountid': nowdiscountid,
			'nowdiscountcode': nowdiscountcode,
			'isrenew': isrenew,
			'isupdate': isupdate,
			'selecteditionnum': selecteditionnum,
			'buyyearsnum': buyyearsnum
		},
		success: function(data) {
			
			if(data == 1) {
				tips = "优惠券已用完";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data == 2){
				tips = "对不起出错了";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				
				_this.parent().find('.couponcodebox ul').html(data);
			}
		}
	})
	_this.parent().find('.couponcodebox').slideToggle();
})

$('.deplayedition .black').live('click',function(){
	var activeid=$('#activeid').val();
	var nowdiscountid = $('.shiyong .ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $('.shiyong .ldiscountcode').html();
	$(this).addClass('checked').siblings().removeClass('checked');
	//$('.iwantfree .shiyong').html('我要优惠');
	$('.iwantfree .couponcodebox').slideUp();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			selecteditionnum=i;
		}
	})
	var isupdate=$('#isupdate').val();
	if(isupdate==0){
	   var buyyearsnum=$('#buyyears input:radio:checked').val();
	}else if(isupdate==1){
	   var buyyearsnum=$('#buyyears').val();
	}
	
	var action = "gettimeslist";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid,
			'selecteditionnum': selecteditionnum,
			'buyyearsnum': buyyearsnum
		},
		success: function(data) {
			$('#buyyears p').html(data);
			var action1 = "gettotalprice";
			// var buyyearsnum=$('#buyyears input:radio:checked').val();
			
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action1,
					'activeid': activeid,
					'isupdate': isupdate,
					'buyyearsnum': buyyearsnum,
					'selecteditionnum': selecteditionnum,
					'nowdiscountid': nowdiscountid,
					'nowdiscountcode': nowdiscountcode
				},
				success: function(data) {
					//console.log(data);
					var dataarr=data.split('|-|');
					var p1=dataarr[0].split('.')[0];
					var p11=dataarr[0].split('.')[1];
					var p2=dataarr[1].split('.')[0];
					var p22=dataarr[1].split('.')[1];
					var price1=p1;
					var price2="￥"+p2;
					if(p2){
						price1=price1+"."+p11+"元";
						price2=price2+"<i>."+p22+"</i>";
					}else{
						price1=price1+".00元";
						price2=price2+"<i>.00</i>";
					}
					$('#totalprice ').html(price1);
					$('.feiydxs span em').html(price2);
				}
			})
		}
	})
	
})

$('.iwantfree .couponcodebox li .btnhover').live('click',function(){
	var activeid=$('#activeid').val();
	var isupdate=$('#isupdate').val();
	var couponinfo = $(this).parent().parent().find("li input:radio[name='ldiscountid']:checked").val(); 
	var nowdiscountid = $(this).find('.ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $(this).find('.ldiscountcode').html();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			selecteditionnum=i;
		}
	})
	if(isupdate==0){
	   var buyyearsnum=$('#buyyears input:radio:checked').val();
	}else if(isupdate==1){
	   var buyyearsnum=$('#buyyears').val();
	}
	if(!buyyearsnum){
		tips="请选择购买年限";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	_this2 = $(this).parent().parent().parent();
	_this = $(this).parent().parent().parent().parent();
	var url = "deploypublic.html";
	var isrenew=$('#isrenew').val();
	if (couponinfo) { //如果优惠信息不能为空
		if (couponinfo == "优惠码") { //如果是优惠码
			var couponcode = $(this).parent().parent().find("li .ldiscountcode").val(); //获取优惠码
			// console.log(couponcode);
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
					'activeid': activeid,
					'nowdiscountid': nowdiscountid,
					'nowdiscountcode': nowdiscountcode,
					'isrenew': isrenew,
					'isupdate': isupdate,
					'selecteditionnum': selecteditionnum,
					'buyyearsnum': buyyearsnum,
					'couponcode': couponcode
				},
				success: function(data) {
					//console.log(data);
					if(data == 1){
						tips = "未检测到匹配的优惠码或优惠码已被占用";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else {
						$('.feiydxs span em').html(data);
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
								_this.find('.shiyong').html('已优惠' + data + '<i class="ldiscountcode" style="display:none;">' +couponcode + '</i>');
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
					'activeid': activeid,
					'nowdiscountid': nowdiscountid,
					'nowdiscountcode': nowdiscountcode,
					'isrenew': isrenew,
					'isupdate': isupdate,
					'selecteditionnum': selecteditionnum,
					'buyyearsnum': buyyearsnum,
					'couponnum': couponinfo
				},
				success: function(data) {
					if (data == 1) {
						tips = "优惠券已被占用或对应品牌无权使用该优惠券";
						$('#alert1 .sy-content').html(tips);
						syalert.syopen('alert1');
						return false;
					} else {
						$('.feiydxs span em').html(data);
						_this2.slideUp();
						var action2 = "vcouponidprice";
						$.ajax({
							type: "POST",
							url: url,
							data: {
								'action': action2,
								'couponinfo': couponinfo
							},
							success: function(data) {
								_this.find('.shiyong').html('已优惠' + data + '<i class="ldiscountid" style="display:none;">' + couponinfo + '</i>');
							}
						})
					}
	
				}
			})
		}
	} else {
		_this.find('.shiyong').html('我要优惠');
		_this2.slideUp();
	}
})

$('#buyyears input').live('click',function(){
	//$('.iwantfree .shiyong').html('我要优惠');
	$('.iwantfree .couponcodebox').slideUp();
	var activeid=$('#activeid').val();
	var nowdiscountid = $('.shiyong .ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $('.shiyong .ldiscountcode').html();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			selecteditionnum=i;
		}
	})
	var isupdate=$('#isupdate').val();
	var buyyearsnum=$('#buyyears input:radio:checked').val();
	
	var action = "gettotalprice";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid,
			'buyyearsnum': buyyearsnum,
			'isupdate': isupdate,
			'selecteditionnum': selecteditionnum,
		    'nowdiscountid': nowdiscountid,
		    'nowdiscountcode': nowdiscountcode
		},
		success: function(data) {
			var dataarr=data.split('|-|');
			var p1=dataarr[0].split('.')[0];
			var p11=dataarr[0].split('.')[1];
			var p2=dataarr[1].split('.')[0];
			var p22=dataarr[1].split('.')[1];
			var price1=p1;
			var price2="￥"+p2;
			if(p2){
				price1=price1+"."+p11+"元";
				price2=price2+"<i>."+p22+"</i>";
			}else{
				price1=price1+".00元";
				price2=price2+"<i>.00</i>";
			}
			$('#totalprice ').html(price1);
			$('.feiydxs span em').html(price2);
		}
	})
})

$('.changecert a').live('click',function(){
	$('.checkdomainlist p').html('没有可选域名');
	var action="getmorecertlist";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action
		},
		success: function(data) {
			$('#changecertinfo').html(data);
			
		}
	})
	
})


$('#domainlist li a').live('click',function(){
	var activeid=$(this).attr('dataactiveid');
	var domain=$(this).html();
	var isrenew=$('#isrenew').val();
	var isupdate=$('#isupdate').val();
	var nowdiscountid = $('.shiyong .ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $('.shiyong .ldiscountcode').html();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			selecteditionnum=i;
		}
	})
	
	var buyyearsnum=$('#buyyears input:radio:checked').val();
	var action = "gettimeslist";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid,
			'selecteditionnum': selecteditionnum
			
		},
		success: function(data) {
			$('#activeid').val(activeid);
			$('#buyyears p').html(data);
			var action1 = "gettotalprice";
			var action2 = "checkdomainlist";
			var action3 = "changecertinfo";
			var buyyearsnum=$('#buyyears input:radio:checked').val();
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action3,
					'activeid': activeid
				},
				success: function(data) {
					
					$('#changecertinfo').html(data);
				}
			})
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action2,
					'activeid': activeid,
					'isrenew': isrenew,
				},
				success: function(data) {
					$('.checkdomainlist p').html(data);
				}
			})
			
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action1,
					'activeid': activeid,
					'isupdate': isupdate,
					'buyyearsnum': buyyearsnum,
					'selecteditionnum': selecteditionnum,
					'nowdiscountid': nowdiscountid,
					'nowdiscountcode': nowdiscountcode
				},
				success: function(data) {
					
					var dataarr=data.split('|-|');
					var p1=dataarr[0].split('.')[0];
					var p11=dataarr[0].split('.')[1];
					var p2=dataarr[1].split('.')[0];
					var p22=dataarr[1].split('.')[1];
					var price1=p1;
					var price2="￥"+p2;
					if(p2){
						price1=price1+"."+p11+"元";
						price2=price2+"<i>."+p22+"</i>";
					}else{
						price1=price1+".00元";
						price2=price2+"<i>.00</i>";
					}
					$('#totalprice ').html(price1);
					$('.feiydxs span em').html(price2);
				}
			})
		}
	})
})


$('#renewdomainlist li a').live('click',function(){
	var certactiveid=$(this).attr('dataactiveid');
	
	var freedeployactiveid=$('#activeid').val();
	var action="renewcertinfo";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'certactiveid': certactiveid,
			'freedeployactiveid': freedeployactiveid
		},
		beforeSend:function(){
			$('#tanchubj1').fadeIn();
		},
		success: function(data) {
			if(data==1){
				tips="证书更新失败，请更换其它证书或重试";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$('#tanchubj1').fadeOut();
				$('#renewcertinfo').html(data);
			}
			
		}
	})
	
})

$('.zhisuud .feiydxs .btnhover').live('click',function(){
	var isreadxieyi=$('#readxieyi').is(':checked');
	if(!isreadxieyi){
		tips="请先阅读并勾选接受《安全产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var activeid=$('#activeid').val();
	if(activeid==""){
		tips="证书不能为空，请选择证书";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var i=0,selecteditionnum=0;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			selecteditionnum=i;
		}
	})
	
	var isupdate=$('#isupdate').val();
	var isrenew=$('#isrenew').val();
	var freedeployactiveid=$('#freedeployactiveid').val();
	if(isupdate==0){
		if(isrenew==0){
			var buyyearsnum=$('#buyyears input:radio:checked').val();
			if($('.checkdomainlist input:radio:checked').val()){
				var selectdomainnum=$('.checkdomainlist input:radio:checked').val();
				var selectdomaincontent=$('.checkdomainlist label input:radio:checked').parent().find('.domaintype').val();
				if(!dyfrom_domain(selectdomaincontent)){
					tips="您输入的域名前缀错误，域名前缀只能是字母、数字、下划线、横线组合";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}
			}else{
				tips="接入域名不能为空";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}
		}else{
			var buyyearsnum=$('#buyyears input:radio:checked').val();
		}
	}else{
		var buyyearsnum=$('#buyyears').val();
	}
	
	if(selecteditionnum==0){
		tips="请选择云部署版本";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(!buyyearsnum){
		tips="请选择购买年限";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var nowdiscountid = $('.shiyong .ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $('.shiyong .ldiscountcode').html();
	var action = "savedeployorder";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
		  'action': action,
		  'activeid': activeid,
		  'isupdate': isupdate,
		  'isrenew': isrenew,
		  'selecteditionnum': selecteditionnum,
		  'buyyearsnum': buyyearsnum,
		  'selectdomainnum': selectdomainnum,
		  'selectdomaincontent': selectdomaincontent,
		  'nowdiscountid': nowdiscountid,
		  'freedeployactiveid': freedeployactiveid,
		  'nowdiscountcode': nowdiscountcode
		},
		success: function(data) {
			
			if(data==1){
				tips="未检测到该证书，请重新选择";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				//$('.zxboxs').fadeIn();
				tips="您选择的域名已存在云部署实例，无法继续接入";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==3){
				tips="优惠券已被占用或对应品牌无权使用该优惠券";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==4){
				tips="优惠码已被占用或对应品牌无权使用该优惠码";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==5){
				tips="升级证书失败，请咨询管理员";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==6){
				tips="请选择云部署版本";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				window.location.href='payorder_'+data+'.html';
			}
		}
	})
})


$('.renewcertbtn a').live('click',function(){
	var action="getmorecertlist1";
	var activeid=$('#activeid').val();
	var url = "deploypublic.html";
	_this=$(this);
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid
		},
		success: function(data) {
			if(data==1){
				tips="未检测到新证书";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$('#renewcertinfo .certinfo').html(data);
				_this.hide();
			}
			
		}
	})
	
})

$('.checkdomainlist p label').live('click',function(){
	$(this).find("input[name='domain']").attr('checked','true');
	$('.checkdomainlist p label .domaintype').val('');
	var selectdomainnum=$(this).find('input:radio:checked').val();
	var selectdomaincontent=$(this).find('.domaintype').val();
	var tips;
	if(!dyfrom_domain(selectdomaincontent)){
		tips='<em><img src="images/weishe.svg"></em> 您输入的域名前缀错误，域名前缀只能是字母、数字、下划线、横线组合';
		$('.checkdomainlist .tips').html(tips);
	
	}		
	var activeid=$('#activeid').val();
	var action="checkdomainisexist";
	var url = "deploypublic.html";
	$('.checkdomainlist .tips').hide();
	
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'activeid': activeid,
			'selectdomainnum': selectdomainnum,
			'selectdomaincontent': selectdomaincontent
		},
		success: function(data) {
			if(data==1){
				tips='<em><img src="images/weishe.svg"></em> 云部署同时只能接入一个主域名或子域名，购买后无法更换，请谨慎选择';
			}else if(data==2){
				tips='<em><img src="images/weishe.svg"></em> 您选择的域名已存在云部署实例，无法继续接入，请返回列表查看或咨询客服';
			}else{
				tips='<em><img src="images/weishe.svg"></em> 存在未知问题，请返回列表查看或咨询客服';
			}
			$('.checkdomainlist .tips').html(tips).fadeIn();
		}
	})
})

$('.checkdomainlist p label .domaintype').live('keyup',function(){
	
	$(this).parent().find("input[name='domain']").attr('checked','true');
	var selectdomainnum=$(this).parent().find('input:radio:checked').val();
	var tips;
	if(selectdomainnum){
		var selectdomaincontent=$(this).val();
		var activeid=$('#activeid').val();
		var action="checkdomainisexist";
		var url = "deploypublic.html";
		$('.checkdomainlist .tips').hide();
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'activeid': activeid,
				'selectdomainnum': selectdomainnum,
				'selectdomaincontent': selectdomaincontent
			},
			success: function(data) {
				
				if(data==1){
					tips='<em><img src="images/weishe.svg"></em> 云部署同时只能接入一个主域名或子域名，购买后无法更换，请谨慎选择';
				}else if(data==2){
					tips='<em><img src="images/weishe.svg"></em> 您选择的域名已存在云部署实例，无法继续接入，请返回列表查看或咨询客服';
				}else{
					tips='<em><img src="images/weishe.svg"></em> 存在未知问题，请返回列表查看或咨询客服';
				}
				$('.checkdomainlist .tips').html(tips).fadeIn();
			}
		})
	}else{
		tips='<em><img src="images/weishe.svg"></em> 请先选择接入域名';
		$('.checkdomainlist .tips').html(tips);
	}
})

$('#renewcertinfo .certinfo label').live('click',function(){
	 var certactiveid=$(this).attr('dataactiveid');
	 
	 var freedeployactiveid=$('#activeid').val();
	 var action="renewcertinfo";
	 var url = "deploypublic.html";
	 $.ajax({
	 	type: "POST",
	 	url: url,
	 	data: {
	 		'action': action,
	 		'certactiveid': certactiveid,
	 		'freedeployactiveid': freedeployactiveid
	 	},
	 	beforeSend:function(){
	 		$('#tanchubj1').fadeIn();
	 	},
	 	success: function(data) {
	 		if(data==1){
	 			tips="证书更新失败，请更换其它证书或重试";
	 			$('#alert1 .sy-content').html(tips);
	 			syalert.syopen('alert1');
	 			return false;
	 		}else{
	 			
	 			$('#renewcertinfo').html(data);
	 		}
	 		$('#tanchubj1').fadeOut();
	 	}
	 })
})