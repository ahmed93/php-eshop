<!DOCTYPE html>

<?php session_start(); ?>

<html>
	<body>
		<?php
			function logout(){
				session_destroy();
				echo "out";
			}
		?>
	</body>
</html>