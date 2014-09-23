function login() {
	var em = $("#inputEmail3").val();
	var pass = $("#inputPassword3").val();
	if (!LogInValidation(em,pass)) {
		return;
	}

	$.ajax({
		type: "POST",
		data: {	"email": em,
				"password": pass},
		url: "http://localhost/AL/controller/login.php",
		success: function(data){
			if (data == "OK") {
				alert(data);
				$("#login-div").html("");
				// $("#user-reg").html("<div class=\"alert alert-danger\">registration successfully</div>");
			}else if(data == "email"){
				alert("Faild to connect, Try again later .. Sorry for the inconvenience");
			}
		}
	});
}



function LogInValidation(user, password) {
	var returnedV = true;
	if (user.length < 1) {
		document.getElementById("inputEmail3").style.border= "red 1px solid";
		returnedV = false;
	}else {
		document.getElementById("inputEmail3").style.border= "";
		returnedV = true;
	}
	if (password.length < 1) {
		document.getElementById("inputPassword3").style.border= "red 1px solid";
		returnedV = false;
	}else {
		document.getElementById("inputPassword3").style.border= "";
		returnedV = true;
	}
	return returnedV;
}

function checkforLoginUser() {
	var logedIn = false;
	$.ajax({
		type: "GET",
		url: "http://localhost/AL/controller/check.php",
		success: function(data){
			if (data == "ok") {
				$("#login-div").load("view/inc/_logininfo.html");
				logedIn = true;
			}else if(data == "404"){
				$("#login-div").load("view/inc/_login.html");
				logedIn = false;
			}
		}
	});

	return logedIn;
}
