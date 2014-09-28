<?php session_start(); ?>

<?php
	login();
	function login(){
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection
		if (mysqli_connect_errno()) {
		  echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		$email = mysqli_real_escape_string($con,$_POST['email']);
		$password = md5($_POST['password']);

		$result = mysqli_query($con, "SELECT ID FROM User WHERE email = '$email' and password = '$password'");
		if (mysqli_num_rows($result) != 0)
		{
			echo json_encode("Failed");
		}else {
			foreach ($result as $value) {
				foreach ($value as $key) {
						$int = $key;
					}
			}

			if (!empty($int)) {
				$_SESSION['U_ID']=$int;
				echo json_encode("OK");
			}else{
				echo json_encode("Failed");
			}
		}	
		mysqli_close($con);
	}
?>
