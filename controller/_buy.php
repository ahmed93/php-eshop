<!DOCTYPE html>

<?php session_start(); ?>

<html>
	<body>
		here buy
		<?php
			function buy($u_id){
				$con=mysqli_connect("localhost","root","root","eshop");
				// Check connection
				if (mysqli_connect_errno()) {
				  echo "Failed to connect to MySQL: " . mysqli_connect_error();
				}


				mysqli_query( $con, "UPDATE Product SET stock = stock-1 WHERE ID='$p_id' ");
				mysqli_query($con,"INSERT INTO History (user_id, product_id) VALUES ('$_SESSION['U_ID']', '$_POST[P_ID]')");
			}

			buy("1","2");
		?>
	</body>
</html>
