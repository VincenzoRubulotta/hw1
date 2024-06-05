<?php
session_start();

if(isset($_GET['Appello']))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $Appello = mysqli_real_escape_string($conn, $_GET['Appello']);  

    $query = "INSERT INTO PRENOTAZIONI (Studente, Appello) VALUES ((SELECT S.Matricola FROM STUDENTE S WHERE S.CF = '".$_SESSION['Codice_Fiscale']."'), '".$Appello."')";

    $res = mysqli_query($conn, $query);
    mysqli_close($conn); 
}
?>