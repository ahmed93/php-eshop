<!DOCTYPE html>

<?php session_start(); ?>

<html>
	<body>
		here check <br>
		<?php
			function login(){
				if(isset($_SESSION['U_ID']))
					echo "ok";
				else
					echo "404";				}
		?>
	</body>
</html>