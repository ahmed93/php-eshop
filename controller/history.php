<?php session_start(); ?>
<?php 
	history();
	function history() {
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection
		if (mysqli_connect_errno()) {
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		$result = mysqli_query($con,"SELECT product_id , date FROM History WHERE user_id='$_SESSION[U_ID]'");
		$history = array();
		while($row = mysqli_fetch_array($result)) {
			$result2 = mysqli_query($con,"SELECT name , price FROM Product WHERE ID='$row[product_id]'");
			$row2 = mysqli_fetch_array($result2);
			$rowarray = array("name"=>$row2['name'], "price"=>$row2['price'], "date"=>$row['date']);
			array_push ($history, $rowarray);
		}
		echo json_encode($history);
		mysqli_close($con);
	}
?>
