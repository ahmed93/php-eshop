/*
 *	document.ready : For initializing some divs with values on page ready
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
$(document).ready(
	function () {
		$("#login-div").load("view/inc/_login.html");
		$("#footer-div").load("view/inc/_footer.html");
		// $("#main-body").load("view/inc/_registration.html");
		// $("#main-body").load("view/inc/_productsTest.html");
		getProducts();
});

/*
 *	GetProducts: for fetching the products via request from the server
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
function getProducts() {
	$.ajax({
		type: "POST",
		url: "http://localhost/AL/controller/products.php",
		success: function(data){
			var array = $.parseJSON(data);
			var productHTML = "<div class=\"row well\">";

			for (var i = 0; i < array.length; i++) {
				var id = array[i]['ID'];
				var description = array[i]['description']||"No info";
				var img = array[i]['img'];
				var name = array[i]['name'];
				var price = array[i]['price'];
				var stock = array[i]['stock'];

				productHTML +=" <div class=\"product-cell col-md-2 container\"> \
									<div class=\"product-img well row\"> \
										<img class=\"image-responsive\" src=\""+array[i]['img']+"\" alt=\""+array[i]['name']+"\"> \
									</div> \
									<div class=\"product-des row\"> \
										<div class=\"well\"> \
											<font>"+description+"</font> \
										</div> \
									</div> \
									<div class=\"product-opt well row\"> \
										<div class=\"col-md-4\"> \
											<button name=\"product_"+array[i]['ID']+"\" type=\"submit\" class=\"btn btn-primary\">buy</button> \
										</div> \
										<div class=\"col-md-offset-3 col-md-4\"> \
											<p>"+array[i]['price']+"EGP</p> \
										</div> \
									</div> \
								</div>";
			};
			$("#main-body").html(productHTML);
		}
	});
}

function validate(firstN, lastN, EM, Pass, PassC, errorArray) {
	if(firstN.length < 1) {
		document.getElementById("firstname").style.border= "red 1px solid";
		errorArray.push("Please enter you FirstName");
	}
	if(lastN.length < 1) {
		document.getElementById("lastname").style.border= "red 1px solid";
		errorArray.push("Please enter you LastName");
	}
	if(EM.length < 1) {
		document.getElementById("email").style.border= "red 1px solid";
		errorArray.push("Please enter you Email");
	}
	if(Pass.length < 1) {
		document.getElementById("password").style.border= "red 1px solid";
		errorArray.push("Please enter you Password");
	}
	if(PassC.length < 1) {
		document.getElementById("passwordconf").style.border= "red 1px solid";
		errorArray.push("Please enter you Password Conformation");
	}
	return errorArray.length == 0;
}


function showErrorMessage(arrayOfErrors) {
	var data = "";
	for (var i = 0; i < arrayOfErrors.length; i++) {
		data+="<div class=\"alert alert-danger\">"+arrayOfErrors[i]+"</div>";
	}
	$("#errors").html(data);
}

/*
 *	regiester : To regiester Users via sending requests to the server side
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
function regieter() {
	$("#errors").html("");
	var errorArraysMessage = new Array();
	var fn = $("#firstname").val();
	var ln = $("#lastname").val();
	var em = $("#email").val();
	var ps = $("#password").val();
	var psc = $("#passwordconf").val();
	var av = $("#avatarurl").val();
	if (!validate(fn, ln, em, ps, psc, errorArraysMessage)) {
		showErrorMessage(errorArraysMessage);
		return;
	}
	// $.ajax({
	// 	type: "POST",
	// 	data: {	"first_name": fn,
	// 			"last_name": ln,
	// 			"email": em,
	// 			"password": ps,
	// 			"passwordC": psc,
	// 			"avatar": av},
	// 	url: "http://localhost/AL/controller/register.php",
	// 	success: function(data){
	// 		if (data == "OK") {
	// 			getProducts();	
	// 		}else if(data == "email"){
	// 			alert("email");
	// 		}
	// 	}
	// });
}