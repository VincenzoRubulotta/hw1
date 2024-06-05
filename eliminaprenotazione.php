<?php
session_start();

if(isset($_GET['Matricola']))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $studente = mysqli_real_escape_string($conn, $_GET['Matricola']);

    $query = "DELETE FROM PRENOTAZIONI WHERE Studente = '".$studente."'";
    $res = mysqli_query($conn, $query);
}
?>