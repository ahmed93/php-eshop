function myHistory() {
	$("#main-body").load("view/inc/_history.html", function(){		
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
