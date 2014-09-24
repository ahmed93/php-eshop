<?php session_start(); ?>

<?php
	login();
	function login(){
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection
		if (mysqli_connect_errno()) {
		  echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}

		$result = mysqli_query($con, "SELECT ID FROM User WHERE email = '$_POST[email]' and password = '$_POST[password]'");
		foreach ($result as $value) {
			foreach ($value as $key) {
					//echo "$key <br>";
					$int = $key;
				}
		}

		if (!empty($int)) {
			$_SESSION['U_ID']=$int;
			echo json_encode("OK");
			// header('Location: /index.html');
		}else{
			// echo "your email is not in the system ";
			echo json_encode("Failed");
		}
	}
?>
