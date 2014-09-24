<?php session_start(); ?>
<?php
editUser();
function editUser()
{
	$first_name =  $_POST['first_name'];
	$last_name =  $_POST['last_name'];
	$email =  $_POST['email'];
	$password =  $_POST['password'];
	$avatar =  $_POST['avatar'];
	$check = ($password == "");
	switch ($check) {
		case 0:
			editUser_with_password($first_name, $last_name, $email, $password, $avatar);
			break;
		
		case 1:
			editUser_with_no_password($first_name, $last_name, $email, $avatar);
			break;
	}
}

function editUser_with_password($first_name, $last_name, $email, $password, $avatar)
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
	echo "ok";
	mysqli_close($con);
}


function editUser_with_no_password($first_name, $last_name, $email, $avatar)
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
	 		email = '$email', avatar = '$avatar' WHERE ID='$_SESSION[U_ID]'"); 
	}
	echo "ok";
	mysqli_close($con);
}
?>