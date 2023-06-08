<?php
require_once 'header.php';
require_once '../config/auth.php'; //session block
?>

<?php
$emergencyStatus = lastResult('emergency', 'emergency_id', ['id' => 31]);
print_r($emergencyStatus);
?>

<?php include 'footer.php'; ?>