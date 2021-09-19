import styled from 'styled-components';

export const HeaderBody = styled.header`
   display: flex;
   align-items: center;
   justify-content: start;
   max-width: 100vw;
   top: 0;
   left: 0;
   height: 80px;
   border-bottom: 1px solid #FFFFFF;
   background-color: var(--background);

   img {
      width: 215px;
      height: 42px;
      margin-right: 20px;
   }

   a {
      color: #A8A8B3;
      margin: 0 10px;
      height: 100%;
      line-height: 5rem;
      cursor: pointer;
      position: relative;

      &::after{
         position: absolute;
         top: 100%;
         left: 0;
         content: " ";
         width: 0;
         height: 3px;
         background-color: var(--yellow);
         transition: all 0.2s ease-in-out;
      }

      &:hover::after,
      &.active::after{
         width: 100%;
      }
      
      &.active{
         color: #FFF!important;
      }

   }
`;