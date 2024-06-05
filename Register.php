<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smartedu Unict Registrazione</title>
</head>
<link  rel = "stylesheet" href = "Register.css">
<script src = "register.js" defer></script>

<?php
$errore = array();
session_start();
if(isset($_SESSION["Codice_Fiscale"]))
    {
      header("Location: hw1.php");
      exit;
    }

$conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

if(isset($_POST['Tipologia_Utente']))
{
    if($_POST['Tipologia_Utente'] == 'Docente' && isset($_POST['cf']) && isset($_POST['Nome']) && isset($_POST['Cognome']) && isset($_POST['Email']) && isset($_POST['Tel']) && isset($_POST['data']) && isset($_POST['Password']))
    {
        $cf = mysqli_real_escape_string($conn, $_POST['cf']);
        $Nome = mysqli_real_escape_string($conn, $_POST['Nome']);
        $Cognome = mysqli_real_escape_string($conn, $_POST['Cognome']);
        $Email = mysqli_real_escape_string($conn, $_POST['Email']);
        $Tel = mysqli_real_escape_string($conn, $_POST['Tel']);
        $Data = mysqli_real_escape_string($conn, $_POST['data']);
        $password = mysqli_real_escape_string($conn, $_POST['Password']);

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
 
        $query = "SELECT * FROM UTENTE WHERE CF = '".$cf."'";
        $res = mysqli_query($conn, $query);

        if(mysqli_num_rows($res)>0)
        {
            $errore['2'] = 'Esiste già un utente con questo codice fiscale';
        }
        else
        {
        $query = "INSERT INTO UTENTE VALUES('".$cf."', '".$Nome."', '".$Cognome."', '".$Email."', '".$Tel."', '".$Data."', '".$hashedPassword."' ,'".$_POST['Tipologia_Utente']."', 'utentegenerico.PNG')";
        $res = mysqli_query($conn, $query);

        if($res == true)
        {
            $_SESSION['Codice_Fiscale'] = $_POST['cf'];
            header("Location: home.php");
            exit;
        }
        else
        {
            $errore['1'] = 'Inpossibile effettuare la registrazione';
        }
        }

    }
    else
    if($_POST['Tipologia_Utente'] == 'Studente' && isset($_POST['cf']) && isset($_POST['Nome']) && isset($_POST['Cognome']) && isset($_POST['Email']) && isset($_POST['Tel']) && isset($_POST['data']) && isset($_POST['Password']) && isset($_POST['C_Laurea']))
    {
        $cf = mysqli_real_escape_string($conn, $_POST['cf']);
        $Nome = mysqli_real_escape_string($conn, $_POST['Nome']);
        $Cognome = mysqli_real_escape_string($conn, $_POST['Cognome']);
        $Email = mysqli_real_escape_string($conn, $_POST['Email']);
        $Tel = mysqli_real_escape_string($conn, $_POST['Tel']);
        $Data = mysqli_real_escape_string($conn, $_POST['data']);
        $password = mysqli_real_escape_string($conn, $_POST['Password']);

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $query = "SELECT * FROM UTENTE WHERE CF = '".$cf."'";
        $res = mysqli_query($conn, $query);

        if(mysqli_num_rows($res)>0)
        {
            $errore['2'] = 'Esiste già un utente con questo codice fiscale';
        }
        else
        {
        $query = "INSERT INTO UTENTE VALUES('".$cf."', '".$Nome."', '".$Cognome."', '".$Email."', '".$Tel."', '".$Data."', '".$hashedPassword."' ,'".$_POST['Tipologia_Utente']."', 'utentegenerico.PNG')";
        $res = mysqli_query($conn, $query);

        if($res == true)
        {
            $query = "UPDATE STUDENTE SET Corso_di_Laurea = '".$_POST['C_Laurea']."' WHERE CF = '".$cf."' ";
            $res = mysqli_query($conn,$query);

            if($res == true)
            {
                $_SESSION['Codice_Fiscale'] = $_POST['cf'];
                header("Location: hw1.php");
                exit;
            }
            else
            {
                $errore['1'] = 'Inpossibile effettuare la registrazione';
            }
        }
        else
        {
            $errore['1'] = 'Inpossibile effettuare la registrazione';
        }
        }
    }
}

?>
<body>
    <main>
        <div id = 'contenitore'>
             <h1>
               Nuovo Account
            </h1>
        <div id = 'mainblock'>
        <form name = 'registrazione' action="" method = 'post'>
            <select  name="Tipologia_Utente" class = 'inserimento'>
                <option value="Docente">Docente</option>
                <option value="Studente">Studente</option>
            </select>

            <div id = bloccocambiante></div>
            <div id = 'bloccoerrore'>
                <?php
                if(isset($errore['1']))
                {
                    echo "'".$errore['1']."'";
                }
                if(isset($errore['2']))
                {
                    echo "'".$errore['2']."'";
                }
                ?>
            </div>
        </form>
        </div>
        </div>
        <button  id = 'homepointer' class = 'inserimento'>Torna alla pagina iniziale</button>
    </main>
</body>
</html>