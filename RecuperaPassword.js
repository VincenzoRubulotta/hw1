
function RitornoAlLogin()
{
    window.location = "http://localhost/hw1/hw1.php";
}

const bottonehome = document.querySelector('.bottoneritorno');
bottonehome.addEventListener('click', RitornoAlLogin);



function controllapassword(event)
{
  const form = document.querySelector('form');
  console.log(form.password.value);
  console.log(form.Prova.value);

  if(form.password.value != form.Prova.value)
    {
        const casellaerrore = document.querySelector('.errorerosso');
        casellaerrore.innerHTML = '';
        casellaerrore.textContent = 'Le password non coincidono';

        event.preventDefault();
    }
    if(form.password.value.length < 8)
        {
            const casellaerrore = document.querySelector('.errorerosso');
            casellaerrore.innerHTML = '';
            casellaerrore.textContent =  'La password deve contenere almeno 8 cifre';
            event.preventDefault(); 
        }
        else
        {
          const lowerCase=/[a-z]/.test(form.password.value);
          const upperCase=/[A-Z]/.test(form.password.value);
          const number=/[0-9]/.test(form.password.value);
          const speciale=/[^a-zA-Z0-9]/.test(form.password.value);
  
          if(!lowerCase)
            {
                const casellaerrore = document.querySelector('.errorerosso');
              casellaerrore.innerHTML = '';
              casellaerrore.textContent =  'La password deve contenere almeno una lettera minuscola';
              event.preventDefault(); 
            }
  
          if(!upperCase)
            {
                const casellaerrore = document.querySelector('.errorerosso');
              casellaerrore.innerHTML = '';
              casellaerrore.textContent =  'La password deve contenere almeno una lettera maiuscola';
              event.preventDefault(); 
            }
          
          if(!number)
            {
                const casellaerrore = document.querySelector('.errorerosso');
              casellaerrore.innerHTML = '';
              casellaerrore.textContent =  'La password deve contenere almeno un numero';
              event.preventDefault(); 
            }
          
          if(!speciale)
            {
                const casellaerrore = document.querySelector('.errorerosso');
              casellaerrore.innerHTML = '';
              casellaerrore.textContent =  'La password deve contenere almeno un carattere speciale';
              event.preventDefault(); 
            }
    
         }
}

function controllodati(event)
{
 const form = document.querySelector('form');
 const casellaerrore = document.querySelector('.casellaerrore');
 if(form.CF.value.length == 0 || form.Tel.value.length == 0)
    {
        casellaerrore.classList.add('errorerosso');
        casellaerrore.innerHTML = '';
        casellaerrore.textContent = 'Devi compilare tutti i campi'
        event.preventDefault();
    }
    else if(form.CF.value.length != 16)
        {
            casellaerrore.classList.add('errorerosso');
            casellaerrore.innerHTML = '';
            casellaerrore.textContent = 'Il codice fiscale deve essere di esattamente 16 caratteri';
            event.preventDefault();
        }
    else if(form.Tel.value.length != 10)
        { 
            casellaerrore.classList.add('errorerosso');
            casellaerrore.innerHTML = '';
            casellaerrore.textContent = 'Il numero du telefono deve essere composto da 10 caratteri';
            event.preventDefault();
        }
    else
    {
        let data = {
            CF: form.CF.value,
            Telefono: form.Tel.value
        }

        function ONJson(json)
        {
          console.log(json);
          if(json.length != 0)
            {
              form.Tel.classList.add('hidden');
              form.CF.classList.add('hidden');
              submit.classList.add('hidden');
              submit.type = 'text';
              submit.removeEventListener('click', controllodati);



              const password = document.createElement('input');
              password.type = 'password';
              password.name = 'password';
              password.placeholder = 'Inserisci la nuova password';

              const passwordProva = document.createElement('input');
              passwordProva.type = 'password';
              passwordProva.name = 'Prova';
              passwordProva.placeholder = 'Inserisci nuovamente la password';

              const submit2 = document.createElement('input');
              submit2.type = 'submit';
              submit2.classList.add('submit');

              form.appendChild(password);
              form.appendChild(passwordProva);
              form.appendChild(submit2);

              casellaerrore.innerHTML = '';
              casellaerrore.classList.add('errorerosso');
              form.appendChild(casellaerrore);

              form.addEventListener('submit', controllapassword);
            }
          else
            {
                casellaerrore.classList.add('errorerosso');
                casellaerrore.innerHTML = '';
                casellaerrore.textContent = 'Non esiste un utente con questi dati';
            }
        }

        function ONResponse(Response)
        {
            return Response.json();
        }

        fetch('http://localhost/hw1/controlloCF&TEL.php',{
            method: 'POST',
            headers : 
            {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        }).then(ONResponse).then(ONJson);
        event.preventDefault();
    }
}

const submit = document.querySelector('.submit');
submit.addEventListener('click', controllodati);