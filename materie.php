<?php
 session_start();

 $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

 $query = "SELECT * FROM MATERIA M WHERE M.Docente = (SELECT D.Identificativo FROM DOCENTE D WHERE D.CF = '".$_SESSION['Codice_Fiscale']."')";

 $materie = array();

 $res = mysqli_query($conn,$query) or die("Errore: " .mysqli_error($conn));

 while($row = mysqli_fetch_assoc($res))
 {
     $materie[] = $row;
 }

 mysqli_free_result($res);
 mysqli_close($conn);
 echo json_encode($materie);
?>