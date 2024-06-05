<?php

 session_start();

 if(isset($_GET['password']))
 {
 $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

 $query = "SELECT Password FROM UTENTE WHERE CF = '".$_SESSION['Codice_Fiscale']."'";

 $res = mysqli_query($conn, $query);

 $risultato = mysqli_fetch_assoc($res);

 $hashedPassword = $risultato['Password'];
 $password = mysqli_real_escape_string($conn, $_GET['password']);

 if(password_verify($password, $hashedPassword))
 {
    echo json_encode($risultato);
 }
 else
 {
    $risultato['Password'] = null;
    echo json_encode($risultato);
 }
 }
 else
 {
    echo json_encode(null);
 }
?>