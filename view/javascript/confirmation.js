function checkConnectionForConformation(pID, pStk, pPRICE, pDes, pNAME) {
	checkforLoginUser();
	if (bool) {
		$("#main-body").load("view/inc/_confomationView.html",function(){
			conformationProduct(pID, pStk, pPRICE, pDes, pNAME);
		});
	}else{
		$("#main-body").load("view/inc/_registration.html",function(){
			
		});
	}

}

function conformationProduct(pID, pStk, pPRICE, pDes, pNAME) {
	var elem = $("#showproduct");
	// alert(elem.length);
	elem.html("<div class=\"col-sm-1\">1</div> \
				<div class=\"col-sm-3\">"+pNAME+"</div> \
				<div class=\"col-sm-7\">"+pDes+"</div> \
				<div class=\"col-sm-1\">"+pPRICE+"</div> \
				<hr/> \
				<div class=\"col-cm-offset-10 col-sm-1\">Total Price:</div> \
				<div class=\"col-sm-1\">"+pPRICE+"</div>");
}
