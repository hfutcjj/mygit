// JavaScript Document
$(document).ready(function(){
	$(".joyssl_logo").animate({opacity: 1}, 2000);
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
		
	
	function topshow(){
		
		
		if ($(window).scrollTop() > 10) {
          $(".top").addClass("cur");
	
        } else {
		  $(".top").removeClass("cur");
        }
		
		
		if ($(window).scrollTop() > 100 && $(window).width() > 1000) {
          $(".fudong").fadeIn();
	
        } else {

		  $(".fudong").fadeOut();
        }
		
		
		
		}
	topshow()
   $(window).scroll(function() {
       topshow()
      });
      
	  
	  
	  


   // $(".syqiehuanone li").click(function () {
   //     $(this).addClass("cur").siblings("li").removeClass("cur");
   //     $(".syzhengshuhezi").eq($(this).index()).addClass("cur").siblings(".syzhengshuhezi").removeClass("cur");
   
   //  });
	

	
   $(".syqiehuantwo li").click(function () {
        $(this).addClass("cur").siblings("li").removeClass("cur");
        $(".sywentibox").eq($(this).index()).addClass("cur").siblings(".sywentibox").removeClass("cur");
   
    });
		
   $(".leixingxuanze li").click(function () {
        $(this).addClass("cur").siblings("li").removeClass("cur");
        $(".leixing").eq($(this).index()).addClass("cur").siblings(".leixing").removeClass("cur");
   
    });
		
		
		
   $(".logintit li").click(function () {
        $(this).addClass("cur").siblings("li").removeClass("cur");
        $(".loginfrom ul").eq($(this).index()).show().siblings(".loginfrom ul").hide();
   
    });
	
	
	
   $(".paybtn01").click(function () {
     
	   $(".yezf").show();
   
    });
		
   $(".paybtn02").click(function () {
     
	   $(".wxzf").show();
   
    });
		
   $(".paybtn03").click(function () {
     
	   $(".xxzz").show();
   
    });
	
	
	$(".close").click(function () {
     
	   $(".tanchubj").hide();
   
    });
		
	
	
	
			 
 
 var i=0;
  $(".yongtancs").on("click", function(e){
		e.stopPropagation();
	});
	
 $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
          $(".yongtancs").hide();
		  i=0;
        } 
   });
 
       $(".yonghusx").on("click", function(e){
            if(i==0){
                 $(".yongtancs").show();
				  $(document).one("click", function(){
						$(".yongtancs").hide();
						i=0;
					});
					e.stopPropagation();
                 i=1;
				 
			

            }else  {
                 $(".yongtancs").hide();
				  $(document).one("click", function(){
						$(".yongtancs").hide();
						i=0;
					});
					e.stopPropagation();
                 i=0;
			 
            }
 
        })


	
	
    if ($(window).width() < 1366) { 
		

	 
	    $(".footernav li").click(function(){
		  $(this).toggleClass("cur")
		  $(this).siblings("li").removeClass("cur");
		  $(this).find(".footernavdown").slideToggle();
		  $(this).siblings("li").find(".footernavdown").slideUp();
		  
		  })	
		
		
		$(".nav li").click(function(){
		$(this).siblings("li").find(".navdown").slideUp()
		$(this).addClass("cur").siblings("li").removeClass("cur");
		$(this).find(".navdown").slideDown().toggleClass("cur")
		
	 })
		$(".navdownssl dl dt").live('click',function(){
		
		$(this).parents("dl").siblings("dl").find("dd").slideUp()
		$(this).toggleClass("cur").parent("dl").siblings("dl").find("dt").removeClass("cur");
		$(this).next("dd").slideToggle()
		
	 })
		
		
		$(".dlbtns a").click(function(){
		$(this).next(".wapdlboxs").toggleClass("cur")

		
	 })
		
		
		$(".maptxst li").click(function () {
				$(this).addClass("cur").siblings("li").removeClass("cur");
				$(".lMap").eq($(this).index()).addClass("cur").siblings(".lMap").removeClass("cur");

			});

		
	
	}	 
	else{
		
		
		

		   
		$(".maptxst li").mouseenter(function () {
				$(this).addClass("cur").siblings("li").removeClass("cur");
				$(".lMap").eq($(this).index()).addClass("cur").siblings(".lMap").removeClass("cur");

			})
		
		
		
		$(".nav li").hover(function(){
			$(this).stop(true,true).find(".navdown").fadeIn(200);
		},function(){
			$(this).stop(true,true).find(".navdown").hide();
		})
		$(".dlzc").hover(function(){
			$(this).find(".yongtancs1").slideDown(300);
		},function(){
			$(this).find(".yongtancs1").hide();
		})
		
	}
	 
		

	
	
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
	
//下拉	
$('.selectbox').on('click', '.placeholder', function(e) {
        var parent = $(this).closest('.selectbox');
		if (!parent.hasClass('is-open')) {
			parent.addClass('is-open');
			$('.selectbox.is-open').not(parent).removeClass('is-open');
		} else {
			parent.removeClass('is-open');
		}
        e.stopPropagation();
    }).on('click', 'ul>li', function() {
        var parent = $(this).closest('.selectbox');
        parent.removeClass('is-open').find('.placeholder').text($(this).text());
	    //alert($(this).data("id"))
});
 
$('body').on('click', function() {
    $('.selectbox.is-open').removeClass('is-open');
});		
	
$("body").animate({opacity: 1}, 0);	

	
	$(".fudong li:nth-child(5)").click(function(){

		$("html,body").animate({scrollTop: 0}, 500);
	
 });	 

})

//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?54bf3cbbfa1ae9e1f0344ba0cb3fcc5d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


	
		
		
		










