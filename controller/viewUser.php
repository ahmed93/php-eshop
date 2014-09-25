<?php session_start(); ?>
<?php 
	viewUser();
	function viewUser() {
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection

		if(!isset($_SESSION['U_ID']))
			echo "404";
		else {
			if (mysqli_connect_errno()) {
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			$user = mysqli_query($con,"SELECT * FROM User WHERE ID='$_SESSION[U_ID]'");
			$user_info = array();
			while($row = mysqli_fetch_array($user)) {
				$user_row = array("first_name" => $row['first_name'], "last_name" => $row['last_name'], "email" => $row['email'],
				'avatar' => $row['avatar']);
				array_push ($user_info, $user_row);
			}
			echo json_encode($user_info);
			mysqli_close($con);
		}
	}
?>