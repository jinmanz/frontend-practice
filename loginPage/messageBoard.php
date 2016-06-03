<!DOCTYPE html>
<html>
<head>
	<title>Message Board</title>
	<link rel="stylesheet" type="text/css" href="messageBoard.css">
</head>
<body>

	<?php
	// define variables and set to empty values
	$username = $message = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	   $username = test_input($_POST["username"]);
	   $message = test_input($_POST["message"]);
	 
	}

	function test_input($data) {
	   $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}
	?>
	<header>
		<h1>Message Board</h1>
	</header>
	<main>
		<div>
			<h2>Topic: Do you like Javascript?</h2>
		</div>
		<div>
			<section>
				<div>
				<p>User Name:</p>
				</div>
				<div>
				<p>Message:</p>
				</div>
			</section>
		</div>
		<div id="newm">
			<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
				<div>
					<p style="display:inline-block; width:19%;">user name:</p>
					<input type="text" name="username">
				</div>
				<div>
					<p>message:</p>
					<textarea rows="3" cols="20"></textarea>
				</div>
				<input type="submit" name="message" value="submit">
			</form>
		</div>
		<?php
echo "<h2>您的输入：</h2>";
echo $username;
echo "<br>";
echo $message;

?>
	</main>



</body>
</html>