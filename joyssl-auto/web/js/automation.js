$('.selectuse,.renewconfig,.updateconfig,.select_updateuse').click(function(){
	$('#buycertbglayer').fadeIn();
	$("#content_2").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});	
	$('.buycertlayer').addClass('show');
})

$('#bu_edition a').live('click', function() {
	$('#bu_edition a').removeClass('cur');
	$(this).addClass('cur');
})

$('#bu_buynum a').live('click', function() {
	$('#bu_buynum a').removeClass('cur');
	$(this).addClass('cur');
})

$('#bu_buynum .butips em').live('click',function(){        //0918修改
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).html('点击展开');
		$('#bu_buynum .bu_peryear1').slideUp();
	}else{
		$(this).addClass('active');
		$(this).html('点击收起');
		$('#bu_buynum .bu_peryear1').slideDown();
	}
})

$('.closebuycertlayer').live('click', function() {
	$('#buycertbglayer').fadeOut();
	$("#content_2").mCustomScrollbar("destroy");
	$('.buycertlayer').removeClass('show');
})

$('#bu_certcoupontypecheck a').live('click', function() {
	$('#bu_certcoupontypecheck a').removeClass('cur');
	$(this).addClass('cur');
	var couponnum=$(this).attr('datavalue');
	if(couponnum==1){
		$('#bu_certcouponlist').html('<p class="bucouponcode"><a href="javascript:;" datavalue="20260522112702923">20260522112702923</a></p>');
	}else if(couponnum==2){
		$('#bu_certcouponlist').html('<p class="buyinput230"><input type="text" class="inputwenben" placeholder="请输入优惠码"></p>');
	}
})

function openChat(){
    $('.homewechatlayer').fadeIn();
}
function complain(){
    $('.complainlayer').fadeIn();
}

$(document).on('keyup', '#bu_selectcert #selectautocert', function(){
    $(this).parent().find('.select_ul').slideDown();
});

$('#bu_selectcert .select_ul li').live('click',function(){
	$('#bu_selectcert #selectautocert').val($(this).html());
	$(this).parent().slideUp();
})

$('.bucouponcode a').live('click', function() {
	$('.bucouponcode a').removeClass('cur');
	$(this).addClass('cur');
})

$('.tongyix a').live('click', function() {
	$('#tiankuan').fadeIn();
	$("#content_1").mCustomScrollbar({
		autoHideScrollbar: true,
		theme: "light-thin"
	});
})

var exchange_rate = 0.8695;

function updatePayPrices() {
    var priceStr = "1800";
    var price = parseFloat(priceStr);
    if (isNaN(price) || price <= 0) {
        $('.pay-item').removeClass('has-price');
        $('.pay-price-display').html('');
        return;
    }
    $('.pay-item').each(function() {
        var isHk = $(this).attr('datavalue') === 'Alipay HK';
        var displayDiv = $(this).find('.pay-price-display');
        var targetPrice = isHk ? (price / exchange_rate) : price;
        var parts = targetPrice.toFixed(2).split('.');
        var integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var decimalPart = parts[1];
        var currencyUnit = isHk ? 'HKD' : 'CNY';
        
        $(this).addClass('has-price');
        displayDiv.html(integerPart + '<span class="decimal">.' + decimalPart + '</span> <span class="unit">' + currencyUnit + '</span>');
    });
}

$(document).ready(function () {
	$('#payertype a').live('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
        updatePayPrices();
	});
    updatePayPrices();
    setInterval("orderispay()", 3000);
});

$('.beizhutxttag em').live('click',function(){
   $('.dlmm').fadeIn();
   var activeid=$(this).attr('datavalue');
   var html=$(this).parent().find('span').html();
   if(html!="备注标签"){
    $('#bzdesigninfo').val(html);
   }else{
   	$('#bzdesigninfo').val('');   
   }
   $('#bzdesignid').val(activeid);
})

$('.p_nav dd a').live('click',function(){
	$(this).parent().parent().slideUp();
})

$('.pagescroll span').live('click',function(){
	$(this).parent().find('.p_nav').slideToggle();
	$(this).parent().toggleClass('active');
})

$(document).bind("click",function(e){
    var e = e || window.event;    //事件对象，兼容IE
    var target = e.target || e.srcElement;  //源对象，兼容火狐和IE
    while(target){
       if (target.id && target.id == "selected"){  return ; }
       target = target.parentNode;
    }  
	$('.wenbenk .select_ul').slideUp(); 
    $('.pagescroll .p_nav').slideUp(); 
})

$('.add_monitoring_plan').click(function(){
	$('.add_monitoring_layer .buycerttitle span').html('添加状态监测');
	$('#buycertbglayer').fadeIn();
	$('.buycertlayer').addClass('show');
})

$('.edit_monitoring_plan').live('click',function(){
	$('.add_monitoring_layer .buycerttitle span').html('配置状态监测');
	$('#buycertbglayer').fadeIn();
	$('.buycertlayer').addClass('show');
})

$('.selectNub .placeholder').live('click',function(e) {
	var parent = $(this).closest('.selectNub');
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.selectNub.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	
	e.stopPropagation();		
});	
 
$('.selectNub .monitorport').live('click',function(e) {
	var parent = $(this).closest('.selectNub');
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.selectNub.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
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
		if($('.firstlinenav li .cur').attr('datacurvalue')){
		  analysis_line_code=analysis_line_code + $('.firstlinenav li .cur').attr('datacurvalue');
		}
	}else{
		parent.removeClass('is-open').find('.placeholder').html($(this).find('a').html());
		parent.removeClass('is-open').find('.monitorport').val($(this).find('a').html());
	}
	
});

$('.confirm_add_monitoring_plan').live('click',function(){
	$('#buycertbglayer').fadeOut();
	$('.buycertlayer').removeClass('show');
})


$(document).ready(function(){
        changepagesize();
        changeboxright_fcwth();
        var Leftsize=$('.tablebox').scrollLeft();
    });

    jQuery(function(){

        oParent=$('#lk_scrollbar');
        oDiv1 = $('#lk_handle');
        oDiv2 = $('.dingbox');
        oDiv3 = $('.tablebox');

        //oDiv1.width(30);
        //拖动事件方法
        function moveDownSlide(l){
            if(l<0){
                l=0;
            }else if(l > oParent.width()-oDiv1.width()){
                l=oParent.width()-oDiv1.width();
            }
            oDiv1.css('left',l);
            var scale=l/(oParent.width()-oDiv1.width());
            oDiv3.scrollLeft((oDiv3[0].scrollWidth-oDiv2.width())*scale);

        }
        //鼠标拖动事件
        oDiv1[0].onmousedown=function (ev){
            ev=ev||window.event;
            var disX=ev.clientX - oDiv1.position().left;

            document.onmousemove=function (ev){
                ev=ev||window.event;
                var l=ev.clientX-disX;
                moveDownSlide(l);
            };
            document.onmouseup=function (){
                document.onmousemove=null;
                document.onmouseup=null;
            };
            // $(document).bind('selectstart',function(ev){  // 防止页面内容被选中 IE
            //     return false;
            // });
        };

    });
	
	$('.baisebox .tablebox').scroll(function(){
	    wth=$('.biaogetable table').width()-$('.biaogetable').width();
	    s_left=$(this).scrollLeft();
	    if(s_left>0 && s_left<wth){
	        $('.leftdw1').addClass('leftdw');
	    }else{
	        $('.leftdw1').removeClass('leftdw');
	    }
	    if (s_left > 120) {
	        $('.warningcont').css('position', 'static');
	    } else {
	        $('.warningcont').css('position', 'relative');
	    }
	})

