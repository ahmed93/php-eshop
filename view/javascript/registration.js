function reg() {
	$("#main-body").load("view/inc/_registration.html");
}

/*
 *	regiester : To regiester Users via sending requests to the server side
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
function regiester() {
	$("#error-fn").html("");
	$("#error-ln").html("");
	$("#error-em").html("");
	$("#error-ps").html("");
	$("#error-psc").html("");
	$("#error-av").html("");

	var fn = $("#firstname").val();
	var ln = $("#lastname").val();
	var em = $("#email").val();
	var ps = $("#password").val();
	var psc = $("#passwordconf").val();
	var av = $("#avatarurl").val();

	if (validate(fn, ln, em, ps, psc)) {
		return;
	}
	$.ajax({
		type: "POST",
		data: {	"first_name": fn,
				"last_name": ln,
				"email": em,
				"password": ps,
				"passwordC": psc,
				"avatar": av},
		url: "controller/register.php",
		success: function(data){
			alert(data);
			if (data == "OK") {
				alert("registration successfully");
				getProducts();
				$.ajax({
					type: "POST",
					data: {	"email": em,
							"password": ps},
					url: "controller/login.php",
					success: function(data){
						var array = $.parseJSON(data);
						if (array == "OK") {
							checkforLoginUser();
					}
				});
			}else if(data == "email"){
				alert("Email exists, chose another");
			}else {
				alert("Faild to connect, Try again later .. Sorry for the inconvenience");
			}
		}
	});
}

function checkFieldM(FieldName, errorN, Message) {
	var field = $("#"+FieldName).val();
	if (field.length < 1) {
		document.getElementById(FieldName).style.border= "red 1px solid";
		$("#"+errorN).html("<font>"+Message+"</font>");
		return false;
	};
	document.getElementById(FieldName).style.border= "";
	$("#"+errorN).html("");
	if(FieldName == "passwordconf") {
		var tmpMainPass = $("#password").val();
		if (tmpMainPass != field) {
			document.getElementById("passwordconf").style.border= "red 1px solid";
			$("#error-psc").html("<font>Password dosen't match</font>");
			return false;
		}
	}
	return true;
}

function validateFN() {
	checkFieldM("firstname", "error-fn", "First Name can not be blank");
}

function validateLN() {
	checkFieldM("lastname", "error-ln", "Last Name can not be blank");
}

function validateMail() {
	checkFieldM("email", "error-em", "Email can not be blank");
}

function validatePassword() {
	checkFieldM("password", "error-ps", "Password can not be blank");
}

function validatePasswordCon() {
	checkFieldM("passwordconf", "error-psc", "Password can not be blank");
}

function validate(firstN, lastN, EM, Pass, PassC) {
	var x = false;
	if(firstN.length < 1) {
		document.getElementById("firstname").style.border= "red 1px solid";
		$("#error-fn").html("<font>First Name can not be blank</font>");
		x = true;
	}
	if(lastN.length < 1) {
		document.getElementById("lastname").style.border= "red 1px solid";
		$("#error-ln").html("<font>Last Name can not be blank</font>");
		x = true;
	}
	if(EM.length < 1) {
		document.getElementById("email").style.border= "red 1px solid";
		$("#error-em").html("<font>Email can not be blank</font>");
		x = true;
	}
	if(Pass.length < 1) {
		document.getElementById("password").style.border= "red 1px solid";
		$("#error-ps").html("<font>Password can not be blank</font>");
		x = true;
	}
	if(PassC.length < 1) {
		document.getElementById("passwordconf").style.border= "red 1px solid";
		$("#error-psc").html("<font>Password Conformation don't match</font>");
		x = true;
	}
	return x;
}

