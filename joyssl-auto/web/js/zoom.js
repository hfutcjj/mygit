function zoom(mask, bigimg, smallimg) {
    this.bigimg = bigimg;
    this.smallimg = smallimg;
    this.mask = mask
}
zoom.prototype = {
    init: function() {
        var that = this;
        this.smallimgClick();
        this.maskClick();
        this.mouseWheel()
    },
    smallimgClick: function() {
        var that = this;
		if($("." + that.smallimg).find('img').width()<300){
			$("." + that.smallimg).click(function() {
				$("." + that.bigimg).css({
					width: smallimgw=$("." + that.smallimg).find('img').width()*2.5,
					height: smallimgh=$("." + that.smallimg).find('img').height()*2.5
				});
				$("." + that.mask).fadeIn();
				$("." + that.bigimg).attr("src", $(this).attr("datapic")).fadeIn();
				$('.maskclose').fadeIn();
			})
		}else{
			$("." + that.smallimg).click(function() {
				$("." + that.bigimg).css({
					width: smallimgw=$("." + that.smallimg).find('img').width(),
					height: smallimgh=$("." + that.smallimg).find('img').height()
				});
				$("." + that.mask).fadeIn();
				$("." + that.bigimg).attr("src", $(this).attr("datapic")).fadeIn();
				$('.maskclose').fadeIn();
			})
		}
		
    },
    maskClick: function() {
        var that = this;
        $(".maskclose").click(function() {
            $("." + that.bigimg).fadeOut();
            $("." + that.mask).fadeOut();
			$(this).fadeOut();
        })
		$("." + that.mask).click(function() {
		    $("." + that.bigimg).fadeOut();
		    $("." + that.mask).fadeOut();
			$(".maskclose").fadeOut();
		})
    },
    mouseWheel: function() {
        function mousewheel(obj, upfun, downfun) {
            if (document.attachEvent) {
                obj.attachEvent("onmousewheel", scrollFn)
            } else {
                if (document.addEventListener) {
                    obj.addEventListener("mousewheel", scrollFn, false);
                    obj.addEventListener("DOMMouseScroll", scrollFn, false)
                }
            }

            function scrollFn(e) {
                var ev = e || window.event;
				// alert(ev.wheelDelta);
				// alert(ev.detail);
                var dir = ev.wheelDelta || ev.detail;
                if (ev.preventDefault) {
                    ev.preventDefault()
                } else {
                    ev.returnValue = false
                } if (dir >0 || dir == 120 || dir == 180) {
                    upfun()
                } else {
                    downfun()
                }
            }
        }
        var that = this;
		
        mousewheel($("." + that.bigimg)[0], function() {
			
            if ($("." + that.bigimg).innerWidth() > $(".boxright").width()+300) {
				tips="不能再放大了哦！";
				$('#alert1 .sy-content').html(tips);+
				syalert.syopen('alert1');
                return false;
            }
            if ($("." + that.bigimg).innerHeight() > $(".boxright").height()+300 ) {
                tips="不能再放大了哦！";
                $('#alert1 .sy-content').html(tips);
                syalert.syopen('alert1');
                return false;
            }
            var zoomHeight = $("." + that.bigimg).innerHeight() * 1.03;
            var zoomWidth = $("." + that.bigimg).innerWidth() * 1.03;
            $("." + that.bigimg).css({
                height: zoomHeight + "px",
                width: zoomWidth + "px"
            })
        }, function() {
			// alert($("." + that.bigimg).innerWidth());
			// alert($("." + that.bigimg).innerHeight());
            if ($("." + that.bigimg).innerWidth() < 300) {
               tips="不能再缩小了哦！";
               $('#alert1 .sy-content').html(tips);
               syalert.syopen('alert1');
               return false;
            }
            if ($("." + that.bigimg).innerHeight() < 300) {
                tips="不能再缩小了哦！";
                $('#alert1 .sy-content').html(tips);
                syalert.syopen('alert1');
               return false;
            }
            var zoomHeight = $("." + that.bigimg).innerHeight() / 1.03;
            var zoomWidth = $("." + that.bigimg).innerWidth() / 1.03;
            $("." + that.bigimg).css({
                height: zoomHeight + "px",
                width: zoomWidth + "px"
            })
        })
    }
};