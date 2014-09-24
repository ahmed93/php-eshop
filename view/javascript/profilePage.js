function editprofile() {
	var fname = $("#fname-value").text();
	var lname = $("#lname-value").text();
	var mail = $("#mail-value").text();
	var avatar = $("#img-value").attr('src');

	$("#mail-div").html("	<input id=\"profile-email-value\" type=\"mail\" class=\"form-control\" placeholder=\"Email\" value=\""+mail+"\">");
	$("#fname-div").html("	<input id=\"profile-fname-value\" type=\"text\" class=\"form-control\" placeholder=\"Email\" value=\""+fname+"\">");
	$("#lname-div").html("	<input id=\"profile-lname-value\" type=\"text\" class=\"form-control\" placeholder=\"Email\" value=\""+lname+"\">");
	$("#addedMV").append("	<div id=\"tempEdit\" class=\"well row profile-mail\"> \
								<div class=\"field-title col-md-4\"> <font><b>Avatar:</b></font></div> \
								<input onblur=\"checkFieldEmptness('profile-avatar-value', '');\" id=\"profile-avatar-value\" type=\"text\" class=\"form-control col-md-8\"  placeholder=\"Avatar\" value=\""+avatar+"\"> \
							</div> \
							<div id=\"tempEdit\" class=\"well row profile-pass\"> \
								<div class=\"field-title col-md-4\"> <font><b>Password:</b> </font></div> \
								<input onblur=\"checkPassPro();\" id=\"profile-pass-value\" type=\"password\" class=\"form-control col-md-8\"  placeholder=\"password\"\"> \
							</div> \
							<div id=\"tempEdit\" class=\"well row profile-passC\"> \
								<div class=\"field-title col-md-4\"> <font><b>Password confirmation:</b> </font></div> \
								<input onblur=\"checkPassCPro();\" id=\"profile-passC-value\" type=\"password\" class=\"form-control col-md-8\"  placeholder=\"password confirmation\"\"> \
							</div>");

	$("#editB").html("<button class=\"btn btn-info glyphicon glyphicon-ok\" onClick=\"doneProfileEdit()\"> Save</button>")
}

function loadIMG() {
	var av = $("#profile-avatar-value").val();
	$("#img-value").attr('src', av);
}

function doneProfileEdit() {
	var fname = $("#profile-fname-value").val();
	var lname = $("#profile-lname-value").val();
	var mail = $("#profile-email-value").val();
	var avatar = $("#img-value").attr('src');

	$("#mail-div").html("<input id=\"profile-email-value\" type=\"mail\" class=\"form-control\" placeholder=\"Email\" value=\""+mail+"\">");
	$("#fname-div").html("<label id=\"fname-value\">"+fname+"</label>");
	$("#lname-div").html("<label id=\"lname-value\">"+lname+"</label>");
	$("#mail-div").html("<label id=\"mail-value\">"+mail+"</label>");
	$("#tempEdit").remove();
	$("#editB").html("<button class=\"btn btn-info glyphicon glyphicon-edit\" onClick=\"editprofile()\"> Save</button>")

	$.ajax({
		type: "POST",
		url: "http://localhost/AL/controller/viewUser.php",
		success: function(data){
			var array = $.parseJSON(data);
			$("#fname-value").text(array[0]['first_name']);
			$("#lname-value").text(array[0]['last_name']);
			$("#mail-value").text(array[0]['email']);
			$("#img-value").attr('src',array[0]['avatar']);
		}
	});
}


function checkFieldEmptness(fieldN, errorTXT) {
	var text = $("#'fieldN'").val();
	if (text.lenght < 1) {
		$("#'fieldN'").css("border-color:red 1px solid;");
	}else {
		$("#'fieldN'").css("border-color:normal;");
	}
}