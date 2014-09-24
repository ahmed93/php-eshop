function checkConnectionForConformation(pID, pStk, pPRICE, pDes, pNAME) {
	checkforLoginUserForProfile(pID, pStk, pPRICE, pDes, pNAME);
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
