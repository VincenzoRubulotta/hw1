<!DOCTYPE html>
<html lang="en">
 <?php
   session_start();

   $errore = array();

   if(isset($_SESSION["Codice_Fiscale"]))
   {
     header("Location: home.php");
     exit;
   }
    

   $conn = mysqli_connect('localhost','root','','HW') or die('Errore:' .mysqli_connect_error());

   if(isset($_POST["Codice_Fiscale"]) && isset($_POST["Password"]))
   {
     $CF =  mysqli_real_escape_string($conn, $_POST['Codice_Fiscale']);
     $Password = mysqli_real_escape_string($conn, $_POST['Password']); 
     $query = "SELECT Password FROM UTENTE WHERE CF = '".$CF."'";
     $res = mysqli_query($conn, $query);
     if(mysqli_num_rows($res) > 0)
     {
     $hashedPassword = mysqli_fetch_assoc($res)['Password'];
     if(password_verify($Password, $hashedPassword))
     {
     $query = "SELECT * FROM UTENTE WHERE CF = '".$CF."' AND Password = '".$hashedPassword."'";
     $res = mysqli_query($conn, $query);
    
       $_SESSION["Codice_Fiscale"] = $CF;
       header("Location: home.php");
       exit;
     }
     else
     {
        $errore['1'] = 'Le credenziali non corrispondono';
     }
    }
    else 
    {
     $errore['2'] = 'La Password non coincide';
    }
   }

 ?>
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smartedu unict</title>
    <link  rel = "stylesheet" href = "hw1.css">
    <script src = "hw1.js" defer></script>
</head>
<script defer loading = 'async' src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBrdGxj2nPYSrGuOnPufg9_zXNMQolB_ok&callback=console.debug&libraries=maps,marker&v=beta">
</script>
<script>
</script>
<body> 
    <main>
    <div id="maindiv">
        <div id = bloccomodale></div>
        <div class="logo">
        <img src="logo.svg" class="icon">
        </div>
    <div id="contenitore">
    <div class="bloccocentrale">
        <div class="unictim"> <img class="logo2" src="monogramma-img-web-pro.svg">
        </div>
        <div class="bloccoattraversa">
            <div class="imagelang">
                <button id ="languagebutton">
                <img src="Screenshot 2024-03-19 121927.png" alt="no image">
                </button>
            </div>
            <img src="Screenshot 2024-03-19 121750.png" alt="no image">
        </div>
    <div class="sottobloccocentrale">
        <div class="sottobloccocentrale2">
            <div class="testoblocco">
               <span class="testobloccospecifico" data-index="0"> Università di Catania </span><span data-index="1">/ Portale studenti</span>
            </div>
            <div id ="pulsantitransizione">
                 <button id="credenziali"><div>Credenziali</div></button>
                 <button id="SPID"><div>SPID</div></button>
                 <button id="CIE"><div>CIE</div></button>
            </div>
           <div id="transizioni">
            <div id="transizioneSPID">
                <div class="hidden">
                    <div id="bloccoSPID">
                        <div class="testoselettore">Con il Sistema Pubblico di Identità Digitale accedi in un click ai servizi online della Pubblica Amministrazione e dei privati aderenti.
                        </div>
                        <div id="spazioSPID">
                            <div class="elementoSPID" data-index="0">
                                <div data-index="0"><a href="https://www.spid.gov.it/"><small>Maggiori informazioni su SPID</small></a></div>
                                <div data-index="1"><a href="https://www.spid.gov.it/cos-e-spid/come-attivare-spid/"><small>hai SPID?</small></a></div>
                                <div data-index="2"><a href="https://www.spid.gov.it/serve-aiuto"><small> Serve Aiuto?</small></a></div>
                            </div>
                            <div class="elementoSPID" data-index="1">
                            <button>Entra con Spid</button>
                            </div>
                        </div>
                    </div>
                    <div class="SPIDfoto"><img src="spid-agid-logo-lb.png" alt="Logo SPID-AGID"></div>
                </div>
            </div>
            <div id="transizioneCIE">
                <div class="hidden">
                  <div id="bloccoCIE">
                    <div class="elementoCIE">
                        <button id = 'butt'>
                            <div>Entra con CIE</div>
                        </button>
                    </div>
                    <div class="immagineCIE"><img src="MI_logo.png" alt="Logo-Ministero">
                    </div>
                  </div>
                  <div id="testoCIE">
                   <span>La Carta di Identità Elettronica (CIE) è il documento personale che attesta l'identità del cittadino. Dotata di microprocessore, oltre a comprovare l'identità personale, permette l'accesso ai servizi digitali della Pubblica Amministrazione.</span> <a href="https://www.cartaidentita.interno.gov.it/">Maggiori informazioni su CIE</a>
                  </div>
                  <div id = 'tastogoogle'>
                   <img src="googleaccedi.png" class = 'immaginegoogle'>
                  </div>
                </div>
            </div>
        <div id="transizionecredenziali">
            <div class="tavoladati">
            <div class = 'errorerosso'><?php
              if(isset($errore['1']))
              {
                echo "'".$errore['1']."'";
              }
              else if(isset($errore['2']))
              {
                echo "'".$errore['2']."'";
              }
            ?></div>
           <form name ="Login"  action=""  method = "post">
                <div class="selettoredati">
                    <div class="omino"></div>
                    <input  class ="inserimentocodice" type="text" placeholder="Codice Fiscale" name = 'Codice_Fiscale'>
                </div>
                <div class="selettoredati">
                    <div class="omino"></div>
                    <input  class ="inserimentocodice" type="password" placeholder="Password"  name = 'Password'>
                </div>
            <div class="tavoladati2">
                <input class="bottone"  type = 'submit'>
                <button class="Bottonereg"><a href="http://localhost/hw1/Register.php">REGISTRATI</a></button>
                <button class="bottonerec"><a href="http://localhost/hw1/RecuperaPassword.php">PASSWORD DIMENTICATA?</a></button>
            </div>
            </form>
            <div class="recuperodati">
                <div class="recup" data-index = '0'><a href="http://localhost/hw1/Register.php"><div>Registrati</div></a></div>
                <div class="recup" data-index = '1'><a href="http://localhost/hw1/RecuperaPassword.php"><div>Password dimenticata?</div></a></div>
            </div>
           </div>
            </div>
           </div>
           <div class="devicedowload">
            <div class="store1"><img class="Store" src="appleStore.png" alt="Scarica su App Store"></div>
            <div class="store2"><img class="Store" alt="Disponibile su Google Play" src="googleStore.png"></div>
           </div>
           <div class="devicedowload2">
            <div class="store3"><img class="Store" src="appleStore2.png" alt="Scarica su App Store"></div>
            <div class="store4"><img class="Store" alt="Disponibile su Google Play" src="googleStore2.png"></div>
           </div>
        </div>
        <button class="bottone" id = 'bottonemaps'><div>Vedi le nostre sedi</div></button>
    </div>
    </div>
    <div id ="contenitoremappa" class="hidden">
        <img class = 'uscita'>
        <div id = 'map'></div> 
        <img class="freccia">
        </div>
    </div>
    </div>

    </main>
    <footer>
        <div class="finepagina">smart_edu versione 12.0.0.1 - anonimo @ WEB2.16468/1n05rdikiosjtruqp25cnai0 - © <span class="sitolinkbottom">www.besmart.it</span> 2005-2024</div>
    </footer>
</body>
</html>