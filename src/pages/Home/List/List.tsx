import { Container} from './ListStyle';


export default function List (props: any){

   return(
      <>
         <Container>
            <img src={props.game.image} alt="Capa Game" />            
            <p>{props.game.game}<br />R$ {props.game.price},00</p>
            <button type="button" onClick={() => props.about(props.game) }>Sobre</button>
         </Container>
      </>
   )
}