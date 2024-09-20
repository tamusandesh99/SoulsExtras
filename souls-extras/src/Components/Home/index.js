import React from 'react'
import './index.scss'
import { useState } from 'react'

import PlayersInfoCard from '../PlayersInfoCard'
import PlayerColumn from '../PlayerColumn'

import NPT_logo from '../../ProfilePic/npt.png'
import AGGY_logo from '../../ProfilePic/aggy.png'
import GBP_logo from '../../ProfilePic/GPB.png'
import PARKY_logo from '../../ProfilePic/parky.png'
import CBD_logo from '../../ProfilePic/cbd.png'
import CHRIS_logo from '../../ProfilePic/chris.png'
import BLANXZ_logo from '../../ProfilePic/blanxz.png'
import ADEF_logo from '../../ProfilePic/adef.png'
import VSWED_logo from '../../ProfilePic/vswed.png'
import BUSHY_logo from '../../ProfilePic/bushy.png'


const Home = () => {
const [activePlayer, setActivePlayer] = useState(null)

//list of columns, players are the players in columns 
const [columns, setColumns] = useState({
    NPT: {
      players: [
        { name: 'John', logo: 'ok.jpeg' },
        { name: 'Aggy', logo: 'dd.jpeg' }
      ]
    },
    Aggy: {
      players: [
        { name: 'John', logo: 'ok.jpeg' },
        { name: 'Aggy', logo: 'dd.jpeg' }
      ]
    },
  });


  //activePlayer is whichever playerInfoCard you drag 
  const onDrop = (activePlayer, PlayerColumnName) => {
    if (activePlayer) {
      const columnPlayers = columns[PlayerColumnName].players; //get all players from current activeplayer column 
  
      
      const isDuplicate = columnPlayers.some(player => player.name === activePlayer.name) // Check for duplicate names in the column
      const isOwnCard = activePlayer.name === PlayerColumnName //check if current active player matches with current column that is being dropped on to 
  
      if (!isDuplicate && !isOwnCard) { //case to check so that card with same name and own column isnt being dropped on
        setColumns(prevState => ({
          ...prevState,
          [PlayerColumnName]: {
            ...prevState[PlayerColumnName],
            players: [...prevState[PlayerColumnName].players, activePlayer] //push the active player to previous list. activePlayer is the current 
          }
        }));
      } else if (isDuplicate) {
        console.log(`${activePlayer.name} already exists in ${PlayerColumnName} column.`);
      } else if (isOwnCard) {
        console.log(`You cannot add your own player card (${activePlayer.name}) to the ${PlayerColumnName} column.`);
      }
  
      setActivePlayer(null); // Reset all values after playerinfocard is dropped
    }
  };

    return (
        <div className="main-container">
            <div className='top-sub-container'>
                <PlayerColumn
                name='NPT'
                players={columns.NPT.players}
                PlayerColumnName='NPT'
                PlayerColumnLogo={'NPTLogo '}
                onDrop={onDrop}
                activePlayer={activePlayer}
                 />
                <PlayerColumn
                name='Aggy'
                players={columns.Aggy.players}
                PlayerColumnName='Aggy'
                PlayerColumnLogo={'AggyLogo '}
                onDrop={onDrop}
                activePlayer={activePlayer}
                 />
                
            </div>


            <div className='bottom-sub-container'>
                <PlayersInfoCard
                name={"NPT"}
                logo={NPT_logo}
                setActivePlayer={() => setActivePlayer({ name: 'NPT', logo: 'ok.jpeg' })}
                 />
                <PlayersInfoCard
                name={"Aggy"}
                logo={AGGY_logo}
                setActivePlayer={() => setActivePlayer({ name: 'Aggy', logo: 'ok.jpeg' })}
                 />
                <PlayersInfoCard
                name={"Bushy"}
                logo={BUSHY_logo}
                setActivePlayer={() => setActivePlayer({ name: 'Bushy', logo: 'ok.jpeg' })}
                 />
               
                
            </div>
        </div>
    )
}

export default Home
