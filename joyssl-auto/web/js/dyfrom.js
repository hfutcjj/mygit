// 判断是否为空
function dyfrom_null(value) {
	return !value.replace(/\s+/g,"")=='';
}

// 字符最小长度验证（一个中文字符长度为2）
function dyfrom_min(value, param) {
	 var length = value.length;
	 for ( var i = 0; i < value.length; i++) {
	  if (value.charCodeAt(i) > 127) {length++;}
	 }
	 return length >= param;
}
	
// 字符最大长度验证（一个中文字符长度为2）
function dyfrom_max(value, param) {
	 var length = value.length;
	 if (length==0){return true;} 
	 for ( var i = 0; i < value.length; i++) {
	  if (value.charCodeAt(i) > 127) {length++;}
	 }
	 return length <= param;
}
	
// 不允许包含特殊符号
function dyfrom_string(value) {
	 return  /(^$)|(^[\u4E00-\u9FA5a-zA-Z0-9\s#,，""《》——]|[._-]{1,250}$)/.test(value);
}

function dyfrom_domain(value) {
	 return  /^[a-zA-Z0-9_-]+$/.test(value);
}
	
// 手机号码验证
function dyfrom_mobile(value) {
	 var length = value.length;
	 return length == 11 && /^1(3|4|5|6|7|8|9)\d{9}$/.test(value);
}
	
// 电话号码验证
function dyfrom_phone(value) {
	 var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
	 return tel.test(value);
}


function dyfrom_phone1(value) {
	 var tel = /^(0\d{2,3}-)?\d{7,8}$/;
	 return tel.test(value);
}
	
// 邮政编码验证
function dyfrom_zipCode(value) {
	 var tel = /^[0-9]{5,6}$/;
	 return tel.test(value);
}

// 用户名验证
function dyfrom_user(value) {
	 var username = /^[a-zA-Z]{1}([a-zA-Z0-9]){3,19}$/;
	 return username.test(value);
}

// 验证大于6位由数字，字母，字符组合的
function dyfrom_pass(value) {
	 //var pass = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
	 //var pass = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;
	 var pass = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/;
	 return pass.test(value);
}

// 邮箱
function dyfrom_email(value) {
	var email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	return value.search(email)==0;
}
	
// 必须以特定字符串开头验证
function dyfrom_begin(value, param) {
	 var begin = new RegExp("^" + param);
	 return begin.test(value);
}
	
// 验证值小数位数不能超过两位
function dyfrom_decimal(value) {
	 var decimal = /^-?\d+(\.\d{1,2})?$/;
	 return decimal.test(value);
}
// 验证货币
function dyfrom_ismoney(value){
	var z = /^\d+$/;
	value=$.trim(value).replace(/\b(0+)/gi,""); 
	if(value=='0')return false;
	if(!z.test(value)){
		var re = new RegExp("^[1-9]$");
		return re.test(value);
	}
	return true;
} 

function dyfrom_ismoney1(value){
	
	if(value!=0){
		var z = /^\d+$/;
		value=$.trim(value).replace(/\b(0+)/gi,""); 
		if(!z.test(value)){
			var re = new RegExp("^[1-9]$");
			return re.test(value);
		}
		return true;
	}else{
		return true;
	}
	
} 

//验证身份证号

function isCardNo(value) {
    var pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(value);
}
function dyfrom_ajax(url,value) {
	$.ajax({
		type: "POST",
		url: url,
		async: false,
		cache: false,
		data: value,
		success: function(msg){
			overs=msg;
		}
	});
	return overs;
}

function checkIP(value){
    var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    var reg = value.match(exp);
	return reg;
}

function checkIPv6(value){  
	var exp=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
	var reg = value.match(exp);
	return reg;
}  

function dyfrom_qcode(value) {
	var code =  /^[a-zA-Z0-9]+$/;
	return code.test(value);
}

function dyfrom_couponcode(value) {
	var code =  /^[a-zA-Z0-9]{6}$/;
	return code.test(value);
}

function dyfrom_bcode(value) {
	var code =  /^[0-9]{5,19}$/;
	return code.test(value);
}

function dyfrom_emailname(value) {
	var code =  /^[a-zA-Z0-9]{3,20}$/;
	return code.test(value);
}



function checkInt(value) {
    var re = new RegExp("^[0-9]*[1-9][0-9]*$");
    return re.test(value);
}


function checkurl(value) {
  if (!value) return false;
  var strRegex = /^(?=.{1,255}$)([a-zA-Z0-9\u4e00-\u9fa5*]([a-zA-Z0-9\u4e00-\u9fa5\-]{0,61}[a-zA-Z0-9\u4e00-\u9fa5])?\.)+[a-zA-Z\u4e00-\u9fa5]{2,}$/;
  return new RegExp(strRegex).test(value);
}

function checkisnumeric(value){
	var str=new RegExp("^([-])|(-?[1-9]*[1-9][0-9]*)$");
	return str.test(value);
}


