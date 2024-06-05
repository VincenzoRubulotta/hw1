<?php
  $jsondata = file_get_contents('php://input');

  $data = json_decode($jsondata, true);

  $prova = array();
  $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

  $query = "SELECT * FROM UTENTE U WHERE U.CF = '".$data['CF']."' AND U.Numero_Telefono = '".$data['Telefono']."'";

  $res = mysqli_query($conn, $query);

  if(mysqli_num_rows($res)>0)
  {
    while($row = mysqli_fetch_assoc($res))
    {
        $prova[] = $row;
    }

    mysqli_free_result($res);
    mysqli_close($conn);
    echo json_encode($prova);
  }
  else
  {
    echo json_encode(null);
  }

?>