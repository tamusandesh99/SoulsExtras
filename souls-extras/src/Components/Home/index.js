import React from 'react'
import './index.scss'
import { useState } from 'react'

import PlayersInfoCard from '../PlayersInfoCard'
import PlayerColumn from '../PlayerColumn'

const Home = () => {
const [activePlayer, setActivePlayer] = useState(null)
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


  const onDrop = (activePlayer, PlayerColumnProp) => {
    if (activePlayer) {
        setColumns(prevState => ({
          ...prevState,
          [PlayerColumnProp]: {
            ...prevState[PlayerColumnProp],  // Keep other column data (like name, logo)
            players: [...prevState[PlayerColumnProp].players, activePlayer]  // Append activePlayer to the players array
          }
        }));
        setActivePlayer(null); // Reset after drop
    }
}

    return (
        <div className="main-container">
            <div className='top-sub-container'>
                <PlayerColumn
                name='NPT'
                players={columns.NPT.players}
                PlayerColumnProp='NPT'
                onDrop={onDrop}
                activePlayer={activePlayer}
                 />
                <PlayerColumn
                name='Aggy'
                players={columns.Aggy.players}
                PlayerColumnProp='Aggy'
                onDrop={onDrop}
                activePlayer={activePlayer}
                 />
                
            </div>


            <div className='bottom-sub-container'>
                <PlayersInfoCard
                name={"NPT"}
                logo='ok.jpeg'
                setActivePlayer={() => setActivePlayer({ name: 'NPT', logo: 'ok.jpeg' })}
                 />
                <PlayersInfoCard
                name={"Aggy"}
                logo='ok.jpeg'
                setActivePlayer={() => setActivePlayer({ name: 'Aggy', logo: 'ok.jpeg' })}
                 />
                <PlayersInfoCard
                name={"Bushy"}
                logo='test.jpeg'
                setActivePlayer={() => setActivePlayer({ name: 'Bushy', logo: 'ok.jpeg' })}
                 />
               
                
            </div>
        </div>
    )
}

export default Home
