<?php
session_start();

if(isset($_GET['Identificativo']))
{
   
$conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());
$identificativo = mysqli_real_escape_string($conn, $_GET['Identificativo']);  
$query = "SELECT * FROM UTENTE U WHERE U.CF = (SELECT D.CF FROM DOCENTE D WHERE D.Identificativo = (SELECT A.Docente FROM APPELLO A WHERE A.Identificativo = '".$identificativo."'))";

$res = mysqli_query($conn,$query) or die("Errore: " .mysqli_error($conn));

$row = mysqli_fetch_assoc($res);

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($row);
}
?>