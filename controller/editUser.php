<?php session_start(); ?>
<?php
function editUser($first_name, $last_name, $email, $password, $avatar , $check)
{
	switch ($check) {
		case 'true':
			editUser_with_password($first_name, $last_name, $email, $password, $avatar);
			break;
		
		case 'false':
			editUser_with_no_password($first_name, $last_name, $email, $avatar);
			break;
	}
}

fuction editUser_with_password($first_name, $last_name, $email, $password, $avatar)
{
	$con=mysqli_connect("localhost","root","root","eshop");
	// Check connection
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	if($avatar == "")
	{
		$query = mysqli_query($con, "UPDATE User SET first_name = '$first_name', last_name = '$last_name', 
	 			email = '$email', password = '$password' WHERE ID='$_SESSION[U_ID]"); 
	}
	else
	{	
		$query = mysqli_query($con, "UPDATE User SET first_name = '$first_name', last_name = '$last_name', 
	 		email = '$email', password = '$password', avatar = '$avatar' WHERE ID='$_SESSION[U_ID]'"); 
	}
	mysqli_close($con);
}


fuction editUser_with_no_password($first_name, $last_name, $email, $avatar)
{
	$con=mysqli_connect("localhost","root","root","eshop");
	// Check connection
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	if($avatar == "")
	{
		$query = mysqli_query($con, "UPDATE User SET first_name = '$first_name', last_name = '$last_name', 
	 			email = '$email' WHERE ID='$_SESSION[U_ID]"); 
	}
	else
	{	
		$query = mysqli_query($con, "UPDATE User SET first_name = '$first_name', last_name = '$last_name', 
	 		email = '$email', password = '$password', avatar = '$avatar' WHERE ID='$_SESSION[U_ID]'"); 
	}
	mysqli_close($con);
}
}
?>