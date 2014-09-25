<?php session_start(); ?>
<?php
register();
function register()
{
	$con=mysqli_connect("localhost","root","root","eshop");
	// Check connection
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$avatar =  $_POST['avatar'];
	//test_validation();
	$query = mysqli_query($con, "SELECT ID FROM User WHERE email= '$_POST[email]' and password = '$_POST[password]'");
	if (mysqli_num_rows($query) != 0)
	{
		echo "email";
		// echo "email already exists";
	}
	else {
		if ($avatar =  "")
		{
			$avatar= "http://productfind.interiordesign.net/media/photos/37/37806-18469-cfakepathno-product-image.jpg";	
		}
		$query2 = mysqli_query($con, "INSERT INTO User(first_name,last_name,email,password,avatar)
			VALUES ('$first_name','$last_name','$email','$password','$avatar')");
		// echo "YOUR REGISTRATION IS COMPLETED...";
		$user_id = mysqli_insert_id($con);
		$_SESSIION['U_ID']=$user_id;
		echo "OK";
		mysqli_close($con);
	}
}
?>