<?php session_start(); ?>
<?php 
	function viewUser() {
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection
		if (mysqli_connect_errno()) {
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		$user = mysqli_query($con,"SELECT * FROM User WHERE ID='$_SESSION[U_ID]'");
		while($row = mysqli_fetch_array($user)) {
			$user = array("first_name" => $row['first_name'], "last_name" => $row['last_name'], "email" => $row['email'],
			'avatar' => $row['avatar']);
		}
		mysqli_close($con);
		return $user;
	}
?>