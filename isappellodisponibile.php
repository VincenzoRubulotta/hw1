<?php
 session_start();

 if(isset($_GET['Identificativo']))
 {
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $identificativo = mysqli_real_escape_string($conn, $_GET['Identificativo']);

    $query = "SELECT * FROM APPELLO A WHERE A.Identificativo = '".$identificativo."' 
    AND A.Identificativo NOT IN (SELECT P.Appello FROM PRENOTAZIONI P 
    WHERE P.Studente = (SELECT S.Matricola FROM STUDENTE S WHERE S.CF = '".$_SESSION['Codice_Fiscale']."')) AND A.Nome NOT IN 
    (SELECT E.Materia FROM ESAMECONVALIDATO E WHERE E.Studente = (SELECT S2.Matricola FROM STUDENTE S2 WHERE S2.CF = '".$_SESSION['Codice_Fiscale']."'))";

    $res = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($res);

    if(mysqli_num_rows($res) == 0)
    {
      echo json_encode($row);
    }

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($row);
 }
?>