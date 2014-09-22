<?php session_start(); ?>
<?php
	login();
	function login(){
		if(isset($_SESSION['U_ID']))
			echo "ok";
		else
			echo "404";
	}
?>