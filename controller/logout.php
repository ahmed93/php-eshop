<?php session_start(); ?>
<?php
	logout();
	function logout(){
		session_unset();
		session_destroy();
		echo "out";
	}
?>