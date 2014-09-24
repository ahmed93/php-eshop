/*
 *	document.ready : For initializing some divs with values on page ready
 *	Parameters: none
 *	Return : none
 *	Author: Ahmed Mohmaed Magdi
 */
$(document).ready(
	function () {
		$("#footer-div").load("view/inc/_footer.html");
		checkforLoginUser();
		getProducts();
});

function goHomePage() {
	getProducts();
}


function myprofile() {

}


