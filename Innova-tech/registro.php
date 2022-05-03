<?php
$nombre = $_REQUEST['username'];
$contraseña = $_REQUEST['password'];

$conexion=new mysqli("localhost","root","","innova-users"); 
$sql="INSERT INTO usernames VALUES (Null,'$nombre','$contraseña')"; 
$ejecutar=mysqli_query($conexion, $sql); 
?>