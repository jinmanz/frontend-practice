function validation(){

	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(email.length==0){
		
		document.getElementById("emailErr").innerHTML="Email cannot be empty!";
	
		return false;
	}else if(!reg.test(email)){
		document.getElementById("emailErr").innerHTML="Please use correct Email!";

		return false;
	}
	if(password.length==0){
		document.getElementById("pwErr").innerHTML="Password cannot be empty!";
	
		return false;
	}else if(password.length<6){
		document.getElementById("pwErr").innerHTML="Password must be 6-12 characters!";
		
		return false;
	}
	return true;
}