setInterval(function() {
	loginactiveajax();
},10000)
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
			if(data==1){
				window.location.href='../login.html?a=loginout';
			}
		}
	})
}

// getcertificatestatus();
// function getcertificatestatus(){
// 	var action="getcertificatestatus";
// 	var url="public.html";
// 	$.ajax({
// 		type:"POST",
// 		url:url,
// 		data:{
// 		  'action':action
// 		},
// 		beforeSend:function(){},
// 		success:function(data){
// 			setTimeout("getcertificatestatus()", 5000);
// 		}
// 	})
// } 