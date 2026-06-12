$(".zhuxiaobtn").live('click',function(){
	var action="changwxlogin";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		beforeSend: function() {
			$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
		},
		success:function(data){
			$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
			$(".zxboxs").fadeIn();
		}
	})    
	
	$('#vercode').val('');
	$('#getcheckcode3').html('<a href="javascript:;">获取验证码</a>');
	$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('refundheight');
	$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
	$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
	$('.zxboxs .tanbiaodan h2').html('账户安全验证');
	$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	var txt1=$(this).attr('datatitle');
	var txt=$(this).attr('datavalue');
	$("#tantitle").val(txt1);
	$(".zxboxs .zhenshuan .zhuxiaotxt h3").html(txt);
	$(".zxboxs").fadeIn();
	setsafecheckewm();
})

$('#m_next').live('click',function(){
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
	_this3.addClass('wechatheight');
	var tantitle=_this5.find('#tantitle').val();
	_this4.find('h2').html(tantitle);
	_this3.find('.memberlayer1').animate({left:"-100%"},100);
	_this3.find('.memberlayer2').animate({left:"0px"},100);
})

function setsafecheckewm() {
		var action="setsafecheckewm";
		var wechaturl1=$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc');
		var scene_id=$('.zxboxs #checkbywewechat .loginewm img').attr('data-sceneid');
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
					setTimeout("movetonextlayer()", 2000);
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
							$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
							setTimeout('setsafecheckewm()', 2000);
						}
					})
				}else{
					setTimeout('setsafecheckewm()', 2000);
				}
			}
		})
	}	
	
function movetonextlayer(){
	var wechaturl=$('.zxboxs .tanbiaodan .modifymemberlayer');
	var wechaturl1=$('.zxboxs .tanbiaodan h2');
	var wechaturl2=$('.zxboxs .tanbiaodan #tantitle');
	wechaturl.removeClass('wechatheight');
	wechaturl.addClass('wechatheight');
	wechaturl.find('.memberlayer1').animate({left:"-100%"},100);
	wechaturl.find('.memberlayer2').animate({left:"0px"},100);
	var tantitle=wechaturl2.val();
	wechaturl1.html(tantitle);
}

$('.tanbiaodan .pd30 form #checkmembertype label input').click(function(){
	var checktypevalue=$(this).val();
	if(checktypevalue==1){
		$('.modifymemberlayer').removeClass('wechatheight');
		$('.modifymemberlayer').addClass('mobileheight');
		$(this).parent().parent().parent().parent().parent().parent().find('#checkbywewechat').hide();
		$(this).parent().parent().parent().parent().parent().find('#checkbymobile').fadeIn();
	}else if(checktypevalue==2){
		$('.modifymemberlayer').addClass('wechatheight');
		$('.modifymemberlayer').removeClass('mobileheight');
		$(this).parent().parent().parent().parent().parent().find('#checkbymobile').hide();
		$(this).parent().parent().parent().parent().parent().parent().find('#checkbywewechat').fadeIn();
	}
})



$('#refundbutton .btnhover').live('click',function(){
	var checktypevalue=$(".xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name='checkmembertype']:checked").val();
	var mobile=$('#nmobile').val();
	var vercode=mobile+$(".showlayer #vercode").val();
	var refundtype=$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer2 input:radio[name="refundtype"]:checked').val();
	var refundid=$('#grefundid').val();
	//var refundid=$('#grefundid').val();
	var nowtrnum=$('#nowtrnum').val();
	var action="checkrefundissuccess";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'refundid':refundid,
		  'vercode':vercode,
		  'checkmembertype':checktypevalue,
		  'refundtype':refundtype
		},
		success:function(data){
			data=$.trim(data);
			//console.log(data);
			if(data==1){
				tips="对不起，您的退款金额大于账户余额，款项无法原路退回";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="请选择是否原路退还";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==3){
				tips="验证码不正确或已失效";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==4){
				tips="微信验证失败";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				data=data.split('*');
				var status=data[0];
				var sjtime=data[1];
				$('.xgrefundtype').fadeOut();
				$('.biaogetable table tr').eq(nowtrnum).find('#refundtypelayer').html('原路退回');
				$('.biaogetable table tr').eq(nowtrnum).find('#refundstatuslayer').html('处理中');
				$('.biaogetable table tr').eq(nowtrnum).find('#refundstatuslayer').html(status);
				if(status!="退款失败"){
					$('.biaogetable table tr').eq(nowtrnum).find('td:nth-child(13)').html('<span class="huise">原路退回</span>');
				}
				if(status=="退款成功"){
					$('.biaogetable table tr').eq(nowtrnum).find('td:nth-child(8)').html(sjtime);
				}
			}
		}
	})
	
	
	
})