// JavaScript Document
function openChat(){
    var api = $53.createApi();
    api.push('cmd','kfclient');
    api.push('type','popup');
    api.query();
  }
(function() {var _53code = document.createElement("script");_53code.src = "https://tb.53kf.com/code/code/f98b9792423523227198d7a9d1922db90/1";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(_53code, s);})();
$(document).ready(function(){

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



	
		
		
		










