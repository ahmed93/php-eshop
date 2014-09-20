<?php session_start(); ?>
<?php 
	function view_products() {
		$con=mysqli_connect("localhost","root","root","eshop");
		// Check connection
		if (mysqli_connect_errno()) {
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		$result = mysqli_query($con,"SELECT * FROM Product");
		$products = array();
		while($row = mysqli_fetch_array($result)) {
			$rowarray = array("ID"=>$row['ID'], "name"=>$row['name'], "description"=>$row['description'], "stock"=>$row['stock'],
				"price"=> $row['price'],"img"=> $row['picture']); 
			array_push ($products, $rowarray);
		}
		echo json_encode($products);
		mysqli_close($con);
		// to view all products!!!!
		// foreach($products as $count => $row) {
		// 	foreach($row as $key => $value) {
		// 		echo $key.' = '.$value."<br />";
		// 	}
		// echo "<br>";
		// }
	}
view_products();
?>
