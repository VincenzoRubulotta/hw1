<?php
  session_start();
   $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

   $query = "SELECT Matricola FROM STUDENTE WHERE CF = '".$_SESSION['Codice_Fiscale']."'";

   $res = mysqli_query($conn,$query) or die("Errore: " .mysqli_error($conn));

     $row = mysqli_fetch_assoc($res);
     $eventi = $row;


     mysqli_free_result($res);
     mysqli_close($conn);
     echo json_encode($eventi);
?>