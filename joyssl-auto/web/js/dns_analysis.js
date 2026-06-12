
$(".newtanright label").click(function(){
	var yzs = $(this).index()
	if(yzs==0){
		$(".yzmbox").fadeIn();
		$(".dxzmbox").hide();
	}
	if(yzs==1){
		$(".dxzmbox").fadeIn();
		$(".yzmbox").hide();
	}
})



	
$(".pl_del_sure").click(function(){
    $(".safeboxs").fadeOut()
	$(".deletebox").fadeIn()
})	
	
/**设置分组**/	
	
// $(".pl_set_group").click(function(){
// 	$(".setgroupbox").fadeIn()
// })
	

	
/**查看详细信息**/	

$(".seeall").live('click',function(){
	var n1=$(this).attr('datastatus');
	if(n1==1){
        $(this).parents(".restoptop").next(".peizdown").slideUp();
        $(this).html("展开详情");
        $(this).attr('datastatus',"0");
    }else{
		$(this).parents(".restoptop").next(".peizdown").slideDown();
		$(this).html("关闭详情");
		$(this).attr('datastatus',"1");
    }
})
	 
$('.sy-alert .syalertclose').live('click',function(){
	syalert.syhide('alert1');
})
/*新增域名弹窗*/
	 
$('.dns_config_btn').live('click',function(){
	$('#buycertbglayer').fadeIn();
	$("#content_2").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	}); 		
	$('.buycertlayer').addClass('show');
})
$('.closebuycertlayer').live('click', function() {
	$('#buycertbglayer').fadeOut();
	$("#content_2").mCustomScrollbar("destroy");
	$('.buycertlayer').removeClass('show');
})	 
$('.selectNub .placeholder').live('click',function(e) {
	var parent = $(this).closest('.selectNub');
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.selectNub.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
		$('.secondlinenav').hide();
		$('.thirdlinenav').hide();
	}
	if(parent.attr('id')=="host_analysis_line"){
		if(parent.find('.placeholder i').attr('datacode')){
		   var analysis_line_code=parent.find('.placeholder i').attr('datacode');
		   $('.firstlinenav li a').removeClass('cur'); 
		   $('.firstlinenav li').each(function() {
		       // 获取当前 a 标签的 datacurvalue 属性值
		       var dataCurValue = $(this).find('a').attr('datacurvalue');
		   
		       // 判断 dataCurValue 是否在 analysis_line_code 中
		       if (analysis_line_code.indexOf(dataCurValue) !== -1) {
		           // 添加 class="cur" 到当前 a 标签
		           $(this).find('a').addClass('cur');
		       }
		   });
		}
	}
	e.stopPropagation();		
});	 	

$('.selectNub ul>li').live('click', function() {
	var parent = $(this).closest('.selectNub');
	$(this).siblings().find('a').removeClass('cur');
	$(this).find('a').addClass('cur');
	if(parent.attr('id')=="host_analysis_line"){
		if (currentRequest && currentRequest.readyState !== 4) {
		    currentRequest.abort();
		  }
		if($(this).find('a i').html()!="自定义线路"){
		   var analysis_line_code="";
		   if($('.firstlinenav li .cur').attr('datacurvalue')){
			   analysis_line_code=analysis_line_code + $('.firstlinenav li .cur').attr('datacurvalue');
		   }
		   if($('.secondlinenav li .cur').attr('datacurvalue')){
		   	  analysis_line_code=analysis_line_code + "," + $('.secondlinenav li .cur').attr('datacurvalue');
		   }
		   if($('.thirdlinenav li .cur').attr('datacurvalue')){
		   	  analysis_line_code=analysis_line_code + "," + $('.thirdlinenav li .cur').attr('datacurvalue');
		   }
		   parent.find('.placeholder i').attr('datacode',analysis_line_code);
		   parent.removeClass('is-open').find('.placeholder i').html($(this).find('a i').html());
		   
		}else{
		   tips="请选择自定义的线路";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
		
		
		
	}else{
		parent.removeClass('is-open').find('.placeholder').html($(this).find('a').html());
	}
	$('.secondlinenav').hide();
	$('.thirdlinenav').hide();
});
$('body').live('click', function() {
	// if($('.selectNub ul>li .cur i').html()!="自定义线路"){
	   
	// }
	$('.selectNub.is-open').removeClass('is-open');
	$('.secondlinenav').hide();
	$('.thirdlinenav').hide();
});		
//添加解析
$('.realname_pass').live('click',function(){
	$(".smrzbox").hide()
})		
		
	
//修改解析记录
$('.modify_record_btn').live('click',function(){
	$('.add_resolu_record .buycerttitle span').html('修改解析记录');
	$('#buycertbglayer').fadeIn();
	$("#content_2").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
	$('.add_resolu_record').addClass('show');
	// var dnsid=$('#dnsid').val();
	// var sisid=$(this).parent().parent().parent().find('#sortcheck').val();
	
	// var action="modify_analysis";
	// var url="dns_public.html";
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'dnsid':dnsid,
	// 	  'sisid':sisid
	// 	},		    
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		//console.log(data);
	// 		if(data==1){
	// 			$('.smrzbox').fadeIn();
	// 		}else if(data==2){
	// 			tips="您的域名状态异常，请验证通过后再修改解析";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==3){
	// 			tips="对不起您没有权限操作该域名";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else{
	// 			$('#buycertbglayer').fadeIn();
	// 			$('.add_resolu_record').html(data);
	// 			$("#content_2").mCustomScrollbar({
	// 				autoHideScrollbar: true,
	// 				theme: "light-thin"
	// 			});
	// 			$('.add_resolu_record').addClass('show');
	// 		}
	// 	}			
	// })
})
		
$('.pause_record_btn').live('click',function(){    //暂停解析
    var dnsid=$('#dnsid').val();
	var sisid=$(this).parent().parent().parent().find('#sortcheck').val();
	var ispause= $(this).attr('datavalue');
	var action="pause_analysis";
	var url="dns_public.html";
	if(ispause==1){
		$('#tantitle').val('暂停解析');
		$('.cancelcertlayer').html('<input type="hidden" name="recordid" id="recordid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定暂停解析接入吗？</h3><P>暂停解析后，DNS将无法解析指向。</P><p>可能会导致项目无法正常运行，请您慎重。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmpausednsdomain" datavalue="1">确定暂停</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	}else{
		$('#tantitle').val('开启解析');
		$('.cancelcertlayer').html('<input type="hidden" name="recordid" id="recordid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定开启解析接入吗？</h3><P>开启解析后，DNS将正确解析指向。</P><p>开启后解析可能会有延迟，请耐心等待。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmpausednsdomain" datavalue="0">确定开启</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	}
	$(".zxboxs").fadeIn();
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'dnsid':dnsid
	// 	},		    
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		if(data==1){
	// 			tips="您的域名状态异常，请验证通过后再暂停解析";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==2){
	// 			tips="对不起您没有权限操作该域名";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else{
	// 			var action="changwxlogin";
	// 			var url="public.html";
	// 			$.ajax({
	// 				type:"POST",
	// 				url:url,
	// 				data:{
	// 					'action':action
	// 				},
	// 				beforeSend: function() {
	// 					$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
	// 				},
	// 				success:function(data){
	// 					$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
	// 					$(".zxboxs").fadeIn();
	// 				}
	// 			})
	// 			$('#vercode').val('');
	// 			$('#getcheckcode3').html('<a href="javascript:;">获取验证码</a>');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('refundheight');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
	// 			$('.zxboxs .tanbiaodan h2').html('安全验证');
				
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	// 			$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	// 			$(".zxboxs").fadeIn();	
	// 			setsafecheckewm();
	// 		}
	// 	}			
	// })
})


$('.pl_pause_btn').live('click',function(){    //暂停解析
    var dnsid=$('#dnsid').val();
	var sisid="";
	$('table tr').each(function(){
		if($(this).find('#sortcheck').attr("checked")){
			sisid+=$(this).find('#sortcheck').val()+",";
		}
	})
	sisid=sisid.slice(0,-1).trim();
	var ispause= $(this).attr('datavalue');
	if(sisid===""){
		if(ispause==1){
		   tips="对不起您没有选择要暂停的解析";
		}else if(ispause==0){
			tips="对不起您没有选择要开启的解析";
		}
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var action="pause_analysis";
	var url="dns_public.html";
	if(ispause==1){
		$('#tantitle').val('暂停解析');
		$('.cancelcertlayer').html('<input type="hidden" name="recordid" id="recordid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定暂停解析接入吗？</h3><P>暂停解析后，DNS将无法解析指向。</P><p>可能会导致项目无法正常运行，请您慎重。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmpausednsdomain" datavalue="1">确定暂停</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	}else{
		$('#tantitle').val('开启解析');
		$('.cancelcertlayer').html('<input type="hidden" name="recordid" id="recordid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定开启解析接入吗？</h3><P>开启解析后，DNS将正确解析指向。</P><p>开启后解析可能会有延迟，请耐心等待。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmpausednsdomain" datavalue="0">确定开启</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	}
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			if(data==1){
				tips="您的域名状态异常，请验证通过后再暂停解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
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
				$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
				$('.zxboxs .tanbiaodan h2').html('安全验证');
				
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
				$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
				$(".zxboxs").fadeIn();
				setsafecheckewm();
			}
		}			
	})
})

$('#confirmpausednsdomain').live('click',function(){  //确认暂停
     
	var sisid=$('#recordid').val();
	var ispause= $(this).attr('datavalue');
	var action="confirmpausednsdomain";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'sisid':sisid,
		  'ispause':ispause
		},		    
		beforeSend:function(){
			if(ispause==1){
			$('.memberlayer2 .btn').addClass('btnhui').html('暂停中');
			}else{
			$('.memberlayer2 .btn').addClass('btnhui').html('开启中');	
			}
			$('.memberlayer2 .btn').attr('id','');
		},			
		success:function(data){
			//console.log(data);
			if(data==1){
				if(ispause==1){
				  tips="部分解析当前状态无法暂停或已处在暂停状态";
				}else{
				  tips="部分解析当前状态无法开启或已处在开启状态";	
				}
				
			}else if(data==2){
				if(ispause==1){
				  tips="部分解析当前状态无法暂停或已处在暂停状态";
				}else{
				  tips="部分解析当前状态无法开启或已处在开启状态";	
				}
			}else{
				if(ispause==1){
				tips="解析暂停成功";
				}else{
				tips="解析开启成功";	
				}
				
			}
			
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			var pages=$('.pagenav li.cur a').html();
			var totalpages=$('.pagescroll #selected #totalpages').val();
			var to_pages=$('.pagescroll #selected #to_pages').val();
			loadlist(pages,totalpages,to_pages);
			
			$(".zxboxs").fadeOut();
			return false;
		}			
	})
})


/**批量删除**/	
	
$(".pl_del_btn").live('click',function(){
	var dnsid=$('#dnsid').val();
	var sisid=$(this).parent().parent().parent().find('#sortcheck').val();
	var action="pause_analysis";
	var url="dns_public.html";
	$('#tantitle').val('删除解析');
	$('.cancelcertlayer').html('<input type="hidden" name="recordid" id="recordid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定删除解析接入吗？</h3><P>删除解析后，DNS将无法解析指向。</P><p>可能会导致项目无法正常运行，请您慎重。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmdeldnsdomain">确定删除</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	$(".zxboxs1").fadeIn();
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'dnsid':dnsid
	// 	},		    
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		if(data==1){
	// 			tips="您的域名状态异常，请验证通过后再暂停解析";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==2){
	// 			tips="对不起您没有权限操作该域名";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else{
	// 			var action="changwxlogin";
	// 			var url="public.html";
	// 			$.ajax({
	// 				type:"POST",
	// 				url:url,
	// 				data:{
	// 					'action':action
	// 				},
	// 				beforeSend: function() {
	// 					$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
	// 				},
	// 				success:function(data){
	// 					$(".zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
	// 					$(".zxboxs").fadeIn();
	// 				}
	// 			})
	// 			$('#vercode').val('');
	// 			$('#getcheckcode3').html('<a href="javascript:;">获取验证码</a>');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('refundheight');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
	// 			$('.zxboxs .tanbiaodan h2').html('安全验证');
				
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	// 			$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	// 			$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	// 			$(".zxboxs").fadeIn();	
	// 			setsafecheckewm();
	// 		}
	// 	}			
	// })
})


$(".pl_alldel_btn").live('click',function(){
	var dnsid=$('#dnsid').val();
	var sisid="";
	$('table tr').each(function(){
		if($(this).find('#sortcheck').attr("checked")){
			sisid+=$(this).find('#sortcheck').val()+",";
		}
	})
	sisid=sisid.slice(0,-1).trim();
	if(sisid===""){
		tips="对不起您没有选择要删除的解析";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var action="pause_analysis";
	var url="dns_public.html";
	$('#tantitle').val('删除解析');
	$('.cancelcertlayer').html('<input type="hidden" name="recordid" id="recordid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定删除解析接入吗？</h3><P>删除解析后，DNS将无法解析指向。</P><p>可能会导致项目无法正常运行，请您慎重。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmdeldnsdomain">确定删除</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			if(data==1){
				tips="您的域名状态异常，请验证通过后再暂停解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
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
				$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
				$('.zxboxs .tanbiaodan h2').html('安全验证');
				
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
				$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
				$(".zxboxs").fadeIn();	
				setsafecheckewm();
			}
		}			
	})
})

$('#confirmdeldnsdomain').live('click',function(){  //确认暂停
	var sisid=$('#recordid').val();
	var action="confirmdeldnsdomain";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'sisid':sisid
		},		    
		beforeSend:function(){
			$('.memberlayer2 .btn').addClass('btnhui').html('删除中');
			$('.memberlayer2 .btn').attr('id','');
		},			
		success:function(data){
			//console.log(data);
			if(data>0){
				tips="解析删除失败,请联系在线客服";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$(".zxboxs").fadeOut();
				return false;
			}else{
				tips="解析删除成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				var pages=$('.pagenav li.cur a').html();
				var totalpages=$('.pagescroll #selected #totalpages').val();
				var to_pages=$('.pagescroll #selected #to_pages').val();
				loadlist(pages,totalpages,to_pages);
				$(".zxboxs").fadeOut();
				return false;
			}
		}			
	})
})
		
$('.closebuycertlayer').live('click', function() {
	$('#buycertbglayer').fadeOut();
	$("#content_2").mCustomScrollbar("destroy");
	$('.buycertlayer').removeClass('show');
})
		
function loaddnsstatus(){
	var dnsid=$('#dnsid').val();
	var action="getdnsrelstatus";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		async: true,
		data:{
			'action':action,
			'dnsid':dnsid
		},
		beforeSend:function(){
			//$('.restoptip').html('<img src="images/load.gif" width="25px" height="25px">');
		},
		success:function(data){
			$('.restoptip').html(data);
			// $('.shaixuanboxs .zuo').html('<a href="javascript:;" class="btnhover mr10 add_resolution_btn">添加解析</a><a href="javascript:;" class="btn_chengse beginner_guide_btn">新手引导</a>');
			// $('.seeall').html('收起');
			// $('.restopbot').slideDown();
		}
	})
}

$('#refreshdnscheck').live('click',function(){
	$(this).html('验证中…');
	$(this).removeClass('unline');
	loaddnsstatus();
	
})
		

		
$(".add_resolution_btn").live('click',function(){    //添加解析，先判断是否实名，如果实名就让他添加，没有就让他去实名
	$('.add_resolu_record .buycerttitle span').html('添加解析记录');
	$('#buycertbglayer').fadeIn();
	$('.add_resolu_record').addClass('show');	
	$("#content_2").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
}) 
$('.guanbi').live('click',function(){
	$('.tanchubj').fadeOut();
})	
	
// 全局变量缓存提示框（避免冲突）
var currentTip = null;

// ==================== 【主机记录】提示 ====================
$(document).on('focus', '.buycertbox li .positionsite input', function() {
    var $li = $(this).closest('li');
    currentTip = $li.find('.tooltip-container .tooltip-content');
    var domain = $li.find('.positionsite p').html();
    var host_recordtype = $('#host_recordtype span i').html();
	
    $.ajax({
        type: "POST",
        url: "dns_public.html",
        data: {
            action: "host_record_tips_html",
			host_recordtype: host_recordtype,
            domain: domain
        },
        success: function(data) {
            currentTip.html(data).stop(true, true).fadeIn(150);
        }
    });
});

// ==================== 【记录值】提示 ====================
$(document).on('focus', '.buycertbox li .recordsite input', function() {
    var $li = $(this).closest('li');
    currentTip = $li.find('.tooltip-container .ntooltip-content');
    var host_recordtype = $('#host_recordtype span i').html();
    $.ajax({
        type: "POST",
        url: "dns_public.html",
        data: {
            action: "host_record_value_tips_html",
            host_recordtype: host_recordtype
        },
        success: function(data) {
            currentTip.html(data).stop(true, true).fadeIn(150);
        }
    });
});

// ==================== 核心：移到弹出层不消失 ====================
$(document).on('mouseenter', '.tooltip-content, .ntooltip-content', function() {
    $(this).stop(true, true).show(); // 保持显示
});

// ==================== 离开 输入框 + 提示框 才隐藏 ====================
$(document).on('mouseleave blur', '.buycertbox li', function() {
    $(this).find('.tooltip-content, .ntooltip-content').stop(true, true).fadeOut(150);
});
		
changeresolutionrightwth();
$('#host_recordtype ul li').live('click',function(){         //当主机类型是MX时，展示MX选项
	var host_recordtypevalue=$(this).find('i').html();
	if(host_recordtypevalue=="MX"){
		$('.host_mxcontent').html('<span class="zuo">优先级</b></span><input type="text" placeholder="请填写1-55纯数字" class="inputwenben w100" name="host_preference" id="host_preference">');
	}else{
		$('.host_mxcontent').html('');
	}
	if(host_recordtypevalue=="A" || host_recordtypevalue=="AAAA" || host_recordtypevalue=="CNAME"){
		$('.host_weightcontent').html('<span class="zuo">解析权重 <b class="wenhao topup"><img src="images/wenhao.svg"><em><i>相同解析权重越高返回比率越大</i></em></b></span><div class="selectNub" id="host_record_weight"><span class="placeholder"><i>默认</i>-1</span><ul><li><a href="javascript:;"><i>默认</i>-1</a></li><li><a href="javascript:;"><i>权重-2</i></a></li><li><a href="javascript:;"><i>权重-3</i></a></li><li><a href="javascript:;"><i>权重-4</i></a></li><li><a href="javascript:;"><i>权重-5</i></a></li><li><a href="javascript:;"><i>权重-6</i></a></li><li><a href="javascript:;"><i>权重-7</i></a></li><li><a href="javascript:;"><i>权重-8</i></a></li><li><a href="javascript:;"><i>权重-9</i></a></li><li><a href="javascript:;"><i>权重-10</i></a></li></ul></div>');
	}else{
		$('.host_weightcontent').html('');
	}
	
	if(host_recordtypevalue=="SRV"){
		$('.recordsite').html('<div class="cxrecordvaluebox"><input type="text" value="" placeholder="优先级" class="cxrecordnum"><div class="downico"></div><div class="upico"></div></div><div class="cxrecordvaluebox"><input type="text" value="" placeholder="权重" class="cxrecordnum"><div class="downico"></div><div class="upico"></div></div><div class="cxrecordvaluebox"><input type="text" value="" placeholder="端口" class="cxrecordnum"><div class="downico"></div><div class="upico"></div></div><input type="text" placeholder="请输入记录值" class="inputwenben cxrecordvalue" name="host_record_value" id="host_record_value" autocomplete="off">');
	}else if(host_recordtypevalue=="CAA"){
		$('.recordsite').html('<div class="selectNub cxcaabox" id="host_recordtype"><span class="placeholder"><i>0</i></span><ul><li><a href="javascript:;" title="0" class=""><i>0</i></a></li><li><a href="javascript:;" title="1" class=""><i>1</i></a></li></ul></div><div class="selectNub cxcaabox" id="host_recordtype"><span class="placeholder"><i>issue</i></span><ul><li><a href="javascript:;" title="issue" class=""><i>issue</i></a></li><li><a href="javascript:;" title="issuewild" class=""><i>issuewild</i></a></li><li><a href="javascript:;" title="iodef" class=""><i>iodef</i></a></li></ul></div><input type="text" placeholder="请输入记录值" class="inputwenben cxcaavalue" name="host_record_value" id="host_record_value" autocomplete="off">');
	}else{
		$('.recordsite').html('<input type="text" placeholder="请输入记录值" class="inputwenben w100" name="host_record_value" id="host_record_value" autocomplete="off">');
	}
})


$('#host_record').live('blur',function(){     //验证主机记录
	var host_record_value=$(this).val();
	if(host_record_value){
		var action="check_host_record";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action,
			  'host_record_value':host_record_value
			},		    
			beforeSend:function(){
				
			},			
			success:function(data){
				if(!data){
					tips="主机记录有误，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}
			}			
		})
	}
})

$('#host_record_value').live('blur',function(){                 //验证记录值 
	var host_record_value=$(this).val();
	if(host_record_value){
		var host_record_type=$('#host_recordtype .placeholder i').html();
		var action="check_host_record_value";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action,
			  'host_record_value':host_record_value,
			  'host_record_type':host_record_type
			},		    
			beforeSend:function(){
				
			},			
			success:function(data){
				if(!data){
					tips="记录值有误，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}
			}			
		})
	}
})

$('#host_preference').live('blur',function(){        //验证MX优先级
	var host_preference_value=$(this).val().trim();
	var regex = /^(?:[1-9]|[1-4][0-9]|5[0-5])$/;
	if (!regex.test(host_preference_value)) {
		tips="MX优先级有误，必须是1-55的纯数字，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	// var action="check_host_preference";
	// var url="dns_public.html";
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'host_preference_value':host_preference_value
	// 	},		    
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		if(!data){
	// 			tips="MX优先级有误，必须是1-55的纯数字，请检查";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}
	// 	}			
	// })
})

$('.confirmaddanalysis').live('click',function(){                     //确认添加解析
	var dnsid=$('#dnsid').val();
	var recordtype=$('#host_recordtype span i').html();
	var hostrecord=$('#host_record').val();
	var host_analysis_line=$('#host_analysis_line span i').html();
	var analysis_line_code=$('#host_analysis_line span i').attr('datacode');
	var host_record_value=$('#host_record_value').val();
	var host_record_weight=$('#host_record_weight span i').html();
	var host_record_tll=$('.ttlbox span .auto-width-input').val();
	
	var host_preference=$('#host_preference').val();
	var content=$('#analysiscontent').val();
	var action="addanalysisinfo";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'recordtype':recordtype,
		  'hostrecord':hostrecord,
		  'host_analysis_line':host_analysis_line,
		  'analysis_line_code':analysis_line_code,
		  'host_record_value':host_record_value,
		  'host_record_weight':host_record_weight,
		  'host_record_tll':host_record_tll,
		  'host_preference':host_preference,
		  'content':content
		},		    
		beforeSend:function(){
			$('.buycertbottom .feiydxs1 .btnhover').addClass('btnhui').html('提交中').removeClass('confirmaddanalysis');
		},			
		success:function(data){
			
			
			if(data==1){
				tips="您的域名尚未找回，请先验证通过后再添加解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==3){
				tips="记录类型有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==4){
				tips="主机记录有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==5){
				tips="记录值有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==6){
				tips="免费版，权重只能为1";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==7){
				tips="权重选择有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==8){
				tips="TTL选择有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==10){
				tips="MX优先级有误，必须是1-55的纯数字，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==11){
				tips="免费版URL转发限制2条，请升级";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==12){
				tips="普惠版URL转发限制10条，请升级";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==13){
				tips="URL转发限制50条";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==9){
				tips="解析添加成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('#buycertbglayer').fadeOut();
				$('.add_resolu_record').removeClass('show');
				var pages=1;
				if($('.pagescroll #selected #totalpages').val()){
				var totalpages=$('.pagescroll #selected #totalpages').val();
				var to_pages=$('.pagescroll #selected #to_pages').val();
				}else{
				var totalpages=20;
				var to_pages=1;	
				}
				loadlist(pages,totalpages,to_pages);
				return false;
			}else{
				$('#alert1 .sy-content').html(data);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}
		}			
	})
	
})


$('.confirmmodifyanalysis').live('click',function(){    //确认修改解析
	var dnsid=$('#dnsid').val();
	var sisid=$('#sisid').val();
	var recordtype=$('#host_recordtype span i').html();
	var hostrecord=$('#host_record').val();
	var host_analysis_line=$('#host_analysis_line span i').html();
	var analysis_line_code=$('#host_analysis_line span i').attr('datacode');
	var host_record_value=$('#host_record_value').val();
	var host_record_weight=$('#host_record_weight span i').html();
	var host_record_tll=$('.ttlbox span .auto-width-input').val();
	var host_preference=$('#host_preference').val();
	var content=$('#analysiscontent').val();
	var action="modifyanalysisinfo";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'sisid':sisid,
		  'recordtype':recordtype,
		  'hostrecord':hostrecord,
		  'host_analysis_line':host_analysis_line,
		  'analysis_line_code':analysis_line_code,
		  'host_record_value':host_record_value,
		  'host_record_weight':host_record_weight,
		  'host_record_tll':host_record_tll,
		  'host_preference':host_preference,
		  'content':content
		},		    
		beforeSend:function(){
			$('.buycertbottom .feiydxs1 .btnhover').addClass('btnhui').html('提交中').removeClass('confirmmodifyanalysis');
		},			
		success:function(data){
			if(data==1){
				tips="您的域名尚未找回，请先验证通过后再添加解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==3){
				tips="记录类型有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==4){
				tips="主机记录有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==5){
				tips="记录值有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==6){
				tips="免费版，权重只能为1";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==7){
				tips="权重选择有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==8){
				tips="TTL选择有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==10){
				tips="MX优先级数字有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==11){
				tips="免费版URL转发限制2条，请升级";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==12){
				tips="普惠版URL转发限制10条，请升级";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==13){
				tips="URL转发限制50条";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmaddanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}else if(data==9){
				tips="解析修改成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('#buycertbglayer').fadeOut();
				$('.add_resolu_record').removeClass('show');
				//setTimeout("window.location.reload()", 5000);
				// var pages=$('.pagenav li.cur a').html();
				// var totalpages=$('.pagescroll #selected #totalpages').val();
				// var to_pages=$('.pagescroll #selected #to_pages').val();
				// loadlist(pages,totalpages,to_pages);
				postsearch();
				return false;
			}else{
				//tips="解析修改失败，请重新提交";
				$('#alert1 .sy-content').html(data);
				syalert.syopen('alert1');
				$('.buycertbottom .feiydxs1 .btnhover').addClass('confirmmodifyanalysis').html('确认提交').removeClass('btnhui');
				return false;
			}
		}			
	})
	
})



$('#analysiscontent,#analysis_content,#analysislinecontent,#bzdesigninfo').live('keyup',function(){
	check(this);
})

$('#checkall').live('click',function(){
	if($(this).attr("checked")){
		 $(".checks").each(function(){
		      $(this).attr("checked", true);
		 });
	}else{
		$(".checks").each(function(){
		     $(this).attr("checked", false);
		});
	} 
})

$('#sortcheck').live('click',function(){
	var checkstate=$(this).is(':checked');
	if(checkstate){
	   $(this).attr("checked","true"); 
	}else{
	  $(this).removeAttr("checked");
	  $('#allcheck').removeAttr("checked");
	}
	
})

$('.pagescroll span').live('click',function(){
	$(this).parent().find('.p_nav').slideToggle();
	$(this).parent().find('.p_nav_dns').slideToggle();
	$(this).parent().toggleClass('active');
})

$(document).bind("click",function(e){
	var e = e || window.event;   //事件对象，兼容IE
	var target = e.target || e.srcElement;  //源对象，兼容火狐和IE
	while(target){
	   if (target.id && target.id == "selected"){  return ; }
	   target = target.parentNode;
	}	  
	$('.wenbenk .select_ul').slideUp();
	$('.pagescroll .p_nav').slideUp(); 
	$('.pagescroll .p_nav_dns').slideUp();	 
})

var time = 180;
$('#getcheckcode3 a').live('click',function(){
	var action="sendcode";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		success:function(data){}
	})
	settime3($(this).parent()); 		
})
function settime3(obj){
	if(time==0){
		$(obj).html('<a href="javascript:;">重新获取</a>');
		$(obj).removeClass('yanzhengbtnactive');
		time = 180;
		return;
	}else{
		if($(".zxboxs").css("display")=="block"){
			var timer3=setTimeout(function() {
				settime3(obj);
			},1000);
			$(obj).addClass('yanzhengbtnactive');
			$(obj).html('<div class="code">'+time+'秒后可重新获取</div>');
			time--;
		}else{
			clearTimeout(timer3);
			time = 180;
		}
	}		
}

$('.beizhutxttag em').live('click',function(){
   $('.dlmm').fadeIn();
   if($(this).parent().parent().parent().find('#sortcheck').val()){
     var id=$(this).parent().parent().parent().find('#sortcheck').val();
   }else{
	 var id=$(this).parent().find('span').attr('id'); 
   }
   var html=$(this).parent().find('span').html();
   if(html!="备注标签"){
    $('#bzdesigninfo').val(html);
   }else{
	$('#bzdesigninfo').val('');   
   }
   $('#bzdesignid').val(id);
})


//新手引导
$('.beginner_guide_btn').live('click',function(){
	$('#buycertbglayer').fadeIn();
	$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
	// $('select.recordtypeselect').select();
	$("#content_3").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
	$('.beginner_guidebox').addClass('show');
	// var dnsid=$('#dnsid').val();
	// var action="guidecontent";
	// var url="dns_public.html";
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'dnsid':dnsid
	// 	},		    
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		if(data==1){
	// 			$('.smrzbox').fadeIn();
	// 		}else if(data==2){
	// 			tips="您的域名尚未找回，请先验证通过后再添加解析";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==3){
	// 			tips="对不起您没有权限操作该域名";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else{
	// 			$('.buynewguidebox').html(data);
	// 			$('#buycertbglayer').fadeIn();
	// 			$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
	// 			$('select.recordtypeselect').select();
	// 			$("#content_3").mCustomScrollbar({
	// 				autoHideScrollbar: true,
	// 				theme: "light-thin"
	// 			});
	// 			$('.beginner_guidebox').addClass('show');
	// 		}
	// 	}			
	// })
	
})
$(".newguidetop li").live('click',function(){
	$(this).addClass("cur").siblings("li").removeClass("cur");
	var index=$(".newguidetop li.cur").index();
	
	$(".newguidebox").hide();
	$(".newguidebox").eq(index).fadeIn();
	$("#content_3").mCustomScrollbar("destroy");
	$("#content_3").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
	//alert($(".newguidetop li.cur").index());
})

$('.submitanalysis').live('click',function(){
	var dnsid=$('#dnsid').val();
	var select_analysis_num=$(".newguidetop li.cur").index();
	var url="dns_public.html"
	if(select_analysis_num==0){
		var recordtypenum=$('.analysis_target input[name="analysistarget"]:checked').val();
		if(!recordtypenum){
			tips="请选择解析目标";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		var s_analysis_domainid="";
		$('.analysis_domain label').each(function(){
			if($(this).find('.checks').attr("checked")){
				s_analysis_domainid+=$(this).find('.checks').val()+",";
			}
		})
		var s_analysis_domainid=s_analysis_domainid.slice(0,-1).trim();
		
		if(!s_analysis_domainid){
			tips="请选择网站域名";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		var analysis_host_redord=$('#analysis_host_redord').val();
		var analysis_host_record_value=$('#analysis_host_record_value').val();
		var analysis_content=$('#analysis_content').val();
		var action="websiteanalysis";
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action,
			  'dnsid':dnsid,
			  'recordtypenum':recordtypenum,
			  's_analysis_domainid':s_analysis_domainid,
			  'analysis_host_redord':analysis_host_redord,
			  'analysis_host_record_value':analysis_host_record_value,
			  'analysis_content':analysis_content
			},		    
			beforeSend:function(){
				$('.buycertbottom .feiydxs1 .btnhover').addClass('btnhui').html('提交中').removeClass('submitanalysis');
			},			
			success:function(data){
				//console.log(data);
				if(data==2){
					tips="您的域名尚未找回，请先验证通过后再添加解析";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==3){
					tips="对不起您没有权限操作该域名";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==4){
					tips="解析目标出错，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==5){
					tips="选择网站域名出错，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==6){
					tips="选择网站域名出错，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==7){
					tips="服务器地址出错，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==8){
					tips="您添加的解析与当前解析列表中的数据有冲突，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==9){
					tips="添加解析出现未知错误，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else{
					//console.log(data);
					$('#alert1 .sy-content').html(data);
					syalert.syopen('alert1');
					$('#buycertbglayer').fadeOut();
					$('.beginner_guidebox').removeClass('show');
					var pages=1;
					if($('.pagescroll #selected #totalpages').val()){
					var pages=$('.pagenav li.cur a').html();
					var totalpages=$('.pagescroll #selected #totalpages').val();
					var to_pages=$('.pagescroll #selected #to_pages').val();
					}else{
					var totalpages=20;
					var to_pages=1;	
					}
					
					loadlist(pages,totalpages,to_pages);
					return false;
				}
			}			
		})
		
	}else if(select_analysis_num==1){
		var action="emailanalysis";
		var emailhtml=$('#emailhtml').val();
		// console.log(emailhtml);
		// return false;
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action,
			  'dnsid':dnsid,
			  'emailhtml':emailhtml
			},		    
			beforeSend:function(){
				$('.buycertbottom .feiydxs1 .btnhover').addClass('btnhui').html('提交中').removeClass('submitanalysis');
			},			
			success:function(data){
				//console.log(data);
				if(data==2){
					tips="您的域名尚未找回，请先验证通过后再添加解析";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				}else if(data==3){
					tips="对不起您没有权限操作该域名";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					$('.buycertbottom .feiydxs1 .btnhover').addClass('submitanalysis').html('确认提交').removeClass('btnhui');
					return false;
				
				}else{
					$('#alert1 .sy-content').html(data);
					syalert.syopen('alert1');
					$('#buycertbglayer').fadeOut();
					$('.beginner_guidebox').removeClass('show');
					var pages=1;
					if($('.pagescroll #selected #totalpages').val()){
					var pages=$('.pagenav li.cur a').html();
					var totalpages=$('.pagescroll #selected #totalpages').val();
					var to_pages=$('.pagescroll #selected #to_pages').val();
					}else{
					var totalpages=20;
					var to_pages=1;	
					}
					loadlist(pages,totalpages,to_pages);
					return false;
				}
			}			
		})
		
	}else{
		tips="解析类型选择错误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
})


$('#analysis_host_record_value').live('blur',function(){                 //验证记录值 
	var host_record_value=$(this).val();
	if(host_record_value){
		var host_record_type;
		var recordtypenum=$('.analysis_target input[name="analysistarget"]:checked').val();
		if(recordtypenum==1){
			 host_record_type="A";
		}else if(recordtypenum==2){
			 host_record_type="AAAA";
		}else if(recordtypenum==3){
			 host_record_type="CNAME";
		}else{
			 tips="请选择解析目标";
			 $('#alert1 .sy-content').html(tips);
			 syalert.syopen('alert1');
			 return false;
		}
		var action="check_host_record_value";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action,
			  'host_record_value':host_record_value,
			  'host_record_type':host_record_type
			},		    
			beforeSend:function(){
				
			},			
			success:function(data){
				if(!data){
					tips="服务器地址出错，请检查";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}
			}			
		})
	}
})

$('.emaillist a').live('click',function(){
	$('.emaillist a').removeClass('cur');
	$(this).addClass('cur');
	$('.newguidebox .emailtable').html(data);
	$('select.recordtypeselect1').select();
	$("#content_3").mCustomScrollbar("destroy");
	$("#content_3").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
	// var checkemailnum=$(this).index();
	
	// var action="changeanalysiscontent";
	// var url="dns_public.html";
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'checkemailnum':checkemailnum
	// 	},		    
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		$('.newguidebox .emailtable').html(data);
	// 		$('select.recordtypeselect1').select();
	// 		$("#content_3").mCustomScrollbar("destroy");
	// 		$("#content_3").mCustomScrollbar({
	// 			autoHideScrollbar: true,
	// 			theme: "light-thin"
	// 		});
	// 	}			
	// })
})

$('.emailtable table tr td #delemailanalysis').live('click',function(){
	_thistr=$(this).parent().parent();
	var indexnum=_thistr.index()-1;
	_thistr.remove();
	// var emailhtml=$('#emailhtml').val();
	
	// var action="delanalysiscontent";
	// var url="dns_public.html";
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'indexnum':indexnum,
	// 	  'emailhtml':emailhtml
	// 	},
	// 	// contentType: "application/json; charset=UTF-8", // 设置请求头为 JSON
	// 	// dataType: "json", // 期望返回的数据类型
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		_thistr.remove();
	// 		//console.log(emailhtml);
	// 		$('#emailhtml').val(data);
	// 		//console.log(data);
	// 	}			
	// })
})

$('.emailtable table tr td #addemailanalysis').live('click',function(){
	var _this=$(this).parent().parent();
	var html='<tr><td><div class="pdlr20">@</div></td><td>MX</td><td align="center">15</td><td>qiye163mx03.mxmail.netease.com</td><td align="center"><a href="javascript:;" class="chengse unline" id="delemailanalysis">删除</a></td></tr>';
	_this.before(html);
	$('select.recordtypeselect1').select();
	// var ehost_record=_this.find('.mailadds #ehost_record').val();
	// if(_this.find('.mailadds #ehost_recordtype').attr('data-value')){
	//   var ehost_recordtype=_this.find('.mailadds #ehost_recordtype').attr('data-value');
	// }else{
	//   var ehost_recordtype="A";	
	// }
	
	// var ehost_preference=_this.find('.mailadds #ehost_preference').val();
	// var ehost_recordvalue=_this.find('.mailadds #ehost_recordvalue').val();
	// var emailhtml=$('#emailhtml').val();
	// var action="addemailanalysis";
	// var url="dns_public.html";
	// $.ajax({
	// 	type:"POST",
	// 	url:url,
	// 	data:{
	// 	  'action':action,
	// 	  'ehost_record':ehost_record,
	// 	  'ehost_recordtype':ehost_recordtype,
	// 	  'ehost_preference':ehost_preference,
	// 	  'ehost_recordvalue':ehost_recordvalue,
	// 	  'emailhtml':emailhtml
	// 	},
	// 	// contentType: "application/json; charset=UTF-8", // 设置请求头为 JSON
	// 	// dataType: "json", // 期望返回的数据类型
	// 	beforeSend:function(){
			
	// 	},			
	// 	success:function(data){
	// 		if(data==1){
	// 			tips="网站主机记录出错，请检查";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==2){
	// 			tips="主机记录类型出错，请检查";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==3){
	// 			tips="MX优先级出错，必须是1-55的纯数字，请检查";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==4){
	// 			tips="主机记录值出错，请检查";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else if(data==5){
	// 			tips="相同的主机记录、记录类型、主机记录值，不能重复添加";
	// 			$('#alert1 .sy-content').html(tips);
	// 			syalert.syopen('alert1');
	// 			return false;
	// 		}else{
	// 		   $('.newguidebox .emailtable').html(data);
	// 		   $('select.recordtypeselect1').select();
	// 		}
			
	// 	}			
	// })
})



function analysisdata(typenum,dnsid,startime,endtime){
	var action="loadanalysisdata";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'typenum':typenum,
		  'dnsid':dnsid,
		  'startime':startime,
		  'endtime':endtime
		},
		
		beforeSend:function(){
			$('.count_box').addClass('dingboxtm04');
			$('.shaixuanboxs').addClass('loadflowlayer');
		},			
		success:function(data){
			if(data==1){
				tips="您的域名尚未找回，请先验证通过后再添加解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==3){
				tips="免费版不能统计当天数据";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.count_box').removeClass('dingboxtm04');
				$('.shaixuanboxs').removeClass('loadflowlayer');
				return false;
			}else if(data==4){
				tips="免费版自定义时间，开始时间和结束时间不能低于48小时";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.count_box').removeClass('dingboxtm04');
				$('.shaixuanboxs').removeClass('loadflowlayer');
				return false;
			}else if(data==5){
				tips="自定义时间，开始时间和结束时间差不能大于90天";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.count_box').removeClass('dingboxtm04');
				$('.shaixuanboxs').removeClass('loadflowlayer');
				return false;
			}else if(data==6){
				tips="当前没有可查询的数据";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.count_box').removeClass('dingboxtm04');
				$('.shaixuanboxs').removeClass('loadflowlayer');
				return false;
			
			}else{
				// console.log(data);
				dataarr=data.split('|-|');
				$('.count_box').removeClass('dingboxtm04');
				$('.shaixuanboxs').removeClass('loadflowlayer');
				var dom = document.getElementById('container_count');
				var myChart = echarts.init(dom, null, {
				    renderer: 'canvas',
				    useDirtyRect: false
				});
				var app = {};
				
				var option;
				
				var timedata = parseFakeArray(dataarr[0]);
				var numdata = parseFakeArray(dataarr[1]);
				var maxNum = Math.max(...numdata);
				
				// 初始化 tooltipOption
				var tooltipOption = {};
				if (dataarr[0] && dataarr[0].length > 0) {
				    tooltipOption = {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'line'
				        },
				        backgroundColor: '#fff',
				        borderWidth: 1,
				        textStyle: {
				            color: '#000',
				            fontSize: 12
				        },
				        formatter: function(params) {
				            var param = params[0];
				            var date = param.axisValue;
				            var value = param.value;
				
				            return [
				                date,
				                '<br>',
				                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + param.color + ';"></span>',
				                '域名请求量（次）：' + value
				            ].join('');
				        }
				    };
				}
				
				// 默认大屏配置（>=1600px）
				var defaultOption = {
				    title: {
				        text: '域名请求量统计（次）',
				        left: '2%',
				        top: '0px',
				        textStyle: {
				            color: '#333',
				            fontSize: 18
				        }
				    },
				    grid: {
				        left: '4%',
				        right: '4%',
				        top: '70px'
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: timedata
				    },
				    yAxis: {
				        type: 'value'
				    },
				    tooltip: tooltipOption,
				    series: [{
				        name: '请求量（次）',
				        data: numdata,
				        type: 'line',
				        smooth: true
				    }]
				};
				
				// 小屏适配配置（<1600px）
				var smallScreenOption = {
				    title: {
				        text: '域名请求量统计（次）',
				        left: '3%',
				        top: '5px',
				        textStyle: {
				            color: '#333',
				            fontSize: 16 // 缩小字体
				        }
				    },
				    grid: {
				        left: '7%',
				        right: '7%',
				        top: '70px',   // 减少顶部留白
				    },
					xAxis: {
					    type: 'category',
					    boundaryGap: false,
					    data: timedata
					},
					yAxis: {
					    type: 'value'
					},
					tooltip: tooltipOption,
					series: [{
					    name: '请求量（次）',
					    data: numdata,
					    type: 'line',
					    smooth: true
					}]
				    // 注意：不需要重复写 xAxis/yAxis/series，只覆盖需要修改的部分
				};
				
				// 初始设置图表
				// if (option && typeof option === 'object') {
				//     myChart.setOption(defaultOption);
				// }
				
				// 响应式处理函数
				function applyResponsiveOption() {
				    const width = window.innerWidth;
				    myChart.resize();
				    // 根据屏幕宽度选择配置
				    if (width < 1600) {
				        myChart.setOption(smallScreenOption, { notMerge: false }); // 合并到原配置
				    } else {
				        myChart.setOption(defaultOption, { notMerge: false });
				    }
				}
				
				// 初始调用一次
				applyResponsiveOption();
				
				// 添加防抖的 resize 监听
				function debounce(func, wait) {
				    let timeout;
				    return function () {
				        const context = this, args = arguments;
				        clearTimeout(timeout);
				        timeout = setTimeout(() => func.apply(context, args), wait);
				    };
				}
				
				window.addEventListener('resize', debounce(applyResponsiveOption, 100));
		  }
		}			
	})
}

function parseFakeArray(str) {
    return str
        .trim()
        .replace(/^'+|'+$/g, '') // 去除首尾单引号
        .split(',')               // 按逗号拆分
        .map(function(item) {
            return item.trim().replace(/^'+|'+$/g, '');
        });
}

// $('#endtime').live('focus',function(){
// 	var startime=$('#startime').val();
// 	if(!startime){
// 		tips="请填写开始时间";
// 		$('#alert1 .sy-content').html(tips);
// 		syalert.syopen('alert1');
// 		$('.count_box').removeClass('dingboxtm04');
// 		return false;
// 	}
// })
function checkStartTime() {
    var startTime = $('#starttime').val();
    if (!startTime) { 
		tips="开始时间不能为空，请先选择开始时间";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
        return false;
    }
    return true;        
}

$('.weight_allocation_btn').live('click',function(){
	var dnsid=$('#dnsid').val();
	var weightid=$(this).parent().parent().parent().find('.beizhutxttag span').attr('id');
	var action="weight_allocation_box";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'weightid':weightid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			if(data==1){
				tips="您的域名尚未找回，请先验证通过后再添加解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$('.Weight_allocation_box').html(data);
				$('#buycertbglayer').fadeIn();
				$("#content_2").mCustomScrollbar({
					autoHideScrollbar: true,
					theme: "light-thin"
				});		
				$('.Weight_allocation_box').addClass('show');
			}
		}			
	})
})

$('#fuzaitype').live('click',function(){
	var dnsid=$('#dnsid').val();
	
	var fuzaitype=$(this).val();
	var weightid=$('#weightid').val();
	var action="changefuzaitype";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'fuzaitype':fuzaitype,
		  'weightid':weightid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			if(data==1){
				tips="您的域名尚未找回，请先验证通过后再添加解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				if(fuzaitype==1){
					$('.weightlistbox').removeClass('all_back').addClass('all_back');
				}else{
					$('.weightlistbox').removeClass('all_back');
				}
				$('.weightlistbox').html(data);
				$('#buycertbglayer').fadeIn();
				$("#content_2").mCustomScrollbar({
					autoHideScrollbar: true,
					theme: "light-thin"
				});
			}
		}			
	})
})

$('#phost_weight_num').live('change',function(){
	_this=$(this);
	var weightnum=_this.val();
	var action="checkweightnum";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'weightnum':weightnum
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			if(data==1){
				tips="权重只能设置1-10的整数";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				_this.val('1');
				return false;
			}
		}			
	})
})

$('.confirmchangeweight').live('click',function(){
	var num=0;
	var totalweightnum='';
	var dnsid=$('#dnsid').val();
	var weightid=$('#weightid').val();
	var fuzaitype=$('#fuzaitype:checked').val();
	
	$('.weightlistbox table tr').each(function(){
		if(num>0){
			totalweightnum+=$(this).find('#phost_weight_num').val()+",";
		}
		num++
	})
	var totalweightnum=totalweightnum.slice(0,-1).trim();
	var action="setbathhostweight";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'totalweightnum':totalweightnum,
		  'fuzaitype':fuzaitype,
		  'weightid':weightid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
		    
			if(data==1){
				tips="您当前的版本无法配置权重";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="权重配置成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('#buycertbglayer').fadeOut();
				$('.Weight_allocation_box').removeClass('show');
				$('.Weight_allocation_box').html('');
				return false;
			}else{
				$('#alert1 .sy-content').html(data);
				syalert.syopen('alert1');
				return false;
			}
		}			
	})
})

$('.add_analysis_line').live('click',function(){
    var dnsid=$('#dnsid').val();
    var action="analysis_line_box";
    var url="dns_public.html";
    $.ajax({
    	type:"POST",
    	url:url,
    	data:{
    	  'action':action,
    	  'dnsid':dnsid
    	},		    
    	beforeSend:function(){
    		
    	},			
    	success:function(data){
    		//console.log(data);
    		if(data==1){
    			tips="您的域名尚未找回，请先验证通过后再添加解析";
    			$('#alert1 .sy-content').html(tips);
    			syalert.syopen('alert1');
    			return false;
    		}else if(data==2){
    			tips="对不起您没有权限操作该域名";
    			$('#alert1 .sy-content').html(tips);
    			syalert.syopen('alert1');
    			return false;
    		}else{
    			$('.addanalysisline_box').html(data);
    			$('#buycertbglayer').fadeIn();
    			$("#content_2").mCustomScrollbar({
    				autoHideScrollbar: true,
    				theme: "light-thin"
    			});
    			$('.addanalysisline_box').addClass('show');
    		}
    	}			
    })		
})

$('.bd_add').live('click',function(){
	var html='<dd class="erduan"><input type="text" placeholder="请输入开始IP地址" class="inputwenben startip"  name="startip" > <em>-</em> <input type="text" placeholder="请输入开始IP地址" class="inputwenben endip"   name="endip" ><a href="javascript:;" class="juzhong bd_del"><img src="images/del.svg"></a></dd>';
	$('.bindingbtntwo').append(html);
})

$('.bd_del').live('click',function(){
	$(this).parent().remove();
})

// $('#analysislinename').live('blur',function(){
// 	var linename=$(this).val();
// 	if(!isValidlinename(linename)){
// 		tips="线路名称不能为空或不能有特殊字符";
// 		$('#alert1 .sy-content').html(tips);
// 		syalert.syopen('alert1');
// 		return false;
// 	}
// })

$('.startip').live('change',function(){
	var ip=$(this).val();
	if(!isValidIp(ip)){
		tips="开始IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var endip=$(this).parent().find('.endip').val();
	
	if(endip){
		if(!isValidIp(endip)){
			tips="结束IP地址格式有误，请检查";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(!compareIps(ip, endip)){
			tips="该IP段有误，请检查";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	syalert.syhide('alert1');
})

$('.endip').live('change',function(){
	var ip=$(this).val();
	if(!isValidIp(ip)){
		tips="结束IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var startip=$(this).parent().find('.startip').val();
	if(!isValidIp(startip)){
		tips="开始IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(!compareIps(startip, ip)){
		tips="该IP段有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	syalert.syhide('alert1');
})


function isValidIp(ip) {
    // 使用正则表达式检查IP地址格式
    var pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (pattern.test(ip)) {
        var parts = ip.split('.').map(Number);
        // 确保每个部分都在0-255之间
        return parts.every(function(part) {
            return part >= 0 && part <= 255;
        });
    }
    return false;
}

function compareIps(startIp, endIp) {
    // 将IP地址转换为整数以便比较
    var startParts = startIp.split('.').map(Number);
    var endParts = endIp.split('.').map(Number);
    
    for (var i = 0; i < 4; i++) {
        if (startParts[i] < endParts[i]) {
            return true;
        } else if (startParts[i] > endParts[i]) {
            return false;
        }
        // 如果当前部分相等，则继续比较下一个部分
    }
    // 如果所有部分都相等，则认为startIp小于等于endIp
    return true;
}

function isValidlinename(linename){
	var pattern = /^[a-zA-Z0-9_\-\u4e00-\u9fa5]+$/;
	if (pattern.test(linename)) {
	    return true;
	}else{
		return false;
	}
}


$('.confirm_add_analysisline').live('click',function(){
	var dnsid=$('#dnsid').val();
	var linename=$('#analysislinename').val();
	if(!isValidlinename(linename)){
		tips="线路名称格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var startip=$('.startip').val();
	if(!isValidIp(startip)){
		tips="开始IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var endip=$('.endip').val();
	if(!isValidIp(endip)){
		tips="结束IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	if(!compareIps(startip, endip)){
		tips="该IP段有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var content=$('#analysislinecontent').val();
	var action="add_analysisline";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'linename':linename,
		  'startip':startip,
		  'endip':endip,
		  'content':content
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			if(data==1){
				tips="开始IP地址格式有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="结束IP地址格式有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==3){
				tips="线路添加失败，请重试";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==4){
				tips="线路添加失败，超过该版本的最大添加线路";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				tips="线路添加成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('#buycertbglayer').fadeOut();
				$('.addanalysisline_box').removeClass('show');
				$('.addanalysisline_box').html('');
				if($('.pagenav li.cur a').html()){
				   var pages=$('.pagenav li.cur a').html();
				}else{
				   var pages=1;	
				}
				if($('.pagescroll #selected #totalpages').val()){
				  var totalpages=$('.pagescroll #selected #totalpages').val();
				}else{
				  var totalpages=20;	
				}
				if($('.pagescroll #selected #to_pages').val()){
				   var to_pages=$('.pagescroll #selected #to_pages').val();
				}else{
				   var to_pages=1;	
				}
				loadlist(pages,totalpages,to_pages);
				
				$('.shaixuanboxs .select .select_ul').append('<li data-value="'+linename+'">'+linename+'</li>');
				var action1="refreshanalysislinetips";
				
				$.ajax({
					type:"POST",
					url:url,
					data:{
					  'action':action1,
					  'dnsid':dnsid
					},		    
					beforeSend:function(){
						
					},			
					success:function(data){
						$('.restoptip .restoptop').html(data);
					}			
				})
				return false;
			}
		}			
	})
})

$('.modify_line').live('click',function(){
	var dnsid=$('#dnsid').val();
	var lineid=$(this).parent().parent().parent().find('#sortcheck').val();
	var action="edit_analysis_line_box";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid,
		  'lineid':lineid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			if(data==1){
				tips="您的域名尚未找回，请先验证通过后再添加解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				$('.addanalysisline_box').html(data);
				$('#buycertbglayer').fadeIn();
				$("#content_2").mCustomScrollbar({
					autoHideScrollbar: true,
					theme: "light-thin"
				});
				$('.addanalysisline_box').addClass('show');
			}
		}			
	})
})


$('.confirm_edit_analysisline').live('click',function(){
	var lineid=$('#lineid').val();
	var dnsid=$('#dnsid').val();
	
	var linename=$('#analysislinename').val();
	if(!isValidlinename(linename)){
		tips="线路名称格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var startip=$('.startip').val();
	if(!isValidIp(startip)){
		tips="开始IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var endip=$('.endip').val();
	if(!isValidIp(endip)){
		tips="结束IP地址格式有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	if(!compareIps(startip, endip)){
		tips="该IP段有误，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var content=$('#analysislinecontent').val();
	var action="edit_analysisline";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'lineid':lineid,
		  'dnsid':dnsid,
		  'linename':linename,
		  'startip':startip,
		  'endip':endip,
		  'content':content
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			if(data==1){
				tips="开始IP地址格式有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="结束IP地址格式有误，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==3){
				tips="修改线路失败，请重试";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				tips="线路修改成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('#buycertbglayer').fadeOut();
				$('.addanalysisline_box').removeClass('show');
				$('.addanalysisline_box').html('');
				var pages=$('.pagenav li.cur a').html();
				var totalpages=$('.pagescroll #selected #totalpages').val();
				var to_pages=$('.pagescroll #selected #to_pages').val();
				loadlist(pages,totalpages,to_pages);
			
			}
		}			
	})
})


$(".del_line").live('click',function(){
	var dnsid=$('#dnsid').val();
	var sisid=$(this).parent().parent().parent().find('#sortcheck').val();
	var action="del_analysisline";
	var url="dns_public.html";
	$('#tantitle').val('删除解析线路');
	$('.cancelcertlayer').html('<input type="hidden" name="lineid" id="lineid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定删除解析线路吗？</h3><P>删除解析线路后，DNS将无法解析线路选择。</P><p>可能会导致项目无法正常运行，请您慎重。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmdelanalysisline">确定删除</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			if(data==1){
				tips="您的域名状态异常，请验证通过后再暂停解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
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
				$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
				$('.zxboxs .tanbiaodan h2').html('安全验证');
				
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
				$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
				$(".zxboxs").fadeIn();
				setsafecheckewm();
			}
		}			
	})
})

$(".pl_alllinedel_btn").live('click',function(){
	var dnsid=$('#dnsid').val();
	var sisid="";
	$('table tr').each(function(){
		if($(this).find('#sortcheck').attr("checked")){
			sisid+=$(this).find('#sortcheck').val()+",";
		}
	})
	sisid=sisid.slice(0,-1).trim();
	if(sisid===""){
		tips="对不起您没有选择要删除的解析线路";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var action="del_analysisline";
	var url="dns_public.html";
	$('#tantitle').val('删除解析线路');
	$('.cancelcertlayer').html('<input type="hidden" name="lineid" id="lineid" value="'+sisid+'"><div class="juzhong zhuxiaoico pd3"><img src="images/delect_ico.svg"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定删除解析线路吗？</h3><P>删除解析线路后，DNS将无法解析线路选择。</P><p>可能会导致项目无法正常运行，请您慎重。</p></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmdelanalysisline">确定删除</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>');
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'dnsid':dnsid
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			if(data==1){
				tips="您的域名状态异常，请验证通过后再暂停解析";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else if(data==2){
				tips="对不起您没有权限操作该域名";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
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
				$('.zxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
				$('.zxboxs .tanbiaodan h2').html('安全验证');
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
				$('.zxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
				$('.zxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
				$(".zxboxs").fadeIn();	
				setsafecheckewm();
			}
		}			
	})
})

$('#confirmdelanalysisline').live('click',function(){  //确认删除解析线路
	var sisid=$('#lineid').val();
	var dnsid=$('#dnsid').val();
	var action="confirmdelanalysisline";
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'sisid':sisid
		},		    
		beforeSend:function(){
			$('.memberlayer2 .btn').addClass('btnhui').html('删除中');
			$('.memberlayer2 .btn').attr('id','');
		},			
		success:function(data){
		
			if(data>0){
				tips="解析线路删除失败,请联系在线客服";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$(".zxboxs").fadeOut();
				return false;
			}else{
				tips="解析线路删除成功";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				if($('.pagenav li.cur a').html()){
				   var pages=$('.pagenav li.cur a').html();
				}else{
				   var pages=1;	
				}
				if($('.pagescroll #selected #totalpages').val()){
				  var totalpages=$('.pagescroll #selected #totalpages').val();
				}else{
				  var totalpages=20;	
				}
				if($('.pagescroll #selected #to_pages').val()){
				   var to_pages=$('.pagescroll #selected #to_pages').val();
				}else{
				   var to_pages=1;	
				}
				
				loadlist(pages,totalpages,to_pages);
				$(".zxboxs").fadeOut();
				var action1="refreshanalysislinetips";
				
				$.ajax({
					type:"POST",
					url:url,
					data:{
					  'action':action1,
					  'dnsid':dnsid
					},		    
					beforeSend:function(){
						
					},			
					success:function(data){
						$('.restoptip .restoptop').html(data);
					}			
				})
				return false;
			}
		}			
	})
})


$('.select_updateuse').live('click',function(){
	    var editionnum=$(this).parent().parent().parent().index()-2;
		var pageid=$(this).attr('datadnspageid');
		var typenum=2;
		var action="buyupdatednscontent";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action,
				'editionnum':editionnum,
				'typenum':typenum,
				'pageid':pageid
			},
			beforeSend:function(){ 
				 
			},
			success:function(data){
				if(data==1){
					tips="版本选择出错了";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					_this.val('');
				}else if(data==2){
					tips="对不起，升级的版本必须高于当前版本";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else{
					$('#buycertbglayer').fadeIn();
					$('.buydnslayer').html(data);
					$('#buydnstime select').select();
					$("#content_2").mCustomScrollbar({
						autoHideScrollbar: true,
						theme: "light-thin"
					});
					$('.buycertlayer').addClass('show');
				}
				
			}	   	
				   
		})
	})
	
$('.now_select_updateuse').live('click',function(){
	    var editionnum=1;
		var pageid=$(this).attr('datadnspageid');
		var typenum=2;
		var action="buyupdatednscontent";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action,
				'editionnum':editionnum,
				'typenum':typenum,
				'pageid':pageid
			},
			beforeSend:function(){ 
				 
			},
			success:function(data){
				if(data==1){
					tips="版本选择出错了";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					_this.val('');
				}else if(data==2){
					tips="对不起，升级的版本必须高于当前版本";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else{
					$('#buycertbglayer').fadeIn();
					$('.buydnslayer').html(data);
					$('#buydnstime select').select();
					$("#content_2").mCustomScrollbar({
						autoHideScrollbar: true,
						theme: "light-thin"
					});
					$('.buycertlayer').addClass('show');
				}
				
			}	   	
				   
		})
	})
	
	$('.selectupdatednsedition li p a').live('click',function(){
		if($(this).hasClass('noclick')){
			tips="对不起，升级的版本必须高于当前版本";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			_this.val('');
		}
		$(this).addClass('cur').siblings('a').removeClass('cur');
		var editionnum=$('.selectupdatednsedition li p .cur').index()+1;
		var dnspageid=$('#dnspageid').val();
		var typenum=2;
		var action="updatednseditionprice";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action,
				'editionnum':editionnum,
				'typenum':typenum,
				'dnspageid':dnspageid
			},
			beforeSend:function(){ 
				 
			},
			success:function(data){
				if(data==1){
					tips="版本选择出错了";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else if(data==2){
					tips="对不起，升级的版本必须高于当前版本";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else{
					$('.feiydxs1 span em').html(data);
				}
			}	   	
				   
		})
	})
	
	$('#payupdatednsbuynow').live('click',function(){
		var isreadxieyi=$('#readxieyi').is(':checked');
		if(!isreadxieyi){
			tips="请先阅读并勾选接受《DNS云解析服务条款》!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		var editionnum=$('.selectupdatednsedition li p .cur').index()+1;
		var typenum=2;
		var dnsjumpurlnum=$('#dnsjumpurlnum').val();
		var dnspageid=$('#dnspageid').val();
		var action="updatednseditionorderpay";
		var url="dns_public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
				'action':action,
				'editionnum':editionnum,
				'typenum':typenum,
				'dnsjumpurlnum':dnsjumpurlnum,
				'dnspageid':dnspageid
			},
			beforeSend:function(){ 
				 
			},
			success:function(data){
				
				if(data==1){
					tips="版本选择出错了";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else if(data==2){
					tips="对不起，升级的版本必须高于当前版本";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else if(data==3){
					tips="该域名存在未支付的订单，请先支付或者关闭订单再操作";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else{
					//console.log(data);
					window.location.href = data;
				}
			}	   	
				   
		})
	})
$('#updatednsproduct').live('click',function(){
		var dnsid=$(this).attr('dataid');
		var url = "dns_public.html";
		var action = "updatednsproductlinks";
		var typenum=1;
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'typenum': typenum,
				'dnsid': dnsid
			},
			success: function(data) {
				if(data==1){
					tips="对不起，您已是最高版本";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else{
					window.location.href = data;
				}
			}
		})
		
	})
$('#updatednsfreeproduct').live('click',function(){
		var dnsid=$(this).attr('dataid');
		var url = "dns_public.html";
		var action = "updatednsproductlinks";
		var typenum=2;
		$.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'typenum': typenum,
				'dnsid': dnsid
			},
			success: function(data) {
				console.log(data);
				if(data==1){
					tips="对不起，您已是最高版本";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
				}else{
					window.location.href = data;
				}
			}
		})
		
	})
	let currentRequest = null;
$('.firstlinenav li a').live('mouseover',function(){
	if (currentRequest && currentRequest.readyState !== 4) {
	    currentRequest.abort();
	}
	var lineid=$(this).attr('dataid');
	var dnsid=$('#dnsid').val();
	var analysis_line_code=$('#host_analysis_line span i').attr('datacode');
	$('.firstlinenav li a').removeClass('cur');
	$(this).addClass('cur');
	var url = "dns_public.html";
	if(lineid!=10000){
		var action = "getlevelline";
		currentRequest = $.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'dnsid': dnsid,
				'analysis_line_code': analysis_line_code,
				'lineid': lineid
			},
			beforeSend:function(){
				 $('.secondlinenav').html('<li><a href="javascript:;">加载中</a></li>');
			},
			success: function(data) {
				$('.thirdlinenav').hide();
				$('.secondlinenav').html(data);
				if(data){
				  $('.secondlinenav').show();
				}else{
				  $('.secondlinenav').hide();
				}
			}
		})
	}else{
		var action = "autolevelline";
		currentRequest = $.ajax({
			type: "POST",
			url: url,
			data: {
				'action': action,
				'analysis_line_code': analysis_line_code,
				'dnsid': dnsid
			},
			beforeSend:function(){
				 $('.secondlinenav').html('<li><a href="javascript:;">加载中</a></li>');
			},
			success: function(data) {
				$('.thirdlinenav').hide();
				$('.secondlinenav').html(data);
				if(data){
				  $('.secondlinenav').show();
				}else{
				  $('.secondlinenav').hide();
				}
			}
		})
	}
})

$('.secondlinenav li a').live('mouseover',function(){
	if (currentRequest && currentRequest.readyState !== 4) {
	    currentRequest.abort();
	  }
	var lineid=$(this).attr('dataid');
	$('.secondlinenav li a').removeClass('cur');
	var analysis_line_code=$('#host_analysis_line span i').attr('datacode');
	$(this).addClass('cur');
	var dnsid=$('#dnsid').val();
	var url = "dns_public.html";
	var action = "getlevelline";
	currentRequest = $.ajax({
		type: "POST",
		url: url,
		data: {
			'action': action,
			'dnsid': dnsid,
			'analysis_line_code': analysis_line_code,
			'lineid': lineid
		},
		beforeSend:function(){
			 $('.thirdlinenav').html('<li><a href="javascript:;">加载中</a></li>');
		},
		success: function(data) {
			$('.thirdlinenav').html(data);
			if(data){
			  $('.thirdlinenav').show();
			}else{
			  $('.thirdlinenav').hide();
			}
		}
	})
	
})

$('.downico').live('click',function(){
	var maxttlnum=10000;
	var nowttlnum=$('.ttlbox span .auto-width-input').val();
	if(nowttlnum<=maxttlnum){
		nowttlnum++;
		$('.ttlbox span .auto-width-input').val(nowttlnum);
	}
	document.querySelectorAll('.auto-width-input').forEach(input => {
	    adjustInputWidth(input);
	    input.addEventListener('input', function() {
	        adjustInputWidth(this);
	    });    
	});
})

$('.upico').live('click',function(){
	//var dnseditionnum=$('#dnseditionnum').val();
	var dnseditionnum=1;
	if(dnseditionnum==0){
		var minttlnum=300;
	}else if(dnseditionnum==1){
		var minttlnum=60;
	}else if(dnseditionnum==2){
		var minttlnum=10;
	}else if(dnseditionnum==3){
		var minttlnum=1;
	}
	
	var nowttlnum=$('.ttlbox span .auto-width-input').val();
	//alert(nowttlnum);
	if(nowttlnum>minttlnum){
		nowttlnum--;
		$('.ttlbox span .auto-width-input').val(nowttlnum);
	}
	document.querySelectorAll('.auto-width-input').forEach(input => {
	    adjustInputWidth(input);
	    input.addEventListener('input', function() {
	        adjustInputWidth(this);
	    });    
	});
})

$('.auto-width-input').live('change',function(){
	var dnseditionnum=$('#dnseditionnum').val();
	if(dnseditionnum==0){
		var minttlnum=300;
	}else if(dnseditionnum==1){
		var minttlnum=60;
	}else if(dnseditionnum==2){
		var minttlnum=10;
	}else if(dnseditionnum==3){
		var minttlnum=1;
	}
	var maxttlnum=10000;
	var ttlval=$(this).val();
	if(ttlval){
		if(!isValidNumber(ttlval,minttlnum,maxttlnum)){
			$(this).val('300');
			tips="TTL必须是"+minttlnum+"到"+maxttlnum+"之间的正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
		}
	}else{
		$(this).val('300');
		tips="TTL值不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
	}
	document.querySelectorAll('.auto-width-input').forEach(input => {
	    adjustInputWidth(input);
	    input.addEventListener('input', function() {
	        adjustInputWidth(this);
	    });    
	});
})

function isValidNumber(ttlval,minttlnum,maxttlnum) {
    const num = parseInt(ttlval, 10);
    return !isNaN(num) && num >= minttlnum && num <= maxttlnum && /^\d+$/.test(ttlval);
}

function adjustInputWidth(input) {
    // ✅ 安全检查
    if (!input || !input.value) {
        input.style.width = (input.placeholder ? input.placeholder.length : 1) + 'ch' || '40px';
        return;
    }

    // 创建一个用于测量的隐藏 span
    const measurer = document.createElement('span');
    // 复制 input 的字体样式，确保测量准确
    const style = window.getComputedStyle(input);
    measurer.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        white-space: pre;
        font-family: ${style.fontFamily};
        font-size: ${style.fontSize};
        font-weight: ${style.fontWeight};
        letter-spacing: ${style.letterSpacing};
        padding: ${style.padding};
        border: ${style.border};
    `;
    // 设置要测量的文本
    measurer.textContent = input.value;

    // 将测量元素添加到页面
    document.body.appendChild(measurer);

    // 获取测量宽度，并设置给 input
    // ✅ 加上一点额外宽度，防止末尾字符被截断
    const width = measurer.offsetWidth + 2;
    input.style.width = width + 'px';

    // 清理：移除测量元素
    document.body.removeChild(measurer);
}

       


