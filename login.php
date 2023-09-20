<?php
// اطلاعات اتصال به دیتابیس
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "foodi";

// اتصال به دیتابیس
$conn = new mysqli($servername, $username, $password, $dbname);

// بررسی اتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// دریافت مقادیر ورودی از فرم
$username = $_POST['username'];
$password = $_POST['password'];

// استفاده از prepared statement برای جلوگیری از حملات تزریق SQL
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);

// اجرای prepared statement
$stmt->execute();

// دریافت نتیجه
$result = $stmt->get_result();

if ($result->num_rows == 1) {
    // ورود موفقیت‌آمیز
    header("Location: foodi.html"); // هدایت به صفحه "foodi.php"
    exit; // جلوگیری از اجرای بقیه کدها
} else {
    // ورود ناموفق
    echo "Invalid username or password!";
}

// بستن اتصال به دیتابیس
$stmt->close();
$conn->close();
?>