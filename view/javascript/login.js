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
		url: "controller/login.php",
		success: function(data){
			var array = $.parseJSON(data);
			if (array == "OK") {
				checkforLoginUser();
			}else if(array == "Failed"){
				alert("Email doesn't exist !!!");
			}else{
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

function checkforLoginUserForProfile(pID, pStk, pPRICE, pDes, pNAME) {
	$.ajax({
		type: "GET",
		url: "controller/check.php",
		success: function(data){
			if (data == "ok") {
				$("#main-body").load("view/inc/_confomationView.html",function(){
					conformationProduct(pID, pStk, pPRICE, pDes, pNAME);
				});
			}else if(data == "404"){
				$("#main-body").load("view/inc/_registration.html",function(){
					alert("register PLZ or Login..");
				});
			}
		}
	});
}

function checkforLoginUser() {
	// $.ajax({
	// 	type: "GET",
	// 	url: "controller/check.php",
	// 	success: function(data){
	// 		if (data == "ok") {
	// 			$("#login-div").load("view/inc/_loginInfo.html",function(){

	// 			});
	// 		}else if(data == "404"){
	// 			$("#login-div").load("view/inc/_login.html");
	// 		}
	// 	}
	// });
	$.ajax({
		type: "GET",
		url: "controller/viewUser.php",
		success: function(data){
			var array = $.parseJSON(data);
			if (array=="") {
				$("#login-div").load("view/inc/_login.html");
			}else{
				$("#login-div").load("view/inc/_loginInfo.html",function(){
					$("#profileName-divM").text(array[0]['first_name']);
					$("#profileIMG-divM").attr('src',array[0]['avatar']);
				});
			}
			
		}
	});
}