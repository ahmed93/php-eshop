function login() {
	var em = $("#inputEmail3").val();
	var pass = $("#inputPassword3").val();
	alert(em);
	alert(pass);
	$.ajax({
		type: "POST",
		data: {	"email": em,
				"password": pass},
		url: "http://localhost/AL/controller/login.php",
		success: function(data){
			// alert("test");
			
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
