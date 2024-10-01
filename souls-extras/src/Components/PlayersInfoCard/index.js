import React from "react";
import { useDrag } from "react-dnd";
import "./index.scss";

const PlayersInfo = ({ name, logo, setActivePlayer }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PLAYER",
    item: { name, logo },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="dragable-players"
      draggable
      onDragStart={() => setActivePlayer()}
      onDragEnd={() => setActivePlayer(null)}
    >
      <div className="player-logo" draggable>
        <img src={logo} />
      </div>
      <div className="player-name">
        <span> {name} </span>
      </div>
    </div>
  );
};

export default PlayersInfo;
