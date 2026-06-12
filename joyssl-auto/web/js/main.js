 
function banBackSpace(e) {
   var ev = e || window.event;//获取event对象
   var obj = ev.target || ev.srcElement;//获取事件源
   var t = obj.type || obj.getAttribute('type');//获取事件源类型
                //获取作为判断条件的事件类型
   var vReadOnly = obj.readOnly;
   var vDisabled = obj.disabled;
   //处理undefined值情况
   vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
   vDisabled = (vDisabled == undefined) ? true : vDisabled;
   //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
   //并且readOnly属性为true或disabled属性为true的，则退格键失效
   var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
   //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
   var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
   //判断
   if (flag2 || flag1) return false
}

document.onkeypress = banBackSpace;

document.onkeydown = banBackSpace;

function regform(){
	aname=$("#aname").val();
	if(!dyfrom_null(aname) || !dyfrom_min(aname,4)){
		tips="姓名不能为空，或少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	amobile=$("#amobile").val();
	if(!dyfrom_null(amobile)){
		tips="请输入手机号码";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	if(!dyfrom_mobile(amobile)){
		tips="手机号格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkmobile=1","amobile="+amobile)=='false'){
	   tips="手机号已经注册";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	vercode=amobile+$("#vercode").val();
	if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkregcode=1","vercode="+vercode)=='false'){
	   tips="验证码不正确";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	vregcode=$("#vregcode").val();
	if(dyfrom_null(vregcode)){
		if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkvregcode=1","vregcode="+vregcode)=='false'){
		   tips="注册码不正确";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	iscofirm=$("#iscofirm:checked").val();
	if(!iscofirm){ 
	  tips="请先阅读并同意《网盾用户注册服务协议》";
	  $('#alert1 .sy-content').html(tips);
	  syalert.syopen('alert1');
	  return false;
	}
	
}

function regemailform(){
	aname=$("#aname").val();
	if(!dyfrom_null(aname) || !dyfrom_min(aname,4)){
		tips="姓名不能为空，或少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	email=$("#aemail").val();
	if(!dyfrom_email(email)){
		tips="邮箱不能为空或者邮箱格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(dyfrom_ajax("sys/checkmodifyemail.html","aemail="+email)=='false'){
	   tips="邮箱已被注册，请更换邮箱！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	if(dyfrom_ajax("sys/checkmodifyemailnum.html","aemail="+email)=='false'){
	    tips="您的邮箱验证，已经超出今天的最限制，请明天再操作";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	vercode=email+$("#vercode").val();
	if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkregcode=1","vercode="+vercode)=='false'){
	   tips="验证码不正确";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	vregcode=$("#vregcode").val();
	if(dyfrom_null(vregcode)){
		if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkvregcode=1","vregcode="+vregcode)=='false'){
		   tips="注册码不正确";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	iscofirm=$("#iscofirm:checked").val();
	if(!iscofirm){ 
	  tips="请先阅读并同意《网盾用户注册服务协议》";
	  $('#alert1 .sy-content').html(tips);
	  syalert.syopen('alert1');
	  return false;
	}
	
}

function loginajax(){
	var action="islogin";
	var url="/sys/mpublic.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		success:function(data){
			$('.topright .dlzc').html(data);
		}
	})
}

function loginmemberajax(){
	var action="ismemberlogin";
	var url="/sys/mpublic.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		success:function(data){
			if(data==1){
			   window.location.href="sys/index.html";
			}
		}
	})
}

function loginactiveajax(){
	var action="isactivelogin";
	var url="/sys/mpublic.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		success:function(data){
		}
	})
}

function modifypass(){
	var checktypevalue=$(".dlmm .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name='checkmembertype']:checked").val();
	if(checktypevalue==1){
		mobile=$('#nmobile').val();
		vercode=mobile+$(".showlayer #vercode").val();
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
		   tips="验证码不正确或已失效!";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	pass1=$("#pass1").val();
	if(!dyfrom_pass(pass1)){
		tips="密码需大于6-20位字符，且为数字、字母、符号的组合!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	pass2=$("#pass2").val();
	if(!dyfrom_null(pass2)||!(pass2==$("#pass1").val())){
		tips="两次输入的密码必须一致!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	// if(oldpass==pass1){
	// 	tips="新密码不能与原密码重复!";
	// 	$('#alert1 .sy-content').html(tips);
	// 	syalert.syopen('alert1');
	// 	return false;
	// }
}

function modifyname(){
	var checktypevalue=$(".xgname .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name='checkmembertype']:checked").val();
	if(checktypevalue==1){
		mobile=$('#nmobile').val();
		vercode=mobile+$(".showlayer #vercode").val();
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
		   tips="验证码不正确或已失效!";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	zname=$("#zname").val();
	if(!dyfrom_null(zname)){
		tips="联系人姓名不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
}

// function modifyrefundtype(){
// 	mobile=$('#nmobile').val();
// 	vercode=mobile+$("#vercode").val();
// 	if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
// 	   tips="验证码不正确或已失效!";
// 	   $('#alert1 .sy-content').html(tips);
// 	   syalert.syopen('alert1');
// 	   return false;
// 	}
// 	refundtype=$('.xgrefundtype .tanbiaodan .modifymemberlayer .memberlayer2 input:radio[name="refundtype"]:checked').val();
// 	if(refundtype!=1 && refundtype!=2){
// 		tips="请选择是否原路退还!";
// 		$('#alert1 .sy-content').html(tips);
// 		syalert.syopen('alert1');
// 		return false;
// 	}
// 	$('#refundbutton p input').val('提交中');
// }

function addcustomer(){
	var aname=$('#aname').val();
	if(!dyfrom_null(aname) || !dyfrom_min(aname,4) || !dyfrom_string(aname)){
		tips="姓名不能是特殊字符或者少于4个字符";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	
	var aemail=$('#aemail').val();
	
	if(!dyfrom_email(aemail)){
		tips="邮箱不能为空或者邮箱格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkemail=1","aemail="+aemail)=='false'){
	   tips="邮箱已被注册，请更换邮箱！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}	
	var mobile=$('#amobile').val();
	
	if(!dyfrom_mobile(mobile)){
		tips="手机号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}	
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkmobile=1","amobile="+mobile)=='false'){
	   tips="手机已被注册，请更换手机号！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	
	pass1=$("#pass1").val();
	if(!dyfrom_pass(pass1)){
		tips="密码需大于6-20位字符，且为数字、字母、符号的组合!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	pass2=$("#pass2").val();
	if(!dyfrom_null(pass2)||!(pass2==$("#pass1").val())){
		tips="两次输入的密码必须一致!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function modifycustomer(){
	pass1=$("#pass1").val();
	if(dyfrom_null(pass1) || dyfrom_null(pass2)){
		if(!dyfrom_pass(pass1)){
			tips="密码需大于6-20位字符，且为数字、字母、符号的组合!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		pass2=$("#pass2").val();
		if(!dyfrom_null(pass2)||!(pass2==$("#pass1").val())){
			tips="两次输入的密码必须一致!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	
}

function modifyemail(){
	// var checktypevalue=$(".dlyx .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name='checkmembertype']:checked").val();
	// if(checktypevalue==1){
	// 	mobile=$('#nmobile').val();
	// 	vercode=mobile+$(".showlayer #vercode").val();
	// 	if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
	// 	   tips="验证码不正确或已失效!";
	// 	   $('#alert1 .sy-content').html(tips);
	// 	   syalert.syopen('alert1');
	// 	   return false;
	// 	}
	// }
	newemail=$("#newaemail").val();
	if(!dyfrom_email(newemail)){
		tips="邮箱不能为空或者邮箱格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkemail=1","aemail="+newemail)=='false'){
	   tips="邮箱已被注册，请更换邮箱！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	vercode=newemail+$("#vercode1").val();
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
	   tips="邮箱验证码不正确!";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
}

function modifymobile(){
	// mobile=$("#oldmobile").val();
	// if(dyfrom_ajax("include/ajax.php?c=ajax&checkmobile=1","amobile="+mobile)=='true'){
	// 	tips="原手机号不正确，请确认！";
	// 	$('#alert1 .sy-content').html(tips);
	// 	syalert.syopen('alert1');
	// 	return false;
	// }
	// pass=$("#pass4").val();
	// if(dyfrom_ajax("include/ajax.php?c=ajax&checkoldpass=1","oldpass="+pass)=='false'){
	//    tips="密码不正确，请确认！";
	//    $('#alert1 .sy-content').html(tips);
	//    syalert.syopen('alert1');
	//    return false;
	// }
	// var checktypevalue=$(".sjbd .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name='checkmembertype']:checked").val();
	// if(checktypevalue==1){
	// 	mobile=$('#nmobile').val();
	// 	vercode=mobile+$(".showlayer #vercode").val();
	// 	if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
	// 	   tips="验证码不正确或已失效!";
	// 	   $('#alert1 .sy-content').html(tips);
	// 	   syalert.syopen('alert1');
	// 	   return false;
	// 	}
	// }
	
	newmobile=$("#newmobile").val();
	if(!dyfrom_mobile(newmobile)){
		tips="新手机号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkmobile=1","amobile="+newmobile)=='false'){
	   tips="手机已被注册，请更换手机号！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	vercode=newmobile+$("#vercode2").val();
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
	   tips="手机验证码不正确!";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
}

function modifyempower(){
	var checktypevalue=$(".sqip .tanbiaodan .modifymemberlayer .memberlayer1 #checkmembertype input:radio[name='checkmembertype']:checked").val();
	if(checktypevalue==1){
		mobile=$('#nmobile').val();
		vercode=mobile+$(".showlayer #vercode").val();
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
		   tips="验证码不正确或已失效!";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	var isopen=$("input[name='RadioGroup1']:checked").val();
	var ipcontarr="",ipcont1="",ipcont2="",ipcont3="",ipcont4="",ipcont5="",num=0;
	if(isopen==1){
		ipcont1=$('.tanbiaodan .pd30 ul #lockipcont1 input').val();
		if(ipcont1){
			if(checkIP(ipcont1)==null){
				tips="IP地址一格式不正确!";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');	
				return false;
			}else{
				num=num+1;	
			}
		}
		ipcont2=$('.tanbiaodan .pd30 ul #lockipcont2 input').val();
		if(ipcont2){
			if(checkIP(ipcont2)==null){
				tips="IP地址二格式不正确!";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');	
				return false;
			}else{
				num=num+1;	
			}
		}
		ipcont3=$('.tanbiaodan .pd30 ul #lockipcont3 input').val();
		if(ipcont3){
			if(checkIP(ipcont3)==null){
				tips="IP地址三格式不正确!";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');	
				return false;
			}else{
				num=num+1;	
			}
		}
		ipcont4=$('.tanbiaodan .pd30 ul #lockipcont4 input').val();
		if(ipcont4){
			if(checkIP(ipcont4)==null){
				tips="IP地址四格式不正确!";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');	
				return false;
			}else{
				num=num+1;	
			}
		}
		ipcont5=$('.tanbiaodan .pd30 ul #lockipcont5 input').val();
		if(ipcont5){
			if(checkIP(ipcont5)==null){
				tips="IP地址五格式不正确!";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');	
				return false;
			}else{
				num=num+1;	
			}
		}
		if(num==0){
			tips="IP地址至少填写一个";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');	
			return false;
		}
	}
	// pass=$("#pass5").val();
	// if(dyfrom_ajax("include/ajax.php?c=ajax&checkoldpass=1","oldpass="+pass)=='false'){
	//    tips="密码不正确，请确认！";
	//    $('#alert1 .sy-content').html(tips);
	//    syalert.syopen('alert1');
	//    return false;
	// }
	
}

function unitcertification(){
	var company=$('#company').val();
	if(!dyfrom_null(company) || !dyfrom_min(company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var taxpayercode=$('#taxpayercode').val();
	if(!dyfrom_null(taxpayercode) || !dyfrom_qcode(taxpayercode)){
		tips="纳税人识别号不能为空或者格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var bank=$('#bank').val();
	if(!dyfrom_null(bank) || !dyfrom_min(bank,8)){
		tips="开户银行名称不能为空或者少于四个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var b_account=$('#b_account').val();
	if(!dyfrom_null(b_account)){
		tips="开户行账号不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var regplace=$('#regplace').val();
	if(!dyfrom_null(regplace)){
		tips="单位注册地址不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var regphone=$('#regphone').val();
	if(!dyfrom_null(regphone) || !dyfrom_phone(regphone)){
		tips="单位联系电话不能为空或者电话格式不正确（请用固话）";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var maindomain=$('#maindomain').val();
	if(!dyfrom_null(maindomain) || !checkurl(maindomain)){
		tips="网址格式不对请修改";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var licensepic=$('#licensepic').val();
	if(!dyfrom_null(licensepic)){
		tips="营业执照不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var powerbookpic=$('#powerbookpic').val();
	if(!dyfrom_null(powerbookpic)){
		tips="授权委托书不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function unitcertification1(){
	var company=$('#company').val();
	if(company){
		if(!dyfrom_min(company,4)){
			tips="单位名称不能少于两个汉字";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var taxpayercode=$('#taxpayercode').val();
	if(taxpayercode){
		if(!dyfrom_qcode(taxpayercode)){
			tips="纳税人识别号格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var bank=$('#bank').val();
	if(bank){
		if(!dyfrom_min(bank,8)){
			tips="开户银行名称不能少于四个汉字";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var b_account=$('#b_account').val();
	if(b_account){
		if(!dyfrom_null(b_account)){
			tips="开户行账号不能为空";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	
	var regphone=$('#regphone').val();
	if(b_account){
		if(!dyfrom_null(regphone) || !dyfrom_phone(regphone)){
			tips="电话格式不正确（请用固话）";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var maindomain=$('#maindomain').val();
	if(!dyfrom_null(maindomain) || !checkurl(maindomain)){
		tips="网址格式不对请修改";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var licensepic=$('#licensepic').val();
	if(licensepic){
		if(!dyfrom_null(licensepic)){
			tips="营业执照不能为空";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var powerbookpic=$('#powerbookpic').val();
	if(powerbookpic){
		if(!dyfrom_null(powerbookpic)){
			tips="授权委托书不能为空";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
}

function personalcertification(){
	var realname=$('#realname').val();
	if(!dyfrom_min(realname,4)){
		tips="姓名不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var card=$('#card').val();
	if(!dyfrom_null(card) || !isCardNo(card)){
		tips="身份证号不能为空或者格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checksfcard=1","card="+card)=='false'){
	   tips="身份证号不能重复，请确认！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	var realphone=$('#realphone').val();
	if(!dyfrom_null(realphone) || !dyfrom_mobile(realphone)){
		tips="手机号不能为空或者格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cardpic1=$('#cardpic1').val();
	if(!dyfrom_null(cardpic1)){
		tips="身份证人像面不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cardpic2=$('#cardpic2').val();
	if(!dyfrom_null(cardpic2)){
		tips="身份证国徽面不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function personalcertification1(){
	var realname=$('#realname').val();
	if(!dyfrom_null(realname)){
		if(!dyfrom_min(realname,4)){
			tips="姓名不能少于两个汉字";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var card=$('#card').val();
	
	if(dyfrom_null(card)){
		if(!isCardNo(card)){
			tips="身份证号格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	
		if(dyfrom_ajax("include/ajax.php?c=ajax&checksfcard=1","card="+card)=='false'){
			tips="身份证号不能重复，请确认！";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	var realphone=$('#realphone').val();
	if(dyfrom_null(realphone)){
		if(!dyfrom_mobile(realphone)){
			tips="手机号不能为空或者格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
	}
	var cardpic1=$('#cardpic1').val();
	if(!dyfrom_null(cardpic1)){
		tips="身份证人像面不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cardpic2=$('#cardpic2').val();
	if(!dyfrom_null(cardpic2)){
		tips="身份证国徽面不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function ptvoice(){
	var invoicetitle=$('#invoicetitle').val();
	if(!dyfrom_null(invoicetitle) || !dyfrom_min(invoicetitle,4)){
		tips="发票抬头不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var taxpayercode=$('#taxpayercode').val();
	if(!dyfrom_null(taxpayercode) || !dyfrom_qcode(taxpayercode)){
		tips="纳税人识别号不能为空或者格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function ztvoice(){
	var invoicetitle=$('#invoicetitle1').val();
	if(!dyfrom_null(invoicetitle) || !dyfrom_min(invoicetitle,4)){
		tips="发票抬头不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var taxpayercode=$('#taxpayercode1').val();
	if(!dyfrom_null(taxpayercode) || !dyfrom_qcode(taxpayercode)){
		tips="纳税人识别号不能为空或者格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var bank=$('#bank').val();
	if(!dyfrom_null(bank) || !dyfrom_min(bank,8)){
		tips="开户银行名称不能为空或者少于四个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var b_account=$('#b_account').val();
	if(!dyfrom_null(b_account)){
		tips="开户行账号不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var regplace=$('#regplace').val();
	if(!dyfrom_null(regplace)){
		tips="单位注册地址不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var regphone=$('#regphone').val();
	if(!dyfrom_null(regphone) || !dyfrom_phone(regphone)){
		tips="单位联系电话不能为空或者电话格式不正确（请用固话）";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function checknotice(){
	var title=$('#title').val();
	if(!dyfrom_null(title)){
		tips="公告标题不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function addstaff(){
	var aname=$('#aname').val();
	if(!dyfrom_null(aname) || !dyfrom_min(aname,4) || !dyfrom_string(aname)){
		tips="姓名不能是特殊字符或者少于4个字符";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var emailname=$('#aemail').val();
	if(!dyfrom_emailname(emailname)){
		tips="邮箱名必须是3到20位字母与数字的组合";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var aemail=emailname+"@joyssl.com";
	
	if(!dyfrom_email(aemail)){
		tips="邮箱不能为空或者邮箱格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkemail=1","aemail="+aemail)=='false'){
	   tips="邮箱已被注册，请更换邮箱！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}	
	var mobile=$('#amobile').val();
	
	if(!dyfrom_mobile(mobile)){
		tips="手机号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}	
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkmobile=1","amobile="+mobile)=='false'){
	   tips="手机已被注册，请更换手机号！";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
	var openregcodenum=$('.openregcode:radio:checked').val();
	if(openregcodenum==1){
		var vregcode=$('#regcode').val();
		if(!dyfrom_zipCode(vregcode)){
			tips="注册码必须是6位的纯数字！";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkvregcode=1","vregcode="+vregcode)=='true'){
		   tips="注册码已存在，请换一个注册码！";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	var firstappcode=$('#firstappcode').val();
	if(firstappcode){
		if(!dyfrom_couponcode(firstappcode)){
			tips="证书申请码必须是6位的数字与字母组合！";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkfirstappcode=1","firstappcode="+firstappcode)=='true'){
		   tips="证书申请码已存在，请换一个实人验证码！";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	pass1=$("#pass1").val();
	if(!dyfrom_pass(pass1)){
		tips="密码需大于6-20位字符，且为数字、字母、符号的组合!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	pass2=$("#pass2").val();
	if(!dyfrom_null(pass2)||!(pass2==$("#pass1").val())){
		tips="两次输入的密码必须一致!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function editstaff(){
	var emailname=$('#aemail').val();
	if(emailname){
		if(!dyfrom_emailname(emailname)){
			tips="邮箱名必须是3到20位字母与数字的组合";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}
		var aemail=emailname+"@joyssl.com";
		if(!dyfrom_email(aemail)){
			tips="邮箱不能为空或者邮箱格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkemail=1","aemail="+aemail)=='false'){
		   tips="邮箱已被注册，请更换邮箱！";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	var mobile=$('#amobile').val();
	if(mobile){
		if(!dyfrom_mobile(mobile)){
			tips="手机号格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;		
		}	
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkmobile=1","amobile="+mobile)=='false'){
		   tips="手机已被注册，请更换手机号！";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	var openregcodenum=$('.openregcode:radio:checked').val();
	if(openregcodenum==1){
		var vregcode=$('#regcode').val();
		var staffid=$('#staffid').val();
		if(!dyfrom_zipCode(vregcode)){
			tips="注册码必须是6位的纯数字！";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		//alert(dyfrom_ajax("include/ajax.php?c=ajax&checknewregcode=1&staffid="+staffid,"regcode="+regcode));
		// alert(regcode);
		//alert(dyfrom_ajax("include/ajax.php?c=ajax&checknewvregcode=1&staffid="+staffid,"vregcode="+vregcode));
		if(dyfrom_ajax("include/ajax.php?c=ajax&checknewvregcode=1&staffid="+staffid,"vregcode="+vregcode)=='true'){
		   tips="注册码已存在，请换一个注册码！";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	var firstappcode=$('#firstappcode').val();
	if(firstappcode){
		if(!dyfrom_couponcode(firstappcode)){
			tips="证书申请码必须是6位的数字与字母组合！";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkeditfirstappcode=1&staffid="+staffid,"firstappcode="+firstappcode)=='true'){
		   tips="证书申请码已存在，请换一个申请码！";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	pass1=$("#pass1").val();
	pass2=$("#pass2").val();
	if(dyfrom_null(pass1) || dyfrom_null(pass2)){
		if(!dyfrom_pass(pass1)){
			tips="密码需大于6-20位字符，且为数字、字母、符号的组合!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(!dyfrom_null(pass2)||!(pass2==$("#pass1").val())){
			tips="两次输入的密码必须一致!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
}

function customerbaobei(){
	var checknum=$("input[name='checktype']:checked").val();
	var c_name=$('#c_name').val();
	if(checknum==1){
	    if(!dyfrom_email(c_name)){
			tips="邮箱不能为空或者邮箱格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
	    }
	    if(dyfrom_ajax("include/ajax.php?c=ajax&checkemail=1","aemail="+c_name)=='true'){
	        tips="未检测到邮箱，请重新报备";
	        $('#alert1 .sy-content').html(tips);
	        syalert.syopen('alert1');
	        return false;
	    }
	}else if(checknum==2){
		if(!dyfrom_mobile(c_name)){
			tips="新手机号格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;		
		}
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkmobile=1","amobile="+c_name)=='true'){
		   tips="未检测到手机号，请重新报备";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	vercode=c_name+$("#vercode").val();
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
	   tips="验证码已失效或者与邮箱手机不匹配，请检查!";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
}

function resetpass(){
	var c_name=$('#c_name').val();
	var action="isemail";
	var url="sys/mpublic.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action,
			'c_name':c_name
		},
		success:function(data){
		if(data==1){
				if(!dyfrom_email(c_name)){
					tips="邮箱不能为空或者邮箱格式不正确";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}
				if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkemail=1","aemail="+c_name)=='true'){
					tips="未检测到邮箱，请重新输入";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;
				}
							  
		  }else{
				if(!dyfrom_mobile(c_name)){
					tips="新手机号格式不正确!";
					$('#alert1 .sy-content').html(tips);
					syalert.syopen('alert1');
					return false;		
				}
				if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkmobile=1","amobile="+c_name)=='true'){
				   tips="未检测到手机号，请重新输入";
				   $('#alert1 .sy-content').html(tips);
				   syalert.syopen('alert1');
				   return false;
				}		  
		  }	
		}
	})
	vercode=c_name+$("#vercode").val();
	if(dyfrom_ajax("sys/include/ajax.php?c=ajax&checkcode=1","vercode="+vercode)=='false'){
	   tips="验证码不正确或者与邮箱手机不匹配，请检查!";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
}

function checkresetpass(){
	var action="checkresetpass";
	var url="sys/mpublic.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		success:function(data){
			$('.zhuceboxs').html(data);
		}
	})
}

function successresetpass(){
	var action="successresetpass";
	var url="sys/mpublic.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
			'action':action
		},
		success:function(data){
			$('.zhuceboxs').html(data);
		}
	})
}

function checkworkorder(){
	var proid=$('#proid').attr('data-value');
	if(proid<1 && proid>1){
		tips="请正确选择产品分类";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	var workorderflid=$('#workorderflid').attr('data-value');
	if(workorderflid<1 || workorderflid>5){
		tips="请正确选择工单分类";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;		
	}
	var content=$('#content').val();
	if(!dyfrom_null(content)){
		tips="问题描述不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function loadgongdan(){
	//var wdid=$('.gtjilvbox').attr('datavalue');
	var action="loadgongdan";
	var url="public.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action
		},
		success:function(data){
			$('.duihuakuang ul').html(data);
		}
	})
}

function loadgongdanstate(){
	//var wdid=$('.gtjilvbox').attr('datavalue');
	var action="loadgongdanstate";
	var url="public.php";
	$.ajax({
		type:"POST",
		url:url,
		data:{
		  'action':action
		},
		success:function(data){
			if(data>4){
				$('.gongdanmaisohu').hide();
				$('#gongdanliucheng').hide();
			}
		}
	})
}

function addentry(){
	var customername=$('#customername').val();
	var customernameuid=$('#customernameuid').val();
	if(!dyfrom_null(customername)){
		tips="客户名称不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	if(customername!="未实名"){
		if(dyfrom_ajax("include/ajax.php?c=ajax&checkrealname=1","keywords="+customername)=='false'){
		   tips="未检测到该客户名称，请在下拉里选择!";
		   $('#alert1 .sy-content').html(tips);
		   syalert.syopen('alert1');
		   return false;
		}
	}
	var zfbalanceval=$('#zfbalanceval').val();
	if(!dyfrom_null(zfbalanceval)){
		tips="账户余额不能为空，请选择下拉的客户名称";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	
	var price=$('#price').val();
	if(!dyfrom_ismoney(price) || !dyfrom_max(price,6)){
		tips="对不起，您输入的金额格式出错";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	usefunds=$("#usefunds:checked").val();
	if(usefunds==2){
		var usefundstxt=$('#usefundstxt').val();
		if(!dyfrom_null(usefundstxt)){
			tips="绑定订单不能为空";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		}else{
			
			var url="include/ajax.php?c=ajax&checkusefundsprice=1&customernameuid="+customernameuid+"&usefundstxt="+usefundstxt+"&price="+price;
			console.log(url);
			if(dyfrom_ajax(url)=='false'){
			   tips="订单号与客户信息或充值金额与订单金额不一致";
			   $('#alert1 .sy-content').html(tips);
			   syalert.syopen('alert1');
			   return false;
			}
		}
	}
	
}

$('#price').bind("cut copy paste", function(e) {
    tips="禁止粘贴，复制，剪切";
    $('#alert1 .sy-content').html(tips);
    syalert.syopen('alert1');
    return false;
    e.preventDefault();
});

$('#exportprice').click(function(){
	var category=$(this).attr('datacategory');
	var brands=$(this).attr('databrands');
	var types=$(this).attr('datatypes');
	var fits=$(this).attr('datafits');
	var units=$(this).attr('dataunits');
	var years=$(this).attr('datayears');
	var isprice=$('#price:checked').val();
	var isprice1=$('#price1:checked').val();
	var isprice2=$('#price2:checked').val();
	var isprice3=$('#price3:checked').val();
	var isprice4=$('#price4:checked').val();
	var isprice5=$('#price5:checked').val();
	var isprice6=$('#price6:checked').val();
	var url="public.php?action=exportprice";
	if(category){
		url=url+"&category="+category;
	}
	if(brands){
		url=url+"&brands="+brands;
	}
	if(types){
		url=url+"&types="+types;
	}
	if(fits){
		url=url+"&fits="+fits;
	}
	if(units){
		url=url+"&units="+units;
	}
	if(years){
		url=url+"&years="+years;
	}
	if(isprice==1){
		url=url+"&isprice=1";
	}
	if(isprice1==1){
		url=url+"&isprice1=1";
	}
	if(isprice2==1){
		url=url+"&isprice2=1";
	}
	if(isprice3==1){
		url=url+"&isprice3=1";
	}
	if(isprice4==1){
		url=url+"&isprice4=1";
	}
	if(isprice6==1){
		url=url+"&isprice6=1";
	}
	if(isprice5==1){
		url=url+"&isprice5=1";
	}
	
	window.location.href=url; 
})

function checksearchprice(){
	var units=$('#units').val();
	if(!checkInt(units)){
		tips="单位数必须为正整数!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var years=$('#years').val();
	if(!checkInt(years)){
		tips="年数必须为正整数!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function recharge1(){
	var price=$('#price2').val();
	if(!dyfrom_ismoney(price) || !dyfrom_max(price,6)){
		tips="对不起，您输入的金额格式出错";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var num=$('#kfbank .active').length;
	if(num!=1){
		tips="请选择支付银行！";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}


function payorder(){
	// var paychannel=$('#paychannel').val();
	// if(paychannel==3){
	// 	tips="功能开发中!";
	// 	$('#alert1 .sy-content').html(tips);
	// 	syalert.syopen('alert1');
	// 	return false;
	// }
	var paychanneltxt=$('#paychanneltxt').val();
	if(!dyfrom_null(paychanneltxt)){
		tips="请选择支付渠道!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}
function receivinginfo(){
	var name=$('#name').val();
	if(!dyfrom_null(name) || !dyfrom_min(name,4)){
		tips="姓名不能为空或者不能少于4个字符!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var mobile=$('#mobile').val();
	
	if(!dyfrom_null(mobile) || !dyfrom_mobile(mobile)){
		tips="手机号码不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var s_province=$('#s_province').val();
	if(!dyfrom_null(s_province)){
		tips="省份不能为空!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var s_city=$('#s_city').val();
	if(!dyfrom_null(s_city)){
		tips="城市不能为空!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var s_county=$('#s_county').val();
	if(!dyfrom_null(s_city)){
		tips="区县不能为空!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var address=$('#address').val();
	if(!dyfrom_null(s_city)){
		tips="详细地址不能为空!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var email=$('#email').val();
	if(!dyfrom_email(email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
}

function addorder(){
	var isselectservice=$('#isselectservice').val();
	var azservicenum=$('#azservicenum input').val();
	if(isselectservice==1){
		if(azservicenum<1 && !checkInt(azservicenum)){
			tips="安装服务数量必须为是大于0正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	var isselect1=$('.isselect1').val();
	var isselect2=$('.isselect2').val();
	var isselect3=$('.isselect3').val();
	var azservicenum1=$('#azservicenum1').val();
	var azservicenum2=$('#azservicenum2').val();
	var azservicenum3=$('#azservicenum3').val();
	if(isselect1==0 && isselect2==0 && isselect3==0){
		tips="请至少选择一种安装服务";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		if(isselect1==1 && !checkInt(azservicenum1)){
			tips="安装服务数量必须为正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(isselect2==1 && !checkInt(azservicenum2)){
			tips="安装服务数量必须为正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		if(isselect3==1 && !checkInt(azservicenum3)){
			tips="安装服务数量必须为正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	var isreadxieyi=$('#readxieyi').is(':checked');
	if(!isreadxieyi){
		tips="请先阅读并勾选接受《网盾产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function addorder1(){
	var procode=$("#newmultiselect").val();
	var buyyears=$("#newmultiselect option:selected").attr('datatime');
	$('#buyyears').val(buyyears);
	singledomainnum=$('#singledomainnum .shang input').val();
	multidomainnum=$('#multidomainnum .shang input').val();
	var isadditionalpro=$('#checkaddpro').is(':checked');
	var usecheckcouponid="";
	$(".youhuiquans .cur").each(function(){
		usecheckcouponid=usecheckcouponid+$(this).attr('dataid')+",";
	})
	azservicenum=$('#azservicenum .shang input').val();
	var isreadxieyi=$('#readxieyi').is(':checked');
	if(!isreadxieyi){
		tips="请先阅读并勾选接受《网盾产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var errornum=0;
	var action='changeproprice';
	var url="public.php";
	$.ajax({
		type:"POST",
		url:url,
		async:false,
		data:{
		  'action':action,
		  'procode':procode,
		  'singledomainnum':singledomainnum,
		  'multidomainnum':multidomainnum,
		  'isadditionalpro':isadditionalpro,
		  'azservicenum':azservicenum,
		  'usecheckcouponid':usecheckcouponid,
		  'buyyears':buyyears
		},
		beforeSend:function(){ },
		success:function(data){
			if(data==1){
				tips="对不起您选择的优惠劵已超出了产品的实际价格，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				errornum+=1;
			}else if(data==2){
				tips="选择的优惠劵中存在着不符合条件优惠劵，请取消";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				errornum+=1;
			}else if(data==3){
				tips="选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				errornum+=1;
			}
		},
	})
	if(errornum>0){
		return false;
	}
}

function addorder2(){
	var procode=$("#newselect").val();
	var isadditionalpro=$('#checkaddpro').is(':checked');
	var usecheckcouponid="";
	$(".youhuiquans .cur").each(function(){
		usecheckcouponid=usecheckcouponid+$(this).attr('dataid')+",";
	})
	azservicenum=$('#azservicenum .shang input').val();
	var isreadxieyi=$('#readxieyi').is(':checked');
	if(!isreadxieyi){
		tips="请先阅读并勾选接受《网盾产品服务协议》!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var errornum=0;
	var action='checkcoupon4';
	var url="public.php";
	$.ajax({
		type:"POST",
		url:url,
		async:false,
		data:{
		  'action':action,
		  'procode':procode,
		  'isadditionalpro':isadditionalpro,
		  'azservicenum':azservicenum,
		  'usecheckcouponid':usecheckcouponid
		},
		beforeSend:function(){ },
		success:function(data){
			if(data==1){
				tips="对不起您选择的优惠劵已超出了产品的实际价格，请检查";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				errornum+=1;
			}else if(data==2){
				tips="选择的优惠劵中存在着不符合条件优惠劵，请取消";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				errornum+=1;
			}else if(data==3){
				tips="选择的优惠劵中存在着一个订单只能使用一张的优惠劵，请先取消";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				errornum+=1;	
			}
		},
	})
	if(errornum>0){
		return false;
	}
	
}

function recheckdomain(){
	var domain=$('#domain').val();
	var pfits=$('#domain').attr('datafits');
	var activeid=$('#domain').attr('dataactiveid');
	if(domain.substring(0,2)=="*." && pfits=="单域名"){
		tips="对不起，该类型证书暂不支持通配符域名";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(!checkurl(domain) || checkIP(domain) || checkIPv6(domain)){
		tips="对不起，此域名有非法字符/空格或者不能是IP地址";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		domain=domain.split('/')[0];
		domainnum=domain.split('.').length;
		domainnum1=domain.split(',').length;
		if(domainnum<2 || domainnum1>1 || (domainnum==2 && (domain.substring(0,2)=="*." || domain.substring(0,1)=="*"))){
			tips="对不起，域名格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	
	$(this).val(domain);
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checkedCount =  $('.certcontaindomain p input[type="checkbox"]:checked').length;     //修改时间：20260224开始
	if (checkedCount === 0) {
	    tips="请选择需要签发的域名";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	var realappcode=$('#realappcode').val();
	if(!dyfrom_null(realappcode)){
		tips="请输入证书申请码";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkrealappcode=1","realappcode="+realappcode)=='false'){
	   tips="证书申请码错误，请联系在线客服咨询";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
}

function checkdomain(){
	var domain=$('#domain').val().trim().toLowerCase();
	var pfits=$('#domain').attr('datafits');
	var activeid=$('#domain').attr('dataactiveid');
	
	if(domain.substring(0,2)=="*." && pfits=="单域名"){
		tips="对不起，该类型证书暂不支持通配符域名";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(!checkurl(domain) || checkIP(domain) || checkIPv6(domain)){
		tips="对不起，此域名有非法字符/空格或者不能是IP地址";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		domain=domain.split('/')[0];
		domainnum=domain.split('.').length;
		domainnum1=domain.split(',').length;
		if(domainnum<2 || domainnum1>1 || (domainnum==2 && (domain.substring(0,2)=="*." || domain.substring(0,1)=="*"))){
			tips="对不起，域名格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	var url="public.html";
	var action="checkoneyearsthesamedomain";
	var error=0;
	var error1=0;
	$.ajax({
		type:"POST",
		url:url,
		async: false, // 设置为同步请求
		data:{
			'action':action,
			'activeid':activeid,
			'domain':domain
		},
		success:function(data){
			data=data.replace(/\s/g,'');
			
			if(data==1){
				error=error+1;
			}else if(data==2){
				error1=error1+1;
			}
			
		}
	})
	if(error>0){
		tips="免费证书一个域名只能体验一次";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(error1>0){
		tips="该版本不能使用.edu.cn和.gov.cn结尾的域名";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$(this).val(domain);
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checkedCount =  $('.certcontaindomain p input[type="checkbox"]:checked').length;     //修改时间：20260224开始
	if (checkedCount === 0) {
	    tips="请选择需要签发的域名";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	var selectedValues = $('.certcontaindomain p input[type="checkbox"]:checked').map(function() {
	      return this.value;
	}).get();
	var selectedStr = selectedValues.join(",") + ","; 
	var cleanDomain = domain.replace(/^(www\.|\*\.)/i, '');
	var targetStr = cleanDomain + ","; // 例如："hiwaibao.com,"
	
	var exists = selectedStr.indexOf(targetStr) !== -1; 
	
	if(!exists){
		tips="对不起您选择的其它域名与主域名不一致，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function checksingledomain(){
	var domain=$('#domain').val().trim().toLowerCase();
	var pfits=$('#domain').attr('datafits');
	var pbrands=$('#cbrands').val();
	var activeid=$('#domain').attr('dataactiveid');
	if(pbrands=="SignSSL" && (domain.substring(domain.length-7)==".gov.cn" || domain.substring(domain.length-7)==".edu.cn")){
		tips="对不起，普惠版暂不支持此域名类型";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(domain.substring(0,2)=="*." && pfits=="单域名"){
		tips="对不起，该类型证书暂不支持通配符域名";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	if(!checkurl(domain) || checkIP(domain) || checkIPv6(domain)){
		tips="对不起，此域名有非法字符/空格或者不能是IP地址";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		domain=domain.split('/')[0];
		domainnum=domain.split('.').length;
		domainnum1=domain.split(',').length;
		if(domainnum<2 || domainnum1>1 || (domainnum==2 && (domain.substring(0,2)=="*." || domain.substring(0,1)=="*"))){
			tips="对不起，域名格式不正确";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	var url="public.html";
	var action="checkoneyearsthesamedomain";
	
	var error1=0;
	$.ajax({
		type:"POST",
		url:url,
		async: false, // 设置为同步请求
		data:{
			'action':action,
			'activeid':activeid,
			'domain':domain
		},
		success:function(data){
			data=data.replace(/\s/g,'');
			if(data==2){
				error1=error1+1;
			}
			
		}
	})
	
	if(error1>0){
		tips="该版本不能使用.edu.cn和.gov.cn结尾的域名";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$(this).val(domain);
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	var checkedCount =  $('.certcontaindomain p input[type="checkbox"]:checked').length;     //修改时间：20260224开始
	if (checkedCount === 0) {
	    tips="请选择需要签发的域名";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	var selectedValues = $('.certcontaindomain p input[type="checkbox"]:checked').map(function() {
	      return this.value;
	}).get();
	var selectedStr = selectedValues.join(",") + ","; 
	var cleanDomain = domain.replace(/^(www\.|\*\.)/i, '');
	var targetStr = cleanDomain + ","; // 例如："hiwaibao.com,"
	
	var exists = selectedStr.indexOf(targetStr) !== -1; 
	
	if(!exists){
		tips="对不起您选择的其它域名与主域名不一致，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function checkipdomain(){
	var domain=$('#domain').val().trim().toLowerCase();
	if(!checkIP(domain) && !checkIPv6(domain)){
		tips="对不起，IP格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$(this).val(domain);
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checkedCount =  $('.certcontaindomain p input[type="checkbox"]:checked').length;    //修改时间：20260224开始
	if (checkedCount === 0) {
	    tips="请选择需要签发的IP地址";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	var selectedValues = $('.certcontaindomain p input[type="checkbox"]:checked').map(function() {
	      return this.value;
	}).get();
	var selectedStr = selectedValues.join(",") + ","; 
	var cleanDomain = domain.replace(/^(www\.|\*\.)/i, '');
	var targetStr = cleanDomain + ","; // 例如："hiwaibao.com,"
	
	var exists = selectedStr.indexOf(targetStr) !== -1;
	
	if(!exists){
		tips="对不起您选择的其它IP与IP地址不一致，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function checkipneidomain(){
	var domain=$('#domain').val().trim().toLowerCase();
	if((!checkurl(domain) && !checkIP(domain) && !checkIPv6(domain)) || domain.substring(0,2)=="*."){
		tips="对不起，IP或域名格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$(this).val(domain);
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var checkedCount =  $('.certcontaindomain p input[type="checkbox"]:checked').length;     //修改时间：20260224开始
	if (checkedCount === 0) {
	    tips="请选择需要签发的IP地址";
	    $('#alert1 .sy-content').html(tips);
	    syalert.syopen('alert1');
	    return false;
	}
	var selectedValues = $('.certcontaindomain p input[type="checkbox"]:checked').map(function() {
	      return this.value;
	}).get();
	var selectedStr = selectedValues.join(",") + ","; 
	var cleanDomain = domain.replace(/^(www\.|\*\.)/i, '');
	var targetStr = cleanDomain + ","; // 例如："hiwaibao.com,"
	
	var exists = selectedStr.indexOf(targetStr) !== -1;
	
	if(!exists){
		tips="对不起您选择的其它IP与IP地址不一致，请检查";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function recheckmultidomain(){
	var singleerrer=0;
	var singleerrer1=0;
	var multierrer=0;
	var multierrer1=0;
	var samedomain=0;
	var multidomain="";
	var duosingledomain="|";
	var duomultidomain="|";
	$('#singledomainlist .martb').each(function(){
		var singledomain=$(this).find('input').val().trim().toLowerCase();
		// if(singledomain==domain){
		// 	samedomain=samedomain+1;
		// }
		var nsingledomain="|"+singledomain+"|";
		duosingledomain=duosingledomain+singledomain+"|";
		if(!checkurl(singledomain) || singledomain.substring(0,2)=="*."){
			singleerrer=singleerrer+1;
		}else{
			singledomain=singledomain.split('/')[0];
			domainnum=singledomain.split('.').length;
			if(domainnum<2 || (domainnum==2 && (singledomain.substring(0,2)=="*." || singledomain.substring(0,1)=="*"))){
				singleerrer=singleerrer+1;
			}
		}
		
	})
	if(singleerrer>0){
		tips="对不起，单域名格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var action="check_ttsigledomain";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		async:false,  
		data:{
			'action':action,
			'duosingledomain':duosingledomain
		},
		beforeSend:function(){ 
				 
		},
		success:function(data){
			//console.log(data);
			data=data.replace(/\ +/g,"");
			data=data.replace(/[\r\n]/g,"");
			data=data.replace('<br>',"");
			if(data==1){
				singleerrer1++;
			}
		}
	})
	
	if(singleerrer1>0){
		tips="对不起，单域名不能重复";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	$('#wildcarddomainlist .martb').each(function(){
		var multidomain=$(this).find('input').val().trim().toLowerCase();
		duomultidomain=duomultidomain+multidomain+"|";
		if(!checkurl(multidomain)){
			multierrer=multierrer+1;
		}else{
			multidomain=multidomain.split('/')[0];
			wildcarddomainnum=multidomain.split('.').length;
			if(wildcarddomainnum<2 || (multidomain.substring(0,2)!="*." && (multidomain.substring(0,1)!="*" || multidomain.substring(1,2)!="."))){
				multierrer=multierrer+1;
			}
		}
		
	})
	
	if(multierrer>0){
		tips="对不起，通配符域名格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var action1="check_ttmultidomain";
	$.ajax({
		type:"POST",
		url:url,
		async:false,  
		data:{
			'action':action1,
			'duomultidomain':duomultidomain
		},
		beforeSend:function(){ 
				 
		},
		success:function(data){
			data=data.replace(/\ +/g,"");
			data=data.replace(/[\r\n]/g,"");
			data=data.replace('<br>',"");
			
			if(data==1){
				multierrer1++;
			}
			
		}
	})
	
	if(multierrer1>0){
		tips="对不起，通配符域名不通重复";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var realappcode=$('#realappcode').val();
	if(!dyfrom_null(realappcode)){
		tips="请输入证书申请码";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	if(dyfrom_ajax("include/ajax.php?c=ajax&checkrealappcode=1","realappcode="+realappcode)=='false'){
	   tips="证书申请码错误，请联系在线客服咨询";
	   $('#alert1 .sy-content').html(tips);
	   syalert.syopen('alert1');
	   return false;
	}
}

function checkmultidomain(){
	
	var singleerrer=0;
	var singleerrer1=0;
	var multierrer=0;
	var multierrer1=0;
	var samedomain=0;
	var multidomain="";
	var duosingledomain="|";
	var duomultidomain="|";
	$('#singledomainlist .martb').each(function(){
		var singledomain=$(this).find('input').val().trim().toLowerCase();
		// if(singledomain==domain){
		// 	samedomain=samedomain+1;
		// }
		var nsingledomain="|"+singledomain+"|";
		duosingledomain=duosingledomain+singledomain+"|";
		if(!checkurl(singledomain) || singledomain.substring(0,2)=="*."){
			singleerrer=singleerrer+1;
		}else{
			singledomain=singledomain.split('/')[0];
			domainnum=singledomain.split('.').length;
			if(domainnum<2 || (domainnum==2 && (singledomain.substring(0,2)=="*." || singledomain.substring(0,1)=="*"))){
				singleerrer=singleerrer+1;
			}
		}
		
	})
	if(singleerrer>0){
		tips="对不起，单域名格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var action="check_ttsigledomain";
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
		async:false,  
		data:{
			'action':action,
			'duosingledomain':duosingledomain
		},
		beforeSend:function(){ 
				 
		},
		success:function(data){
			//console.log(data);
			data=data.replace(/\ +/g,"");
			data=data.replace(/[\r\n]/g,"");
			data=data.replace('<br>',"");
			if(data==1){
				singleerrer1++;
			}
		}
	})
	if(singleerrer1>0){
		tips="对不起，单域名不能重复";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	//return false;
	
	// if(samedomain>0){
	// 	tips="新增单域名不能与主域名一样！";
	// 	$('#alert1 .sy-content').html(tips);
	// 	syalert.syopen('alert1');
	// 	return false;
	// }
	
	$('#wildcarddomainlist .martb').each(function(){
		var multidomain=$(this).find('input').val().trim().toLowerCase();
		duomultidomain=duomultidomain+multidomain+"|";
		if(!checkurl(multidomain)){
			multierrer=multierrer+1;
		}else{
			multidomain=multidomain.split('/')[0];
			wildcarddomainnum=multidomain.split('.').length;
			if(wildcarddomainnum<2 || (multidomain.substring(0,2)!="*." && (multidomain.substring(0,1)!="*" || multidomain.substring(1,2)!="."))){
				multierrer=multierrer+1;
			}
		}
		
	})
	
	if(multierrer>0){
		tips="对不起，通配符域名格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var action1="check_ttmultidomain";
	$.ajax({
		type:"POST",
		url:url,
		async:false,  
		data:{
			'action':action1,
			'duomultidomain':duomultidomain
		},
		beforeSend:function(){ 
				 
		},
		success:function(data){
			data=data.replace(/\ +/g,"");
			data=data.replace(/[\r\n]/g,"");
			data=data.replace('<br>',"");
			
			if(data==1){
				multierrer1++;
			}
			
		}
	})
	
	if(multierrer1>0){
		tips="对不起，通配符域名不通重复";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var encry_bits=$(".selectencrybits input:radio[name='encry_bits']:checked").val();
	if(!encry_bits){
		tips="请选择加密强度";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var checktype=$(".selectchecktype input:radio[name='checktype']:checked").val();
	if(!checktype){
		tips="请选择验证方式";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}
function checkunitinfo(){
	var company=$('#company').val();
	if(!dyfrom_null(company) || !dyfrom_min(company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_taxpayercode=$('#m_taxpayercode').val();
	if(!dyfrom_qcode(m_taxpayercode)){
		tips="统一社会信用代码号格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var province=$('#province').val();
	if(!dyfrom_null(province) || !dyfrom_min(province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var city=$('#city').val();
	if(!dyfrom_null(city) || !dyfrom_min(city,4)){
		tips="所在城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var place=$('#place').val();
	if(!dyfrom_null(place) || !dyfrom_min(place,4)){
		tips="所在地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var mobile=$('#mobile').val();
	if(mobile.substring(0,1)==0){
		if(!dyfrom_phone(mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(mobile.substring(0,1)==1){
		if(!dyfrom_mobile(mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var email=$('#email').val();
	if(!dyfrom_email(email)){
		tips="邮箱格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var zcode=$('#zcode').val();
	if(!dyfrom_zipCode(zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var ztypes=$('#ptypesdom').val();
	var zfits=$('#pfitsdom').val();
	if(zfits!="内网IP地址"){
		if(ztypes=="DV"){
			$('#tanchubj2').fadeIn();
		}
	}
	// $('#tanchubj2').fadeIn();
}


function checkevcodeunitinfo(){
	var company=$('#company').val();
	if(!dyfrom_null(company) || !dyfrom_min(company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	
	
	var m_taxpayercode=$('#m_taxpayercode').val();
	if(!dyfrom_qcode(m_taxpayercode)){
		tips="统一社会信用代码号格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var buniness_categoryval=$('.buniness_categoryval').val();
	
	if(!dyfrom_null(buniness_categoryval)){
		tips="企业类型不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var province=$('#province').val();
	if(!dyfrom_null(province) || !dyfrom_min(province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var city=$('#city').val();
	if(!dyfrom_null(city) || !dyfrom_min(city,4)){
		tips="所在城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var place=$('#place').val();
	if(!dyfrom_null(place) || !dyfrom_min(place,4)){
		tips="所在地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var mobile=$('#mobile').val();
	if(mobile.substring(0,1)==0){
		if(!dyfrom_phone(mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(mobile.substring(0,1)==1){
		if(!dyfrom_mobile(mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var email=$('#email').val();
	if(!dyfrom_email(email)){
		tips="邮箱格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var zcode=$('#zcode').val();
	if(!dyfrom_zipCode(zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var ztypes=$('#ptypesdom').val();
	var zfits=$('#pfitsdom').val();
	if(zfits!="内网IP地址"){
		if(ztypes=="DV"){
			$('#tanchubj2').fadeIn();
		}
	}
	// $('#tanchubj2').fadeIn();
}

function checkmanagerinfo(){
	var m_company=$('#m_company').val();
	if(!dyfrom_null(m_company) || !dyfrom_min(m_company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	
	var m_part=$('#m_part').val();
	if(!dyfrom_null(m_part) || !dyfrom_min(m_part,4)){
		tips="所在部门不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var mf_name=$('#mf_name').val();
	if(!dyfrom_null(mf_name) || !dyfrom_min(mf_name,2)){
		tips="名字不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var ml_name=$('#ml_name').val();
	if(!dyfrom_null(ml_name) || !dyfrom_min(ml_name,2)){
		tips="姓氏不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_cardid=$('#m_cardid').val();
	if(!isCardNo(m_cardid)){
		tips="身份证号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var m_email=$('#m_email').val();
	if(!dyfrom_email(m_email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var m_mobile=$('#m_mobile').val();
	if(m_mobile.substring(0,1)==0){
		if(!dyfrom_phone(m_mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(m_mobile.substring(0,1)==1){
		if(!dyfrom_mobile(m_mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	var m_place=$('#m_place').val();
	if(!dyfrom_null(m_place) || !dyfrom_min(m_place,4)){
		tips="地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_province=$('#m_province').val();
	if(!dyfrom_null(m_province) || !dyfrom_min(m_province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_city=$('#m_city').val();
	if(!dyfrom_null(m_city) || !dyfrom_min(m_city,4)){
		tips="城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_zcode=$('#m_zcode').val();
	if(!dyfrom_zipCode(m_zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var zfits=$('#pfitsdom').val();
	if(zfits=="邮件签名" || zfits=="代码签名" || zfits=="文档签名"){
		$('#tanchubj1').fadeIn();
	}else{
		if(zfits!="内网IP证书"){
		   $('#tanchubj2').fadeIn();
		}
	}
		
	
}
function joycheckmanagerinfo(){
	var m_company=$('#m_company').val();
	if(!dyfrom_null(m_company) || !dyfrom_min(m_company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	
	var m_part=$('#m_part').val();
	if(!dyfrom_null(m_part) || !dyfrom_min(m_part,4)){
		tips="所在部门不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var mf_name=$('#mf_name').val();
	if(!dyfrom_null(mf_name) || !dyfrom_min(mf_name,2)){
		tips="名字不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var ml_name=$('#ml_name').val();
	if(!dyfrom_null(ml_name) || !dyfrom_min(ml_name,2)){
		tips="姓氏不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_cardid=$('#m_cardid').val();
	if(!isCardNo(m_cardid)){
		tips="身份证号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var m_email=$('#m_email').val();
	if(!dyfrom_email(m_email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var m_mobile=$('#m_mobile').val();
	if(m_mobile.substring(0,1)==0){
		if(!dyfrom_phone(m_mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(m_mobile.substring(0,1)==1){
		if(!dyfrom_mobile(m_mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
	var m_place=$('#m_place').val();
	if(!dyfrom_null(m_place) || !dyfrom_min(m_place,4)){
		tips="地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_province=$('#m_province').val();
	if(!dyfrom_null(m_province) || !dyfrom_min(m_province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_city=$('#m_city').val();
	if(!dyfrom_null(m_city) || !dyfrom_min(m_city,4)){
		tips="城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var m_zcode=$('#m_zcode').val();
	if(!dyfrom_zipCode(m_zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var zfits=$('#pfitsdom').val();
	if(zfits=="邮件签名" || zfits=="代码签名" || zfits=="文档签名"){
		$('#tanchubj1').fadeIn();
	}else{
		if(zfits!="内网IP证书"){
		   $('#tanchubj2').fadeIn();
		}
	}
	
}
function checkcaiwuinfo(){
	var c_company=$('#c_company').val();
	if(!dyfrom_null(c_company) || !dyfrom_min(c_company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_taxpayercode=$('#c_taxpayercode').val();
	if(!dyfrom_qcode(c_taxpayercode)){
		tips="统一社会信用代码格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_part=$('#c_part').val();
	if(!dyfrom_null(c_part) || !dyfrom_min(c_part,4)){
		tips="所在部门不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cf_name=$('#cf_name').val();
	if(!dyfrom_null(cf_name) || !dyfrom_min(cf_name,2)){
		tips="名字不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cl_name=$('#cl_name').val();
	if(!dyfrom_null(cl_name) || !dyfrom_min(cl_name,2)){
		tips="姓氏不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_cardid=$('#c_cardid').val();
	if(!isCardNo(c_cardid)){
		tips="身份证号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var c_email=$('#c_email').val();
	if(!dyfrom_email(c_email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var c_mobile=$('#c_mobile').val();
	if(c_mobile.substring(0,1)==0){
		if(!dyfrom_phone(c_mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(c_mobile.substring(0,1)==1){
		if(!dyfrom_mobile(c_mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var c_place=$('#c_place').val();
	if(!dyfrom_null(c_place) || !dyfrom_min(c_place,4)){
		tips="地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_province=$('#c_province').val();
	if(!dyfrom_null(c_province) || !dyfrom_min(c_province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_city=$('#c_city').val();
	if(!dyfrom_null(c_city) || !dyfrom_min(c_city,4)){
		tips="城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_zcode=$('#c_zcode').val();
	if(!dyfrom_zipCode(c_zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	
}

function joycheckcaiwuinfo(){
	var c_company=$('#c_company').val();
	if(!dyfrom_null(c_company) || !dyfrom_min(c_company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_taxpayercode=$('#c_taxpayercode').val();
	if(!dyfrom_qcode(c_taxpayercode)){
		tips="统一社会信用代码格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_part=$('#c_part').val();
	if(!dyfrom_null(c_part) || !dyfrom_min(c_part,4)){
		tips="所在部门不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cf_name=$('#cf_name').val();
	if(!dyfrom_null(cf_name) || !dyfrom_min(cf_name,2)){
		tips="名字不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var cl_name=$('#cl_name').val();
	if(!dyfrom_null(cl_name) || !dyfrom_min(cl_name,2)){
		tips="姓氏不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	
	var c_cardid=$('#c_cardid').val();
	if(!isCardNo(c_cardid)){
		tips="身份证号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var c_email=$('#c_email').val();
	if(!dyfrom_email(c_email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var c_mobile=$('#c_mobile').val();
	if(c_mobile.substring(0,1)==0){
		if(!dyfrom_phone(c_mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(c_mobile.substring(0,1)==1){
		if(!dyfrom_mobile(c_mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var c_place=$('#c_place').val();
	if(!dyfrom_null(c_place) || !dyfrom_min(c_place,4)){
		tips="地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_province=$('#c_province').val();
	if(!dyfrom_null(c_province) || !dyfrom_min(c_province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_city=$('#c_city').val();
	if(!dyfrom_null(c_city) || !dyfrom_min(c_city,4)){
		tips="城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var c_zcode=$('#c_zcode').val();
	if(!dyfrom_zipCode(c_zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}
function checkjishuinfo(){
	var t_company=$('#t_company').val();
	if(!dyfrom_null(t_company) || !dyfrom_min(t_company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_taxpayercode=$('#t_taxpayercode').val();
	if(!dyfrom_qcode(t_taxpayercode)){
		tips="统一社会信用代码格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_part=$('#t_part').val();
	if(!dyfrom_null(t_part) || !dyfrom_min(t_part,4)){
		tips="所在部门不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var tf_name=$('#tf_name').val();
	if(!dyfrom_null(tf_name) || !dyfrom_min(tf_name,2)){
		tips="名字不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var tl_name=$('#tl_name').val();
	if(!dyfrom_null(tl_name) || !dyfrom_min(tl_name,2)){
		tips="姓氏不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_cardid=$('#t_cardid').val();
	if(!isCardNo(t_cardid)){
		tips="身份证号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var t_email=$('#t_email').val();
	if(!dyfrom_email(t_email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var t_mobile=$('#t_mobile').val();
	if(t_mobile.substring(0,1)==0){
		if(!dyfrom_phone(t_mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(t_mobile.substring(0,1)==1){
		if(!dyfrom_mobile(t_mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var t_place=$('#t_place').val();
	if(!dyfrom_null(t_place) || !dyfrom_min(t_place,4)){
		tips="地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_province=$('#t_province').val();
	if(!dyfrom_null(t_province) || !dyfrom_min(t_province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_city=$('#t_city').val();
	if(!dyfrom_null(t_city) || !dyfrom_min(t_city,4)){
		tips="城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_zcode=$('#t_zcode').val();
	if(!dyfrom_zipCode(t_zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$('#tanchubj1').fadeIn();
}

function joycheckjishuinfo(){
	var t_company=$('#t_company').val();
	if(!dyfrom_null(t_company) || !dyfrom_min(t_company,4)){
		tips="单位名称不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_taxpayercode=$('#t_taxpayercode').val();
	if(!dyfrom_qcode(t_taxpayercode)){
		tips="统一社会信用代码格式不正确";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_part=$('#t_part').val();
	if(!dyfrom_null(t_part) || !dyfrom_min(t_part,4)){
		tips="所在部门不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var tf_name=$('#tf_name').val();
	if(!dyfrom_null(tf_name) || !dyfrom_min(tf_name,2)){
		tips="名字不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var tl_name=$('#tl_name').val();
	if(!dyfrom_null(tl_name) || !dyfrom_min(tl_name,2)){
		tips="姓氏不能为空或者少于一个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_cardid=$('#t_cardid').val();
	if(!isCardNo(t_cardid)){
		tips="身份证号格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var t_email=$('#t_email').val();
	if(!dyfrom_email(t_email)){
		tips="邮箱不能为空或者格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var t_mobile=$('#t_mobile').val();
	if(t_mobile.substring(0,1)==0){
		if(!dyfrom_phone(t_mobile)){
			tips="电话号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else if(t_mobile.substring(0,1)==1){
		if(!dyfrom_mobile(t_mobile)){
			tips="手机号码格式不正确!";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}else{
		tips="电话号码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	
	var t_place=$('#t_place').val();
	if(!dyfrom_null(t_place) || !dyfrom_min(t_place,4)){
		tips="地址不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_province=$('#t_province').val();
	if(!dyfrom_null(t_province) || !dyfrom_min(t_province,4)){
		tips="省份不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_city=$('#t_city').val();
	if(!dyfrom_null(t_city) || !dyfrom_min(t_city,4)){
		tips="城市不能为空或者少于两个汉字";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var t_zcode=$('#t_zcode').val();
	if(!dyfrom_zipCode(t_zcode)){
		tips="邮政编码格式不正确!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	$('#tanchubj1').fadeIn();
}

function checkcsrcontent(){
	var csrcontent=$('#csrcontent').val();
	if(!dyfrom_null(csrcontent)){
		tips="请先生成CSR文件";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	// var pbrands=$('#pbrands').val();
	// if(pbrands!="JoySSL"){
	// 	$(".zxboxs").fadeIn();
	// 	//$('.tanchubox .zhenshuan').html('<div class="loading">申请提交中</div>');
	// }
}

function checksm2csrcontent(){
	var csrcontent=$('#csrcontent').val();
	if(!dyfrom_null(csrcontent)){
		tips="请先生成CSR文件";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var signcsrcontent=$('#signcsrcontent').val();
	if(!dyfrom_null(signcsrcontent)){
		tips="请先生成sm2SignCSR文件";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var encsrcontent=$('#encsrcontent').val();
	if(!dyfrom_null(encsrcontent)){
		tips="请先生成sm2EncryptCSR文件";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	// var pbrands=$('#pbrands').val();
	// if(pbrands!="JoySSL"){
	// 	$(".zxboxs").fadeIn();
	// 	$('.tanchubox .zhenshuan').html('<div class="loading">申请提交中</div>');
	// }
}

function submitazservice(){
	var domainval=$('#domainval').val();
	if(!dyfrom_null(domainval)){
		tips="证书不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var erjidomain=$('#erjidomain').val();
	if(!dyfrom_null(erjidomain)){
		tips="您的证书主域名没有检索到或子域名不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	var opsystemlist=$('#opsystemlist').val();
	if(opsystemlist==0){
		tips="操作系统不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
}

function addinvoice(){
	var totalorderid=$('#totalorderid').val();
	if(!dyfrom_null(totalorderid)){
		tips="请先选择款项";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	}
	// var isreadxieyi=$('#readxieyi').is(':checked');
	// if(!isreadxieyi){
	// 	tips="请先了解友情提示!";
	// 	$('#alert1 .sy-content').html(tips);
	// 	syalert.syopen('alert1');
	// 	return false;
	// }
}

function addcoupon(){
	var sendobjectnum=$('#sendobjectnum:checked').val();
	var customername=$('#customername').val();
	var customernameuid=$('#customernameuid').val();
	var sendobjectinfo=$('#sendobjectinfo').val();
	if(sendobjectnum==2){
		if(!(dyfrom_null(customername) && dyfrom_null(customernameuid))){
			tips="客户名称请在下拉的匹配中选择";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		} 
	}else if(sendobjectnum==3){
		if(sendobjectinfo==0){
			tips="请选择发放等级";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
	}
	var price=$('#price').val();
	if(!checkInt(price)){
		tips="对不起，您输入的金额格式出错";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	var sendreasonnum=$('#sendreasonnum:checked').val();
	var sendreason=$('#sendreason').val();
	if(sendreasonnum==3 && !dyfrom_null(sendreason)){
	    tips="发放原因其它原因不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;  
	}
	
	var app_productsval="";
	$("#appproductslist #app_products").each(function(){
	  if($(this).find('.checks').attr("checked")){
	   app_productsval+=$(this).find('.checks').val()+",";
	  }
	})
	if(!dyfrom_null(app_productsval)){
		tips="适用产品不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	
	var app_cabrandsval="";
	$("#appbrandslist  #app_cabrands").each(function(){
	  if($(this).find('.checks').attr("checked")){
	   app_cabrandsval+=$(this).find('.checks').val()+",";
	  }
	})
	
	if(!dyfrom_null(app_cabrandsval)){
		tips="适用品牌不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	
	var app_typesval="";
	$(".xinxileft #app_typesval").each(function(){
	  if($(this).find('.checks').attr("checked")){
	    app_typesval+=$(this).find('.checks').val()+",";
	  }
	})
	
	if(!dyfrom_null(app_typesval)){
		tips="适用类型不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	var tiaojianval="";
	$(".xinxileft #tiaojianval").each(function(){
	  if($(this).find('.checks').attr("checked")){
	     tiaojianval+=$(this).find('.checks').val()+",";
	  }
	})
	
	if(!dyfrom_null(tiaojianval)){
		tips="使用条件不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	var uselimitprice=$('#uselimitprice').val();
	if(tiaojianval.indexOf("2,") >=0) { 
		if(!dyfrom_null(uselimitprice) || !checkInt(uselimitprice)){
			tips="使用条件金额不能为空且必须是正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		} 
	} 
	var expiry_date=$('#expiry_date:checked').val();
	var expiry_dateinfo=$('#expiry_dateinfo').val();
	if(expiry_date==5){
		if(!dyfrom_null(expiry_dateinfo) || !checkInt(days)){
			tips="有限期天数不能为空且必须是正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		} 
	}
	$('#tanchubj1').fadeIn();
}


$('#confirmsendcoupon').live('click',function(){
	var sendmethod=$('#sendmethod:checked').val();
	var sendobjectnum=$('#sendobjectnum:checked').val();
	var customername=$('#customername').val();
	var customernameuid=$('#customernameuid').val();
	var price=$('#price').val();
	var sendreasonnum=$('#sendreasonnum:checked').val();
	var sendreason=$('#sendreason').val();
	sendobjectinfo="";
	$('#memberlevel label').each(function(){
		if($(this).find('.checks').attr('checked')){
		   sendobjectinfo=sendobjectinfo+$(this).find('.checks').attr('value')+",";
		}
	})
	sendobjectinfo=sendobjectinfo.substring(0,sendobjectinfo.length-1);
	var app_productsval="";
	$(".jichusxinsx li #app_products").each(function(){
	  if($(this).find('.checks').attr("checked")){
	   app_productsval+=$(this).find('.checks').val()+",";
	  }
	})
	app_productsval=app_productsval.substring(0,app_productsval.length-1);
	var app_cabrandsval="";
	$(".jichusxinsx li #app_cabrands").each(function(){
		if($(this).find('.checks').attr("checked")){
		   app_cabrandsval+=$(this).find('.checks').val()+",";
		}
	})
	app_cabrandsval=app_cabrandsval.substring(0,app_cabrandsval.length-1);
	var app_catypesval="";
	$(".jichusxinsx li #app_catypes").each(function(){
		if($(this).find('.checks').attr("checked")){
		   app_catypesval+=$(this).find('.checks').val()+",";
		}
	})
	app_catypesval=app_catypesval.substring(0,app_catypesval.length-1);
	var app_cafitsval="";
	$(".jichusxinsx li #app_cafits").each(function(){
		if($(this).find('.checks').attr("checked")){
		   app_cafitsval+=$(this).find('.checks').val()+",";
		}
	})
	app_cafitsval=app_cafitsval.substring(0,app_cafitsval.length-1);
	var app_typesval="";
	$(".xinxileft #app_typesval").each(function(){
	  if($(this).find('.checks').attr("checked")){
	    app_typesval+=$(this).find('.checks').val()+",";
	  }
	})
	app_typesval=app_typesval.substring(0,app_typesval.length-1);
	var tiaojianval="";
	$(".xinxileft #tiaojianval").each(function(){
	  if($(this).find('.checks').attr("checked")){
	     tiaojianval+=$(this).find('.checks').val()+",";
	  }
	})
	tiaojianval=tiaojianval.substring(0,tiaojianval.length-1);
	var uselimitprice=$('#uselimitprice').val();
	var expiry_date=$('#expiry_date:checked').val();
	var expiry_dateinfo=$('#expiry_dateinfo').val();
	var n_couponcode=$('#n_couponcode').val();
	// if(!dyfrom_couponcode(n_couponcode)){
	// 	tips="优惠码必须是6位大小写字母、数字组合";
	// 	$('#alert1 .sy-content').html(tips);
	// 	syalert.syopen('alert1');
	// 	return false;
	// }
	var url="public.html";
	var action="addcouponcode";
	$.ajax({
		type:"POST",
		url:url,
	    data:{
		  'action':action,
		  'sendmethod':sendmethod,
		  'sendobjectnum':sendobjectnum,
		  'customername':customername,
		  'customernameuid':customernameuid,
		  'sendobjectinfo':sendobjectinfo,
		  'price':price,
		  'sendreasonnum':sendreasonnum,
		  'sendreason':sendreason,
		  'app_productsval':app_productsval,
		  'app_cabrandsval':app_cabrandsval,
		  'app_catypesval':app_catypesval,
		  'app_cafitsval':app_cafitsval,
		  'app_typesval':app_typesval,
		  'tiaojianval':tiaojianval,
		  'uselimitprice':uselimitprice,
		  'expiry_date':expiry_date,
		  'expiry_dateinfo':expiry_dateinfo,
		  'n_couponcode':n_couponcode
		},
		beforeSend:function(){$('#tanchubj1').fadeIn();},
		success:function(data){
			
			if(data==1){
				$('#tanchubj1').fadeOut();
				tips="相同的优惠码，有效期内不能重复";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false;
			}else{
				setTimeout("window.location.href='couponcodelog.html';", 2000);
			}
		}
	})
	
})

function addcouponcode(){
	var sendmethod=$('#sendmethod:checked').val();
	var sendobjectnum=$('#sendobjectnum:checked').val();
	var customername=$('#customername').val();
	var customernameuid=$('#customernameuid').val();
	var sendobjectinfo=$('#sendobjectinfo').val();
	var o_couponcode=$('#o_couponcode').val();
	var html="<p>管理员，您好！您发放的优惠码规则如下：</p>";
	if(sendmethod==1){
		sendmethodtxt="手动发放";
	    if(sendobjectnum==1){
			sendobjecttxt="全部发放";
		}else if(sendobjectnum==2){
			if(!(dyfrom_null(customername) && dyfrom_null(customernameuid))){
				tips="客户名称请在下拉的匹配中选择";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false; 
			} 
			sendobjecttxt=customername;
		}else if(sendobjectnum==3){
			 sendobjecttxt="普通用户";
		}else if(sendobjectnum==4){
			 sendobjecttxt="未注册用户";
		}else{
			sendobjecttxt="";
			$('#memberlevel label').each(function(){
				if($(this).find('.checks').attr('checked')){
				   sendobjecttxt=sendobjecttxt+$(this).find('.checks').attr('value')+"，";
				}
			})
			sendobjecttxt=sendobjecttxt.substring(0,sendobjecttxt.length-1);
			if(!dyfrom_null(sendobjecttxt)){
				tips="经销商等级不能为空";
				$('#alert1 .sy-content').html(tips);
				syalert.syopen('alert1');
				return false; 
			} 
		}
		html=html+'<p><strong>发放方式</strong>：'+sendmethodtxt+'</p><p><strong>发放对象</strong>：'+sendobjecttxt+'</p>';
	}else if(sendmethod==2){
		sendmethodtxt="注册时发放";
		html=html+'<p><strong>发放方式</strong>：'+sendmethodtxt+'</p>';
	}else if(sendmethod==3){
		sendmethodtxt="证书续费发放";
		html=html+'<p><strong>发放方式</strong>：'+sendmethodtxt+'</p>';
	}
	
	var price=$('#price').val();
	if(!checkInt(price)){
		tips="对不起，您输入的金额格式出错";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	html=html+'<p><strong>发放金额</strong>：'+price+'</p>';
	var sendreasonnum=$('#sendreasonnum:checked').val();
	if(sendreasonnum==1){
		sendreason="促销活动";
	}else if(sendreasonnum==2){
		sendreason="充值优惠";
	}else if(sendreasonnum==3){
		var sendreason=$('#sendreason').val();
		if(!dyfrom_null(sendreason)){
			tips="发放原因其它原因不能为空";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false;
		}
		
	}else if(sendreasonnum==4){
		sendreason="系统注册";
	}else if(sendreasonnum==5){
		sendreason="证书续费";
	}
	html=html+'<p><strong>发放原因</strong>：'+sendreason+'</p>';
	var appproducts="";
	var appbrands="";
	var apptypes="";
	$('#appproductslist #app_products').each(function(){
		if($(this).find('input').attr('checked')){
		   appproducts=appproducts+$(this).find('input').attr('value')+"，";
		}
	})
	appproducts=appproducts.substring(0,appproducts.length-1);
	if(!dyfrom_null(appproducts)){
		tips="适用产品不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	html=html+'<p><strong>适用产品</strong>：'+appproducts+'</p>';
	$('#appbrandslist #app_cabrands').each(function(){
		if($(this).find('input').attr('checked')){
		   appbrands=appbrands+$(this).find('input').attr('value')+"，";
		}
	})
	appbrands=appbrands.substring(0,appbrands.length-1);
	html=html+'<p><strong>适用品牌</strong>：'+appbrands+'</p>';
	
	$('#apptypeslist #app_catypes').each(function(){
		if($(this).find('input').attr('checked')){
		   apptypes=apptypes+$(this).find('input').attr('value')+"，";
		}
	})
	apptypes=apptypes.substring(0,apptypes.length-1);
	html=html+'<p><strong>证书类型</strong>：'+apptypes+'</p>';
	var app_cafitsval="";
	$("#appfitslist #app_cafits").each(function(){
		if($(this).find('.checks').attr("checked")){
		   app_cafitsval+=$(this).find('.checks').val()+"，";
		}
	})
	app_cafitsval=app_cafitsval.substring(0,app_cafitsval.length-1);
	html=html+'<p><strong>适配范围</strong>：'+app_cafitsval+'</p>';
	var app_typesval="";
	$(".xinxileft #app_typesval").each(function(){
	  if($(this).find('.checks').attr("checked")){
	    app_typesval+=$(this).find('.checks').val()+"，";
	  }
	})
	app_typesval=app_typesval.substring(0,app_typesval.length-1);
	if(!dyfrom_null(app_typesval)){
		tips="适用类型不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	html=html+'<p><strong>适用类型</strong>：'+app_typesval+'</p>';
	var tiaojianval="";
	$(".xinxileft #tiaojianval").each(function(){
	  if($(this).find('.checks').attr("checked")){
	     tiaojianval+=$(this).find('.checks').val()+",";
	  }
	})
	
	if(!dyfrom_null(tiaojianval)){
		tips="使用条件不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	var uselimitprice=$('#uselimitprice').val();
	if(tiaojianval.indexOf("2,") >=0) { 
		if(!dyfrom_null(uselimitprice) || !checkInt(uselimitprice)){
			tips="使用条件金额不能为空且必须是正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		} 
		html=html+'<p><strong>使用条件</strong>：商品大于或等于'+uselimitprice+'元可用</p>';
	} 
	if(tiaojianval.indexOf("1,") >=0 && tiaojianval.indexOf("2,") >=0) {
		html=html+'<p><strong>使用条件</strong>：每个优惠码限用一张订单,商品大于或等于'+uselimitprice+'元可用</p>';
	}
	
	var expiry_date=$('#expiry_date:checked').val();
	var expiry_dateinfo=$('#expiry_dateinfo').val();
	if(expiry_date==1){
		html=html+'<p><strong>有&nbsp; 效&nbsp; 期</strong>：30天</p>';
	}else if(expiry_date==2){
		html=html+'<p><strong>有&nbsp; 效&nbsp; 期</strong>：60天</p>';
	}else if(expiry_date==3){
		html=html+'<p><strong>有&nbsp; 效&nbsp; 期</strong>：90天</p>';
	}else if(expiry_date==4){
		html=html+'<p><strong>有&nbsp; 效&nbsp; 期</strong>：365天</p>';
	}else if(expiry_date==5){
		if(!dyfrom_null(expiry_dateinfo) || !checkInt(days)){
			tips="有限期天数不能为空且必须是正整数";
			$('#alert1 .sy-content').html(tips);
			syalert.syopen('alert1');
			return false; 
		} 
		html=html+'<p><strong>有&nbsp;&nbsp;效&nbsp;&nbsp;期</strong>：'+expiry_dateinfo+'天</p>';
	}else if(expiry_date==6){
		html=html+'<p><strong>有&nbsp;&nbsp;效&nbsp;&nbsp;期</strong>：永久</p>';
	}
	
	html=html+'<p><strong>优&nbsp;&nbsp;惠&nbsp;&nbsp;码</strong>：<input type="text" class="couponcodetxt" name="n_couponcode" id="n_couponcode" value="'+o_couponcode+'"></p>';
	$('.smrz .couponcodecontent').html(html);
	$('.smrz').fadeIn();
}

function newpasswordform(){
	pass1=$("#pass1").val();
	if(!dyfrom_pass(pass1)){
		tips="密码需大于8-20位字符，且为数字、字母、符号的组合!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
	pass2=$("#pass2").val();
	if(!dyfrom_null(pass2)||!(pass2==$("#pass1").val())){
		tips="两次输入的密码必须一致!";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}

function modifybzdesign(){
	var bzdesigninfo=$('#bzdesigninfo').val();
	var action=$('#action').val();
	var bzdesignid=$('#bzdesignid').val();
	var beizhuid="#"+$('#bzdesignid').val();
	var url="public.html";
	$.ajax({
		type:"POST",
		url:url,
	    data:{
		  'action':action,
		  'id':bzdesignid,
		  'content':bzdesigninfo
		},
		beforeSend:function(){},
		success:function(data){
			$('.beizhutxttag '+beizhuid).html(bzdesigninfo);
			$('.dlmm').fadeOut();
		}
	})
}

function modifydnsbz(){
	var bzdesigninfo=$('#bzdesigninfo').val();
	var action=$('#action').val();
	var bzdesignid=$('#bzdesignid').val();
	
	var beizhuid="#"+$('#bzdesignid').val();
	
	var url="dns_public.html";
	$.ajax({
		type:"POST",
		url:url,
	    data:{
		  'action':action,
		  'id':bzdesignid,
		  'content':bzdesigninfo
		},
		beforeSend:function(){},
		success:function(data){
			console.log(data);
			$('.beizhutxttag '+beizhuid).html(bzdesigninfo);
			$('.dlmm').fadeOut();
		}
	})
}



// setInterval(function() {
// 	loginactiveajax();
// },5000)

function check(obj){
   var value = $(obj).val();
   var length = value.length;
   if(length>30){
      value = value.substring(0,30);
      $(obj).attr("value",value);
   }
}

function copyText(text) {
		   var textarea = document.createElement("textarea");//创建input对象
		   var currentFocus = document.activeElement;//当前获得焦点的元素
		   document.body.appendChild(textarea);//添加元素
		   textarea.value = text;
		   textarea.focus();
		   if(textarea.setSelectionRange)
		   textarea.setSelectionRange(0, textarea.value.length);//获取光标起始位置到结束位置
		   else
		   textarea.select();
		   try {
		      var flag = document.execCommand("copy");//执行复制
		   } catch(eo) {
		      var flag = false;
		   }
		   document.body.removeChild(textarea);//删除元素
		   currentFocus.focus();
		   return flag;
}

$('#copyrecord').live('click',function(){
	var html=$(this).parent().find('span').html();
	copyText(html);
	if(html){
		tips="复制成功";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		tips="复制失败,请手动复制";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
})

var w_height=$(window).height()-300;
w_height=w_height+"px";
$('.dingbox .loadbox').css("height",w_height);

$('#copyrecordall').live('click',function(){
	var domain=$(this).parent().parent().find('#copydomain').html();
	var recordtypeval=$(this).parent().parent().find('#recordtypeval').html();
	var domainrecordval=$(this).parent().parent().find('#domainrecordval span').html();
	var recordval=$(this).parent().parent().find('#recordval span').html();
	var html='域名：\r\n'+domain.replace(/,/g, '\r\n')+'\r\n记录类型：\r\n'+recordtypeval+'\r\n主机记录：\r\n'+domainrecordval+'\r\n记录值：\r\n'+recordval;
	copyText(html);
	if(html){
		tips="复制成功";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		tips="复制失败,请手动复制";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
})

$('#dnscopyrecordall').live('click',function(){
	var domain=$(this).parent().find('span').html();
	var recordtypeval=$(this).parent().parent().parent().find('#recordtypeval').html();
	var domainrecordval=$(this).parent().parent().parent().find('#domainrecordval span').html();
	var recordval=$(this).parent().parent().parent().find('#recordval span').html();
	var html='域名：\r\n'+domain+'\r\n记录类型：\r\n'+recordtypeval+'\r\n主机记录：\r\n'+domainrecordval+'\r\n记录值：\r\n'+recordval;
	copyText(html);
	if(html){
		tips="复制成功";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		tips="复制失败,请手动复制";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
})

$('#dnscopyrecordalldetail').live('click',function(){
	var domain=$(this).parent().parent().parent().find('#domainval span').html();
	var recordtypeval="TXT";
	var domainrecordval=$(this).parent().parent().parent().find('#domainrecordval span').html();
	var recordval=$(this).parent().parent().parent().find('#recordval span').html();
	var html='域名：\r\n'+domain+'\r\n记录类型：\r\n'+recordtypeval+'\r\n主机记录：\r\n'+domainrecordval+'\r\n记录值：\r\n'+recordval;
	copyText(html);
	if(html){
		tips="复制成功";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}else{
		tips="复制失败,请手动复制";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
})

function sendcertpacklayer(){
	var customerid=$('#selectcustomer').attr('data-value');
	var certnum=$('.channelsinputnum').val();
	if(!dyfrom_null(certnum)){
		tips="证书包数据不能为空";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false; 
	} 
	var action="isrightgiftcertnum";
	var url="public.html";
	var action="isrightgiftcertnum";
	var url="public.html";
	var error=0;
	$.ajax({
		type:"POST",
		url:url,
		async:false,  
		data:{
			'action':action,
			'customerid':customerid,
			'certnum':certnum
		},
		success:function(data){
			if(data==1){
				error++;
			}
		}
	})
	if(error>0){
		tips="赠送的证书数不能超过最大赠送数";
		$('#alert1 .sy-content').html(tips);
		syalert.syopen('alert1');
		return false;
	}
}


$('#copyrecode').live('click',function(){
    // 1. 获取原始 HTML 字符串
    var html = $(this).parent().parent().find('.code-container').html();
    // 2. 手动将 HTML 实体反转义
    var normalCode = html
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&'); // 注意顺序，&amp; 通常要最先处理，但这里简单场景可以这样写
    
    // 3. 复制正常代码
    copyText(normalCode); 
    
    if(normalCode){
        tips="复制成功";
        $('#alert1 .sy-content').html(tips);
        syalert.syopen('alert1');
        return false;
    }else{
        tips="复制失败,请手动复制";
        $('#alert1 .sy-content').html(tips);
        syalert.syopen('alert1');
        return false;
    }
})



