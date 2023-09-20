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
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);

// اجرای prepared statement
if ($stmt->execute()) {
    // ثبت نام موفق بود، انتقال به صفحه login.html
    header("Location: login.html");
    exit; // قطع اجرای برنامه بلافاصله پس از انتقال به صفحه جدید
} else {
    echo "Error: " . $stmt->error;
}

// بستن اتصال به دیتابیس
$stmt->close();
$conn->close();
?>