<?php

error_reporting(E_ERROR |  E_PARSE);



$nombre = $_REQUEST['username'];
$contraseña = $_REQUEST['password'];


$conexion=new mysqli("localhost","root","","innova-users"); 
session_start();
$q = "SELECT COUNT(*) as contar from usernames WHERE password = '$contraseña' AND username = '$nombre'  ";
$consulta = mysqli_query($conexion,$q);
$array = mysqli_fetch_array($consulta);
if ($array['contar']>0) { 
	$_SESSION['user'];
    $user=$_REQUEST['username'];
    echo $user;

}
else{
	echo "datos incorrectos";
}
?>


