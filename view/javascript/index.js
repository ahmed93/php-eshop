/*
 *	document.ready : For initializing some divs with values on page ready
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
$(document).ready(
	function () {
		$("#footer-div").load("view/inc/_footer.html");
		// $("#main-body").load("view/inc/_profilePage.html");
		checkforLoginUser();
		// getProducts();
		myprofile();
});

function goHomePage() {
	getProducts();
}

function myprofile() {

}
