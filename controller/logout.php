<?php session_start(); ?>
<?php
	function logout(){
		session_unset();
		session_destroy();
		echo "out";
	}
?>