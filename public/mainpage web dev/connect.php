<?php
	
	$Full Name = $_POST['Full Name'];

	$Email Address= $_POST['Email Address'];
	
	$Phone Number= $_POST['Phone Number'];

	// Database connection
	$conn = new mysqli('localhost','root','','form');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration( Full Name, Email Address,  Phone Number) values(?, ?, ?)");
		$stmt->bind_param("ssi",  $Full Name,  $Email Address, $Phone Number);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>