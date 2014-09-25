<?php 
	session_start(); 
	buy();
	function buy(){
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection
		if (mysqli_connect_errno()) {
		  echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}

		mysqli_query( $con, "UPDATE Product SET stock = stock-1 WHERE ID='$_POST[ID]' ");
		mysqli_query($con,"INSERT INTO History (user_id, product_id) VALUES ('$_SESSION[U_ID]', '$_POST[ID]')");
		echo "ok";
	}
?>
