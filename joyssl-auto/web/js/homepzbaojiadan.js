$(document).on('click','.certquotation',function(){
	$('#certnoticepaperbglayer').fadeIn();
	$('.buycertbottom .feiydxs1 .btnhover').removeClass('generatenoticepaper');
	var html='<div class="buycerttitle"><span>生成报价单</span><a href="javascript:;" class="closebuycertlayer closenoticepaper"><img src="images/close3.svg"></a></div><div class="buycertbox setnoticebox" id="contentnotice_3"><ul><li><span class="zuo">客户信息</span></li><li><input type="text" placeholder="请输入完整的单位名称" class="inputwenben w100 mr10" name="company_name" id="company_name"></li><li class="mt100"><input type="text" placeholder="请输入联系人" class="inputwenben w100" name="lx_name" id="lx_name"></li><li class="mt100"><input type="text" placeholder="请输入联系方式" class="inputwenben w100" name="lx_mobile" id="lx_mobile"></li><li class="mt30"><span class="zuo">报价单位</span><div class="selectNub" id="quotationunit"><span class="placeholder"><i>合肥网盾安全技术有限公司-盖章版本</i></span><ul><li><a href="javascript:;" title="合肥网盾安全技术有限公司-盖章版本" class="cur"><i>合肥网盾安全技术有限公司-盖章版本</i></a></li><li><a href="javascript:;" title="合肥快安信数字科技有限公司-盖章版本"><i>合肥快安信数字科技有限公司-盖章版本</i></a></li><li><a href="javascript:;" title="合肥网盾安全技术有限公司"><i>合肥网盾安全技术有限公司</i></a></li><li><a href="javascript:;" title="合肥快安信数字科技有限公司"><i>合肥快安信数字科技有限公司</i></a></li><li><a href="javascript:;" title="上海引航信息技术有限公司"><i>上海引航信息技术有限公司</i></a></li></ul></div></li></ul><ul class="quotationbox"><li class="mt30 erduan"><span>订单信息</span> <a href="javascript:;" class="chengse unline" id="addquotationpro">新增订单</a></li></ul><ul class="quotation_active"><li class="mt30"><span class="zuo">优惠活动</span><input type="text" placeholder="请输入优惠活动" class="inputwenben w100 mr10" name="active_info" id="active_info"></li><li class="mt30 zuo"><input type="checkbox" class="checks mr10"  id="issulotion"><span style="margin-bottom:0px;">是否方案</span></li></ul></div><div class="buycertbottom"><div class="feiydxs1"><a href="javascript:;" class="btnhover generate_quotation" >生成报价单</a></div></div>';
	$('.add_certnoticepaper').html(html).addClass('show');
	$("#contentnotice_3").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin",
		advanced: {
		    autoExpandHorizontalScroll: true,
		    updateOnContentResize: true
		},
		scrollButtons: {
		    enable: false
		},
		scrollbarPosition: "outside"
	});
})
$(document).on('click','.certcontract',function(){
	$('#certnoticepaperbglayer').fadeIn();
	$('.buycertbottom .feiydxs1 .btnhover').removeClass('generatenoticepaper');
	var html='<div class="buycerttitle"><span>生成合同</span><a href="javascript:;" class="closebuycertlayer closenoticepaper"><img src="images/close3.svg"></a></div><div class="buycertbox setnoticebox" id="contentnotice_3"><ul><li><span class="zuo">客户信息</span></li><li><input type="text" placeholder="请输入完整的单位名称" class="inputwenben w100 mr10" name="company_name" id="company_name"></li><li class="mt100"><input type="text" placeholder="请输入统一社会信用代码" class="inputwenben w100" name="uscc" id="uscc"></li><li class="mt30"><span class="zuo">报价单位</span><div class="selectNub" id="quotationunit"><span class="placeholder"><i>合肥网盾安全技术有限公司-盖章版本</i></span><ul><li><a href="javascript:;" title="合肥网盾安全技术有限公司-盖章版本" class="cur"><i>合肥网盾安全技术有限公司-盖章版本</i></a></li><li><a href="javascript:;" title="合肥快安信数字科技有限公司-盖章版本"><i>合肥快安信数字科技有限公司-盖章版本</i></a></li><li><a href="javascript:;" title="合肥网盾安全技术有限公司"><i>合肥网盾安全技术有限公司</i></a></li><li><a href="javascript:;" title="合肥快安信数字科技有限公司"><i>合肥快安信数字科技有限公司</i></a></li><li><a href="javascript:;" title="上海引航信息技术有限公司"><i>上海引航信息技术有限公司</i></a></li></ul></div></li></ul><ul class="quotationbox"><li class="mt30 erduan"><span>订单信息</span> <a href="javascript:;" class="chengse unline" id="addquotationpro">新增订单</a></li></ul><ul class="quotation_active" style="margin-bottom:150px;"></ul></div><div class="buycertbottom"><div class="feiydxs1"><a href="javascript:;" class="btnhover generate_contract" >生成合同</a></div></div>';
	$('.add_certnoticepaper').html(html).addClass('show');
	$("#contentnotice_3").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin",
		advanced: {
		    autoExpandHorizontalScroll: true,
		    updateOnContentResize: true
		},
		scrollButtons: {
		    enable: false
		},
		scrollbarPosition: "outside"
	});
})

$(document).on('click','#addquotationpro',function(){
	
	if($('.quotationbox li').length>5){
		tips = "添加的订单产品不能超过5个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$('.config_orderpro').addClass('show');
	$('.buycertbottom .feiydxs1 #confirm_configpro').removeClass('generatenoticepaper');
	$('.buycertbottom .feiydxs1 #confirm_configpro').removeClass('generate_quotation');
	$('.buycertbottom .feiydxs1 #confirm_configpro').removeClass('generate_contract');
	var pztype="SSL证书";
	var pzedition="标准版";
	var pzbrands="JoySSL";
	var pzalgorithm="国际算法";
	var pzsafelevel="DV";
	var pzfits="单域名";
	var pzbuynum=1;
	var pzsingledomainnum=1;
	var pzmultidomainnum=1;
	var pzordernumber=1;
	var nowliindex=0;
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$('.nowliindexnum').val(nowliindex);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
				    autoExpandHorizontalScroll: true,
				    updateOnContentResize: true
				},
				scrollButtons: {
				    enable: false
				},
				scrollbarPosition: "outside"
			});
			
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.closeconfigorderpro',function(){
	$('.config_orderpro').removeClass('show');
})

// $(document).on('click','.pz_type p a,.pz_edition p a,.pz_brands p a,.pz_algorithm p a,.pz_safelevel p a,.pz_fits p a',function(){
// 	$(this).addClass('cur').siblings('a').removeClass('cur');
// 	var pztype=$('.pz_type p .cur').attr('datavalue');
// 	var pzedition=$('.pz_edition p .cur').attr('datavalue');
// 	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
// 	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
// 	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
// 	var pzfits=$('.pz_fits p .cur').attr('datavalue');
// 	var pzbuynum=$('.pzbuycerttimes em input').val();
// 	var pzsingledomainnum=$('#pzsingledomainnum input').val();
// 	var pzmultidomainnum=$('#pzmultidomainnum input').val();
// 	var pzordernumber=$('.buyordernumber em input').val();
// 	var url="public.html";
// 	var action="getnewbaojiaorder";
// 	$.ajax({
// 		type:"POST",
// 		url:url,
// 		data:{
// 		  'action':action,
// 		  'pztype':pztype,
// 		  'pzedition':pzedition,
// 		  'pzbrands':pzbrands,
// 		  'pzalgorithm':pzalgorithm,
// 		  'pzsafelevel':pzsafelevel,
// 		  'pzfits':pzfits,
// 		  'pzbuynum':pzbuynum,
// 		  'pzsingledomainnum':pzsingledomainnum,
// 		  'pzmultidomainnum':pzmultidomainnum,
// 		  'pzordernumber':pzordernumber
// 		},		    
// 		beforeSend:function(){
			
// 		},			
// 		success:function(data){
// 			//console.log(data);
			
// 			var html=data.split("|*|")[0];
// 			var price=data.split("|*|")[1];
// 			$('.pzquotationbox').html(html);
// 			$('.feiydxs1 span small').html(price);
// 			$('.feiydxs1 span .disc_price').val(price);
// 			$("#content_4").mCustomScrollbar({
// 				autoHideScrollbar: true,
// 				theme: "light-thin",
// 				advanced: {
// 					autoExpandHorizontalScroll: true,
// 					updateOnContentResize: true
// 				},
// 				scrollButtons: {
// 					enable: false
// 				},
// 				scrollbarPosition: "outside"
// 			});
// 		}				
// 	})
// 	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
// 		$('.setnoticebox').css({'padding-right': '20px'});
// 	}else{
// 		$('.setnoticebox').css({'padding-right': '30px'});
// 	}
// })

$(document).on('click','.pz_type p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$(this).attr('datavalue');
	var pzedition="";
	var pzsigntype="";
	var pzbrands="";
	var pzalgorithm="";
	var pzsafelevel="";
	var pzfits="";
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})


$(document).on('click','.pz_edition p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$(this).attr('datavalue');
	var pzsigntype="";
	var pzbrands="";
	var pzalgorithm="";
	var pzsafelevel="";
	var pzfits="";
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.pz_signtype p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$(this).attr('datavalue');
	var pzbrands="";
	var pzalgorithm="";
	var pzsafelevel="";
	var pzfits="";
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})


$(document).on('click','.pz_brands p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$(this).attr('datavalue');
	var pzalgorithm="";
	var pzsafelevel="";
	var pzfits="";
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.pz_algorithm p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$(this).attr('datavalue');
	var pzsafelevel="";
	var pzfits="";
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.pz_safelevel p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$(this).attr('datavalue');
	var pzfits="";
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.pz_fits p a',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$(this).attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.pzbuycerttimes .shang #remove',function(){
	var _this = $(this).parent();
	var pzbuynum=parseFloat(_this.find('input').val()) - parseFloat(1);
	
	if (pzbuynum < 1) {
		tips = "购买时长不能小于1年";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.pzbuycerttimes .shang #add',function(){
	var _this = $(this).parent();
	var pzbuynum=parseFloat(_this.find('input').val()) + parseFloat(1);
	
	if (pzbuynum > 10) {
		tips = "购买时长不能大于10年";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})


$(document).on('click','.buyordernumber .shang #remove',function(){
	var _this = $(this).parent();
	var pzordernumber=parseFloat(_this.find('input').val()) - parseFloat(1);
	if (pzordernumber < 1) {
		tips = "订单数量不能小于1";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})

$(document).on('click','.buyordernumber .shang #add',function(){
	var _this = $(this).parent();
	var pzordernumber=parseFloat(_this.find('input').val()) + parseFloat(1);
	
	if (pzordernumber > 250) {
		tips = "订单数量不能大于250";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})


$(document).on('click','#pzsingledomainnum .shang #remove',function(){
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	
	var _this = $(this).parent();
	var pzsingledomainnum=parseFloat(_this.find('input').val()) - parseFloat(1);
	if(pzsingledomainnum < 1) {
		tips="单域名数量不能小于1";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($(window).height()>900){
		if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
			$('.setnoticebox').css({'padding-right': '20px'});
		}else{
		    $('.setnoticebox').css({'padding-right': '30px'});
		}	
	}
})

$(document).on('click','#pzsingledomainnum .shang #add',function(){
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	
	var _this = $(this).parent();
	var pzsingledomainnum=parseFloat(_this.find('input').val()) + parseFloat(1);
	if (pzsingledomainnum > 250) {
		if(pzfits!="多域名"){
			if(pzfits=="公网IP证书" || pzfits=="内网IP证书"){
				tips = "IP数量不能大于250";
			}else{
				tips = "域名数量不能大于250";
			}
		}else{
			tips = "单域名数量不能大于250";
		}
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($(window).height()>900){
			if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
				$('.setnoticebox').css({'padding-right': '20px'});
			}else{
			    $('.setnoticebox').css({'padding-right': '30px'});
		    }
	}
})

$(document).on('change','#pzsingledomainnum input',function(){
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var reg = /^\d{1,3}$/;
	var pzsingledomainnum=$(this).val().trim();
	if(reg.test(pzsingledomainnum)){
		if (pzsingledomainnum > 250 || pzsingledomainnum < 1){
			tips = "单域名数量必须是1-250的纯数字";
			pzsingledomainnum=1;
			$(this).val('1');
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		pzsingledomainnum=1;
		$(this).val('1');
		tips = "对不起，您填写的数字格式有误，必须是1-250的纯数字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($(window).height()>900){
			if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
				$('.setnoticebox').css({'padding-right': '20px'});
			}else{
			    $('.setnoticebox').css({'padding-right': '30px'});
		    }
	}
})


$(document).on('click','#pzmultidomainnum .shang #remove',function(){
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var _this = $(this).parent();
	var pzmultidomainnum=parseFloat(_this.find('input').val()) - parseFloat(1);
	if (pzmultidomainnum < 0) {
		tips = "通配符数量不能小于0";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($(window).height()>900){
			if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
				$('.setnoticebox').css({'padding-right': '20px'});
			}else{
			    $('.setnoticebox').css({'padding-right': '30px'});
		    }
		}
})



$(document).on('click','#pzmultidomainnum .shang #add',function(){
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	
	var _this = $(this).parent();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var _this = $(this).parent();
	var pzmultidomainnum=parseFloat(_this.find('input').val()) + parseFloat(1);
	if (pzmultidomainnum > 250) {
		tips = "通配符数量不能大于250";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($(window).height()>900){
		if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
			$('.setnoticebox').css({'padding-right': '20px'});
		}else{
			$('.setnoticebox').css({'padding-right': '30px'});
		}
	}
})

$(document).on('change','#pzmultidomainnum input',function(){
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzedition=$('.pz_edition p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var reg = /^\d{1,3}$/;
	var pzmultidomainnum=$(this).val();
	if(reg.test(pzmultidomainnum)){
		if (pzmultidomainnum > 250 || pzmultidomainnum < 0){
			tips = "通配符数量必须是0-250的纯数字";
			pzmultidomainnum=0;
			$(this).val('0');
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips = "对不起，您填写的数字格式有误，必须是0-250的纯数字";
		pzmultidomainnum=1;
		$(this).val('1');
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var pzordernumber=$('.buyordernumber em input').val();
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(price);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
					autoExpandHorizontalScroll: true,
					updateOnContentResize: true
				},
				scrollButtons: {
					enable: false
				},
				scrollbarPosition: "outside"
			});
		}				
	})
	if($(window).height()>900){
			if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
				$('.setnoticebox').css({'padding-right': '20px'});
			}else{
			    $('.setnoticebox').css({'padding-right': '30px'});
		    }
		}
})

$(document).on('click','#confirm_configpro',function(){
	var nowliindexnum=$('.nowliindexnum').val();
	var pztype=$('.pz_type p .cur').attr('datavalue');
	var pzsigntype=$('.pz_signtype p .cur').attr('datavalue');
	if(pztype=="代码签名"){
		var pzedition=pzsigntype;
	}else{
		var pzedition=$('.pz_edition p .cur').attr('datavalue');
	}
	var pzbrands=$('.pz_brands p .cur').attr('datavalue');
	var pzalgorithm=$('.pz_algorithm p .cur').attr('datavalue');
	var pzsafelevel=$('.pz_safelevel p .cur').attr('datavalue');
	var pzfits=$('.pz_fits p .cur').attr('datavalue');
	var pzbuynum=$('.pzbuycerttimes em input').val();
	var pzsingledomainnum=$('#pzsingledomainnum input').val();
	var pzmultidomainnum=$('#pzmultidomainnum input').val();
	var pzordernumber=$('.buyordernumber em input').val();
	var standardprice=$('.feiydxs1 span small').html();
	var disc_price=$('.feiydxs1 span .disc_price').val();
	var totaldomainnum=parseInt(pzsingledomainnum)+parseInt(pzmultidomainnum);
	
	if(totaldomainnum<3 && pzfits=="多域名"){
		tips = "多域名证书，单域名数量与通配符数量相加不能少于3个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var propzcontent=pzbrands+'/'+pztype+'/'+pzedition+'/'+pzalgorithm+'/'+pzsafelevel+'/'+pzfits;
	
	if(nowliindexnum>0){
		var html='<input type="hidden" class="propzcontent" value="'+propzcontent+'"><input type="hidden" class="singlelistnum" value="'+pzsingledomainnum+'"><input type="hidden" class="multilistnum" value="'+pzmultidomainnum+'"><input type="hidden" class="buylistnum" value="'+pzbuynum+'"><input type="hidden" class="ordernumlistnum" value="'+pzordernumber+'"><input type="hidden" class="standardpricelistnum" value="'+standardprice+'"><input type="hidden" class="disc_pricelistnum" value="'+disc_price+'"><p>产品配置：'+propzcontent+'</p><p>订单数量：'+pzordernumber+'个</p><p>订阅年份：'+pzbuynum+'年</p><p>标准报价：'+standardprice+'</p><p>优惠报价：'+disc_price+'</p><div class="cover"><div class="editorlayer"><a href="javascript:;" class="chengse unline delquatationpro">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" class="chengse unline editquatationpro">编辑</a></div></div>';
		$('.quotationbox li').eq(nowliindexnum).html(html);
	}else{
	    var html='<li><input type="hidden" class="propzcontent" value="'+propzcontent+'"><input type="hidden" class="singlelistnum" value="'+pzsingledomainnum+'"><input type="hidden" class="multilistnum" value="'+pzmultidomainnum+'"><input type="hidden" class="buylistnum" value="'+pzbuynum+'"><input type="hidden" class="ordernumlistnum" value="'+pzordernumber+'"><input type="hidden" class="standardpricelistnum" value="'+standardprice+'"><input type="hidden" class="disc_pricelistnum" value="'+disc_price+'"><p>产品配置：'+propzcontent+'</p><p>订单数量：'+pzordernumber+'个</p><p>订阅年份：'+pzbuynum+'年</p><p>标准报价：'+standardprice+'</p><p>优惠报价：'+disc_price+'</p><div class="cover"><div class="editorlayer"><a href="javascript:;" class="chengse unline delquatationpro">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:;" class="chengse unline editquatationpro">编辑</a></div></div></li>';
		$('.quotationbox').append(html);
		
	}
	$('.config_orderpro').removeClass('show');
	$("#contentnotice_3").mCustomScrollbar("update");
	setTimeout(function() {
	   $("#contentnotice_3").mCustomScrollbar("update");
	}, 100);
	if($(window).height()>900){
		if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
			$('.setnoticebox').css({'padding-right': '20px'});
		}else{
		    $('.setnoticebox').css({'padding-right': '30px'});
	    }
	}
})

$(document).on('click','.editquatationpro',function(){
	var nowliindex=$(this).closest('li').index();
	var propzcontent=$(this).closest('li').find('.propzcontent').val();
	var propzcontentdata=propzcontent.split('/');
	var pztype=propzcontentdata[1];
	if(pztype=="代码签名"){
		var pzedition="标准版";
		var pzsigntype=propzcontentdata[2];
	}else{
		var pzedition=propzcontentdata[2];
		var pzsigntype="云上签名";
	}
	var pzbrands=propzcontentdata[0];
	var pzalgorithm=propzcontentdata[3];
	var pzsafelevel=propzcontentdata[4];
	var pzfits=propzcontentdata[5];
	var pzbuynum=$(this).closest('li').find('.buylistnum').val();
	var pzsingledomainnum=$(this).closest('li').find('.singlelistnum').val();
	var pzmultidomainnum=$(this).closest('li').find('.multilistnum').val();
	var pzordernumber=$(this).closest('li').find('.ordernumlistnum').val();
	var discprice=$(this).closest('li').find('.disc_pricelistnum').val();
	$('.config_orderpro').addClass('show');
	$('.buycertbottom .feiydxs1 #confirm_configpro').removeClass('generatenoticepaper');
	$('.buycertbottom .feiydxs1 #confirm_configpro').removeClass('generate_quotation');
	$('.buycertbottom .feiydxs1 #confirm_configpro').removeClass('generate_contract');
	var url="public.html";
	var action="getnewbaojiaorder";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'pztype':pztype,
		  'pzedition':pzedition,
		  'pzsigntype':pzsigntype,
		  'pzbrands':pzbrands,
		  'pzalgorithm':pzalgorithm,
		  'pzsafelevel':pzsafelevel,
		  'pzfits':pzfits,
		  'pzbuynum':pzbuynum,
		  'pzsingledomainnum':pzsingledomainnum,
		  'pzmultidomainnum':pzmultidomainnum,
		  'pzordernumber':pzordernumber
		},		    
		beforeSend:function(){
			
		},			
		success:function(data){
			//console.log(data);
			var html=data.split("|*|")[0];
			var price=data.split("|*|")[1];
			$('.pzquotationbox').html(html);
			$('.feiydxs1 span small').html(price);
			$('.feiydxs1 span .disc_price').val(discprice);
			$('.nowliindexnum').val(nowliindex);
			$("#content_4").mCustomScrollbar({
				autoHideScrollbar: true,
				theme: "light-thin",
				advanced: {
				    autoExpandHorizontalScroll: true,
				    updateOnContentResize: true
				},
				scrollButtons: {
				    enable: false
				},
				scrollbarPosition: "outside"
			});
			
		}				
	})
	if($('.setnoticebox .mCSB_container').height() > $('.setnoticebox').height()){
		$('.setnoticebox').css({'padding-right': '20px'});
	}else{
		$('.setnoticebox').css({'padding-right': '30px'});
	}
})
$(document).on('click','.delquatationpro',function(){
	var nowliindex=$(this).closest('li').index();
	
	var action="changwxlogin";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		beforeSend: function() {
			$(".tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html('<img src="images/erweima.jpg">');
		},
		success:function(data){
			$(".tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
			$(".tzxboxs").fadeIn();
		}
	})    
	
	$('#vercode').val('');
	$('#getcheckcode13').html('<a href="javascript:;">获取验证码</a>');
	var htmlcontent='<div class="juzhong zhuxiaoico pd3"><img src="images/zhuxiaoico.png"></div><div class="zhuxiaotxt ptb20"><h3>亲，您确定要删除该产品吗？</h3><P>产品删除后，如需再次添加会增加工作量的，建议直接修改。</P></div><div class="juzhong pt3"><a href="javascript:;" class="btn mr20" id="confirmdeleteorderpro" datalinum="'+nowliindex+'">确定删除</a><a href="javascript:;" class="btnhover guanbi">我再想想</a></div>';
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer2').html(htmlcontent);
	$('.tzxboxs .tanbiaodan .modifymemberlayer').removeClass('refundheight');
	$('.tzxboxs .tanbiaodan .modifymemberlayer').addClass('wechatheight');
	$('.tzxboxs .tanbiaodan .modifymemberlayer').removeClass('mobileheight');
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1').animate({left:"0%"},100);
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer2').animate({left:"100%"},100);
	$('.tzxboxs .tanbiaodan h2').html('安全验证');
	
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name="checkmembertype"]').prop('checked', false);
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype #checkmembertype2').prop('checked', true);
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbymobile').hide();
	$('.tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat').fadeIn();
	$('.tzxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc').html('请使用微信扫码安全验证');
	var txt1=$(this).attr('datatitle');
	var txt=$(this).attr('datavalue');
	$("#gtantitle").val('删除订单信息');
	$(".tzxboxs .zhenshuan .zhuxiaotxt h3").html(txt);
	$(".tzxboxs").fadeIn();
	setsafecheckewm();
})

$(document).on('click','#m_next',function(){
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
	//var tantitle=_this5.find('#tantitle').val();
	_this4.find('h2').html('删除订单信息');
	_this3.find('.memberlayer1').animate({left:"-100%"},100);
	_this3.find('.memberlayer2').animate({left:"0px"},100);
})

function setsafecheckewm() {
		var action="setsafecheckewm";
		var wechaturl1=$('.tzxboxs .modifymemberlayer .memberlayer1 #checkbywewechat .wenzsc');
		var scene_id=$('.tzxboxs #checkbywewechat .loginewm img').attr('data-sceneid');
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
					setTimeout("tmovetonextlayer()", 2000);
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
							$(".tzxboxs .tanbiaodan .modifymemberlayer .memberlayer1 #checkbywewechat .loginewm").html(data);
							setTimeout('setsafecheckewm()', 2000);
						}
					})
				}else{
					setTimeout('setsafecheckewm()', 2000);
				}
			}
		})
	}	
	
function tmovetonextlayer(){
	var wechaturl=$('.tzxboxs .tanbiaodan .modifymemberlayer');
	var wechaturl1=$('.tzxboxs .tanbiaodan h2');
	var wechaturl2=$('.tzxboxs .tanbiaodan #gtantitle');
	wechaturl.removeClass('wechatheight');
	wechaturl.addClass('wechatheight');
	wechaturl.find('.memberlayer1').animate({left:"-100%"},100);
	wechaturl.find('.memberlayer2').animate({left:"0px"},100);
	var tantitle=wechaturl2.val();
	wechaturl1.html(tantitle);
}

$(document).on('click','#confirmdeleteorderpro',function(){
	var nowlinum=$(this).attr('datalinum');
	$('.tzxboxs').fadeOut();
	$('.quotationbox li').eq(nowlinum).remove();
	
})

$(document).on('click','.generate_quotation',function(){
	var companyname=$('#company_name').val();
	if(!dyfrom_min(companyname,8)){
		tips="单位名称不能少于4个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	
	var lx_name=$('#lx_name').val();
	if(!dyfrom_min(lx_name,4)){
		tips="联系人不能少于2个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	
	var lx_mobile=$('#lx_mobile').val();
	if(!dyfrom_null(lx_mobile)){
		tips="联系电话不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	var quotationunit=$('#quotationunit span i').html();
	var quotationbox="";
	$('.quotationbox li').slice(1).each(function(index, element){
		if(index==0){
			quotationbox=$(this).find('.propzcontent').val()+"/"+$(this).find('.singlelistnum').val()+"/"+$(this).find('.multilistnum').val()+"/"+$(this).find('.buylistnum').val()+"/"+$(this).find('.ordernumlistnum').val()+"/"+$(this).find('.standardpricelistnum').val()+"/"+$(this).find('.disc_pricelistnum').val();
		}else{
			quotationbox=quotationbox+"|-|"+$(this).find('.propzcontent').val()+"/"+$(this).find('.singlelistnum').val()+"/"+$(this).find('.multilistnum').val()+"/"+$(this).find('.buylistnum').val()+"/"+$(this).find('.ordernumlistnum').val()+"/"+$(this).find('.standardpricelistnum').val()+"/"+$(this).find('.disc_pricelistnum').val();
		}
		
	})
	if(!dyfrom_null(quotationbox)){
		tips="订单信息不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	var active_info=$('#active_info').val();
	if ($('#issulotion').is(':checked')) {
	    var issolutionval=1;
	} else {
	    var issolutionval=0;
	}
	var url="public.html";
	var action="generate_quotation";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'companyname':companyname,
		  'lx_name':lx_name,
		  'lx_mobile':lx_mobile,
		  'quotationunit':quotationunit,
		  'quotationbox':quotationbox,
		  'active_info':active_info,
		  'issolution':issolutionval
		},		    
		beforeSend:function(){
			$('.buycertbottom .feiydxs1 .btnhover').addClass('btnhui').html('生成中').removeClass('generate_quotation');
		},			
		success:function(data){
			//console.log(data);
			window.setTimeout(function(){
			    window.location.href=data;
			}, 100);
			
			var pdfzipurl=data.replace(/\s/g,'');
			var action1="clearmpdfzip";
			$.ajax({
				type:'POST',
				url:url,
				data:{
					'action':action1,
					'pdfzipurl':pdfzipurl
				},
				beforeSend:function(){},
				success:function(data1){
				},
			})
			$('.buycertbottom .feiydxs1 .btnhover').addClass('generate_quotation').html('生成报价单').removeClass('btnhui');
		}				
	})
})
$(document).on('click','.generate_contract',function(){
	var companyname=$('#company_name').val();
	if(!dyfrom_min(companyname,8)){
		tips="单位名称不能少于4个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	
	var uscc=$('#uscc').val();
	if(!dyfrom_min(uscc,18)){
		tips="统一社会信用代码不能少于18个字符";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	
	
	var quotationunit=$('#quotationunit span i').html();
	var quotationbox="";
	$('.quotationbox li').slice(1).each(function(index, element){
		if(index==0){
			quotationbox=$(this).find('.propzcontent').val()+"/"+$(this).find('.singlelistnum').val()+"/"+$(this).find('.multilistnum').val()+"/"+$(this).find('.buylistnum').val()+"/"+$(this).find('.ordernumlistnum').val()+"/"+$(this).find('.standardpricelistnum').val()+"/"+$(this).find('.disc_pricelistnum').val();
		}else{
			quotationbox=quotationbox+"|-|"+$(this).find('.propzcontent').val()+"/"+$(this).find('.singlelistnum').val()+"/"+$(this).find('.multilistnum').val()+"/"+$(this).find('.buylistnum').val()+"/"+$(this).find('.ordernumlistnum').val()+"/"+$(this).find('.standardpricelistnum').val()+"/"+$(this).find('.disc_pricelistnum').val();
		}
		
	})
	if(!dyfrom_null(quotationbox)){
		tips="订单信息不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	//var active_info=$('#active_info').val();
	
	var url="public.html";
	var action="generate_contract";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action,
		  'companyname':companyname,
		  'uscc':uscc,
		  'quotationunit':quotationunit,
		  'quotationbox':quotationbox,
		},		    
		beforeSend:function(){
			$('.buycertbottom .feiydxs1 .btnhover').addClass('btnhui').html('生成中').removeClass('generate_contract');
		},			
		success:function(data){
			//console.log(data);
			window.setTimeout(function(){
			    window.location.href=data;
			}, 100);
			
			var pdfzipurl=data.replace(/\s/g,'');
			var action1="clearmpdfzip";
			$.ajax({
				type:'POST',
				url:url,
				data:{
					'action':action1,
					'pdfzipurl':pdfzipurl
				},
				beforeSend:function(){},
				success:function(data1){
				},
			})
			$('.buycertbottom .feiydxs1 .btnhover').addClass('generate_contract').html('生成合同').removeClass('btnhui');
		}				
	})
})


$(document).on('change','.disc_price',function(){
	const $input = $(this);
	    const value = $input.val().trim();
	
	    // 清除前后空格后如果为空，可以恢复默认值或清空
	    if (value === '') {
	        // 可选：恢复默认值
	        $input.val($('.feiydxs1 span small').html());
	        return;
	    }
	
	    // 尝试解析数值
	    let num = parseFloat(value.replace(/,/g, '')); // 去掉所有逗号再转数字
	
	    // 判断是否为有效数字
	    if (isNaN(num)) {
	        // 不是数字，提示错误
	        let tips = "对不起，输入的不是有效数字，请输入如 1,700.00 的金额格式";
	        $('#alert1 .sy-content').html(tips);
	        syalert.syopen('alert1');
	
	        // 恢复之前的默认值
	        $input.val($('.feiydxs1 span small').html());
	        return;
	    }
	
	    // 格式化为带千分位、保留两位小数的字符串
	    // toLocaleString 可以自动加千分位，fix小数位
	    let formatted = num.toLocaleString('en-US', {
	        minimumFractionDigits: 2,
	        maximumFractionDigits: 2
	    });
	
	    // 写回输入框
	    $input.val(formatted);
})

$(document).on('click','.tanbiaodan .pd30 form #checkmembertype label input',function(){
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

$(document).on('click','#getcheckcode13 a',function(){
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
	settime13($(this).parent()); 		
})
var time = 180;
function settime13(obj){
			if(time==0){
				$(obj).html('<a href="javascript:;">重新获取</a>');
				$(obj).removeClass('yanzhengbtnactive');
				time = 180;
				return;
			}else{
				if($(".tzxboxs").css("display")=="block"){
					var timer3=setTimeout(function() {
						settime13(obj);
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