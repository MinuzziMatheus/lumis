import { useState, useEffect } from 'react';
import { Body, ModalContent, Button, ButtonArea } from './ModalStyle';

export default function Modal(props: any){

   const [isActivated, setIsActive] = useState(false);

   const closeModal = () => {
      setIsActive(false);
   }

   useEffect(() => {
      setIsActive(props.modalStatus);
   }, [props.game])


   return(
      <>
         {isActivated && 
            <Body>
               <ModalContent>
                  <img src={props.game.image} alt="game capa" />
                  <h3>{props.game.game}</h3>
                  <h3>R$ {props.game.price},00</h3>
                  <p>{props.game.description}</p>
                  <ButtonArea>
                     <Button type="submit" onClick={closeModal}>Fechar</Button>
                  </ButtonArea> 
               </ModalContent>
            </Body>
         }
      </>
   )
}