function conformationProduct(pID, pStk, pPRICE, pDes, pNAME) {
	var elem = $("#showproduct");
	// alert(elem.length);
	elem.html("<div class=\"col-sm-1\">1</div> \
				<div class=\"col-sm-3\">"+pNAME+"</div> \
				<div class=\"col-sm-7\">"+pDes+"</div> \
				<div class=\"col-sm-1\">"+pPRICE+"</div> \
				<hr/> \
				<div> \
				<div class=\"col-sm-offset-10 col-sm-1\">Total Price:</div> \
				<div class=\"col-sm-1\">"+pPRICE+"</div> \
				</div> \
				<div class\"container row\" style=\"padding-top:2em !important; \"> \
					<button class=\"col-sm-offset-11 col-sm-1 btn btn-danger glyphicon glyphicon-ok\" onClick=\"confirmeTransaction("+pID+")\"> confirme</button> \
				</div> ");
}


function confirmeTransaction(id) {
	$.ajax({
		type: "POST",
		data: {'id':id},
		url: "controller/buy.php",
		success: function(data){
			alert(data);
			if (data == "ok") {
				getProducts();
				alert("Your have Transaction was succssfully");
			} else {
				alert("Transaction failed ... try again later .. ");
			}
		}
	});
}