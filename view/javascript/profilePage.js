function editprofile() {
	var fname = $("#fname-value").text();
	var lname = $("#lname-value").text();
	var mail = $("#mail-value").text();
	var avatar = $("#img-value").attr('src');

	$("#fname-div").html("	<input id=\"profile-fname-value\" type=\"text\" class=\"form-control\" placeholder=\"Email\" value=\""+fname+"\">");
	$("#lname-div").html("	<input id=\"profile-lname-value\" type=\"text\" class=\"form-control\" placeholder=\"Email\" value=\""+lname+"\">");
	$("#mail-div").html("	<input id=\"profile-email-value\" type=\"email\" class=\"form-control\" placeholder=\"Email\" value=\""+mail+"\">");
	$("#addedMV").append("	<div id=\"tempEdit\"><div class=\"well row profile-mail\"> \
								<div class=\"field-title col-md-4\"> <font><b>Avatar:</b></font></div> \
								<input onblur=\"loadIMG();\" id=\"profile-avatar-value\" type=\"text\" class=\"form-control col-md-8\"  placeholder=\"Avatar\" value=\""+avatar+"\"> \
							</div> \
							<div class=\"well row profile-pass\"> \
								<div class=\"field-title col-md-4\"> <font><b>Password:</b> </font></div> \
								<input onblur=\"validatePasswordProfile();\" id=\"profile-pass-value\" type=\"password\" class=\"form-control col-md-8\"  placeholder=\"password - leave it black, If No change Required\"\"> \
							</div> \
							<div class=\"well row profile-passC\"> \
								<div class=\"field-title col-md-4\"> <font><b>Password confirmation:</b> </font></div> \
								<input onblur=\"checkPassCPro();\" id=\"profile-passC-value\" type=\"password\" class=\"form-control col-md-8\"  placeholder=\"password confirmation - leave it black, If No change Required\"\"> \
							</div>");

	$("#editB").html("<button class=\"btn btn-danger glyphicon glyphicon-ok\" onClick=\"doneProfileEdit()\"> Save</button>")
}

function loadIMG() {
	var av = $("#profile-avatar-value").val();
	$("#img-value").attr('src', av);
}

function validatePasswordProfile() {
	var password = $("#profile-pass-value").val();
	var passwordC = $("#profile-passC-value").val();

	if (password.length > 0) {
		if (password != passwordC) {
			$("#'fieldN'").css("border-color:red 1px solid;");
		}else {
			$("#'fieldN'").css("border-color:normal;");
		}
	};

}

function doneProfileEdit() {
	var fname = $("#profile-fname-value").val();
	var lname = $("#profile-lname-value").val();
	var mail = $("#profile-email-value").val();
	var avatar = $("#img-value").attr('src');
	var pass = $("#profile-pass-value").val();
	var passC = $("#profile-passC-value").val();

	$.ajax({
		type: "POST",
		data: {
			'first_name':fname,
			'last_name':lname,
			'email':mail,
			'password':pass,
			'avatar':avatar
		},
		url: "controller/editUser.php",
		success: function(data){
			if (data=="ok") {
				changeDivBack();
			}else{
				alert("Wrong Info!!!!");
			}
		}
	});
}

function changeDivBack(){
	var fname = $("#profile-fname-value").val();
	var lname = $("#profile-lname-value").val();
	var mail = $("#profile-email-value").val();
	var avatar = $("#img-value").attr('src');
	var pass = $("#profile-pass-value").val();
	var passC = $("#profile-passC-value").val();

	$("#mail-div").html("<input id=\"profile-email-value\" type=\"mail\" class=\"form-control\" placeholder=\"Email\" value=\""+mail+"\">");
	$("#fname-div").html("<label id=\"fname-value\">"+fname+"</label>");
	$("#lname-div").html("<label id=\"lname-value\">"+lname+"</label>");
	$("#mail-div").html("<label id=\"mail-value\">"+mail+"</label>");
	$("#editB").html("<button class=\"btn btn-info glyphicon glyphicon-edit\" onClick=\"editprofile()\"></button>")
	$("#tempEdit").remove();
}

function checkFieldEmptness(fieldN, errorTXT) {
	var text = $("#'fieldN'").val();
	if (text.length < 1) {
		$("#'fieldN'").css("border-color:red 1px solid;");
	}else {
		$("#'fieldN'").css("border-color:normal;");
	}
}