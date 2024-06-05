<?php
session_start();

if(isset($_GET['Identificativo']))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());
    
    $identificativo = mysqli_real_escape_string($conn, $_GET['Identificativo']);
    $query = "DELETE FROM APPELLO WHERE Identificativo = '".$identificativo."'";

    $res = mysqli_query($conn, $query);
}
?>