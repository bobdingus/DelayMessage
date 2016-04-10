<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "DB1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$message 		= $_POST['Message'];
$TimeClicked 	= $_POST['TimeClicked'];
$TimeSent 		= $_POST['TimeSent'];

$sql = "INSERT INTO GameMessages (Message, TimeClicked, TimeSent)
VALUES ('" .  $message . "','". $TimeClicked . "','" . $TimeSent ."')";
 
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>