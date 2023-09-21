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
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);

// Execute the prepared statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    // Successful login
    header("Location: foodi.html"); // Redirect to "foodi.php" page
    exit(); // Prevent execution of remaining code
} else {
    // Failed login
    header("Location: login.html?error=1");
    exit();
}

// Close the database connection
$stmt->close();
$conn->close();
?>