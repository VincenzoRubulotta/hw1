function chiudimodale(event)
{
    const modale = document.querySelector('#modale');
    modale.innerHTML = '';
    modale.classList.remove('modale');
    modale.classList.add('hidden');
    document.body.classList.remove('no-scroll');
}


function controllopassword(event)
{
  const form = document.querySelector('#modale form');
  if(form.NEW_Password.value != form.Ceck_Password.value)
    {
        const errorerosso = document.querySelector('#modale form .errorerosso');
        errorerosso.innerHTML = '';
        errorerosso.textContent = 'Le Password non coincidono';
        event.preventDefault();
    }
}


function cambiaPass()
{
  const modale = document.querySelector('#modale');
  modale.classList.remove('hidden');
  modale.classList.add('modale');
  document.body.classList.add('no-scroll');

  const form = document.createElement('form');
  form.name = 'cambiapassword';
  form.action = '';
  form.method = 'POST';
  form.classList.add('flex');

  const inserimentodati = document.createElement('input');
  inserimentodati.name = 'NEW_Password';
  inserimentodati.type = 'password';
  inserimentodati.placeholder = 'Inserisci la nuova password';
  const controllo = document.createElement('input');
  controllo.name = 'Ceck_Password';
  controllo.type = 'password';
  controllo.placeholder = 'Inserisci di nuovo la Password';
  const invia = document.createElement('input');
  invia.type = 'submit';
  invia.addEventListener('click', controllopassword);
  const indietro = document.createElement('button');
  indietro.textContent = 'Annulla';
  indietro.addEventListener('click', chiudimodale);

  form.appendChild(inserimentodati);
  form.appendChild(controllo);
  form.appendChild(invia);
  
  const casellaerrore  = document.createElement('div');
  casellaerrore.classList.add('errorerosso');
  form.appendChild(casellaerrore);

  modale.appendChild(form);
  modale.appendChild(indietro);
}

  function controllaPassword()
 {
  const modale = document.querySelector('#modale');
  modale.classList.remove('hidden');
  modale.classList.add('modale');
  document.body.classList.add('no-scroll');

  const form = document.createElement('form');
  form.action = '';
  form.name = 'controllaPassword';
  form.method = 'POST';
  form.classList.add('flex');

  const vecchiaPassword = document.createElement('input');
  vecchiaPassword.name = 'VecchiaPass';
  vecchiaPassword.type = 'password';
  vecchiaPassword.placeholder = 'Inserisci vecchia Password';

  const casellaerrore  = document.createElement('div');
  casellaerrore.classList.add('errorerosso');

  function cercaPassword(event)
  {
    event.preventDefault();

    function ONJsonCerca(json)
    {  
      if(json.length != 0 && json.Password != null)
        {
          modale.innerHTML = '';
          cambiaPass();
        }
        else
        {
           casellaerrore.innerHTML = '';
           casellaerrore.textContent = 'La password non corrisponde';
        }
    }

    function ONResponsecerca(Response)
    {
      return Response.json();
    }

    console.log(form.VecchiaPass.value);
    fetch('http://localhost/hw1/carcapassword.php?password=' + form.VecchiaPass.value).then(ONResponsecerca).then(ONJsonCerca);
  }

  const invia = document.createElement('input');
  invia.type = 'submit';
  invia.addEventListener('click', cercaPassword);
  const indietro = document.createElement('button');
  indietro.textContent = 'Annulla';
  indietro.addEventListener('click', chiudimodale);

  form.appendChild(vecchiaPassword);
  form.appendChild(invia);
  form.appendChild(casellaerrore);

  modale.appendChild(form);
  modale.appendChild(indietro);
}

function cambiafoto()
{
    const modale = document.querySelector('#modale');
    modale.classList.remove('hidden');
    modale.classList.add('modale');
    document.body.classList.add('no-scroll');
  
    const form = document.createElement('form');
    form.name = 'Cambiofoto';
    form.action = '';
    form.method = 'POST'
    form.enctype = "multipart/form-data";
    
    const inserimentodati = document.createElement('input');
    inserimentodati.name = 'NEW_foto';
    inserimentodati.type = 'file';
    const invia = document.createElement('input');
    invia.type = 'submit';
    const indietro = document.createElement('button');
    indietro.textContent = 'Annulla';
    indietro.addEventListener('click', chiudimodale);

    form.appendChild(inserimentodati);
    form.appendChild(invia);
  
    const casellaerrore  = document.createElement('div');
    casellaerrore.classList.add('errorerosso');
    form.appendChild(casellaerrore);

    modale.appendChild(form);
    modale.appendChild(indietro);
}

function ONJson3(json)
{
    const Profilo = document.querySelector('#Profilo');

    const identificativo = document.createElement('div');
    identificativo.classList.add('casellacredenziali');
    identificativo.textContent = 'Identificativo: ' + json.Identificativo;

    Profilo.appendChild(identificativo);
}

function ONResponse3(Response)
{
    return Response.json();
}

function ONJson2(json)
{
    const Profilo = document.querySelector('#Profilo');

    const Matricola = document.createElement('div');
    Matricola.classList.add('casellacredenziali');
    Matricola.textContent = 'Matricola: ' + json.Matricola;

    Profilo.appendChild(Matricola);
}

function ONResponse2(Response)
{
    return Response.json();
}

function ONJson(json)
{
    if(json.Tipo_utente == 'Studente')
    {
        fetch('http://localhost/hw1/matricola.php').then(ONResponse2).then(ONJson2);
    }
    else
    {
       fetch('http://localhost/hw1/identificativo.php').then(ONResponse3).then(ONJson3);
    }
    console.log(json.Immagine);
    const Profilo = document.querySelector('#Profilo');
    const CF = document.createElement('div');
    CF.textContent = 'Codice Fiscale: ' + json.CF;
    CF.classList.add('casellacredenziali');
    
    const path = json.Immagine;
    const src = path.substring(path.indexOf("fotoutenti")); 
    const img = document.createElement("img");
    img.src=src;
    img.classList.add('casellaimmagine');

    const cambiaimmagine = document.createElement('button');
    cambiaimmagine.textContent = 'Cambia Immagine Profilo';
    cambiaimmagine.classList.add('casellacambiaimmagine');
    cambiaimmagine.addEventListener('click', cambiafoto);

    const Nome = document.createElement('div');
    Nome.textContent = 'Nome: ' + json.Nome;
    Nome.classList.add('casellacredenziali');

    const Cognome = document.createElement('div');
    Cognome.textContent = 'Cognome: ' + json.Cognome;
    Cognome.classList.add('casellacredenziali');

    const Data = document.createElement('div');
    Data.textContent = 'Data di Nascita: ' + json.Data_Nascita;
    Data.classList.add('casellacredenziali');

    const Telefono = document.createElement('div');
    Telefono.classList.add('casellacredenziali');
    const modificatelefono = document.createElement('button');
    modificatelefono.textContent = 'Modifica Numero di Telefono';
    Telefono.textContent = 'Numero di Telefono: ' + json.Numero_Telefono;
    Telefono.appendChild(modificatelefono);
    modificatelefono.addEventListener('click',modificatel);

    const email = document.createElement('div');
    email.classList.add('casellacredenziali');
    email.textContent = 'Email: ' + json.Email;
    const cambiaemail = document.createElement('button');
    cambiaemail.textContent = 'Modifica Indirizzo Email';
    email.appendChild(cambiaemail);
    cambiaemail.addEventListener('click', modificaindirizzoemail);

    const password = document.createElement('div');
    password.classList.add('casellacredenziali');
    const cambiapassword = document.createElement('button');
    cambiapassword.textContent = 'Cambia Password';
    cambiapassword.addEventListener('click', controllaPassword);
    password.appendChild(cambiapassword);
  
    const riquadro = document.createElement('div');
    riquadro.classList.add('riquadro');

    Profilo.appendChild(img);
    Profilo.appendChild(cambiaimmagine);
    Profilo.appendChild(CF);
    Profilo.appendChild(Nome);
    Profilo.appendChild(Cognome);
    Profilo.appendChild(Data);
    Profilo.appendChild(Telefono);
    Profilo.appendChild(email);
    Profilo.appendChild(password);
}

function OnResponse(response)
{
    return response.json();
}

function guardaprofilo()
{
    const sezionecentrale = document.querySelector('#sezionecentrale');
    const profilo = document.querySelector('#Profilo');

    sezionecentrale.classList.add('hidden');
    profilo.classList.remove('hidden');

    fetch("http://localhost/hw1/credenziali.php").then(OnResponse).then(ONJson);
}

const tastoProfilo = document.querySelector('#tastoprofilo');
tastoProfilo.addEventListener('click', guardaprofilo);

function controllotelefono(event)
{
 const form = document.querySelector('#modale form')
 if(form.NEW_Tel.value.length != 10)
    {
        const casellaerrore = document.querySelector('#modale form .errorerosso');
        casellaerrore.innerHTML = '';
        casellaerrore.textContent = 'Il numero di telefono deve contenere 10 caratteri';
        event.preventDefault();
    }
}

function controlloemail(event)
{
    const form = document.querySelector('#modale form');
    if(form.NEW_Email.value.length == 0)
    {
        const casellaerrore = document.querySelector('#modale form .errorerosso');
        casellaerrore.innerHTML = '';
        casellaerrore.textContent = 'Devi compilare il campo';
        event.preventDefault();
    }
}

function modificatel()
{
  const modale = document.querySelector('#modale');
  modale.classList.remove('hidden');
  modale.classList.add('modale');
  document.body.classList.add('no-scroll');

  const form = document.createElement('form');
  form.name = 'Cambiotelefono';
  form.action = '';
  form.method = 'POST'
  
  const inserimentodati = document.createElement('input');
  inserimentodati.name = 'NEW_Tel';
  inserimentodati.placeholder = 'Nuovo Numero di Telefono';
  inserimentodati.type = 'text';
  const invia = document.createElement('input');
  invia.type = 'submit';
  const indietro = document.createElement('button');
  indietro.textContent = 'Annulla';
  indietro.addEventListener('click', chiudimodale);

  form.appendChild(inserimentodati);
  form.appendChild(invia);

  const casellaerrore  = document.createElement('div');
  casellaerrore.classList.add('errorerosso');
  form.appendChild(casellaerrore);
  
  modale.appendChild(form);
  modale.appendChild(indietro);
  form.addEventListener('click', controllotelefono);
}

function modificaindirizzoemail()
{
    const modale = document.querySelector('#modale');
    modale.classList.remove('hidden');
    modale.classList.add('modale');
    document.body.classList.add('no-scroll');
  
    const form = document.createElement('form');
    form.name = 'Cambioemail';
    form.action = '';
    form.method = 'POST'
    
    const inserimentodati = document.createElement('input');
    inserimentodati.name = 'NEW_Email';
    inserimentodati.placeholder = 'Nuovo Indirizzo Email';
    inserimentodati.type = 'text';
    const invia = document.createElement('input');
    invia.type = 'submit';
    const indietro = document.createElement('button');
    indietro.textContent = 'Annulla';
    indietro.addEventListener('click', chiudimodale);
  
    form.appendChild(inserimentodati);
    form.appendChild(invia);
  
    const casellaerrore  = document.createElement('div');
    casellaerrore.classList.add('errorerosso');
    form.appendChild(casellaerrore);
    
    modale.appendChild(form);
    modale.appendChild(indietro);
    form.addEventListener('click', controlloemail);
}

function controlloMateria(event)
{
  const form = document.querySelector('#modale form');
  if(form.Nome.value.length == 0 || form.CorsoLaurea.value.length == 0 || form.CFU.value.length == 0)
    {
      const casellaerrore = document.querySelector('#modale form .errorerosso');
      casellaerrore.innerHTML = '';
      casellaerrore.textContent = 'Devi compilare tutti i campi';
      event.preventDefault();
    }
}

function NuovaMateria()
{
    const modale = document.querySelector('#modale');
    modale.classList.remove('hidden');
    modale.classList.add('modale');
    document.body.classList.add('no-scroll');

    const form = document.createElement('form');
    form.name = 'NuovaMateria';
    form.action = '';
    form.method = 'POST';
    form.classList.add('flex');

    const NomeMateria = document.createElement('input');
    NomeMateria.type = 'text';
    NomeMateria.name = 'Nome';
    NomeMateria.placeholder = 'Nome nuova Materia';

    const Corso_Di_Laurea = document.createElement('select');
    Corso_Di_Laurea.name = 'CorsoLaurea';

    function ONJsonCorso(jsonCorsi)
    {
      console.log(jsonCorsi);
      for(Corso of jsonCorsi)
        {
          const optionCorso = document.createElement('option');
          optionCorso.value = Corso.Nome;
          optionCorso.textContent = Corso.Nome;

          Corso_Di_Laurea.appendChild(optionCorso);
        }
    }

    function ONResponseCorso(Response)
    {
      return Response.json();
    }

    fetch('http://localhost/hw1/corsodiLaurea.php').then(ONResponseCorso).then(ONJsonCorso);

    const CFU = document.createElement('input');
    CFU.type = 'number';
    CFU.placeholder = 'CFU relativi alla materia';
    CFU.name = 'CFU';

    const invia = document.createElement('input');
    invia.type = 'submit';
    invia.addEventListener('click', controlloMateria);

    const casellaerrore  = document.createElement('div');
    casellaerrore.classList.add('errorerosso');
    form.appendChild(casellaerrore);

    const indietro = document.createElement('button');
    indietro.textContent = 'Annulla';
    indietro.addEventListener('click', chiudimodale);

    form.appendChild(NomeMateria);
    form.appendChild(Corso_Di_Laurea);
    form.appendChild(CFU);
    form.appendChild(invia);
    form.appendChild(casellaerrore);

    modale.appendChild(form);
    modale.appendChild(indietro);
}

function ONJsonmaterie(json)
{
  const carriera = document.querySelector('#Carriera');

  for(materia of json)
    {
      const barramateria = document.createElement('div');
      barramateria.classList.add('materia');

      const nome = document.createElement('div');
      nome.textContent = 'Nome materia: ' + materia.Nome;

      const corso = document.createElement('div');
      corso.textContent = 'Corso di Laurea: ' + materia.Corso_Di_Laurea;

      const CFU = document.createElement('div');
      CFU.textContent = 'CFU materia: ' + materia.CFU;

      const elimina = document.createElement('button');
      elimina.textContent = 'elimina';
      elimina.addEventListener('click', function ()
       {
        fetch('http://localhost/hw1/eliminamateria.php?materia=' + materia.Identificativo_Materia).then(GestioneMaterie);
       });

      barramateria.appendChild(nome);
      barramateria.appendChild(corso);    
      barramateria.appendChild(CFU);
      barramateria.appendChild(elimina);

      carriera.appendChild(barramateria);
    }
}

function ONResponsematerie(Response)
{
    return Response.json();
}

function GestioneMaterie()
{
    const carriera = document.querySelector('#Carriera');
    carriera.innerHTML = '';
    carriera.classList.add('flex2');

    const AggiungiMateria = document.createElement('button');
    AggiungiMateria.textContent = 'Insegnamento nuova Materia';
    AggiungiMateria.addEventListener('click', NuovaMateria);
    carriera.appendChild(AggiungiMateria);

    fetch('http://localhost/hw1/materie.php').then(ONResponsematerie).then(ONJsonmaterie);
}


function controlloAppello(event)
{
 const form = document.querySelector('#modale form');
 if(form.NomeMateria.value.length == 0 || form.Corso.value.length == 0 || form.datafineRegistrazione.value.length == 0 || form.dataAppello.value.length == 0 || form.orario.value.length == 0)
    {
        const casellaerrore = document.querySelector('#modale form .errorerosso');
        casellaerrore.innerHTML = '';
        casellaerrore.textContent = 'Riempi tutti i campi';
        event.preventDefault();
    }
}

function NuovoAppello()
{
    const modale = document.querySelector('#modale');
    modale.classList.remove('hidden');
    modale.classList.add('modale');
    document.body.classList.add('no-scroll');

    const form = document.createElement('form');
    form.name = 'AggiungiAppello';
    form.method = 'POST';
    form.action = '';
    form.classList.add('flex');

    const NomeMateria = document.createElement('select');
    NomeMateria.name = 'NomeMateria';

    function ONJsonMA(jsonMA)
    {
      for(Materia of jsonMA)
        {
          const optionMateria = document.createElement('option');
          optionMateria.value = Materia.Nome;
          optionMateria.textContent = Materia.Nome;

          NomeMateria.appendChild(optionMateria);
        }
    }
    function ONResponseMA(Response)
    {
      return Response.json();
    }

    fetch('http://localhost/hw1/materie.php').then(ONResponseMA).then(ONJsonMA);

    const Corso = document.createElement('select');
    Corso.name = 'Corso';

    function ONJsonCorso(jsonCorsi)
    {
      console.log(jsonCorsi);
      for(CorsoS of jsonCorsi)
        {
          const optionCorso = document.createElement('option');
          optionCorso.value = CorsoS.Nome;
          optionCorso.textContent = CorsoS.Nome;

          Corso.appendChild(optionCorso);
        }
    }

    function ONResponseCorso(Response)
    {
      return Response.json();
    }

    fetch('http://localhost/hw1/corsodiLaurea.php').then(ONResponseCorso).then(ONJsonCorso);

    const datafineRegistrazione = document.createElement('input');
    datafineRegistrazione.name = 'fineregistrazione';
    datafineRegistrazione.type = 'date';
    const divregistrazione = document.createElement('div');
    divregistrazione.textContent = 'Data fine registrazione: ';
    divregistrazione.appendChild(datafineRegistrazione);

    const dataAppello = document.createElement('input');
    dataAppello.name = 'dataAppello';
    dataAppello.type = 'date';
    const divappello = document.createElement('div');
    divappello.textContent = 'Data appello: ';
    divappello.appendChild(dataAppello);

    const orario = document.createElement('input');
    orario.name = 'orario';
    orario.type = 'time';
    const divorario = document.createElement('div');
    divorario.textContent = 'Orario Esame: ';
    divorario.appendChild(orario);

    const invia = document.createElement('input');
    invia.type = 'submit';
    invia.addEventListener('click', controlloAppello);

    const casellaerrore  = document.createElement('div');
    casellaerrore.classList.add('errorerosso');
    form.appendChild(casellaerrore);

    const indietro = document.createElement('button');
    indietro.textContent = 'Annulla';
    indietro.addEventListener('click', chiudimodale);


    form.appendChild(NomeMateria);
    form.appendChild(Corso);
    form.appendChild(divregistrazione);
    form.appendChild(divappello);
    form.appendChild(divorario);
    form.appendChild(casellaerrore);
    form.appendChild(invia);

    modale.appendChild(form);
    modale.appendChild(indietro); 
}

function ONJsonAppelli(json)
{
  console.log(json);
  const carriera = document.querySelector('#Carriera');

  for(appelli of json)
    {
        const appelloprova = appelli;
        const appello = document.createElement('div');
        appello.classList.add('appello');

        const datigenerici  = document.createElement('div');
        datigenerici.classList.add('dati');

        const nome = document.createElement('div');
        nome.textContent = 'Nome Appello: '+ appelli.Nome;

        const Corso = document.createElement('div');
        Corso.textContent = 'Corso di laure: ' + appelli.Corso_Di_Laurea;

        datigenerici.appendChild(nome);
        datigenerici.appendChild(Corso);

        const datiappello = document.createElement('div');
        datiappello.classList.add('dati');

        const datafine = document.createElement('div');
        datafine.textContent = 'Data fine Prenotazione: ' + appelli.Data_Fine_Registrazione;

        const datainizio = document.createElement('div');
        datainizio.textContent = 'Data Esame: ' + appelli.Data_Appello;

        const orario = document.createElement('div');
        orario.textContent = 'Orario Esame: ' + appelli.Oraio_Esame;

        const casellaerrore  = document.createElement('div');
        casellaerrore.classList.add('errorerosso');
        datiappello.appendChild(casellaerrore);

        datiappello.appendChild(datafine);
        datiappello.appendChild(datainizio);
        datiappello.appendChild(orario);

        function ONJsonstudentiappello(jsonstudenti)
        {
          console.log(jsonstudenti);
          if(jsonstudenti.length === 0)
            {
                fetch('http://localhost/hw1/eliminaAppello.php?Identificativo=' + appelloprova.Identificativo);
                GestioneAppelli();
            }
            else
            {
                carriera.innerHTML = '';
                const form = document.createElement('form');

                form.name = 'formchiusuraAppello';
                form.method = 'POST';
                form.action = '';
                form.classList.add('flex');

                carriera.appendChild(form);

                for(studente of jsonstudenti)
                {
                   const spaziostudente = document.createElement('div');
                   spaziostudente.classList.add('spaziostudente');

                   const Matricola = document.createElement('div');
                   Matricola.textContent = 'Matricola Studente: ' + studente.Matricola;
                   const CodiceFiscale = document.createElement('div');
                   CodiceFiscale.textContent = 'Codice Fiscale: ' + studente.CF;

                   const divvoto = document.createElement('div');
                   divvoto.textContent = 'Voto: ';

                   const inputvoto = document.createElement('input');
                   inputvoto.type = 'number' ;
                   inputvoto.name = studente.Matricola;
                   inputvoto.classList.add('.voto');

                   divvoto.appendChild(inputvoto);
                   spaziostudente.appendChild(Matricola);
                   spaziostudente.appendChild(CodiceFiscale);
                   spaziostudente.appendChild(divvoto);

                   const casellaerrore  = document.createElement('div');
                   casellaerrore.classList.add('errorerosso');
                   spaziostudente.appendChild(casellaerrore);
            
                   form.appendChild(spaziostudente);
                }

                const submit = document.createElement('input');
                submit.type = 'submit';


                function convalidazioneappello(event)
                {
                  event.preventDefault();
                  const votostudente = document.querySelectorAll('#Carriera form div input');
                  for(studente of votostudente)
                    {
                      const casellaerrore = document.querySelector('.errorerosso');
                      if(studente.value == 0)
                        {
                          casellaerrore.innerHTML = '';
                          casellaerrore.textContent = 'Il campo deve essere compilato';
                        }
                      else if(studente.value > 30 )
                      {
                        casellaerrore.innerHTML = '';
                        casellaerrore.textContent = 'Il voto non può essere maggiore di 30';
                      }
                      else if(studente.value < 18)
                        {
                           fetch('http://localhost/hw1/eliminaprenotazione.php?Matricola= ' + studente.name);
                        }
                      else
                        {

                          let data = {
                            Voto: studente.value,
                            Materia: appelli.Nome,
                            Docente: appelli.Docente,
                            Studente: studente.name
                          }

                           console.log(data);
                           fetch('http://localhost/hw1/convalidaAppello.php',
                            {
                              method: 'POST',

                              headers : 
                              {
                                'Content-Type': 'application/json'
                              },

                              body: JSON.stringify(data)
                            }
                           ); 
                           {
                            fetch('http://localhost/hw1/eliminaprenotazione.php?Matricola= ' + studente.name);
                           }
                        }
                    }

                  chiudiappello();
                }


                submit.addEventListener('click', convalidazioneappello);

                form.appendChild(submit);
            }
        }

        function ONResponsestudentiappello(Response)
        {
          return Response.json();
        }

        function chiudiappello()
        {
         fetch('http://localhost/hw1/studentidiunappello.php?Identificativo=' + appelloprova.Identificativo).then(ONResponsestudentiappello).then(ONJsonstudentiappello);          
        }

        const bottonechiudiappello = document.createElement('button');
        bottonechiudiappello.textContent = 'Chiudi Appello';
        bottonechiudiappello.addEventListener('click', chiudiappello);

        appello.appendChild(datigenerici);
        appello.appendChild(datiappello);
        appello.appendChild(bottonechiudiappello);
        carriera.appendChild(appello);
    }
}

function ONResponseappelli(Response)
{
   return Response.json();
}

function GestioneAppelli()
{
    const carriera = document.querySelector('#Carriera');
    carriera.innerHTML = '';
    carriera.classList.add('flex2');

    const AggiungiAppello = document.createElement('button');
    AggiungiAppello.textContent = 'Apri un nuovo Appello';
    AggiungiAppello.addEventListener('click', NuovoAppello);
    carriera.appendChild(AggiungiAppello);

    fetch('http://localhost/hw1/Appelli.php').then(ONResponseappelli).then(ONJsonAppelli);
}

function ONJsondisponibili(json)
{
  const bloccoappelli = document.querySelectorAll('.bloccoappelli');

  for(blocco of bloccoappelli)
    {
        const index = parseInt(blocco.dataset.index);
        
        if(index === 1)
        {
            function ONJsonisdispo(json1)
            {
              if(json1 != null)
            {
                    const appello = document.createElement('div');
                    appello.classList.add('appello');
    
                const datigenerici  = document.createElement('div');
                datigenerici.classList.add('dati');
    
                const nome = document.createElement('div');
                nome.textContent = 'Nome Appello: '+ json1.Nome;
    
                const Corso = document.createElement('div');
                Corso.textContent = 'Corso di laure: ' + json1.Corso_Di_Laurea;
    
                function ONJsondocente(json4)
                {
                  const docente = document.createElement('div');
                  docente.textContent = 'Docente: ' + json4.Nome + ' ' + json4.Cognome;
                  
                  datigenerici.appendChild(docente);
                }
    
                function ONResponsedocente(Response)
                {
                 return Response.json();
                }
    
                fetch('http://localhost/hw1/docentedaAppello.php?Identificativo= ' + json1.Identificativo).then(ONResponsedocente).then(ONJsondocente);
                
                datigenerici.appendChild(nome);
                datigenerici.appendChild(Corso);
    
                const datiappello = document.createElement('div');
                datiappello.classList.add('dati');
    
                const datafine = document.createElement('div');
                datafine.textContent = 'Data fine Prenotazione: ' + json1.Data_Fine_Registrazione;
    
                const datainizio = document.createElement('div');
                datainizio.textContent = 'Data Esame: ' + json1.Data_Appello;
    
                const orario = document.createElement('div');
                orario.textContent = 'Orario Esame: ' + json1.Oraio_Esame;
    
                datiappello.appendChild(datafine);
                datiappello.appendChild(datainizio);
                datiappello.appendChild(orario);
    
                appello.appendChild(datigenerici);
                appello.appendChild(datiappello);
                
                
                function Prenotazione()
                {
                  fetch('http://localhost/hw1/prenotazione.php?Appello= ' + json1.Identificativo);
    
                  visualizzaAppelli();
                }
    
                const bottoneprenotazione  = document.createElement('button');
                bottoneprenotazione.textContent = 'Prenota Appello';
                bottoneprenotazione.addEventListener('click', Prenotazione);
                appello.appendChild(bottoneprenotazione);
    
                blocco.appendChild(appello);
            }
            }
    
            function ONRsponseisdispo(Response)
            {
              return Response.json();
            }
          for(appello of json)
            {
              console.log(appello);
              fetch('http://localhost/hw1/isappellodisponibile.php?Identificativo= ' + appello.Identificativo).then(ONRsponseisdispo).then(ONJsonisdispo);
            } 
        }
        
        if(index === 0)
        {
            function ONJsonPrenotati(json2)
            {

             for(blocco of bloccoappelli)
                {
                    const index = parseInt(blocco.dataset.index);
             if(json !== null)
                {
                 for(Prenotato of json2)
                {
                    const appello = document.createElement('div');
                    appello.classList.add('appello');
    
                    const datigenerici  = document.createElement('div');
                    datigenerici.classList.add('dati');
    
                    const nome = document.createElement('div');
                    nome.textContent = 'Nome Appello: '+ Prenotato.Nome;
    
                    const Corso = document.createElement('div');
                    Corso.textContent = 'Corso di laure: ' + Prenotato.Corso_Di_Laurea;
    
                function ONJsondocente(json3)
                {
                  const docente = document.createElement('div');
                  docente.textContent = 'Docente: ' + json3.Nome + ' ' + json3.Cognome;
                  
                  datigenerici.appendChild(docente);
                }
    
                function ONResponsedocente(Response)
                {
                 return Response.json();
                }
    
                fetch('http://localhost/hw1/docentedaAppello.php?Identificativo= ' + Prenotato.Identificativo).then(ONResponsedocente).then(ONJsondocente);
                
                datigenerici.appendChild(nome);
                datigenerici.appendChild(Corso);
    
                const datiappello = document.createElement('div');
                datiappello.classList.add('dati');
    
                const datafine = document.createElement('div');
                datafine.textContent = 'Data fine Prenotazione: ' + Prenotato.Data_Fine_Registrazione;
    
                const datainizio = document.createElement('div');
                datainizio.textContent = 'Data Esame: ' + Prenotato.Data_Appello;
    
                const orario = document.createElement('div');
                orario.textContent = 'Orario Esame: ' + Prenotato.Oraio_Esame;
    
                datiappello.appendChild(datafine);
                datiappello.appendChild(datainizio);
                datiappello.appendChild(orario);
    
                appello.appendChild(datigenerici);
                appello.appendChild(datiappello);
                if(index === 0)
                {
                blocco.appendChild(appello);
                }
                }
                }
            }
            }
    
            function ONResponsePrenotati(Response)
            {
              return Response.json();
            }
            console.log(blocco);
            fetch('http://localhost/hw1/appelliPrenotati.php').then(ONResponsePrenotati).then(ONJsonPrenotati);
        }
    }
}

function ONResponsedisponibili(Response)
{
  return Response.json();
}

function ONJSonStudente(json)
{
  fetch('http://localhost/hw1/appellidisponibili.php?Corso_Di_Laurea=' + json.Corso_di_Laurea).then(ONResponsedisponibili).then(ONJsondisponibili);
}

function ONResponsestudente(Response)
{
    return Response.json();
}

function visualizzaAppelli()
{
    const carriera = document.querySelector('#Carriera');
    carriera.innerHTML = '';
    carriera.classList.add('flex2');

    const finepagina = document.querySelector('#finepagina');
    finepagina.classList.add('hidden');

    const spazioprenotati = document.createElement('div');
    spazioprenotati.classList.add('bloccoappelli');
    spazioprenotati.dataset.index = '0';
    const barraprenotati = document.createElement('div');
    barraprenotati.classList.add('barra');
    barraprenotati.textContent = 'Appelli Prenotati';
    
    spazioprenotati.appendChild(barraprenotati);
    
    const spazioprenotazioni = document.createElement('div');
    spazioprenotazioni.classList.add('bloccoappelli');
    spazioprenotazioni.dataset.index = '1';
    const  barraprenotazioni = document.createElement('div');
    barraprenotazioni.classList.add('barra');
    barraprenotazioni.textContent = 'Appelli Disponibili';
    
    spazioprenotazioni.appendChild(barraprenotazioni);
    
    carriera.appendChild(spazioprenotati);
    carriera.appendChild(spazioprenotazioni);

    fetch('http://localhost/hw1/studente.php').then(ONResponsestudente).then(ONJSonStudente);
}

let mediaPonderata = 0;

function visualizzamateriedate()
{
   const carriera = document.querySelector('#Carriera');
   carriera.innerHTML = '';

   function ONJsonmateriedate(jsonmaterie)
   {
     const contenitore = document.createElement('div');
     contenitore.classList.add('flex');

     carriera.appendChild(contenitore);

     let somma = 0;
     let media = 0;
     let sommaPonderata = 0;
     let mediaPonderata = 0;

     for(materia of jsonmaterie)
      {
        console.log(mediaPonderata);
       somma = somma + parseInt(materia.Voto);
       const spaziomaterie = document.createElement('div');
       spaziomaterie.classList.add('materia');

       const nomeMateria = document.createElement('div');
       nomeMateria.textContent = 'Materia: ' + materia.Materia;

       const nomeDocente = document.createElement('div');
       
       function ONJsonRD(jsonRD)
       {
         console.log(jsonRD);
         nomeDocente.textContent = 'Docente: ' + jsonRD.Nome + ' ' + jsonRD.Cognome;
       }

       function ONResponseRD(Response)
       {
         return Response.json();
       }

       fetch('http://localhost/hw1/reperiscidocente.php?Identificativo= ' + materia.Docente).then(ONResponseRD).then(ONJsonRD);

       const divVoto = document.createElement('div');
       divVoto.textContent = 'Voto: ' + materia.Voto;

       spaziomaterie.appendChild(nomeMateria);
       spaziomaterie.appendChild(nomeDocente);
       spaziomaterie.appendChild(divVoto);

       contenitore.appendChild(spaziomaterie);
      
       let data = {
        Materia : materia.Materia,
        
        Docente : materia.Docente
       }

    function ONJsonMateria (jsonCFU)
    {
      sommaPonderata = sommaPonderata + parseInt(materia.Voto)*parseInt(jsonCFU.CFU);
      console.log(sommaPonderata);
    }

    function ONResponseMateria(Response)
    {
       return Response.json();
    }

     fetch('http://localhost/hw1/materia.php',{

           method: 'POST',
           headers : 
                    {
                       'Content-Type': 'application/json'
                    },

            body: JSON.stringify(data)
       }).then(ONResponseMateria).then(ONJsonMateria);
    }  
      console.log(mediaPonderata);
      media = somma / parseInt(jsonmaterie.length);

      const divMediaPonderata = document.createElement('div');

      const divCFU = document.createElement('div');
      divCFU.classList.add('datiCarriera');

      function ONJsonST(json)
      {
        mediaPonderata = sommaPonderata / parseInt(json.CFU);
        divMediaPonderata.textContent = 'Media Ponderata: ' + mediaPonderata;
        divMediaPonderata.classList.add('datiCarriera');
        divCFU.textContent = 'CFU Totali: ' + json.CFU;
      }

      function ONResponseST(Response)
      {
        return Response.json();
      }

      fetch('http://localhost/hw1/studente.php').then(ONResponseST).then(ONJsonST);

      const divMedia = document.createElement('div');
      divMedia.textContent = 'Media Aritmetica: '+ media;
      divMedia.classList.add('datiCarriera');
      
      contenitore.appendChild(divMedia);
      contenitore.appendChild(divMediaPonderata);
      contenitore.appendChild(divCFU);
   }

   function ONResponsemateriedate(Response)
   {
      return Response.json();
   }

   fetch('http://localhost/hw1/materiedate.php').then(ONResponsemateriedate).then(ONJsonmateriedate);


}


function ONJsonCarriera(json)
{
 const carriera = document.querySelector('#Carriera');

 if(json.Tipo_utente == 'Studente')
    {
      const carrieraappelli = document.createElement('div');
      carrieraappelli.classList.add('casella');
      carrieraappelli.textContent = 'Appelli';
      carrieraappelli.addEventListener('click', visualizzaAppelli);
       
      const Spaziomaterie = document.createElement('div');
      Spaziomaterie.classList.add('casella');
      Spaziomaterie.textContent = 'Esami e Certificati';
      Spaziomaterie.addEventListener('click', visualizzamateriedate);

      carriera.appendChild(carrieraappelli);
      carriera.appendChild(Spaziomaterie);
    }
 else
    {
      const gestionematerie = document.createElement('div');
      gestionematerie.classList.add('casella');
      const scrittagestione = document.createElement('div');
      scrittagestione.textContent = 'Gestione Materie';
      gestionematerie.appendChild(scrittagestione);
      gestionematerie.addEventListener('click', GestioneMaterie);

      const gestioneappelli = document.createElement('div');
      gestioneappelli.classList.add('casella');
      const scrittaappelli = document.createElement('div');
      scrittaappelli.textContent = 'Gestione Appelli';
      gestioneappelli.appendChild(scrittaappelli);
      gestioneappelli.addEventListener('click', GestioneAppelli);


      carriera.appendChild(gestionematerie);
      carriera.appendChild(gestioneappelli);
    }
}

function OnResponseCarriera(Response)
{
    return Response.json();
}

function spaziocarriera()
{
    const sezionecentrale = document.querySelector('#sezionecentrale');
    const carriera = document.querySelector('#Carriera');

    sezionecentrale.classList.add('hidden');
    carriera.classList.remove('hidden');

    fetch("http://localhost/hw1/credenziali.php").then(OnResponseCarriera).then(ONJsonCarriera);
}


const tastocarriera = document.querySelector('#tastocarriera');
tastocarriera.addEventListener('click', spaziocarriera);

const body = document.querySelector('body');