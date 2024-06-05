<?php
session_start();

$jsondata = file_get_contents('php://input');

$data = json_decode($jsondata,true);

if(isset($data))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $query = " SELECT * FROM MATERIA M  WHERE M.Nome = '".$data['Materia']."' AND M.Docente = '".$data['Docente']."'";

    $res = mysqli_query($conn,$query);

    $row = mysqli_fetch_assoc($res);

    mysqli_free_result($res);
    mysqli_close($conn);
    echo json_encode($row);
}
else
{
    echo null;
}
?>