<?php
session_start();

if(isset($_GET['Identificativo']))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());
    
    $identificativo = mysqli_real_escape_string($conn,$_GET['Identificativo']);
    $studenti = array();

    $query = "SELECT * FROM STUDENTE S WHERE S.Matricola IN (SELECT P.Studente FROM PRENOTAZIONI P WHERE P.Appello = '".$identificativo."')";

    $res = mysqli_query($conn,$query);

    if(mysqli_num_rows($res) == 0)
    {
        echo null;
    }
    else
    {
        while($row = mysqli_fetch_assoc($res))
        {
            $studenti[] = $row; 
        }
    }

    mysqli_free_result($res);
    mysqli_close($conn);
    echo json_encode($studenti);
}
?>