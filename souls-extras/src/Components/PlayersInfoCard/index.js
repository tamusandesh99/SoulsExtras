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
                <span> {name} </span>
            </div>
        </div>
    )
}

export default PlayersInfo
