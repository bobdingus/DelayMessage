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

$sql = "SELECT * FROM gamemessages order by TimeSent DESC LIMIT 20";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table>";
	echo "<thead>";
	echo "<td>Message</td><td>Time Clicked</td><td>Time Sent</td>";
	echo "</thead>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>" . "<td>" . $row["Message"]. "</td>" ."<td>" . $row["TimeClicked"]."</td>"."<td>" . $row["TimeSent"]."</td>";
    }
	echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>