import styled from 'styled-components';

export const Body = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   width: 100%;
   min-height: 210vh;
   overflow-y: hidden;
   z-index: 20;
   background-color: rgba(58, 57, 57, 0.61);
`;

export const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 80px;
   padding: 20px;
   height: 70%;
   width: 70%;
   background-color: var(--background);
   
   img{
      width: 478px;
      height: 305px;
   }

   h3,h4 {
      text-align: left;
      padding: 5px;
      color: #FFF;
   }

   p{
      text-align: justify;
      font-size: 15px;
      padding: 5px;
      margin-bottom: 10px;
      color: #FFF;
   }

   @media screen and (max-width: 700px){

      img{
         width: 80%;
         height: 20%;
      }

   }
`;

export const ButtonArea = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Button = styled.button`
   background-color: var(--yellow);
   width: 267px;
   height: 65.72px;
   border-radius: 100px;

   @media screen and (max-width: 700px){
      width: 200px;
   }
`;