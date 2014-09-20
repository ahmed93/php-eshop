<!DOCTYPE html>
<?php session_start(); ?>
<html>
<body>
<?php
// register();
header("Location:../index.html");
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
		echo "email already exists";
	}
	else {
		$query2 = mysqli_query($con, "INSERT INTO User(first_name,last_name,email,password,avatar)
			VALUES ('$first_name','$last_name','$email','$password','$avatar')");
		// echo "YOUR REGISTRATION IS COMPLETED...";
		$user_id = mysqli_insert_id();
		$_SESSIION['U_ID']=$user_id;
		mysqli_close($con);
	}
}

// function test_validation()
// {
// 	if ($_SERVER["REQUEST_METHOD"] == "POST") {
// 		if (empty($_POST["first_name"])) {
// 			$firstnameErr = "First Name is required";
// 		} else {
// 			$firstname = test_input($_POST["first_name"]);
// 			// check if name only contains letters and whitespace
// 			if (!preg_match("/^[a-zA-Z ]*$/",$first_name)) {
// 			  $firstnameErr = "Letters and whitespaces are the only characters allowed";
// 			}
// 		}

// 		if (empty($_POST["last_name"])) {
// 			$lastnameErr = "Last Name is required";
// 		} else {
// 			$lastname = test_input($_POST["last_name"]);
// 			// check if name only contains letters and whitespace
// 			if (!preg_match("/^[a-zA-Z ]*$/",$last_name)) {
// 			  $lastnameErr = "Letters and whitespaces are the only characters allowed";
// 			}
// 		}

// 		if (empty($_POST["email"])) {
// 			$emailErr = "Email is required";
// 		} else {
// 			$email = test_input($_POST["email"]);
// 			// check if e-mail address is well-formed
// 			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
// 			  $emailErr = "Please enter a valid email";
// 			}
// 		}

// 		if (empty($_POST["password"]) || empty($_POST["password_confirm"])) {
// 			if (empty($_POST["password"]) {
// 				$passwordErr = "password is required";
// 			}
// 			if (empty($_POST["password_confirm"]) {
// 				$passwordconfirmErr = "password confirmation is required";
// 			}
// 		} else {
// 			if ($_POST["password"] != $_POST["password_confirm"]) {
// 				$passwordErr = "password don't match your confirmation password";
// 			}
// 		}
// 	}
// }
?>
</body>
</html>