import styled from 'styled-components';

export const Body = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   min-height: 100vh;
   padding: 0;
   margin: 0;
   background-color: var(--background);

   .notFound{
      color: #FFFFFF;
      font-size: 36px;
      text-align: center;
      width: 431px;
      padding: 0 30px;

      span {
         color: #61DCFB; 
      }
   }

   input {
      margin: 40px 0 40px 0;
      height: 42px;
      width: 80%;
      padding: 10px;
      background: var(--background);
      border: none;
      border-bottom: 1px solid #FFFFFF;
      color: #FFFFFF;
   }

   input::placeholder{
      color: #FFFFFF; 
   }
`;
