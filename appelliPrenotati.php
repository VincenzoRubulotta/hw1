<?php
session_start();

$conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

$prenotati = array();

$query = "SELECT * FROM APPELLO A WHERE A.Identificativo IN (SELECT P.Appello FROM PRENOTAZIONI P WHERE P.Studente = (SELECT S.Matricola FROM STUDENTE S WHERE S.CF = '".$_SESSION['Codice_Fiscale']."'))";

$res = mysqli_query($conn, $query);

if(mysqli_num_rows($res) == 0)
{
  echo null;
}

while($row = mysqli_fetch_assoc($res))
{
    $prenotati[] = $row;
}

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($prenotati);
?>