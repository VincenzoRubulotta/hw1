<?php
 session_start();

 if(isset($_GET['Corso_Di_Laurea']))
 {
 $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

 $appelli = array();

 $Corso =  mysqli_real_escape_string($conn,$_GET['Corso_Di_Laurea']);
 $query = " SELECT * FROM APPELLO WHERE Corso_Di_Laurea = '".$Corso."'";

 $res = mysqli_query($conn,$query) or die("Errore: " .mysqli_error($conn));

 while($row = mysqli_fetch_assoc($res))
 {
   $appelli[] = $row;
 }

mysqli_free_result($res);
mysqli_close($conn);
echo json_encode($appelli);
 }
?>