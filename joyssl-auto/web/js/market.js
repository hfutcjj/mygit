$('.marketnav a').live('click',function(){
	$(this).addClass('cur').siblings('a').removeClass('cur');
	var pcategory=$('.marketnav a.cur').index()+1;
	var palgorithm=$('#proalgorithm li.on').index()+1;
	var psigntype=$('#prosigntype li.on').index()+1;
	
	var ptypes=$('#proedition li.on').index()+1;
	var pfits=$('#profits li.on').index()+1;
	var yeartime=parseInt($('.proyeartime li.on').text());
	var buynum=$('.bcertnum').val();
	var isopen=0;
	if($('.buyshowbtn em').hasClass('active')){
		isopen=1;
	}
	var url="/ajaxmarketpage.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'pcategory':pcategory,
		  'palgorithm':palgorithm,
		  'psigntype':psigntype,
		  'ptypes':ptypes,
		  'pfits':pfits,
		  'yeartime':yeartime,
		  'buynum':buynum
		},
		beforeSend:function(){},
		success:function(data){
			//console.log(data);
			if(data==1){
			   tips="非法操作，请重试";
			   $('#alert1 .sy-content').html(tips);
			   syalert.syopen('alert1');
			   return false;
			}else{
				$('.marketbox').html(data).fadeIn();
				if(isopen==1){
					$('.proyeartime .moreyearslist').show();
					$('.buyshowbtn em').html('点击收起');
					$('.buyshowbtn em').addClass('active');
				}
			}
		},
	})
})

$('#proalgorithm li,#prosigntype li,#proedition li,#profits li').live('click',function(){
	$(this).addClass('on').siblings('li').removeClass('on');
	var pcategory=$('.marketnav a.cur').index()+1;
	var palgorithm=$('#proalgorithm li.on').index()+1;
	var psigntype=$('#prosigntype li.on').index()+1;
	var ptypes=$('#proedition li.on').index()+1;
	var pfits=$('#profits li.on').index()+1;
	var yeartime=parseInt($('.proyeartime li.on').text());
	var buynum=$('.bcertnum').val();
	var isopen=0;
	if($('.buyshowbtn em').hasClass('active')){
		isopen=1;
	}
	var url="/ajaxmarketpage.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'pcategory':pcategory,
		  'palgorithm':palgorithm,
		  'psigntype':psigntype,
		  'ptypes':ptypes,
		  'pfits':pfits,
		  'yeartime':yeartime,
		  'buynum':buynum
		},
		beforeSend:function(){},
		success:function(data){
			//console.log(data);
			if(data==1){
			   tips="非法操作，请重试";
			   $('#alert1 .sy-content').html(tips);
			   syalert.syopen('alert1');
			   return false;
			}else{
				$('.marketbox').html(data).fadeIn();
				if(isopen==1){
					$('.proyeartime .moreyearslist').show();
					$('.buyshowbtn em').html('点击收起');
					$('.buyshowbtn em').addClass('active');
				}
			}
		},
	})
})

$('.proyeartime li').live('click',function(){
	$('.proyeartime li').removeClass('on');
	$(this).addClass('on');
	var pcategory=$('.marketnav a.cur').index()+1;
	var palgorithm=$('#proalgorithm li.on').index()+1;
	var psigntype=$('#prosigntype li.on').index()+1;
	var ptypes=$('#proedition li.on').index()+1;
	var pfits=$('#profits li.on').index()+1;
	var yeartime=parseInt($('.proyeartime li.on').text());
	var buynum=$('.bcertnum').val();
	var isopen=0;
	if($('.buyshowbtn em').hasClass('active')){
		isopen=1;
	}
	var url="/ajaxmarketpage.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'pcategory':pcategory,
		  'palgorithm':palgorithm,
		  'psigntype':psigntype,
		  'ptypes':ptypes,
		  'pfits':pfits,
		  'yeartime':yeartime,
		  'buynum':buynum
		},
		beforeSend:function(){},
		success:function(data){
			if(data==1){
			   tips="非法操作，请重试";
			   $('#alert1 .sy-content').html(tips);
			   syalert.syopen('alert1');
			   return false;
			}else{
				$('.marketbox').html(data).fadeIn();
				if(isopen==1){
					$('.proyeartime .moreyearslist').show();
					$('.buyshowbtn em').html('点击收起');
					$('.buyshowbtn em').addClass('active');
				}
			}
		},
	})
})


function getNumInput() {
    return $('.bcertnum');
  }

  function updateValue(val) {
    const $input = getNumInput();
    // 验证：必须是正整数
    if (Number.isInteger(val) && val >= 1) {
      $input.val(val);
    }
  }

  // 加1
  $('.addnum').live('click',function() {
    const current = parseInt(getNumInput().val()) || 1;
    updateValue(current + 1);
	var pcategory=$('.marketnav a.cur').index()+1;
	var palgorithm=$('#proalgorithm li.on').index()+1;
	var psigntype=$('#prosigntype li.on').index()+1;
	var ptypes=$('#proedition li.on').index()+1;
	var pfits=$('#profits li.on').index()+1;
	var yeartime=parseInt($('.proyeartime li.on').text());
	var buynum=current + 1;
	var isopen=0;
	if($('.buyshowbtn em').hasClass('active')){
		isopen=1;
	}
	var url="/ajaxmarketpage.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'pcategory':pcategory,
		  'palgorithm':palgorithm,
		  'psigntype':psigntype,
		  'ptypes':ptypes,
		  'pfits':pfits,
		  'yeartime':yeartime,
		  'buynum':buynum
		},
		beforeSend:function(){},
		success:function(data){
			if(data==1){
			   tips="非法操作，请重试";
			   $('#alert1 .sy-content').html(tips);
			   syalert.syopen('alert1');
			   return false;
			}else{
				$('.marketbox').html(data).fadeIn();
				if(isopen==1){
					$('.proyeartime .moreyearslist').show();
					$('.buyshowbtn em').html('点击收起');
					$('.buyshowbtn em').addClass('active');
				}
			}
		},
	})
  });

  // 减1（可选，防止小于1）
  $('.removenum').live('click',function() {
    const current = parseInt(getNumInput().val()) || 1;
	var buynum=current - 1;
	if(buynum<1){
		tips="购买数量最少选一个";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
    updateValue(current - 1);
	var pcategory=$('.marketnav a.cur').index()+1;
	var palgorithm=$('#proalgorithm li.on').index()+1;
	var psigntype=$('#prosigntype li.on').index()+1;
	var ptypes=$('#proedition li.on').index()+1;
	var pfits=$('#profits li.on').index()+1;
	var yeartime=parseInt($('.proyeartime li.on').text());
	var isopen=0;
	if($('.buyshowbtn em').hasClass('active')){
		isopen=1;
	}
	var url="/ajaxmarketpage.html";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'pcategory':pcategory,
		  'palgorithm':palgorithm,
		  'psigntype':psigntype,
		  'ptypes':ptypes,
		  'pfits':pfits,
		  'yeartime':yeartime,
		  'buynum':buynum
		},
		beforeSend:function(){},
		success:function(data){
			if(data==1){
			   tips="非法操作，请重试";
			   $('#alert1 .sy-content').html(tips);
			   syalert.syopen('alert1');
			   return false;
			}else{
				$('.marketbox').html(data).fadeIn();
				if(isopen==1){
					$('.proyeartime .moreyearslist').show();
					$('.buyshowbtn em').html('点击收起');
					$('.buyshowbtn em').addClass('active');
				}
			}
		},
	})
  });
  
  $('#buymarketpro').live('click',function(){
	  var pcategory=$('.marketnav a.cur').index()+1;
	  var palgorithm=$('#proalgorithm li.on').index()+1;
	  var psigntype=$('#prosigntype li.on').index()+1;
	  var ptypes=$('#proedition li.on').index()+1;
	  var pfits=$('#profits li.on').index()+1;
	  var yeartime=parseInt($('.proyeartime li.on').text());
	  var buynum=$('.bcertnum').val();
	  
	  var action="marketcart";
	  var url="/public.php";
	  $.ajax({
	  	type:"POST",
	  	url:url,
	  	data:{
		  'action':action,
	  	  'pcategory':pcategory,
	  	  'palgorithm':palgorithm,
		  'psigntype':psigntype,
	  	  'ptypes':ptypes,
	  	  'pfits':pfits,
	  	  'yeartime':yeartime,
	  	  'buynum':buynum
	  	},
	  	beforeSend:function(){},
	  	success:function(data){
			
	  		window.location.href = "/sys/public.html?action=paycartorder";
	  	},
	  })
  })
  
  
  function adjustYearLayout() {
    const first = document.getElementById('firstList');
    const second = document.getElementById('secondList');
    const isSmall = window.innerWidth <= 680;
  
    // 获取所有年份项
    const allItems = [
      ...Array.from(first.children),
      ...Array.from(second.children)
    ];
  
    // 清空
    first.innerHTML = '';
    second.innerHTML = '';
  
    if (isSmall) {
      // 小屏：前6个放 first，后4个放 second
      allItems.slice(0, 6).forEach(li => first.appendChild(li));
      allItems.slice(6).forEach(li => second.appendChild(li));
    } else {
      // 大屏：前5个放 first，后5个放 second
      allItems.slice(0, 5).forEach(li => first.appendChild(li));
      allItems.slice(5).forEach(li => second.appendChild(li));
    }
  }
  
  // 初始化 & 监听窗口变化
  adjustYearLayout();
  window.addEventListener('resize', adjustYearLayout);
  
 
