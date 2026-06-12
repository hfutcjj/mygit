$('.deplayedition li').live('click',function(){
	var j=0;
	$(this).toggleClass('checked');
	$('.iwantfree .shiyong').html('我要优惠');
	$('.iwantfree .couponcodebox').slideUp();
	var activeid=$('#activeid').val();
	$('.deplayedition li.checked').each(function(){
		j++;
	})
	if(j==0){
		$(this).addClass('checked');
		tips = "请至少选择一种资源包";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		var i=0,selecteditionnum;
		$('.deplayedition li').each(function(){
			i++;
			if($(this).hasClass('checked')){
				if(selecteditionnum){
				   selecteditionnum+=i+",";
				}else{
				   selecteditionnum=i+",";	
				}
			}
		})
		
		selecteditionnum=selecteditionnum.substring(0,selecteditionnum.length-1);
		var buynum=$('#freedeploynum').val();
		
		var url = "deploypublic.html";
		var action = "getpacktotalprice";
		
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'buynum': buynum,
				'selecteditionnum': selecteditionnum
			},
			success: function(data) {
				$('#totalprice ').html(data+".00元");
				$('.feiydxs span em').html("￥"+data+"<i>.00</i>");
			}
		})
	}
	
	
})

$('#deploypacknum .shang #add').live('click',function(){
	var deploypacknum=$(this).parent().find('input').val();
	var buynum=parseInt(deploypacknum)+1;
	$(this).parent().find('input').val(buynum);
	var j=0;
	$('.iwantfree .shiyong').html('我要优惠');
	$('.iwantfree .couponcodebox').slideUp();
	$('.deplayedition li.checked').each(function(){
		j++;
	})
	if(j==0){
		$(this).addClass('checked');
		tips = "请至少选择一种资源包";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		var i=0,selecteditionnum;
		$('.deplayedition li').each(function(){
			i++;
			if($(this).hasClass('checked')){
				if(selecteditionnum){
				   selecteditionnum+=i+",";
				}else{
				   selecteditionnum=i+",";	
				}
			}
		})
		
		selecteditionnum=selecteditionnum.substring(0,selecteditionnum.length-1);
		var buynum=$('#freedeploynum').val();
		
		var url = "deploypublic.html";
		var action = "getpacktotalprice";
		
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'buynum': buynum,
				'selecteditionnum': selecteditionnum
			},
			success: function(data) {
				$('#totalprice ').html(data+".00元");
				$('.feiydxs span em').html("￥"+data+"<i>.00</i>");
			}
		})
	}
})

$('#deploypacknum .shang #remove').live('click',function(){
	var deploypacknum=$(this).parent().find('input').val();
	deploypacknum=parseInt(deploypacknum)-1;
	if(deploypacknum<1){
	   tips="数量不能小于1";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;	
	}
	
	$(this).parent().find('input').val(deploypacknum);
	var j=0;
	$('.iwantfree .shiyong').html('我要优惠');
	$('.iwantfree .couponcodebox').slideUp();
	$('.deplayedition li.checked').each(function(){
		j++;
	})
	if(j==0){
		$(this).addClass('checked');
		tips = "请至少选择一种资源包";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		var i=0,selecteditionnum;
		$('.deplayedition li').each(function(){
			i++;
			if($(this).hasClass('checked')){
				if(selecteditionnum){
				   selecteditionnum+=i+",";
				}else{
				   selecteditionnum=i+",";	
				}
			}
		})
		
		selecteditionnum=selecteditionnum.substring(0,selecteditionnum.length-1);
		var buynum=$('#freedeploynum').val();
		
		var url = "deploypublic.html";
		var action = "getpacktotalprice";
		
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'buynum': buynum,
				'selecteditionnum': selecteditionnum
			},
			success: function(data) {
				$('#totalprice ').html(data+".00元");
				$('.feiydxs span em').html("￥"+data+"<i>.00</i>");
			}
		})
	}
})

$(".shiyong").live('click', function() {
	
	var _this=$(this).parent();
	var nowdiscountid = $(this).find('.ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $(this).find('.ldiscountcode').html();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			if(selecteditionnum){
			   selecteditionnum+=i+",";
			}else{
			   selecteditionnum=i+",";	
			}
		}
	})
	
	selecteditionnum=selecteditionnum.substring(0,selecteditionnum.length-1);
	var buynum=$('#freedeploynum').val();
	
	var url = "deploypublic.html";
	var action = "packcouponlist";
	$.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'nowdiscountid': nowdiscountid,
			'nowdiscountcode': nowdiscountcode,
			'selecteditionnum': selecteditionnum,
			'buynum': buynum
		},
		success: function(data) {
			console.log(data);
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

$('.iwantfree .couponcodebox li .btnhover').live('click',function(){
	var couponinfo = $(this).parent().parent().find("li input:radio[name='ldiscountid']:checked").val(); 
	var nowdiscountid = $(this).find('.ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $(this).find('.ldiscountcode').html();
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			if(selecteditionnum){
			   selecteditionnum+=i+",";
			}else{
			   selecteditionnum=i+",";	
			}
		}
	})
	selecteditionnum=selecteditionnum.substring(0,selecteditionnum.length-1);
	var buynum=$('#freedeploynum').val();
	_this2 = $(this).parent().parent().parent();
	_this = $(this).parent().parent().parent().parent();
	var url = "deploypublic.html";
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
			var action = "checkrelpackcouponcode";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'nowdiscountid': nowdiscountid,
					'nowdiscountcode': nowdiscountcode,
					'selecteditionnum': selecteditionnum,
					'buynum': buynum,
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
						var action2 = "vpackcouponcodeprice";
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
			var action = "checkrelpackcouponid";
			$.ajax({
				type: "POST",
				url: url,
				data: {
					'action': action,
					'nowdiscountid': nowdiscountid,
					'nowdiscountcode': nowdiscountcode,
					'selecteditionnum': selecteditionnum,
					'buynum': buynum,
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
						var action2 = "vpackcouponidprice";
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



$('.zhisuud .feiydxs .btnhover').live('click',function(){
	var isreadxieyi=$('#readxieyi').is(':checked');
	if(!isreadxieyi){
		tips="请先阅读并勾选接受《网盾数据产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var i=0,selecteditionnum;
	$('.deplayedition li').each(function(){
		i++;
		if($(this).hasClass('checked')){
			if(selecteditionnum){
			   selecteditionnum+=i+",";
			}else{
			   selecteditionnum=i+",";	
			}
		}
	})
	selecteditionnum=selecteditionnum.substring(0,selecteditionnum.length-1);
	
	var buynum=$('#freedeploynum').val();
	var nowdiscountid = $('.shiyong .ldiscountid').html(); //获取当前的优惠券或者优惠码
	var nowdiscountcode = $('.shiyong .ldiscountcode').html();
	var action = "savedeploypackorder";
	var url = "deploypublic.html";
	$.ajax({
		type: "POST",
		url: url,
		data: {
		  'action': action,
		  'selecteditionnum': selecteditionnum,
		  'buynum': buynum,
		  'nowdiscountid': nowdiscountid,
		  'nowdiscountcode': nowdiscountcode
		},
		success: function(data) {
			window.location.href='payorder_'+data+'.html';
		}
	})
})
