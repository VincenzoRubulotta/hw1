<?php
session_start();

    $jsondata = file_get_contents('php://input');

    $data = json_decode($jsondata, true);

    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $query = "INSERT INTO ESAMECONVALIDATO (Studente, Docente, Materia, Voto) VALUES('".$data['Studente']."', '".$data['Docente']."', '".$data['Materia']."', '".$data['Voto']."')";

    $res = mysqli_query($conn, $query);

    $query = "UPDATE STUDENTE S SET S.CFU = (S.CFU + (SELECT M.CFU FROM MATERIA M WHERE M.Docente = '".$data['Docente']."' AND M.Nome = '".$data['Materia']."')) WHERE S.Matricola = '".$data['Studente']."'";
    $res = mysqli_query($conn, $query);
    
?>

!
