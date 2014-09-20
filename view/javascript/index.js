$(document).ready(
	function () {
		$("#login-div").load("view/inc/_login.html");
		$("#footer-div").load("view/inc/_footer.html");
		// $("#main-body").load("view/inc/_registration.html");
		// $("#main-body").load("view/inc/_productsTest.html");
		getProducts();
});
//it is the most expensive smartphone you will ever buy

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

// function regieter() {
// 	var id = $("#firstname").text;
// 				var fn = $("#lastname").text;
// 				var ln = $("#email").text;
// 				var ps = $("#password").text;
// 				var psc = $("#passwordconf").text;
// 				var av = $("#avatarurl").text;
// 	$.ajax({
// 		type: "POST",
// 		data: {	"first_name" => fn,
// 				"last_name" => ln,
// 				"password" => ps,
// 				"passwordC" => psc,
// 				"avatar" => av},
// 		url: "http://localhost/AL/controller/register.php",
// 		success: function(data){
// 			getProducts();
// 		}
// 	});
// }