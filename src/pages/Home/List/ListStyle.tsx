import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border: 1px solid #61DCFB;
   height: 176px;
   padding: 26px;
   width: 80%;
   margin: 24px auto;

   img{
      width: 126px;
      height: 124px;
      border-radius: 50%;
      margin: 0 36px;
      background-color: red;
   }

   p{
      width: 50%;
      font-size: 24px;
      color: #FFFFFF;
   }

   button{
      background-color: var(--yellow);
      width: 267px;
      height: 65.72px;
      border-radius: 100px;
   }

   @media screen and (max-width: 700px){

      padding: 0;

      img {
         width: 80px;
         height: 80px;
         margin: 0 10px;
      }

      p {
         font-size: 16px;
      }

      button{
         width: 100px;
         height: 35.72px;
         margin-right: 5px;
      }
   }
`;