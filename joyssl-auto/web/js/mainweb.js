function feedback(){
	uname=$("#uname").val();
	if(!dyfrom_null(uname) || !dyfrom_min(uname,4)){
		tips="姓名不能为空，或少于两个汉字!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	mobile=$("#mobile").val();
	if(!dyfrom_mobile(mobile)){
		tips="手机号格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	email=$("#email").val();
	if(!dyfrom_email(email)){
		tips="邮箱不能为空或者邮箱格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	vercode=$("#vercode").val();
	if(dyfrom_ajax("/manage/include/ajax.php?c=ajax&vercode=1","vercode="+vercode)=='false'){
	   tips="验证码输入出错!";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	
}

setTimeout('newvercode()',1000);
function newvercode(){
	document.getElementById("vercodeimg").src="/include/vercode.php?a="+Math.random();
}