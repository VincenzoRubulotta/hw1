<?php
session_start();

$errore = array();

if(isset($_SESSION['Codice_Fiscale']))
{
    header("Location: hw1.php");
    exit;
}

if(isset($_POST['password']) && isset($_POST['Prova']) && isset($_POST['CF']) && isset($_POST['Tel']))
{
    $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $CF = mysqli_real_escape_string($conn, $_POST['CF']);

    $query = "UPDATE UTENTE SET Password = '".$hashedPassword."' WHERE CF = '".$CF."' ";

    $res = mysqli_query($conn, $query);

    if($res == true)
    {
        $_SESSION["Codice_Fiscale"] = $CF;
        header("Location: home.php");
        exit;
    }
    else
    {
        $errore['1'] = 'Impossibile aggiornare la password';
    }

}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recupera Password</title>
</head>
<link  rel = "stylesheet" href = "RecuperPassword.css">
<script src = "RecuperaPassword.js" defer></script>
<body>
    <main>
        <div id = 'contenitore'>
            <div id = 'divnome'>Recupera Password</div>
            <div id = 'contenitoreform'>
            <form action="" name = 'recuperapassword' method = 'post'>
               <input type="text" placeholder = 'Inserisci codice Fiscale' name = 'CF'>
               <input type="text" placeholder = 'Inserisci numero di telefono' name = 'Tel'>
               <input type="submit" name = 'sub' class = 'submit'>
               <div class = 'casellaerrore'>
                <?php
                if(isset($errore['1']))
                echo "'".$errore['1']."'";
                ?>
               </div>
            </form>
         </div>
        </div>

       <button class = 'bottoneritorno'>Torna alla pagina iniziale</button>
    </main>
</body>
</html>