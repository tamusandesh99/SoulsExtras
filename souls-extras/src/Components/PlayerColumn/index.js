import React from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

import DropAreaColumn from "../DropAreaColumn";
import PlayersInfoCard from "../PlayersInfoCard";
import "./index.scss";

const PlayerColum = ({
  activePlayer,
  players,
  onDelete,
  onDrop,
  PlayerColumnName,
  PlayerColumnLogo
}) => {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <div className="player-box">
      <div
        onDragEnter={() => setShowDropArea(true)}
        onDragLeave={() => setShowDropArea(false)}
        onDrop={() => {
          console.log(players);
          setShowDropArea(false);
          onDrop(activePlayer, PlayerColumnName); // Pass activePlayer here
        }}
        onDragOver={(e) => e.preventDefault()}
        className={showDropArea ? "player-contents-drop" : "player-contents"}
      >
        {Array.isArray(players) && players.length > 0 ? (
          players.map((player, index) => (
            <div key={index} className="dropped-player">
              <img src={player.logo}  />
              <span>{player.name}</span>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="player-info">
        {PlayerColumnLogo}
      {PlayerColumnName}

      </div>
    </div>
  );
};

export default PlayerColum;
