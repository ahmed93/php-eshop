/*
 *	GetProducts: for fetching the products via request from the server
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
function getProducts() {
	$.ajax({
		type: "POST",
		url: "controller/products.php",
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

				productHTML +=" <div class=\"product-cell well col-md-2 \"> \
									<div class=\"product-img well row\"> \
										<img class=\"image-responsive\" src=\""+img+"\" alt=\""+name+"\"> \
									</div> \
									<div class=\"product-des row\"> \
										<div class=\"well\"> \
											<font>"+description+"</font> \
										</div> \
									</div> \
									<div class=\"product-opt well row\"> \
										<div class=\"col-md-4\"> \
											<button name=\"product_"+id+"\" type=\"button\" class=\"btn btn-primary\" \
											onClick=\"checkforLoginUserForProfile("+id+","+stock+","+price+",'"+description+"','"+name+"');\" >Buy</button> \
										</div> \
										<div class=\"col-md-offset-3 col-md-4\"> \
											<p>"+price+"EGP</p> \
										</div> \
									</div> \
								</div>";
			};
			$("#main-body").html(productHTML);
		}
	});
}