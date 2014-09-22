function reg() {
	$("#main-body").load("view/inc/_registration.html");
}

/*
 *	regiester : To regiester Users via sending requests to the server side
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
function regieter() {
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
		url: "http://localhost/AL/controller/register.php",
		success: function(data){
			if (data == "OK") {
				getProducts();
				$("#user-reg").html("<div class=\"alert alert-danger\">registration successfully</div>");
			}else if(data == "email"){
				alert("Faild to connect, Try again later .. Sorry for the inconvenience");
			}
		}
	});
}

function checkFN() {
	var fn = $("#firstname").val();
	if (fn.length > 0) {
		document.getElementById("firstname").style.border= "";
		$("#error-fn").html("");
		return;
	};
	document.getElementById("firstname").style.border= "red 1px solid";
	$("#error-fn").html("<font>First Name can not be blank</font>");
};
function checkLN() {
	var ln = $("#lastname").val();
	if (ln.length > 0) {
		document.getElementById("lastname").style.border= "";
		$("#error-ln").html("");
		return;
	};
	document.getElementById("lastname").style.border= "red 1px solid";
	$("#error-ln").html("<font>Last Name can not be blank</font>");
};
function checkMail() {
	var em = $("#email").val();
	if (em.length > 0) {
		document.getElementById("email").style.border= "";
		$("#error-em").html("");
		return;
	};
	document.getElementById("email").style.border= "red 1px solid";
	$("#error-em").html("<font>Email can not be blank</font>");
};
function checkPass() {
	var ps = $("#password").val();
	if (ps.length < 1) {
		document.getElementById("password").style.border= "red 1px solid";
		$("#error-ps").html("<font>Password can not be blank</font>");
		return;
	};
	document.getElementById("password").style.border= "";
	$("#error-ps").html("");
};
function checkPass() {
	var psc = $("#passwordconf").val();
	if (psc.length < 1) {
		document.getElementById("passwordconf").style.border= "red 1px solid";
		$("#error-psc").html("<font>Password Conformation don't match</font>");
		return;
	};
	document.getElementById("passwordconf").style.border= "";
	$("#error-psc").html("");
};


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

