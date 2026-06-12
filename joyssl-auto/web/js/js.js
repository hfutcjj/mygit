// JavaScript Document

$(document).ready(function(){
changeboxright_fcwth();
 var i=0;
  $(".namebox a").on("click", function(e){
		e.stopPropagation();
	});
	
 $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
		  $(".namebox a").removeClass('hover');
          $(".yongtancs").hide();
		  i=0;
        } 
   });
 
 //       $(".namebox").hover(function(e){
 //            if(i==0){
	// 			$(this).addClass('hover');
 //                $(".yongtancs").show();
	// 			$(document).one("click", function(){
	// 				$(".namebox a").removeClass('hover');
	// 			    $(".yongtancs").stop().slideDown();
	// 				i=0;
	// 			});
	// 			e.stopPropagation();
 //                i=1;
 //            }else{
	// 			 $(this).removeClass('hover');
 //                 $(".yongtancs").hide();
	// 			 $(document).one("click", function(){
	// 				$(".namebox a").removeClass('hover');
	// 				$(".yongtancs").stop().slideUp();
	// 				i=0;
	// 			 });
	// 			 e.stopPropagation();
 //                 i=0;
 //            }
 
 //        })
	
	$(".namebox").hover(function(){
		$(this).find(".yongtancs").stop().slideDown();
	},function(){
		$(this).find(".yongtancs").stop().slideUp();
	})
	
	$(".navone li").hover(function(){
		var leftwidth=$('.navone .kongzhitai').width() + parseInt($('.navone .kongzhitai').css('margin-right'));
		$('.pronavdown dl:nth-child(2)').css('padding-left',leftwidth);
		$(this).find(".pronavdown").stop().slideDown();
	},function(){
		
		$(this).find(".pronavdown").stop().slideUp();
		
	})
 
$(".navtwo li").hover(function(){
		
		$(this).find(".navtwodown").stop().slideDown();
	},function(){
		
		$(this).find(".navtwodown").stop().slideUp();
		
	})

//select下拉菜单
	
	$(function(){
		$('select.select').select();
	});
	
	
	
//弹窗关闭
	
$(".close,.shimingrenz .btnhui").on('click',function(){
    $(".tanchubj").fadeOut();
})	

	
//订单详情
	
	var n=0;
        $(".nav-btnbox").click(function() {
            if(n==0){
                 $("body").addClass("menu-open")
                 n=1;
            }else  {
                 $("body").removeClass("menu-open")
                 n=0;
            }
 
        }); 
	
	 $(".ddxqbtn").click(function() {
		 
		 if(n==0){
                 $(this).addClass("cur")
			     $(this).html("关闭详情") 
			     $(".didnaxiag").slideDown();
                 n=1;
            }else  {
                 $(this).removeClass("cur")
			     $(this).html("订单详情") 
				 $(".didnaxiag").slideUp();
                 n=0;
            }

     })	
	
	
//支付选项卡	
	
	
	
	 $(".payqiehuan li").click(function() {
		$(this).addClass("cur").siblings("li").removeClass("cur")
        $(".zhifuhezi").eq($(this).index()).fadeIn().siblings(".zhifuhezi").hide()
		var action="clearsessiontime";
		var url="public.html";
		$.ajax({
			type:"POST",
			url:url,
			data:{
			  'action':action
			},
			beforeSend:function(){},
			success:function(data){}
		})
     })		
	
	
//公共选项卡	
	
	 $(".qiehuantit li").click(function() {
		 
		$(this).addClass("cur").siblings("li").removeClass("cur")
        $(".qiehuanhezi").eq($(this).index()).fadeIn().siblings(".qiehuanhezi").hide()
     })		
	
	
//	
//	$(".zhisuud").width($(".boxright").width())
//	
//  $(window).resize(function(){
//	  $(".zhisuud").width($(".boxright").width())
//	  
//  })
//	
//	
		
// $('.shaixuanboxs .btnhover').click(function(){
// 	$('.tanchubj').fadeIn();
// })	
	
	
	
})

$(".fudong li:last-child").click(function(){
     $(".boxright").animate({scrollTop: 0}, 500);
});

$(".boxright").scroll(function() {
    if ($(".boxright").scrollTop() == 0) {
		$(".fudong li:last-child").fadeOut();
    }else{
		$(".fudong li:last-child").fadeIn();
	} 
});

//2024-7-29 dns新增

$(".boxleft_two p").click(function(){
  	
  	$(this).addClass("cur");
  	$(this).next(".boxleftdown").slideDown();
  	$(this).parents("li").siblings("li").find(".boxleftdown").slideUp();
  	$(this).parents("li").siblings("li").find("p").removeClass("cur");
})


	
	
	
	
	
//表格的宽度
   function tableWidths(){
	  
    var tdWidths = 0;
    var thWidths = 0;
	var tablewidth = 0;  
	var tableFather = $(".main_table_box").outerWidth();
	   

    $('.main_table_box thead td').each(function() {  
        tdWidths += $(this).outerWidth(); 
		

    });
	
	$('.main_table_box thead th').each(function() {  
        thWidths += $(this).outerWidth(); 

    });
 
	 tablewidth = tdWidths + thWidths;
	 $('.main_table_box table').css('min-width', tablewidth - 100)
	   
	   
	 if(tablewidth > tableFather+5)
	  {
		$(".main_table_box").addClass("shadowshow")
		}
	   
	   else{
		$(".main_table_box").removeClass("shadowshow")   
		   
	   }
	   
   }
	
	tableWidths()
	
	$(window).resize(function() {

	  tableWidths();
	  changeboxright_fcwth();
	  changeresolutionrightwth();
	});
	
$('.proopen').click(function(){
	tips="功能模块升级开发中";
	$('#alert1 .sy-content').html(tips);
	syalert.syopen('alert1');
	return false;
})



function changeboxright_fcwth(){
		var totalwidth=$(window).width();
		if(totalwidth>1440){
			totalwidth=totalwidth - 270;
		}else if(totalwidth<=1440 && totalwidth>1366){
			totalwidth=totalwidth - 230;
		}else{
			totalwidth=totalwidth - 230;
		}
	 	var scrollbarWidth = getElementScrollbarWidth($('.boxright'));
		if (isFirefox()) {
			totalwidth=totalwidth - scrollbarWidth;
		}else{
			totalwidth=$('.boxright .baisebox').width()+60;
			
		}
		
	 	$('.boxright_fc').css('width',totalwidth+"px");
} 

function changeresolutionrightwth(){
		var totalwidth=$(window).width();
	    
		if(totalwidth>1440){
			totalwidth=totalwidth - 300;
		}else if(totalwidth<=1440 && totalwidth>1366){
			totalwidth=totalwidth - 260;
		}else{
			totalwidth=totalwidth - 240;
		}
	 	var scrollbarWidth = getElementScrollbarWidth($('.resolutionright'));
		if (isFirefox()) {
			totalwidth=totalwidth - scrollbarWidth;
		}else{
			totalwidth=$('.resolutionright .baisebox').width()+60;
			
		}
		
	 	$('.analysis_boxright_fc').css('width',totalwidth+"px");
}
function getElementScrollbarWidth($element) {
    if (!$element || !$element[0]) return 0;
    // 强制重排以确保样式已应用
    $element[0].offsetHeight;

    var rect = $element[0].getBoundingClientRect();
    return Math.ceil(rect.width - $element[0].clientWidth);
}

function isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
}

	
		
		
		










