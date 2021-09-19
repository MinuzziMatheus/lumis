import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

import { Body } from './HomeStyle';
import List from './List/List';
import Modal from './modal/Modal';

export default function Home(){

   const [games, setGames] = useState([] as any);
   const [filterName, setFilterName] = useState('');
   const [modalStatus, setModalStatus] = useState(false);
   const [gameToModal, setGameToModal] = useState([] as any);

   useEffect(() => {
      const fetchGame = async () =>{
          const response = await fetch('http://localhost:5000/games');
          const responseData = await response.json();
          const loadedGames = [];

          for(const key in responseData){
              loadedGames.push({
                  id: key,
                  game: responseData[key].game,
                  price: responseData[key].price,
                  description: responseData[key].description,
                  image: responseData[key].image
              });
          }
          setGames(loadedGames);
      }
      
      fetchGame();
   }, []);

   const filteredName = (gameName: any) => {
      setFilterName(gameName.target.value)
   };

   const gameChoosed = (gameName: any) => {
      if(gameName){
         setModalStatus(true);
         setGameToModal(gameName);
      }
   }

   const filteredGames = games.filter((game: any) => {
      return game.game.toLowerCase().includes(filterName.toLocaleLowerCase());
   }); 

   return(
      <>
         <Body>
            {modalStatus && ReactDOM.createPortal(
               <Modal modalStatus={modalStatus} game={gameToModal}/>,
               document.getElementById('modal-root') as any
            )}
            <input type="text" placeholder="Pesquise aqui o seu jogo de Playstation 4" onChange={filteredName}/>
            
            {filteredGames.length > 0 ? (
               filteredGames.map((option: any) => {
                  return <List key={option.id} game={option} about={gameChoosed}/>
               })
            ) : (
               <p className="notFound">Não foi possivel encontrar nenhum jogo com: <span>{filterName}</span></p>
            )}
          </Body>
      </>
   );
}