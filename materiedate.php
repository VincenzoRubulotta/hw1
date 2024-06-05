<?php

session_start();

$conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

$materiedate = array();

$query = "SELECT * FROM ESAMECONVALIDATO E WHERE E.Studente = (SELECT S.Matricola FROM STUDENTE S WHERE S.CF = '".$_SESSION['Codice_Fiscale']."')";

$res = mysqli_query($conn, $query);

while($row = mysqli_fetch_assoc($res))
{
    $materiedate[] = $row;
}

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($materiedate);
?>