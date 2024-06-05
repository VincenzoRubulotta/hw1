<?php

session_start();

$conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

$query = "SELECT * FROM STUDENTE WHERE CF = '".$_SESSION['Codice_Fiscale']."'";

$res = mysqli_query($conn,$query);

$row = mysqli_fetch_assoc($res);

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($row);
?>