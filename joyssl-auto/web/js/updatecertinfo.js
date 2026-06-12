$(document).ready(function() {
     // 确保 DOM 加载完成后再执行
	 var activeid=$('#activeid').val();
     $('.piclist').each(function(index) {
         var $this = $(this); // 缓存当前对象
         
         // 1. 直接获取 DOM 元素对象，而不是 ID 字符串
         var upbtnDom = $this.find('.grids-icon')[0]; 
		 
         var litpicInput = $this.find('.inputwenben'); // 获取输入框对象
         var picImg = $this.find('.grids-icon img');   // 获取图片对象
 
         // 2. 安全检查：如果找不到元素，跳过本次循环，防止报错
         if (!upbtnDom) return; 
 
         var uploader = new plupload.Uploader({
             runtimes: 'html5,flash,silverlight,html4',
             browse_button: upbtnDom, // 【关键修改】直接传入 DOM 对象
             url: "public.html?action=uploadcheckpic&activeid="+activeid+"&filename="+litpicInput.attr('id'),
             flash_swf_url: 'plupload/Moxie.swf',
             silverlight_xap_url: 'plupload/Moxie.xap',
             filters: {
                 max_file_size: '1mb',
                 mime_types: [
                     { title: "files", extensions: "jpg,png,jpeg" }
                 ]
             },
             multi_selection: false,
             init: {
                 FilesAdded: function(up, files) {
                     uploader.start();
					 
                 },
                 FileUploaded: function(up, file, info) {
                     // 👇 加上这一行，看浏览器 F12 控制台里打印出来什么！
                     //console.log("【图片接口真实返回】", info.response);
                 
                     try {
                         var data = $.parseJSON(info.response);
                         var picinfo = data.pic;
                         litpicInput.val(picinfo);
                         picImg.attr('src', picinfo);
						 
						 
						 var activeid = $('#activeid').val();
						 var company = $('#company').val();
						 var m_taxpayercode = $('#m_taxpayercode').val();
						 var buniness_category = $('#buniness_categoryval').val();
						 
						 // 注意：这里使用了 .attr('data-value')，确保HTML中有这个属性
						 var country = $('.s_country .country').attr('data-value');
						 var m_country = $('#m_country').attr('data-value');
						 
						 var province = $('#province').val();
						 var city = $('#city').val();
						 var place = $('#place').val();
						 var mobile = $('#mobile').val();
						 var email = $('#email').val();
						 var zcode = $('#zcode').val();
						 
						 var m_company = $('#m_company').val();
						 var m_part = $('#m_part').val();
						 var mf_name = $('#mf_name').val();
						 var ml_name = $('#ml_name').val();
						 var m_cardid = $('#m_cardid').val();
						 var m_email = $('#m_email').val(); // 只保留一个
						 var m_mobile = $('#m_mobile').val();
						 var m_place = $('#m_place').val();
						 var m_province = $('#m_province').val();
						 var m_city = $('#m_city').val();
						 var m_zcode = $('#m_zcode').val();
						 
						 var company_en = $('#company_en').val();
						 var place_en = $('#place_en').val();
						 var handler_py = $('#handler_py').val();
						 var borthdate = $('#borthdate').val();
						 var period_of_validity = $('#period_of_validity').val();
						 // 原代码中重复定义了 period_of_validity，这里保留一个即可
						 var legal_person = $('#legal_person').val();
						 var legal_person_py = $('#legal_person_py').val();
						 var legal_person_type = $('#legal_person_type').val();
						 var enlegal_person_type = $('#enlegal_person_type').val();
						 var authorization_date = $('#authorization_date').val();
						 var qcc_url = $('#qcc_url').val();
						 var qcc_screenshot = $('#qcc_screenshot').val();
						 var frond_id_card = $('#frond_id_card').val();
						 var back_id_card = $('#back_id_card').val();
						 var holding_frond_id_card = $('#holding_frond_id_card').val();
						 var holding_back_id_card = $('#holding_back_id_card').val();
						 var business_license = $('#business_license').val();
						 var authorization_pic = $('#authorization_pic').val();
						 var invoice_pic = $('#invoice_pic').val();
						 var proof_address = $('#proof_address').val();
						 var incorporation = $('#incorporation').val();
						 var incorporation_form = $('#incorporation_form').val();
						 var ukeyorderno = $('#ukeyorderno').val();
						  
						 var action = "updatecheckfile";
						 var url = "public.html";
						  
						 $.ajax({
						     type: "POST",
						     url: url,
						     data: {
						         'action': action,
						         'activeid': activeid,
						         'company': company,
						         'm_taxpayercode': m_taxpayercode,
						         'buniness_category': buniness_category,
						         'country': country,
						         'province': province,
						         'city': city,
						         'place': place,
						         'mobile': mobile,
						         'email': email,
						         'zcode': zcode,
						         'm_company': m_company,
						         'm_part': m_part,
						         'mf_name': mf_name,
						         'ml_name': ml_name,
						         'm_cardid': m_cardid,
						         'm_email': m_email,      // 修复：去除了重复项
						         'm_mobile': m_mobile,    // 补全：之前漏传了
						         'm_place': m_place,      // 补全
						         'm_country': m_country,  // 补全
						         'm_province': m_province,// 补全
						         'm_city': m_city,        // 补全
						         'm_zcode': m_zcode,      // 补全
						         'company_en': company_en,// 补全
						         'place_en': place_en,    // 补全
						         'handler_py': handler_py,// 补全
						         'borthdate': borthdate,  // 补全
						         'period_of_validity': period_of_validity, // 补全
						         'legal_person': legal_person, // 补全
						         'legal_person_py': legal_person_py, // 补全
						 		 'legal_person_type': legal_person_type, // 补全
						 		 'enlegal_person_type': enlegal_person_type, // 补全
						 		 'authorization_date': authorization_date, // 补全
						         'qcc_url': qcc_url,      // 补全
						         'qcc_screenshot': qcc_screenshot, // 补全
						         'frond_id_card': frond_id_card, // 补全
						         'back_id_card': back_id_card, // 补全
						         'holding_frond_id_card': holding_frond_id_card, // 补全
						         'holding_back_id_card': holding_back_id_card, // 补全
						         'business_license': business_license, // 补全
						         'authorization_pic': authorization_pic, // 补全
						         'invoice_pic': invoice_pic, // 补全
						         'proof_address': proof_address ,// 补全
						 		 'incorporation': incorporation ,// 补全
						 			 'incorporation_form': incorporation_form ,// 补全
						 			 'ukeyorderno': ukeyorderno // 补全
						     },
						     beforeSend: function(){
						         // 可以在这里添加 loading 效果
						         // $('#updatecheckfile').text('提交中...');
						     },
						     success: function(data){
						 			 //console.log(data);
						         //var tips = "资料更新成功，请刷新检查";
						         //$('#alert1 .sy-content').html(tips);
						         // 确保 syalert 对象已定义
						         //syalert.syopen('alert1');
						     },
						     error: function(){
						         var tips = "资料更新失败，请刷新检查";
						         $('#alert1 .sy-content').html(tips);
						 		syalert.syopen('alert1');
						     }
						 });
                     } catch (e) {
                         console.error("JSON解析错误", e);
                     }
                 },
                 Error: function(up, err) {
                     tips="上传出错了，图片大于1M或者格式出错了";
                     $('#alert1 .sy-content').html(tips);
                     syalert.syopen('alert1');
                     return false;
                 }
             }
         });
 
         uploader.init();
     });
	 
	 var uploadBtnDom = document.getElementById("uploadproof_address"); 
	 if(uploadBtnDom){
	     // PDF 上传 → 改名 uploaderPdf
	     var uploaderPdf = new plupload.Uploader({
	         runtimes: 'html5,flash,silverlight,html4',
	         browse_button: uploadBtnDom,
	         url: "public.html?action=uploadcheckfile&activeid="+activeid+"&filename="+$('#proof_address').attr('id'),
	         flash_swf_url: 'plupload/Moxie.swf',
	         silverlight_xap_url: 'plupload/Moxie.xap',
	         filters: { max_file_size: '4mb', mime_types: [{ title: "files", extensions: "pdf" }] },
	         multi_selection: false,
	         init: {
	             FilesAdded: function(up, files) {
	                 uploaderPdf.start(); // 用新变量名
	             },
	             FileUploaded: function(up,file,info) {
	                 try {
	                     var data = $.parseJSON(info.response);
	                     var picinfo = data.pic;
	                     var picname = data.name;
	                     $('#proof_address').val(picinfo);
	                     $('.uploadproof_addressfile .viewfile1').html('<a href="'+picinfo+'" target="_blank" class="chengse">浏览</a>').show();
						 $('.uploadproof_addressfile .viewfile2 a').html('重新上传');
	                 } catch (e) {
	                     console.error("解析失败", e);
	                 }
	             },
	             Error: function(up, err) {
	                 alert("PDF上传失败：" + err.message);
	             }
	         }
	     });
	     uploaderPdf.init();
	 }
	 
	 var uploadBtnDom1 = document.getElementById("uploadincorporation_form");
	 if(uploadBtnDom1){
	     // PDF 上传 → 改名 uploaderPdf
	     var uploaderPdf1 = new plupload.Uploader({
	         runtimes: 'html5,flash,silverlight,html4',
	         browse_button: uploadBtnDom1,
	         url: "public.html?action=uploadcheckfile&activeid="+activeid+"&filename="+$('#incorporation_form').attr('id'),
	         flash_swf_url: 'plupload/Moxie.swf',
	         silverlight_xap_url: 'plupload/Moxie.xap',
	         filters: { max_file_size: '4mb', mime_types: [{ title: "files", extensions: "pdf" }] },
	         multi_selection: false,
	         init: {
	             FilesAdded: function(up, files) {
	                 uploaderPdf1.start(); // 用新变量名
	             },
	             FileUploaded: function(up,file,info) {
	                 try {
	                     var data = $.parseJSON(info.response);
	                     var picinfo = data.pic;
	                     var picname = data.name;
	                     $('#incorporation_form').val(picinfo);
	                     $('.uploadincorporation_formfile .viewfile1').html('<a href="'+picinfo+'" target="_blank" class="chengse">浏览</a>').show();
						 $('.uploadincorporation_formfile .viewfile2 a').html('重新上传');
	                 } catch (e) {
	                     console.error("解析失败", e);
	                 }
	             },
	             Error: function(up, err) {
	                 alert("PDF上传失败：" + err.message);
	             }
	         }
	     });
	     uploaderPdf1.init();
	 }
 });
 
 // 建议使用 .on() 替代 .live()，兼容性更好
 // 如果 #updatecheckfile 是动态生成的元素，这样写也能生效
 $(document).on('click', '#updatecheckfile', function(){
     
     // 1. 获取所有表单值
     var activeid = $('#activeid').val();
     var company = $('#company').val();
     var m_taxpayercode = $('#m_taxpayercode').val();
     var buniness_category = $('#buniness_categoryval').val();
     
     // 注意：这里使用了 .attr('data-value')，确保HTML中有这个属性
     var country = $('.s_country .country').attr('data-value');
     var m_country = $('#m_country').attr('data-value');
     
     var province = $('#province').val();
     var city = $('#city').val();
     var place = $('#place').val();
     var mobile = $('#mobile').val();
     var email = $('#email').val();
     var zcode = $('#zcode').val();
     
     var m_company = $('#m_company').val();
     var m_part = $('#m_part').val();
     var mf_name = $('#mf_name').val();
     var ml_name = $('#ml_name').val();
     var m_cardid = $('#m_cardid').val();
     var m_email = $('#m_email').val(); // 只保留一个
     var m_mobile = $('#m_mobile').val();
     var m_place = $('#m_place').val();
     var m_province = $('#m_province').val();
     var m_city = $('#m_city').val();
     var m_zcode = $('#m_zcode').val();
     
     var company_en = $('#company_en').val();
     var place_en = $('#place_en').val();
     var handler_py = $('#handler_py').val();
     var borthdate = $('#borthdate').val();
     var period_of_validity = $('#period_of_validity').val();
     // 原代码中重复定义了 period_of_validity，这里保留一个即可
     var legal_person = $('#legal_person').val();
     var legal_person_py = $('#legal_person_py').val();
	 var legal_person_type = $('#legal_person_type').val();
	 var enlegal_person_type = $('#enlegal_person_type').val();
     var authorization_date = $('#authorization_date').val();
     var qcc_url = $('#qcc_url').val();
     var qcc_screenshot = $('#qcc_screenshot').val();
     var frond_id_card = $('#frond_id_card').val();
     var back_id_card = $('#back_id_card').val();
     var holding_frond_id_card = $('#holding_frond_id_card').val();
     var holding_back_id_card = $('#holding_back_id_card').val();
     var business_license = $('#business_license').val();
     var authorization_pic = $('#authorization_pic').val();
     var invoice_pic = $('#invoice_pic').val();
     var proof_address = $('#proof_address').val();
	 var incorporation = $('#incorporation').val();
	 var incorporation_form = $('#incorporation_form').val();
	 var ukeyorderno = $('#ukeyorderno').val();
 
     var action = "updatecheckfile";
     var url = "public.html";
 
     $.ajax({
         type: "POST",
         url: url,
         data: {
             'action': action,
             'activeid': activeid,
             'company': company,
             'm_taxpayercode': m_taxpayercode,
             'buniness_category': buniness_category,
             'country': country,
             'province': province,
             'city': city,
             'place': place,
             'mobile': mobile,
             'email': email,
             'zcode': zcode,
             'm_company': m_company,
             'm_part': m_part,
             'mf_name': mf_name,
             'ml_name': ml_name,
             'm_cardid': m_cardid,
             'm_email': m_email,      // 修复：去除了重复项
             'm_mobile': m_mobile,    // 补全：之前漏传了
             'm_place': m_place,      // 补全
             'm_country': m_country,  // 补全
             'm_province': m_province,// 补全
             'm_city': m_city,        // 补全
             'm_zcode': m_zcode,      // 补全
             'company_en': company_en,// 补全
             'place_en': place_en,    // 补全
             'handler_py': handler_py,// 补全
             'borthdate': borthdate,  // 补全
             'period_of_validity': period_of_validity, // 补全
             'legal_person': legal_person, // 补全
             'legal_person_py': legal_person_py, // 补全
			 'legal_person_type': legal_person_type, // 补全
			 'enlegal_person_type': enlegal_person_type, // 补全
			 'authorization_date': authorization_date, // 补全
             'qcc_url': qcc_url,      // 补全
             'qcc_screenshot': qcc_screenshot, // 补全
             'frond_id_card': frond_id_card, // 补全
             'back_id_card': back_id_card, // 补全
             'holding_frond_id_card': holding_frond_id_card, // 补全
             'holding_back_id_card': holding_back_id_card, // 补全
             'business_license': business_license, // 补全
             'authorization_pic': authorization_pic, // 补全
             'invoice_pic': invoice_pic, // 补全
             'proof_address': proof_address ,// 补全
			 'incorporation': incorporation ,// 补全
			 'incorporation_form': incorporation_form ,// 补全
			 'ukeyorderno': ukeyorderno // 补全
         },
         beforeSend: function(){
             // 可以在这里添加 loading 效果
             // $('#updatecheckfile').text('提交中...');
         },
         success: function(data){
			 //console.log(data);
             var tips = "资料更新成功，请刷新检查";
             $('#alert1 .sy-content').html(tips);
             // 确保 syalert 对象已定义
             syalert.syopen('alert1');
         },
         error: function(){
             var tips = "资料更新失败，请刷新检查";
             $('#alert1 .sy-content').html(tips);
			 syalert.syopen('alert1');
         }
     });
 });
 
 $('#downcertumcheckfile').click(function(){
	 var activeid = $('#activeid').val();
	 var url = "public.html";
	 var action="downcertumcheckfile";
	 $.ajax({
	     type: "POST",
	     url: url,
	     data: {
	         'action': action,
	         'activeid': activeid,
	     },
	     beforeSend: function(){
	       
	     },
	     success: function(data){
	         location.href = data;
			 //console.log(data);
	     }
	 });
 })
 
 $('#submitdatatocertum').click(function(){
	 $('.tjtocertumbox').fadeIn();
 })
 
$('#confirmsubmittocertum').click(function(){
	var activeid=$(this).attr('dataactiveid');
	var action="confirmsubmittocertum";
	var url="public.html";
	$.ajax({
	    type: "POST",
	    url: url,
	    data: {
	        'action': action,
	        'activeid': activeid,
	    },
	    beforeSend: function(){
	      $('.tjtocertumbox').fadeOut();
		  $('#tanchubj3 .loading').html('接口提交中，请耐心等待');
		  $('#tanchubj3').fadeIn();
	    },
	    success: function(data){
			 //console.log(data);
	        if(data==1){
				var tips = "接口提交成功，页面刷新中";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				$('.uploadcheckfilelayer').show();
				$('.submitdatatocertumlayer').hide();
				var gaction="getcertumcheckcode";
				$.ajax({
				    type: "POST",
				    url: url,
				    data: {
				        'action': gaction,
				        'activeid': activeid,
				    },
				    beforeSend: function(){
				       
				    },
					success: function(data){
						var checkcode=data;
						var filetxt=data+"-certum.pl";
						$('.checkfilebr').html(filetxt);
						$('#recordval span').html(checkcode);
					},
				});
			}else if(data==2){
				var tips = "接口提交失败";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
			}else{
				var tips = "接口提交异常";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
			}
			
			$('#tanchubj3').fadeOut();
			$('#tanchubj3 .loading').html('申请表提交中，请耐心等待');
	    }
	});
})


$('#delapptable').live('click',function(){
	var action="delovevfile";
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
			$('.uploadovfile').show();
			$('.uploadovfileok').hide();
			$('."uploadovfileok').html('');
		}
	})
})

$('#viewovevpdf').live('click',function(){
	let lastChild = $('.uploadovfileok').children().last();
	    // 判断最后一个元素是否是目标链接（匹配 id 和 class）
	    let isTarget = lastChild.is('#confirmovevtable.pending.chengse');
	    
	    // 不是目标元素才添加
	    if (!isTarget) {
	        $('.uploadovfileok').append('<a href="javascript:;" class="pending chengse" id="confirmovevtable">提交</a>');
	    }
	//$('.uploadovfileok').append('<a href="javascript:;" class="pending chengse" id="confirmovevtable">提交</a>');
})

$('#confirmovevtable').live('click',function(){
	var action="confirmovevtable";
	var url="public.html";
	var documenttype=$('.s_documenttype .select_text').html();
	var viewovevpdfurl=$('#viewovevpdf').attr('href');
	if(documenttype=="文档类型"){
		tips="请选择文档类型";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1')
		return false;
	}
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action,
			'activeid':activeid,
			'documenttype':documenttype,
		},
		beforeSend:function(){ 
			$('#tanchubj3 .loading').html(documenttype+'提交中，请耐心等待');
			$('#tanchubj3').fadeIn();
		},
		success:function(data){
			$('#tanchubj3').fadeOut();
			
			if(data==1){
				tips=documenttype+"上传成功";
				$('#confirmovevtable').hide();
				$('.uploadovfile').show();
				$('.uploadovfileok').hide();
				$('.checkfileul').show();
				$('.checkfileul').append('<li class="zuo"><span class="mr20 tname">'+documenttype+'</span><span class="mr20">已上传</span><a href="'+viewovevpdfurl+'" target="_blank" class="chengse">预览</a></li>');
				$('#tanchubj3 .loading').html('申请表提交中，请耐心等待');
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				tips=documenttype+"上传失败";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}
		}
	})
})

$('#place,#m_place').live('blur', function(){
    // 取值 + 去除左右空格
    var place = $.trim($(this).val());
    var place_qcc = $.trim($('#place_qcc').val());
    
    // 判断：两个值 不相同 → 显示提示
    if (place !== place_qcc) {
        $(this).parent().find('.certumchecktips').show();
    } else {
        // 相同 → 隐藏提示（可选，更友好）
        $(this).parent().find('.certumchecktips').hide();
    }
});

$('#m_taxpayercode').live('blur', function(){
    // 取值 + 去除左右空格
    var m_taxpayercode = $.trim($(this).val());
    var credit_no_qcc = $.trim($('#credit_no_qcc').val());

    // 判断：两个值 不相同 → 显示提示
    if (m_taxpayercode !== credit_no_qcc) {
        $(this).parent().find('.certumchecktips').show();
    } else {
        $(this).parent().find('.certumchecktips').hide();
    }
});

$('#company_en,#place_en,#handler_py,#borthdate,#period_of_validity,#legal_person,#legal_person_py,#legal_person_type,#enlegal_person_type,#authorization_date,#qcc_url,#ukeyorderno').live('blur', function(){
	var activeid = $('#activeid').val();
	var company = $('#company').val();
	var m_taxpayercode = $('#m_taxpayercode').val();
	var buniness_category = $('#buniness_categoryval').val();
	
	// 注意：这里使用了 .attr('data-value')，确保HTML中有这个属性
	var country = $('.s_country .country').attr('data-value');
	var m_country = $('#m_country').attr('data-value');
	
	var province = $('#province').val();
	var city = $('#city').val();
	var place = $('#place').val();
	var mobile = $('#mobile').val();
	var email = $('#email').val();
	var zcode = $('#zcode').val();
	
	var m_company = $('#m_company').val();
	var m_part = $('#m_part').val();
	var mf_name = $('#mf_name').val();
	var ml_name = $('#ml_name').val();
	var m_cardid = $('#m_cardid').val();
	var m_email = $('#m_email').val(); // 只保留一个
	var m_mobile = $('#m_mobile').val();
	var m_place = $('#m_place').val();
	var m_province = $('#m_province').val();
	var m_city = $('#m_city').val();
	var m_zcode = $('#m_zcode').val();
	
	var company_en = $('#company_en').val();
	var place_en = $('#place_en').val();
	var handler_py = $('#handler_py').val();
	var borthdate = $('#borthdate').val();
	var period_of_validity = $('#period_of_validity').val();
	// 原代码中重复定义了 period_of_validity，这里保留一个即可
	var legal_person = $('#legal_person').val();
	var legal_person_py = $('#legal_person_py').val();
	var legal_person_type = $('#legal_person_type').val();
	var enlegal_person_type = $('#enlegal_person_type').val();
	var authorization_date = $('#authorization_date').val();
	var qcc_url = $('#qcc_url').val();
	var qcc_screenshot = $('#qcc_screenshot').val();
	var frond_id_card = $('#frond_id_card').val();
	var back_id_card = $('#back_id_card').val();
	var holding_frond_id_card = $('#holding_frond_id_card').val();
	var holding_back_id_card = $('#holding_back_id_card').val();
	var business_license = $('#business_license').val();
	var authorization_pic = $('#authorization_pic').val();
	var invoice_pic = $('#invoice_pic').val();
	var proof_address = $('#proof_address').val();
	var incorporation = $('#incorporation').val();
	var incorporation_form = $('#incorporation_form').val();
	var ukeyorderno = $('#ukeyorderno').val();
	 
	var action = "updatecheckfile";
	var url = "public.html";
	 
	$.ajax({
	    type: "POST",
	    url: url,
	    data: {
	        'action': action,
	        'activeid': activeid,
	        'company': company,
	        'm_taxpayercode': m_taxpayercode,
	        'buniness_category': buniness_category,
	        'country': country,
	        'province': province,
	        'city': city,
	        'place': place,
	        'mobile': mobile,
	        'email': email,
	        'zcode': zcode,
	        'm_company': m_company,
	        'm_part': m_part,
	        'mf_name': mf_name,
	        'ml_name': ml_name,
	        'm_cardid': m_cardid,
	        'm_email': m_email,      // 修复：去除了重复项
	        'm_mobile': m_mobile,    // 补全：之前漏传了
	        'm_place': m_place,      // 补全
	        'm_country': m_country,  // 补全
	        'm_province': m_province,// 补全
	        'm_city': m_city,        // 补全
	        'm_zcode': m_zcode,      // 补全
	        'company_en': company_en,// 补全
	        'place_en': place_en,    // 补全
	        'handler_py': handler_py,// 补全
	        'borthdate': borthdate,  // 补全
	        'period_of_validity': period_of_validity, // 补全
	        'legal_person': legal_person, // 补全
	        'legal_person_py': legal_person_py, // 补全
			'legal_person_type': legal_person_type, // 补全
			'enlegal_person_type': enlegal_person_type, // 补全
			'authorization_date': authorization_date, // 补全
	        'qcc_url': qcc_url,      // 补全
	        'qcc_screenshot': qcc_screenshot, // 补全
	        'frond_id_card': frond_id_card, // 补全
	        'back_id_card': back_id_card, // 补全
	        'holding_frond_id_card': holding_frond_id_card, // 补全
	        'holding_back_id_card': holding_back_id_card, // 补全
	        'business_license': business_license, // 补全
	        'authorization_pic': authorization_pic, // 补全
	        'invoice_pic': invoice_pic, // 补全
	        'proof_address': proof_address ,// 补全
				 'incorporation': incorporation ,// 补全
				 'incorporation_form': incorporation_form ,// 补全
				 'ukeyorderno': ukeyorderno // 补全
	    },
	    beforeSend: function(){
	        // 可以在这里添加 loading 效果
	        // $('#updatecheckfile').text('提交中...');
	    },
	    success: function(data){
				 //console.log(data);
	        //var tips = "资料更新成功，请刷新检查";
	        //$('#alert1 .sy-content').html(tips);
	        // 确保 syalert 对象已定义
	        //syalert.syopen('alert1');
	    },
	    error: function(){
	        var tips = "资料更新失败，请刷新检查";
	        $('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
	    }
	});
})


