$(".nameclick").click(function(){
	var action="changwxlogin";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		beforeSend: function() {
			$(".xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
		},
		success:function(data){
			$(".xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
			$(".xgname").fadeIn();
		}
	})    
	
	$('#zname').val('');
	$('#vercode').val('');
	$('#getcheckcode3').html('<a href="javascript:;">获取验证码</a>');
	$('.xgname .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	$('.xgname .tanbiaodan .modifymemberlayer').removeClass('modifypassheight');
	$('.xgname .tanbiaodan .modifymemberlayer').removeClass('wechatheight1');
	$('.xgname .tanbiaodan .modifymemberlayer').removeClass('sqheight');
	$('.checkbywewechat .loginewm .logintips').remove();
	$('.xgname').addClass('showlayer');
	$('.dlmm').removeClass('showlayer');
	$('.dlyx').removeClass('showlayer');
	$('.sjbd').removeClass('showlayer');
	$('.wxdl').removeClass('showlayer');
	$('.sqip').removeClass('showlayer');
	$('.xgname .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	$('.xgname .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"10%"},100);
	$('.xgname .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"110%"},100);
	$('.xgname .tanbiaodan h2').html('账户安全验证');
	$('.xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	$('.xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	$('.xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	$('.xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	$('.xgname .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	setsafecheckewm();
})

$(".mmclick").click(function(){
	    var action="changwxlogin";
	    var url="public.html";
	    $.ajax({
	    	type:"POST",
	    	url:url,
	    	data:{
	    		'action':action
	    	},
			beforeSend: function() {
				$(".dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
			},
	    	success:function(data){
	    		$(".dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
				$(".dlmm").fadeIn();
	    	}
	    })
		
		$('#oldpass').val('');
		$('#vercode').val('');
		$('#pass1').val('');
		$('#pass2').val('');
		$('#getcheckcode').html('<a href="javascript:;">获取验证码</a>');
		$('.dlmm .tanbiaodan .modifymemberlayer').removeClass('mobileheight');   
		$('.dlmm .tanbiaodan .modifymemberlayer').removeClass('modifypassheight');
		$('.dlmm .tanbiaodan .modifymemberlayer').removeClass('wechatheight1');
		$('.dlmm .tanbiaodan .modifymemberlayer').removeClass('sqheight');
		$('.xgname').removeClass('showlayer');
		$('.dlmm').addClass('showlayer');
		$('.dlyx').removeClass('showlayer');
		$('.sjbd').removeClass('showlayer');
		$('.wxdl').removeClass('showlayer');
		$('.sqip').removeClass('showlayer');
		$('.checkbywewechat .loginewm .logintips').remove();
		$('.dlmm .tanbiaodan .modifymemberlayer').addClass('wechatheight');
		$('.dlmm .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"10%"},100);
		$('.dlmm .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"110%"},100);
		$('.dlmm .tanbiaodan h2').html('账户安全验证');
		$('.dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
		$('.dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
		$('.dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
		$('.dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
		$('.dlmm .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
		setsafecheckewm();
})

$(".yxclick").click(function(){
	    var action="changwxlogin";
	    var url="public.html";
	    $.ajax({
	    	type:"POST",
	    	url:url,
	    	data:{
	    		'action':action
	    	},
	    	beforeSend: function() {
	    		$(".dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
	    	},
	    	success:function(data){
	    		$(".dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
				$(".dlyx").fadeIn();
	    	}
	    })
		
		$('#aemail').val('');
		$('#pass3').val('');
		$('#newaemail').val('');
		$('#vercode1').val('');
		$('#getcheckcode1').html('<a href="javascript:;">获取验证码</a>');
		$('.dlyx .tanbiaodan .modifymemberlayer').removeClass('mobileheight');   
		$('.dlyx .tanbiaodan .modifymemberlayer').removeClass('modifypassheight');
		$('.dlyx .tanbiaodan .modifymemberlayer').removeClass('wechatheight1');
		$('.dlyx .tanbiaodan .modifymemberlayer').removeClass('sqheight');
		$('.xgname').removeClass('showlayer');
		$('.dlmm').removeClass('showlayer');
		$('.dlyx').addClass('showlayer');
		$('.sjbd').removeClass('showlayer');
		$('.wxdl').removeClass('showlayer');
		$('.sqip').removeClass('showlayer');
		$('.checkbywewechat .loginewm .logintips').remove();
		$('.dlyx .tanbiaodan .modifymemberlayer').addClass('wechatheight');
		$('.dlyx .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"10%"},100);
		$('.dlyx .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"110%"},100);
		$('.dlyx .tanbiaodan h2').html('账户安全验证');
		$('.dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
		$('.dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
		$('.dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
		$('.dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
		$('.dlyx .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
		setsafecheckewm();
})
	$(".sjclick").click(function(){
		var action="changwxlogin";
		var url="public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action
			},
			beforeSend: function() {
				$(".sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
			},
			success:function(data){
				$(".sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
				$(".sjbd").fadeIn();
			}
		})
		
		$('#oldmobile').val('');
		$('#pass4').val('');
		$('#newmobile').val('');
		$('#vercode2').val('');
		$('#getcheckcode2').html('<a href="javascript:;">获取验证码</a>');
		$('.sjbd .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
		$('.sjbd .tanbiaodan .modifymemberlayer').removeClass('modifypassheight');
		$('.sjbd .tanbiaodan .modifymemberlayer').removeClass('wechatheight1');
		$('.sjbd .tanbiaodan .modifymemberlayer').removeClass('sqheight');
		$('.xgname').removeClass('showlayer');
		$('.dlmm').removeClass('showlayer');
		$('.dlyx').removeClass('showlayer');
		$('.sjbd').addClass('showlayer');
		$('.wxdl').removeClass('showlayer');
		$('.sqip').removeClass('showlayer');
		$('.checkbywewechat .loginewm .logintips').remove();
		$('.sjbd .tanbiaodan .modifymemberlayer').addClass('wechatheight');
		$('.sjbd .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"10%"},100);
		$('.sjbd .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"110%"},100);
		$('.sjbd .tanbiaodan h2').html('账户安全验证');
		$('.sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
		$('.sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
		$('.sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
		$('.sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
		$('.sjbd .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
		setsafecheckewm();
	})
$(".rzclick").click(function(){
	$(".smrz").fadeIn();
})
$(".wxclick").click(function(){
	var action="changwxlogin";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		beforeSend: function() {
			$(".wxdl .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
		},
		success:function(data){
			$(".wxdl .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
			$(".wxdl").fadeIn();
		}
	})
	
	$('.wxdl .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	$('.wxdl .tanbiaodan .modifymemberlayer').removeClass('modifypassheight');
	$('.wxdl .tanbiaodan .modifymemberlayer').removeClass('wechatheight1');
	$('.wxdl .tanbiaodan .modifymemberlayer').removeClass('sqheight');
	$('.xgname').removeClass('showlayer');
	$('.dlmm').removeClass('showlayer');
	$('.dlyx').removeClass('showlayer');
	$('.sjbd').removeClass('showlayer');
	$('.wxdl').addClass('showlayer');
	$('.sqip').removeClass('showlayer');
	$('.checkbywewechat .loginewm .logintips').remove();
	$('.wxdl .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	$('.wxdl .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"10%"},100);
	$('.wxdl .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"110%"},100);
	$('.wxdl .tanbiaodan h2').html('账户安全验证');
	$('.wxdl .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	$('.wxdl .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	$('.wxdl .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	$('.wxdl .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	$('.wxdl .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	$('.wxdl .modifymemberlayer .memberlayer2 #wxloginpic .wenzsc').html('请使用微信扫描二维码更换绑定');
	setsafecheckewm();
})

$(".iplick").click(function(){
	var action="changwxlogin";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		beforeSend: function() {
			$(".sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
		},
		success:function(data){
			$(".sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
			$(".sqip").fadeIn();
		}
	})
	$('.sqip .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	$('.sqip .tanbiaodan .modifymemberlayer').removeClass('modifypassheight');
	$('.sqip .tanbiaodan .modifymemberlayer').removeClass('wechatheight1');
	$('.sqip .tanbiaodan .modifymemberlayer').removeClass('sqheight');
	$('.xgname').removeClass('showlayer');
	$('.dlmm').removeClass('showlayer');
	$('.dlyx').removeClass('showlayer');
	$('.sjbd').removeClass('showlayer');
	$('.wxdl').removeClass('showlayer');
	$('.sqip').addClass('showlayer');
	$('.checkbywewechat .loginewm .logintips').remove();
	$('.sqip .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	$('.sqip .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"10%"},100);
	$('.sqip .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"110%"},100);
	$('.sqip .tanbiaodan h2').html('账户安全验证');
	$('.sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	$('.sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	$('.sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	$('.sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	$('.sqip .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	setsafecheckewm();
})
$('#m_next').live('click',function(){
	var _this1=$(this).parent().parent().parent().parent();
	var _this2=$(this).parent().parent().parent();
	var _this3=$(this).parent().parent().parent().parent().parent();
	var _this4=$(this).parent().parent().parent().parent().parent().parent().parent().parent();
	var _this5=$(this).parent().parent().parent().parent().parent().parent();
	var metype=$('.showlayer #metype').val();
	var checktypevalue=_this1.find("#checkmembertype input:radio[name='checkmembertype']:checked").val();
	
	if(checktypevalue==1){
		mobile=$('#nmobile').val();
		vercode=mobile+_this2.find("#vercode").val();
		
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
		   tips="验证码不正确或已失效!";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
		_this3.removeClass('mobileheight');
	}else if(checktypevalue==2){
		_this3.removeClass('wechatheight');
	}
	if(metype==2){
		_this3.addClass('modifypassheight');
	}
	
	if(metype==3){
		_this3.addClass('wechatheight1');
		var action="changwxlogin";
		var url="public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action
			},
			beforeSend: function() {
				$(".wxdl #wxloginpic .loginewm").html('<img src="images/erweima.jpg">');
			},
			success:function(data){
				$(".wxdl #wxloginpic .loginewm").html(data);
				
			}
		})
	}
	if(metype==4){
		_this3.addClass('sqheight');
	}
	var tantitle=_this5.find('#tantitle').val();
	_this4.find('h2').html(tantitle);
	_this3.find('.memberlayer1').animate({left:"-110%"},100);
	_this3.find('.memberlayer2').animate({left:"0px"},100);
})

	 //每2秒发送一次请求
function setsafecheckewm(metype) {
	    
		var action="setsafecheckewm";
		
		var wechaturl1=$('.showlayer .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc');
		var scene_id=$('.showlayer #checkbywewechat .loginewm img').attr('data-sceneid');
		
		var url="public.html";
		var metype=$('.showlayer #metype').val();
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
							$(".showlayer .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
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
	var wechaturl=$('.showlayer .tanbiaodan .modifymemberlayer');
	var wechaturl1=$('.showlayer .tanbiaodan h2');
	var wechaturl2=$('.showlayer .tanbiaodan #tantitle');
	 wechaturl.find('.memberlayer1').animate({left:"-110%"},100);
	 wechaturl.find('.memberlayer2').animate({left:"0px"},100);
	 wechaturl.removeClass('wechatheight');
	 var metype=$('.showlayer #metype').val();
	 
	 if(metype==2){
	 	wechaturl.addClass('modifypassheight');
	 }
	 
	 if(metype==3){
	 	wechaturl.addClass('wechatheight1');
		var action="changwxlogin";
		var url="public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action
			},
			beforeSend: function() {
				$(".wxdl #wxloginpic .loginewm").html('<img src="images/erweima.jpg">');
			},
			success:function(data){
				$(".wxdl #wxloginpic .loginewm").html(data);
			}
		})	
	 }
	 if(metype==4){
	 	wechaturl.addClass('sqheight');
	 }
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

check_change()
	 //每2秒发送一次请求
	function check_change() {
		var action="changewechatlogin";
		var scene_id=$('#wxloginpic .loginewm img').attr('data-sceneid');
		console.log(scene_id);
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
                console.log(data);
				if(data=="1"){
					html='更换成功';
				    $('.memberlayer2 .wenzsc').html(html);
					setTimeout("location.reload()", 2000);
				}else if(data=="2"){
					html='系统中该微信已存在';
					$('.memberlayer2 .wenzsc').html(html);
					setTimeout("location.reload()", 2000);
				}else if(data=="3"){
					html='操作异常';
					$('.memberlayer2 .wenzsc').html(html);
					
				}else{
					setTimeout("check_change()", 2000);
				}
			}
		})
	}
	
$('.changetx li').click(function(){
	var imgurl=$(this).find('img').attr('src');
	var action="changeuserpic";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action,
			'imgurl':imgurl
		},
		success:function(data){
			if(data==1){
				tips="您的操作有误，请重新选择";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$('.yonghuimgs img').attr('src',imgurl);
			    $(".ghtx").fadeOut();	
			}
			
		}
	})
	
})