import { useState } from 'react';
import { Body } from './ContactStyle';
export default function Contact(){

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [number, setNumber] = useState('');
   const [nameErrorMessage, setNameErrorMessage] = useState('');
   const [emailErrorMessage, setEmailErrorMessage] = useState('');
   const [numberErrorMessage, setNumberErrorMessage] = useState('');

   const api = 'http://localhost:5000/contact';

   function onHandleSubmit(event: any){
      event.preventDefault();
      if(name != '' && email != '' && number.length >= 10 && number.length <= 11){
         const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name: name, email: email, phone: number})
         };
         fetch(api, requestOptions);
         onHandleError();
         setName('');
         setEmail('');
         setNumber('');
      } else {
         onHandleError();
      }
   };

   const onHandleError = () => {
      if(name.length === 0 || name === ''){
         setNameErrorMessage('Campo nome inválido, o campo não pode ser vazio');
      } else {
         setNameErrorMessage('');
      }

      if(email.length === 0 || email === ''){
         setEmailErrorMessage('Campo email inválido, o campo não pode ser vazio.');
      } else {
         setEmailErrorMessage('');
      }

      if(number.length < 10 || number.length > 11){
         setNumberErrorMessage('Campo telefone inválido. Mín: 10 Máx: 11 caracteres.');
      } else {
         setNumberErrorMessage('');
      }
   }

   return(
      <>
         <Body>
            
         <h2>Entre em contato com a Lumis</h2>
         <form id="contactForm" onSubmit={onHandleSubmit}>
            <div className="inputsField">
            <input 
               type="text" 
               placeholder='Informe seu nome'
               value={name}
               onChange={(e) => setName(e.target.value)}/>
               <p>{nameErrorMessage}</p>
            </div>
            <div className="inputsField">
            <input 
               type="text" 
               placeholder="Informe seu email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>
               <p>{emailErrorMessage}</p>
            </div>
            <div className="inputsField">
            <input 
               type="text"
               placeholder="Informe seu telefone"
               value={number}
               min="10" max="11" 
               onChange={(e) => setNumber(e.target.value)}/>
               <p>{numberErrorMessage}</p>
            </div>
            <div>
               <button type="reset" value="clean">Limpar</button>
               <button type="submit" value="send">Enviar</button>
            </div>
         </form>
         
         </Body>
      </>
   )
}