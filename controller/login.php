<!DOCTYPE html>

<?php session_start(); ?>

<html>
	<body>
		here loog <br>
		<?php
			function login(){
				$con=mysqli_connect("localhost","root","root","eshop");
				// Check connection
				if (mysqli_connect_errno()) {
				  echo "Failed to connect to MySQL: " . mysqli_connect_error();
				}
				$result = mysqli_query($con, "SELECT ID FROM User WHERE email = '$_POST[email]' and password = '$_POST[password]'");
				//$result = mysqli_query($con, "SELECT ID FROM User WHERE email = '' and password = ''");
				foreach ($result as $value) {
					foreach ($value as $key) {
 						//echo "$key <br>";
 						$int = $key;
 					}
				}
				echo "$int<br>";
				if (!empty($int)) {
					$_SESSION['U_ID']=$int;
					$result = mysqli_query($con, "SELECT ID ,name, avatar FROM User WHERE email = '$_POST[email]' and password = '$_POST[password]'");
					$userinfo = array();
					$row = mysqli_fetch_array($result)
					$rowarray = array("name"=>$row['name'],"avatar"=> $row['avatar']); 
					array_push ($userinfo, $rowarray);
					echo json_encode($products);
				}else{
					echo "404";
				}
			}	
			mysqli_close($con);
		?>
	</body>
</html>