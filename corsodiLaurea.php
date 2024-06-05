<?php
 session_start();

 $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

 $Corsi = array();

 $query = "SELECT * FROM CORSO_DI_LAUREA";
 
 $res = mysqli_query($conn, $query);


 while($row = mysqli_fetch_assoc($res))
 {
   $Corsi[] = $row;
 }

 mysqli_free_result($res);
 mysqli_close($conn);
 echo json_encode($Corsi);
?>