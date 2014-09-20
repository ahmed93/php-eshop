<!DOCTYPE html>

<?php session_start(); ?>

<html>
	<body>
		here log <br>
		<?php
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
				echo "$int";
				if (!empty($int)) {
					$_SESSION['U_ID']=$int;
					header('Location: /index.html');
				}else{
					echo "your email is not in the system ";
				}
			}

			login("a_b@email.com",'123456');
		?>
	</body>
</html>