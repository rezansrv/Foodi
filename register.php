<?php
// Database connection information
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "foodi";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get input values from the form
$username = $_POST['username'];
$password = $_POST['password'];

// Use prepared statement to prevent SQL injection attacks
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);

//  prepared statement
if ($stmt->execute()) {
    header("Location: login.html");
    exit();  
} else {
    echo "Error: " . $stmt->error;
}

// Close the database connection
$stmt->close();
$conn->close();
?>