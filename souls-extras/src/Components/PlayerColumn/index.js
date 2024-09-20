import React from "react";
import { useState } from "react";

import DropAreaColumn from "../DropAreaColumn";
import PlayersInfoCard from "../PlayersInfoCard";
import "./index.scss";

const PlayerColum = ({
  name,
  logo,
  activePlayer,
  players,
  onDelete,
  onDrop,
  PlayerColumnProp,
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
          onDrop(activePlayer, PlayerColumnProp); // Pass activePlayer here
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

      <div className="player-info"></div>
    </div>
  );
};

export default PlayerColum;
