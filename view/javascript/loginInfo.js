function myHistory() {
	$("#main-body").load("view/inc/_history.html", function(){
		$.ajax({
			type: "GET",
			url: "controller/history.php",
			success: function(data) {
				// alert(data);
				var array = $.parseJSON(data);
				var dataString = "<table class=\"table table-striped table-condensed\"> \
									<tr class=\"header-table-info\"> \
										<td width=\"10%\"> <label> # </label> </td> \
										<td width=\"40%\"> <label>Product Name </label> </td> \
										<td width=\"40%\"> <label>Date of Transaction </label> </td> \
										<td width=\"10%\"> <label> Price </label> </td> \
									</tr>";
				var totalPrice = 0;
				for (var i = 0; i < array.length; i++) {
					dataString += "	<tr> \
										<td>"+(i+1)+"</td> \
										<td>"+array[i]['name']+"</td> \
										<td>"+array[i]['date']+"</td> \
										<td>"+array[i]['price']+"</td> \
									</tr>";
					totalPrice += parseInt(array[i]['price']);
					// alert(totalPrice);
				};
				dataString +="</table>";

				dataString += "<table class=\"table table-striped table-condensed\"> \
									<tr class=\"header-table-info\"> \
										<td width=\"10%\"></td> \
										<td width=\"40%\"></td> \
										<td width=\"30%\"></td> \
										<td width=\"10%\"><label> Total spends: </label></td> \
										<td width=\"10%\"> <label> "+totalPrice+" </label> </td> \
									</tr></table>";
				$("#history-main-div").html(dataString);
			}
		});

	});
}

function myprofile() {
	$("#main-body").load("view/inc/_profilePage.html", function(){
		$.ajax({
			type: "GET",
			url: "controller/viewUser.php",
			success: function(data){
				var array = $.parseJSON(data);
				$("#fname-value").text(array[0]['first_name']);
				$("#lname-value").text(array[0]['last_name']);
				$("#mail-value").text(array[0]['email']);
				$("#img-value").attr('src',array[0]['avatar']);
			}
		});
	});
}

function logOut() {
	$.ajax({
		type: "GET",
		url: "controller/logout.php",
		success: function(data){
			$("#login-div").load("view/inc/_login.html",function(){
				getProducts();
				alert("You have LogedOut successfully ..");
			});
		}
	});
}
