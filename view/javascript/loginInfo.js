function myHistory() {
	$("#main-body").load("view/inc/_history.html", function(){
		
	});
}

function myprofile() {
	$("#main-body").load("view/inc/_profilePage.html", function(){

	});
}


function editprofile() {

	var fname = $("#fname-value").text();
	var lname = $("#lname-value").text();
	var mail = $("#mail-value").text();
	var avatar = $("#img-value").attr('src');


	$("#mail-div").html("<input id=\"profile-email-value\" type=\"mail\" class=\"form-control\" placeholder=\"Email\" value=\""+mail+"\">");
	$("#fname-div").html("<input id=\"profile-fname-value\" type=\"text\" class=\"form-control\" placeholder=\"Email\" value=\""+fname+"\">");
	$("#lname-div").html("<input id=\"profile-lname-value\" type=\"text\" class=\"form-control\" placeholder=\"Email\" value=\""+lname+"\">");
	$("#addedMV").append("<div id=\"tempEdit\" class=\"well row profile-mail\"> \
							<div class=\"field-title col-md-4\"> <font><b>Avatar:</b> </font></div> \
							<input onblur=\"loadIMG();\" id=\"profile-avatar-value\" type=\"text\" class=\"form-control\" placeholder=\"Avatar\" value=\""+avatar+"\"> \
						</div>");

	$("#editB").html("<button class=\"btn btn-info glyphicon glyphicon-ok\" onClick=\"doneProfileEdit()\"> Save</button>")
}

function loadIMG() {
	var av = $("#profile-avatar-value").val();
	$("#img-value").attr('src', av);
};

function doneProfileEdit() {
	var fname = $("#profile-fname-value").val();
	var lname = $("#profile-lname-value").val();
	var mail = $("#profile-email-value").val();

	$("#mail-div").html("<input id=\"profile-email-value\" type=\"mail\" class=\"form-control\" placeholder=\"Email\" value=\""+mail+"\">");
	$("#fname-div").html("<label id=\"fname-value\">Ahmed</label>");
	$("#lname-div").html("<label id=\"lname-value\">Mohamed Magdi</label>");
	$("#mail-div").html("<label id=\"mail-value\">Mohamed Magdi</label>");
	$("#tempEdit").remove();
	
	$("#editB").html("<button class=\"btn btn-info glyphicon glyphicon-edit\" onClick=\"editprofile()\"> Save</button>")
}
