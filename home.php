<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Area Personale</title>
</head>
<link  rel = "stylesheet" href = "home.css">
<script src = "home.js" defer></script>
<?php
    session_start();

    if(!isset($_SESSION["Codice_Fiscale"]))
    {
      header("Location:hw1.php");
      exit;
    }
    
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    if(isset($_POST["NEW_Tel"]))
    {
      $newtel = mysqli_real_escape_string($conn, $_POST["NEW_Tel"]);
      $query = "UPDATE UTENTE SET Numero_Telefono = '".$newtel."' WHERE CF = '".$_SESSION["Codice_Fiscale"]."' ";
      $res = mysqli_query($conn, $query);
      if($res != true)
      {
        $errore = true;
      }
    }    

    if(isset($_POST["NEW_Email"]))
    {
      $newemail = mysqli_real_escape_string($conn, $_POST["NEW_Email"]);
      $query = "UPDATE UTENTE SET Email = '".$newemail."' WHERE CF = '".$_SESSION["Codice_Fiscale"]."' ";
      $res = mysqli_query($conn, $query);
      if($res != true)
      {
        $errore = true;
      }
    }

   
     if(isset($_FILES["NEW_foto"]["name"]))
     {
      $error = array();

      $target_dir = "C:/xampp/htdocs/hw1/fotoutenti/";
      $target_file = $target_dir . basename($_FILES["NEW_foto"]["name"]);
      $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
      $check = getimagesize($_FILES["NEW_foto"]["tmp_name"]);
      if($check == false) {
        $error[] = "Uploaded file is not an image.";
      }

      if ($_FILES["NEW_foto"]["size"] > 500000) 
      { 
        $error[] = "Uploaded image is too large.";
      }

      if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) 
      {
        $error[] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
      }

      if (count($error) == 0) {
        if (move_uploaded_file($_FILES["NEW_foto"]["tmp_name"], $target_file)) 
            $query = "UPDATE UTENTE SET Immagine = '".$target_file."' WHERE CF = '".$_SESSION['Codice_Fiscale']."'"; 
            $res = mysqli_query($conn, $query)  or die("Errore: ". mysqli_connect_error());
            if($res)
            {
                //mysqli_free_result($res);
                mysqli_close($conn);
                exit;
            }else{
                $error[] = "Something went wrong.";
            }
        } else {
            $error[] = "Error during saving image.";    
        }
    }   

    if(isset($_POST['NEW_Password']))
    {
      $newpassword = mysqli_real_escape_string($conn, $_POST["NEW_Password"]);
      $hashedpassword = password_hash($newpassword, PASSWORD_DEFAULT); 
      $query = "UPDATE UTENTE SET Password = '".$hashedpassword."' WHERE CF = '".$_SESSION['Codice_Fiscale']."'";
      $res = mysqli_query($conn, $query);
      if($res != true)
      {
        $errore = true;
      }
    }

    if(isset($_POST['Nome']) && isset($_POST['CorsoLaurea']) && isset($_POST['CFU']))
    {
      $nome = mysqli_real_escape_string($conn, $_POST['Nome']);
      $Corso = mysqli_real_escape_string($conn, $_POST['CorsoLaurea']);
      $CFU = mysqli_real_escape_string($conn, $_POST['CFU']);

      $query = "INSERT INTO MATERIA (Nome, Docente, Corso_Di_Laurea, CFU) VALUES('".$nome."', (SELECT Identificativo FROM DOCENTE WHERE CF = '".$_SESSION['Codice_Fiscale']."'), '".$Corso."', '".$CFU."')";
      $res = mysqli_query($conn, $query);
      if($res != true)
      {
        $errore = true;
      }
      else
      {
      $query = "UPDATE DOCENTE D SET D.Materie_Insegnate = (SELECT Count(*) FROM MATERIA M WHERE M.Docente = D.Identificativo) WHERE D.Identificativo = (SELECT D2.Identificativo FROM DOCENTE D2 WHERE D2.CF = '".$_SESSION['Codice_Fiscale']."')";

      $res = mysqli_query($conn, $query);

      if($res != true)
      {
        $errore = true;
      }
      }
    }


    if(isset($_POST['NomeMateria']) && isset($_POST['Corso']) && isset($_POST['fineregistrazione']) && isset($_POST['dataAppello']) && isset($_POST['orario']))
    {
      $nome = mysqli_real_escape_string($conn,$_POST['NomeMateria']);
      $Corso = mysqli_real_escape_string($conn,$_POST['Corso']);
      $datafine = mysqli_real_escape_string($conn,$_POST['fineregistrazione']);
      $datainizio = mysqli_real_escape_string($conn,$_POST['dataAppello']);
      $orario = mysqli_real_escape_string($conn,$_POST['orario']);

      $query = "INSERT INTO APPELLO (Nome, Corso_Di_Laurea, Docente, Data_Fine_Registrazione, Data_Appello, Oraio_Esame) VALUES ('".$nome."', '".$Corso."', (SELECT D.Identificativo FROM DOCENTE D WHERE CF = '".$_SESSION['Codice_Fiscale']."') , '".$datafine."', '".$datainizio."', '".$orario."')";
      $res = mysqli_query($conn, $query);
      if($res != true)
      {
        $errore = true;
      }
    }
?>

<body>
  <div id = 'modale' class = 'hidden'></div>
  <nav id = iniziopagina>
  <div class = 'contenitoretasti'>
    <a class = 'tastohome' href = 'home.php'>Home</a>
    <a class = 'tastologout' href = 'logout.php'>Logout</a>
  </div>
  <div class = 'contenitorelogo'>
    <img class = 'immagineunict' src="logonero.JPEG">
  </div>
  </nav>
  <header id = 'barranome'>
    <?php
        $query = "SELECT * FROM UTENTE WHERE CF = '".$_SESSION['Codice_Fiscale']."'"; 
        $res = mysqli_query($conn, $query);

        
        while($row = mysqli_fetch_object($res))
        {
          echo " ".$row->Nome." ".$row->Cognome."";
        }
      ?>
  </header>
<main>
  <div id = 'sezionecentrale'>
      <div class = 'casella' id = 'tastoprofilo'>
      <img src="idcard.PNG">
        <div>Profilo</div>
      </div>

      <div class = 'casella' id = 'tastocarriera'>
        <img src="ominolaurea.PNG">
        <div>Carriera</div>
      </div>
  </div>

  <div id = 'Profilo' class = 'hidden'>
  </div>
  <div id = 'Carriera' class = 'hidden'></div>
</main>
<footer>
     <div id ="finepagina">smart_edu versione 12.0.0.1 - 
      <?php
        $query = "SELECT * FROM UTENTE WHERE CF = '".$_SESSION['Codice_Fiscale']."'"; 
        $res = mysqli_query($conn, $query);

        
        while($row = mysqli_fetch_object($res))
        {
          echo " ".$row->Nome." ".$row->Cognome."";
        }
      ?> @ WEB2.16468/1n05rdikiosjtruqp25cnai0 - © <span class="sitolinkbottom">www.besmart.it</span> 2005-2024</div>
</footer>
</body>
</html>

