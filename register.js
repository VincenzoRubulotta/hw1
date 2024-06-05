function CambioUtenti(event)
{
    const bloccocambiante = document.querySelector('#bloccocambiante');
  if(form.Tipologia_Utente.value == 'Docente')
    {
     bloccocambiante.innerHTML= '';

     const cf = document.createElement('input');
     cf.name = 'cf';
     cf.placeholder = 'Codice Fiscale';
     cf.type = 'text';
     cf.classList.add('inserimento');

     const Nome = document.createElement('input');
     Nome.name = 'Nome';
     Nome.placeholder = 'Nome';
     Nome.type = 'text';
     Nome.classList.add('inserimento');

     const Cognome = document.createElement('input');
     Cognome.name = 'Cognome';
     Cognome.placeholder = 'Cognome';
     Cognome.type = 'text';
     Cognome.classList.add('inserimento');

     const email = document.createElement('input');
     email.name = 'Email';
     email.placeholder = 'Email';
     email.type = 'text';
     email.classList.add('inserimento');

     const Telefono = document.createElement('input');
     Telefono.name = 'Tel';
     Telefono.placeholder = 'Numero di Telefono';
     Telefono.type = 'text';
     Telefono.classList.add('inserimento');

     const input = document.createElement('input');
     input.type = 'submit';
     input.classList.add('inserimento');

     const nascita = document.createElement('input');
     nascita.name = 'data';
     nascita.type = 'date';
     nascita.classList.add('inserimento');
     
     const password = document.createElement('input');
     password.name = 'Password';
     password.placeholder = 'Password';
     password.type = 'password';
     password.classList.add('inserimento');

     bloccocambiante.appendChild(cf);
     bloccocambiante.appendChild(Nome);
     bloccocambiante.appendChild(Cognome);
     bloccocambiante.appendChild(nascita);
     bloccocambiante.appendChild(email);
     bloccocambiante.appendChild(Telefono);
     bloccocambiante.appendChild(password);
     bloccocambiante.appendChild(input);
    }
   else
    {
     bloccocambiante.innerHTML = '';

     bloccocambiante.innerHTML= '';

     const cf = document.createElement('input');
     cf.name = 'cf';
     cf.placeholder = 'Codice Fiscale';
     cf.type = 'text';
     cf.classList.add('inserimento');

     const Nome = document.createElement('input');
     Nome.name = 'Nome';
     Nome.placeholder = 'Nome';
     Nome.type = 'text';
     Nome.classList.add('inserimento');

     const Cognome = document.createElement('input');
     Cognome.name = 'Cognome';
     Cognome.placeholder = 'Cognome';
     Cognome.type = 'text';
     Cognome.classList.add('inserimento');

     const email = document.createElement('input');
     email.name = 'Email';
     email.placeholder = 'Email';
     email.type = 'text';
     email.classList.add('inserimento');
     
     const Telefono = document.createElement('input');
     Telefono.name = 'Tel';
     Telefono.placeholder = 'Numero di Telefono';
     Telefono.type = 'text';
     Telefono.classList.add('inserimento');

    const C_Laurea = document.createElement('select');
    C_Laurea.name = 'C_Laurea';
    C_Laurea.classList.add('inserimento');
    function ONJsonCorso(jsonCorsi)
    {
      console.log(jsonCorsi);
      for(CorsoS of jsonCorsi)
        {
          const optionCorso = document.createElement('option');
          optionCorso.value = CorsoS.Nome;
          optionCorso.textContent = CorsoS.Nome;

          C_Laurea.appendChild(optionCorso);
        }
    }

    function ONResponseCorso(Response)
    {
      return Response.json();
    }

    fetch('http://localhost/hw1/corsodiLaurea.php').then(ONResponseCorso).then(ONJsonCorso);

     const input = document.createElement('input');
     input.type = 'submit';
     input.classList.add('inserimento');

     const nascita = document.createElement('input');
     nascita.name = 'data';
     nascita.type = 'date';
     nascita.classList.add('inserimento');

     const password = document.createElement('input');
     password.name = 'Password';
     password.placeholder = 'Password';
     password.type = 'password';
     password.classList.add('inserimento');

     bloccocambiante.appendChild(cf);
     bloccocambiante.appendChild(Nome);
     bloccocambiante.appendChild(Cognome);
     bloccocambiante.appendChild(nascita);
     bloccocambiante.appendChild(email);
     bloccocambiante.appendChild(Telefono);
     bloccocambiante.appendChild(C_Laurea);
     bloccocambiante.appendChild(password);
     bloccocambiante.appendChild(input);
    }
}

function tornaallahome()
{
  window.location = "http://localhost/hw1/hw1.php";
}

const homepointer = document.querySelector('#homepointer');
homepointer.addEventListener('click', tornaallahome);


function controllocredenziali(event)
{
 if(form.cf.value.length == 0 || form.Nome.value.length == 0 || form.Cognome.value.length == 0 || form.Email.value.length == 0 || form.data.value.length == 0 || form.Tel.value.length == 0 || form.Password.value.length == 0)
  {
    const errore = document.querySelector('#bloccoerrore');
    errore.innerHTML = '';
    errore.textContent = 'Nescesario compilare tutti i campi';
    event.preventDefault();
  }
  if(form.cf.value.length != 16)
    {
      const errore = document.querySelector('#bloccoerrore');
      errore.innerHTML = '';
      errore.textContent =  'La lunghezza del codice fiscale deve essere di 16 caratteri';
      event.preventDefault();
    }
  if(form.Tel.value.length != 10)
    {
      const errore = document.querySelector('#bloccoerrore');
      errore.innerHTML = '';
      errore.textContent =  'Il numero di telefono deve contenere 10 cifre';
      event.preventDefault();
    }

  if(form.Email.value.length >0)
    {
      const emailtipo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailtipo.test(form.Email.value))
        {
          const errore = document.querySelector('#bloccoerrore');
          errore.innerHTML = '';
          errore.textContent =  "L'email inserita non rispetta il formato di un'email";
          event.preventDefault();
        }
    }

    if(form.Password.value.length < 8)
      {
        const errore = document.querySelector('#bloccoerrore');
        errore.innerHTML = '';
        errore.textContent =  'La password deve contenere almeno 8 cifre';
        event.preventDefault(); 
      }
      else
      {
        const lowerCase=/[a-z]/.test(form.Password.value);
        const upperCase=/[A-Z]/.test(form.Password.value);
        const number=/[0-9]/.test(form.Password.value);
        const speciale=/[^a-zA-Z0-9]/.test(form.Password.value);

        if(!lowerCase)
          {
            const errore = document.querySelector('#bloccoerrore');
            errore.innerHTML = '';
            errore.textContent =  'La password deve contenere almeno una lettera minuscola';
            event.preventDefault(); 
          }

        if(!upperCase)
          {
            const errore = document.querySelector('#bloccoerrore');
            errore.innerHTML = '';
            errore.textContent =  'La password deve contenere almeno una lettera maiuscola';
            event.preventDefault(); 
          }
        
        if(!number)
          {
            const errore = document.querySelector('#bloccoerrore');
            errore.innerHTML = '';
            errore.textContent =  'La password deve contenere almeno un numero';
            event.preventDefault(); 
          }
        
        if(!speciale)
          {
            const errore = document.querySelector('#bloccoerrore');
            errore.innerHTML = '';
            errore.textContent =  'La password deve contenere almeno un carattere speciale';
            event.preventDefault(); 
          }
  
      }
}

const form = document.forms['registrazione'];
form.addEventListener('submit', controllocredenziali);
form.Tipologia_Utente.addEventListener('click', CambioUtenti)

