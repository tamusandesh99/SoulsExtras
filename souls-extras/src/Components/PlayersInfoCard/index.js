import React from 'react'
import './index.scss'

const PlayersInfo = ({ name, logo, setActivePlayer, PlayerColumnName }) => {
    return (
        <div className='dragable-players' draggable
            onDragStart={() => setActivePlayer()}
            onDragEnd={() => setActivePlayer(null)}>

            <div className='player-logo' draggable>
            <img src={logo} />
            </div>
            <div className='player-name'>
                <h2> {name} </h2>
            </div>
        </div>
    )
}

export default PlayersInfo
