/*
 *	document.ready : For initializing some divs with values on page ready
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
$(document).ready(
	function () {
		$("#footer-div").load("view/inc/_footer.html");
		// $("#main-body").load("view/inc/_confomationView.html");
		// $("#main-body").load("view/inc/_registration.html");
		// $("#main-body").load("view/inc/_productsTest.html");
		checkforLoginUser();
		getProducts();
});

function myprofile() {

}


