import styled from 'styled-components';

export const Body = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   /* justify-content: center; */
   max-width: 100vw;
   background-color: var(--background);
   height: 100vh;

   h2 {
      margin-top: 40px;
      font-size: 30px;
      color: #FFF
   }

   form{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .inputsField{
         width: 506px;

         input {
            margin: 30px 0 10px 0;
            height: 42px;
            width: 100%;
            padding: 13px 4px;
            background: var(--background);
            border: none;
            border-bottom: 1px solid #FFFFFF;
            color: #FFFFFF;
         }
   
         input::placeholder{
            color: #FFFFFF;
         }

         p{
            font-weight: normal;
            max-width: 100%;
            color: red;
            font-size: 12px;
            margin: 0;
         }
      }

   }

   button{
      background-color: var(--yellow);
      width: 267px;
      height: 65.72px;
      border-radius: 100px;
      margin: 30px 10px 10px 10px
   }

   @media screen and (max-width: 700px){
      
      h2{
         font-size: 20px;
      }
      
      form {
         width: 50%;

         .inputsField{
            width: 150px;
         }
      }

      button {
         width: 200px;
      }
   }
`