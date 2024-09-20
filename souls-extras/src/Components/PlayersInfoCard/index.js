import React from 'react'
import './index.scss'

const PlayersInfo = ({ name, logo, setActivePlayer }) => {
    return (
        <div className='dragable-players' draggable
            onDragStart={() => setActivePlayer()}
            onDragEnd={() => setActivePlayer(null)}>

            <div className='player-logo'>
            <img src={logo} />
            </div>
            <div className='player-name'>
                {name}
            </div>
        </div>
    )
}

export default PlayersInfo
