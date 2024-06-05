function immaginemouse2()
{
  immagineunict.src = "logo.svg";
  immagineunict.removeEventListener("mouseout",immaginemouse2);
  immagineunict.addEventListener("mouseover",immaginemouse);
}

function immaginemouse()
{
  immagineunict.src = "immagineunict.png";
  const immagineunict2 = document.querySelector(".logo img");
  immagineunict.removeEventListener("mouseover",immaginemouse);
  immagineunict2.addEventListener("mouseout",immaginemouse2);
}

function languageclick2()
{
  const codicefiscale = document.querySelector(".selettoredati input");
  codicefiscale.placeholder = 'Codice Fiscale';
  const credenziali = document.createElement('div');
  credenziali.textContent = 'Credenziali';
  const credenzialielim = document.querySelector("#credenziali");
  credenzialielim.innerHTML= '';
  credenzialielim.appendChild(credenziali);
  const recupelim = document.querySelectorAll(".recup");
  for(element of recupelim)
  {
    const index = parseInt(element.dataset.index);
    const recup = document.createElement('div');
    if(index === 0)
    {
       const recupelim1 = element.querySelector("a");
       recupelim1.innerHTML = '';
       recup.textContent = 'Registrati';
       recupelim1.appendChild(recup); 
    }

    if(index === 1)
    {
      const recupelim2 = element.querySelector("a");
       recupelim2.innerHTML = '';
       recup.textContent = 'Password Dimenticata?';
       recupelim2.appendChild(recup); 
    }
  }


  const testoSPIDelim = document.querySelector('.testoselettore');
  testoSPIDelim.innerHTML = '';
  testoSPIDelim.textContent = 'Con il Sistema Pubblico di Identità Digitale accedi in un click ai servizi online della Pubblica Amministrazione e dei privati aderenti.';

  const elementoSPIDelim = document.querySelectorAll('.elementoSPID');
  for(elemento of elementoSPIDelim)
  {
    const indexelemento = parseInt(elemento.dataset.index);
    if(indexelemento ===0)
    {
    const elementolistaelim = elemento.querySelectorAll('div');
    for(elementol of elementolistaelim)
    {
      const indexelementolista = parseInt(elementol.dataset.index);
      const elementolista = document.createElement('small');
      if(indexelementolista === 0)
      {
        const elementolistaelim1 = elementol.querySelector('a');
        elementolistaelim1.innerHTML = '';
        elementolista.textContent = 'Maggiori informazioni su SPID';
        elementolistaelim1.appendChild(elementolista);
      }

      if(indexelementolista === 1)
      {
        const elementolistaelim2 = elementol.querySelector('a');
        elementolistaelim2.innerHTML = '';
        elementolista.textContent = 'hai SPID?';
        elementolistaelim2.appendChild(elementolista);
      }

      if(indexelementolista === 2)
      {
        const elementolistaelim3 = elementol.querySelector('a');
        elementolistaelim3.innerHTML = '';
        elementolista.textContent = 'Serve Aiuto?';
        elementolistaelim3.appendChild(elementolista);
      }

    }
    }

    if(indexelemento ===1)
    {
      const elementolistaelim = elemento.querySelector('button');
      elementolistaelim.innerHTML = '';
      elementolistaelim.textContent = 'Entra con SPID';
    }
  }

  const elementoCIEelim = document.querySelector('.elementoCIE button div');
  elementoCIEelim.innerHTML = '';
  elementoCIEelim.textContent = 'Entra con CIE';

  const testoCIEelim = document.querySelector('#testoCIE span');
  testoCIEelim.innerHTML = '';
  testoCIEelim.textContent = "La Carta di Identità Elettronica (CIE) è il documento personale che attesta l'identità del cittadino. Dotata di microprocessore, oltre a comprovare l'identità personale, permette l'accesso ai servizi digitali della Pubblica Amministrazione.";

  const linkCIEelim = document.querySelector('#testoCIE a');
  linkCIEelim.innerHTML = '';
  linkCIEelim.textContent = 'Maggiori informazioni su CIE';

  const testobloccoelim = document.querySelectorAll('.testoblocco span');

  for(span of testobloccoelim)
  {
    const testoindex = parseInt(span.dataset.index);

    if(testoindex === 0)
    {
      span.innerHTML = '';
      span.textContent = 'Università di Catania ';
    }

    if(testoindex === 1)
    {
      span.innerHTML = '';
      span.textContent = '/ Portale studenti';
    }  
  }

  const bottonemaps = document.querySelector('#bottonemaps');
  bottonemaps.innerHTML='';
  const divmaps = document.createElement('div');
  divmaps.textContent ='Vedi le nostre sedi';
  bottonemaps.appendChild(divmaps);

  languagebutton.removeEventListener("click",languageclick2);
  languagebutton.addEventListener("click",languageclick);
}


function languageclick()
{
  const codicefiscale = document.querySelector(".selettoredati input");
  codicefiscale.placeholder = 'Tax Code';
  const credenziali = document.createElement('div');
  credenziali.textContent = 'Credentials';
  const credenzialielim = document.querySelector("#credenziali");
  credenzialielim.innerHTML= '';
  credenzialielim.appendChild(credenziali);
  const recupelim = document.querySelectorAll(".recup");
  for(element of recupelim)
  {
    const index = parseInt(element.dataset.index);
    const recup = document.createElement('div');
    if(index === 0)
    {
       const recupelim1 = element.querySelector("a");
       recupelim1.innerHTML = '';
       recup.textContent = 'Sign In';
       recupelim1.appendChild(recup); 
    }

    if(index === 1)
    {
      const recupelim2 = element.querySelector("a");
       recupelim2.innerHTML = '';
       recup.textContent = 'Forgot Password?';
       recupelim2.appendChild(recup); 
    }
  }


  const testoSPIDelim = document.querySelector('.testoselettore');
  testoSPIDelim.innerHTML = '';
  testoSPIDelim.textContent = 'With the Public Digital Identity System you can access the online services of the Public Administration and participating private individuals in one click.';

  const elementoSPIDelim = document.querySelectorAll('.elementoSPID');
  for(elemento of elementoSPIDelim)
  {
    const indexelemento = parseInt(elemento.dataset.index);
    if(indexelemento ===0)
    {
    const elementolistaelim = elemento.querySelectorAll('div');
    for(elementol of elementolistaelim)
    {
      const indexelementolista = parseInt(elementol.dataset.index);
      const elementolista = document.createElement('small');
      if(indexelementolista === 0)
      {
        const elementolistaelim1 = elementol.querySelector('a');
        elementolistaelim1.innerHTML = '';
        elementolista.textContent = 'More information on SPID';
        elementolistaelim1.appendChild(elementolista);
      }

      if(indexelementolista === 1)
      {
        const elementolistaelim2 = elementol.querySelector('a');
        elementolistaelim2.innerHTML = '';
        elementolista.textContent = 'Do you Have SPID?';
        elementolistaelim2.appendChild(elementolista);
      }

      if(indexelementolista === 2)
      {
        const elementolistaelim3 = elementol.querySelector('a');
        elementolistaelim3.innerHTML = '';
        elementolista.textContent = 'Need help?';
        elementolistaelim3.appendChild(elementolista);
      }

    }
    }

    if(indexelemento ===1)
    {
      const elementolistaelim = elemento.querySelector('button');
      elementolistaelim.innerHTML = '';
      elementolistaelim.textContent = 'Enter with SPID';
    }
  }

  
  const elementoCIEelim = document.querySelector('.elementoCIE button div');
  elementoCIEelim.innerHTML = '';
  elementoCIEelim.textContent = 'Enter with CIE';

  const testoCIEelim = document.querySelector('#testoCIE span');
  testoCIEelim.innerHTML = '';
  testoCIEelim.textContent = 'The Electronic Identity Card (CIE) is the personal document that certifies the citizens identity. Equipped with a microprocessor, in addition to proving personal identity, it allows access to the digital services of the Public Administration.';

  const linkCIEelim = document.querySelector('#testoCIE a');
  linkCIEelim.innerHTML = '';
  linkCIEelim.textContent = 'More information on CIE';

  const testobloccoelim = document.querySelectorAll('.testoblocco span');

  for(span of testobloccoelim)
  {
    const testoindex = parseInt(span.dataset.index);

    if(testoindex === 0)
    {
      span.innerHTML = '';
      span.textContent = 'University of Catania ';
    }

    if(testoindex === 1)
    {
      span.innerHTML = '';
      span.textContent = '/ Student portal';
    }  
  }
 
  const bottonemaps = document.querySelector('#bottonemaps');
  bottonemaps.innerHTML='';
  const divmaps = document.createElement('div');
  divmaps.textContent ='See our locations' ;
  bottonemaps.appendChild(divmaps);

  languagebutton.removeEventListener("click",languageclick);
  languagebutton.addEventListener("click",languageclick2);
}



function clicktransizione(event)
{
  const credenziali = document.querySelector("#transizionecredenziali div");
  const SPID = document.querySelector("#transizioneSPID div");
  const CIE = document.querySelector("#transizioneCIE div");

  if(event.currentTarget == document.querySelector("#credenziali"))
  {
    credenziali.classList.replace('hidden','tavoladati');
    SPID.classList.replace('tavoladati','hidden');
    CIE.classList.replace('tavoladati','hidden');
  }

  if(event.currentTarget == document.querySelector("#SPID"))
  {
    SPID.classList.replace('hidden','tavoladati');
    credenziali.classList.replace('tavoladati','hidden');
    CIE.classList.replace('tavoladati','hidden');
  }

  if(event.currentTarget == document.querySelector("#CIE"))
  {
    CIE.classList.replace('hidden','tavoladati');
    SPID.classList.replace('tavoladati','hidden');
    credenziali.classList.replace('tavoladati','hidden');
  }

}


const languagebutton = document.querySelector("#languagebutton");
languagebutton.addEventListener("click",languageclick);




const bottonitransizione = document.querySelectorAll("#pulsantitransizione button");

for(let bottone of bottonitransizione)
{
  bottone.addEventListener("click",clicktransizione);
}


const immagineunict = document.querySelector(".logo img");
immagineunict.addEventListener("mouseover",immaginemouse);


function  GooggleMapsAPI1()
{
  var pos = {lat: 37.50379, lng: 15.08649};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: pos, zoom: 14
  })

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    tittle: "Università degli studi di Catania",
  });

}


function GooggleMApsAPI2()
{
  var pos = {lat: 37.50381, lng: 15.08783};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: pos, zoom: 14
  })

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    tittle: "Università degli studi di Catania - Ufficio Carriere Studenti",
  });
}

function funzionefreccia2()
{
  const mapfreccia = document.querySelector('#contenitoremappa .freccia');
  mapfreccia.removeEventListener('click',funzionefreccia2);
  const map = document.querySelector('#contenitoremappa #map');
  map.innerHTML='';
  GooggleMapsAPI1();

  mapfreccia.addEventListener('click',funzionefreccia);
}

function funzionefreccia()
{
  const mapfreccia = document.querySelector('#contenitoremappa .freccia');
  mapfreccia.removeEventListener('click',funzionefreccia);
  const map = document.querySelector('#contenitoremappa #map');
  map.innerHTML='';
  GooggleMApsAPI2();

  mapfreccia.addEventListener('click',funzionefreccia2);
}

function funzioneuscita()
{


  const map = document.querySelector('#contenitoremappa #map');
  map.innerHTML='';
  const mapuscita = document.querySelector('#contenitoremappa .uscita');
  const mapfreccia = document.querySelector('#contenitoremappa .freccia');

  mapuscita.removeEventListener('click',funzioneuscita);
  mapfreccia.removeEventListener('click',funzionefreccia);
  mapfreccia.removeEventListener('click',funzionefreccia2);
  mapfreccia.src ='';
  mapuscita.src ='';
  
}

function GooggleMapsAPI()
{
  const map1 = document.querySelector('#contenitoremappa');
  const immaginefreccia = document.querySelector('.freccia');
  immaginefreccia.src = 'freccia.png';
  const immagineuscita = document.querySelector('.uscita');
  immagineuscita.src ='kisspng-x-mark-symbol-computer-icons-clip-art-w-5aea13689422f7.9411307115252898326068.jpg';
  map1.classList.remove('hidden');
  
  GooggleMapsAPI1();
  bottonesedi.removeEventListener('clik',GooggleMapsAPI);
  immaginefreccia.addEventListener('click',funzionefreccia);
  immagineuscita.addEventListener('click',funzioneuscita);
}

const bottonesedi = document.querySelector('.sottobloccocentrale #bottonemaps');
bottonesedi.addEventListener('click', GooggleMapsAPI); 


function chiusuramodale()
{
  const modale = document.querySelector('.modale');
  modale.removeEventListener('click', chiusuramodale);
  const main = document.querySelector('#bloccomodale');
  main.innerHTML='';
  document.body.classList.remove('no-scroll');
}

function ONJSON(json)
{
  console.log('JSON ricevuto');
  console.log(json); 
   
  const bottonegoogle = document.querySelector('#tastogoogle');
  bottonegoogle.removeEventListener('click',accessogoogle);
  bottonegoogle.innerHTML = '';
  const provatoken = document.querySelector('.bottone');
  provatoken.removeEventListener('click', gettoken);

  const modale = document.createElement('div');
  modale.classList.add('modale');
  const nome = document.createElement('div');
  nome.textContent = json.name;
  modale.appendChild(nome);
  const image = document.createElement('img');
  image.src = json.picture;
  image.classList.add('immagineprofilogoogle');
  modale.appendChild(image);
  const commento = document.createElement('div');
  commento.textContent = "Complimenti " + json.name + " hai effettuato l'accesso con Google."
  modale.appendChild(commento);
  const main = document.querySelector('#bloccomodale');
  main.appendChild(modale);
  document.body.classList.add('no-scroll');

  modale.addEventListener('click', chiusuramodale);
}

function ONresponse(response)
{
  console.log('risposta ricevuta');
  return response.json();  
}

function ONerror()
{
  console.log('Errore');
}

function gettoken()
{
  let params = {};
  let regex = /([^&=]+)=([^&]*)/g,m;

  while(m = regex.exec(location.href)){
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);    
    }

    if(Object.keys(params).length > 0){
        localStorage.setItem('authInfo', JSON.stringify(params));
      }

   window.history.pushState({},document.title,"/" + "profile.html");

  let info =  JSON.parse(localStorage.getItem('authInfo')); 
  console.log(JSON.parse(localStorage.getItem('authInfo')));
  console.log(info['access_token']);
  console.log(info['expires_in']);

  fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
      headers:{
        "Authorization" : 'Bearer' + info['access_token']
      }
  }).then(ONresponse).then(ONJSON);
}

function controllocredenziali(event)
{
  const form = document.querySelector('.tavoladati form');
  console.log(form);
  if(form.Codice_Fiscale.value.length == 0 || form.Password.value.length == 0)
    {
      const casellaerrore = document.querySelector('.errorerosso');
      casellaerrore.innerHTML = '';
      casellaerrore.textContent = 'Compilare tutti i campi';
      event.preventDefault();
    }
}

const submit = document.querySelector('.tavoladati2 input');
submit.addEventListener('click', controllocredenziali); 
/*function oauth2SignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  let oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create element to open OAuth 2.0 endpoint in new window.
  let form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  let params = {'client_id': '32997486243-e0e04lr6mvo79ffqkvjt1tp63js5dm6c.apps.googleusercontent.com',
                'redirect_uri': 'http://localhost:80/hw1/mhw3.php',
                'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                'state': 'try_sample_request',
                'include_granted_scopes': 'true',
                'response_type': 'token'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

function accessogoogle()
{
  oauth2SignIn();
}*/


function accessogoogle()
{
const token = document.head.querySelector('meta[name="csrf-token"]').content;
fetch('http://localhost/hw1/googlelogin.php', {
  mode: 'no-cors',
  headers: {'X-CSRF-TOKEN': token}
})

window.location = "http://localhost/hw1/googlelogintrue.php";
};

const bottonegoogle = document.querySelector('#tastogoogle');

bottonegoogle.addEventListener('click', accessogoogle);

/*const provatoken = document.querySelector('.bottone');
provatoken.addEventListener('click', gettoken);*/
