$(".addrefund").live('click',function(){
	
	var action="changwxlogin";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		beforeSend: function() {
			$(".xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
		},
		success:function(data){
			$(".xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
			$(".xgrefundtype").fadeIn();
		}
	})    
	
	$('#vercode').val('');
	$('#getcheckcode2').html('<a href="javascript:;">获取验证码</a>');
	$('.xgrefundtype .tanbiaodan .modifymemberlayer').removeClass('userrefundheight');
	$('.xgrefundtype .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
	$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
	$('.xgrefundtype .tanbiaodan h2').html('账户安全验证');
	$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	$('.xgrefundtype .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	var action1="addtadedatalist";
	var uid=$(this).parent().parent().find('#sortcheck').attr('datauid');
	
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action1,
			'uid':uid
		},
		beforeSend: function() {
			
		},
		success:function(data){
			$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer2 ul').html(data);
		}
	})
	fsetsafecheckewm();
})

$('#fm_next').live('click',function(){
	var _this1=$(this).parent().parent().parent().parent();
	var _this2=$(this).parent().parent().parent();
	var _this3=$(this).parent().parent().parent().parent().parent();
	var _this4=$(this).parent().parent().parent().parent().parent().parent().parent().parent();
	var _this5=$(this).parent().parent().parent().parent().parent().parent();
	var checktypevalue=_this1.find("#checkmembertype input:radio[name='checkmembertype']:checked").val();
	
	if(checktypevalue==1){
		mobile=$('#nmobile').val();
		vercode=mobile+_this2.find("#vercode").val();
		
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
		   tips="验证码不正确或已失效";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
		_this3.removeClass('mobileheight');
	}else if(checktypevalue==2){
		_this3.removeClass('wechatheight');
	}
	_this3.addClass('userrefundheight');
	var tantitle=_this5.find('#tantitle').val();
	_this4.find('h2').html(tantitle);
	_this3.find('.memberlayer1').animate({left:"-100%"},100);
	_this3.find('.memberlayer2').animate({left:"0px"},100);
})

function fsetsafecheckewm() {
		var action="setsafecheckewm";
		var wechaturl1=$('.xgrefundtype .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc');
		var scene_id=$('.xgrefundtype #checkbywewechat .loginewm img').attr('data-sceneid');
		var url="public.html";
		
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action,
			  'scene_id':scene_id
			},
			success:function(data){
				data=$.trim(data);
				if(data=="1"){
					html='<em><img src="images/yishe.svg"></em>验证成功';
				    wechaturl1.html(html);
					setTimeout("fmovetonextlayer()", 2000);
				}else if(data=="2"){
				    html='<em><img src="images/weishe.svg"></em>扫码微信与账户绑定微信不一致';
					wechaturl1.html(html);
					var action1="changwxlogin";
					$.ajax({
						type:"POST",
						url:url,
						data:{
							'action':action1
						},
						beforeSend: function() {
						},
						success:function(data){
							$(".xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
							setTimeout('fsetsafecheckewm()', 2000);
						}
					})
				}else{
					setTimeout('fsetsafecheckewm()', 2000);
				}
			}
		})
	}	
	
function fmovetonextlayer(){
	var wechaturl=$('.xgrefundtype .tanbiaodan .modifymemberlayer');
	var wechaturl1=$('.xgrefundtype .tanbiaodan h2');
	var wechaturl2=$('.xgrefundtype .tanbiaodan #tantitle');
	wechaturl.removeClass('wechatheight');
	wechaturl.addClass('userrefundheight');
	wechaturl.find('.memberlayer1').animate({left:"-100%"},100);
	wechaturl.find('.memberlayer2').animate({left:"0px"},100);
	var tantitle=wechaturl2.val();
	wechaturl1.html(tantitle);
}

// $('.tanbiaodan .pd30 form #checkmembertype label input').click(function(){
// 	var checktypevalue=$(this).val();
// 	if(checktypevalue==1){
// 		$('.modifymemberlayer').removeClass('wechatheight');
// 		$('.modifymemberlayer').addClass('mobileheight');
// 		$(this).parent().parent().parent().parent().parent().parent().find('#checkbywewechat').hide();
// 		$(this).parent().parent().parent().parent().parent().find('#checkbymobile').fadeIn();
// 	}else if(checktypevalue==2){
// 		$('.modifymemberlayer').addClass('wechatheight');
// 		$('.modifymemberlayer').removeClass('mobileheight');
// 		$(this).parent().parent().parent().parent().parent().find('#checkbymobile').hide();
// 		$(this).parent().parent().parent().parent().parent().parent().find('#checkbywewechat').fadeIn();
// 	}
// })

// $('.modifymemberlayer .memberlayer2 li label input').live('click',function(){
// 	var refundtype=$(this).val();
// 	$('#refundbutton p a').removeClass('btnhui').removeClass('btnhover');
// 	if(refundtype==1){
// 		$('#refundbutton p a').addClass('btnhui');
// 	}else{
// 		$('#refundbutton p a').addClass('btnhover');
// 	}
// })

$('#userrefundbutton .btnhover').live('click',function(){
	var userrefundid = $('#userrefunduid').val();
	var refundPriceStr = $('#refundprice').val(); // 先获取字符串
	var refundintro = $('.refundtextareawenben').val(); // 记得之前讨论过要用 .val()
	
	// 1. 转换为浮点数
	var refundPriceNum = parseFloat(refundPriceStr);
	if (isNaN(refundPriceNum) || refundPriceNum <= 0) {
	    tips="退款金额必须是大于0的数字";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	
	var action='checkuserrefund';
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action,
			'userrefundid':userrefundid,
			'refundPriceNum':refundPriceNum,
			'refundintro':refundintro,
		},
		beforeSend: function() {
		},
		success:function(data){
			data=$.trim(data);
			if(data==1){
				tips="退款金额必须大于账户余额";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$(".xgrefundtype").fadeOut();
				tips="退款成功，流水已更新";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}
		}
	})
	
	
	
})