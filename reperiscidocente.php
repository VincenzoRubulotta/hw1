<?php

session_start();

if(isset($_GET['Identificativo']))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $query = "SELECT * FROM UTENTE U WHERE U.CF = (SELECT D.CF FROM DOCENTE D WHERE D.Identificativo = '".$_GET['Identificativo']."')";

    $res = mysqli_query($conn,$query);
    $docente = mysqli_fetch_assoc($res);

    mysqli_free_result($res);
    mysqli_close($conn);
    echo json_encode($docente);
}
?>