<?php
 session_start();

 if(isset($_GET['materia']))
 {
 $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

 $materia = mysqli_real_escape_string($conn, $_GET['materia']);
 $query = "DELETE FROM MATERIA WHERE Identificativo_Materia = '".$materia."' ";

 $res = mysqli_query($conn,$query) or die("Errore: " .mysqli_error($conn));

 mysqli_close($conn);
 }
?>