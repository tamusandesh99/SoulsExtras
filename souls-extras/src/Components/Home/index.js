import React from "react";
import "./index.scss";
import { useState, useRef } from "react";

import PlayersInfoCard from "../PlayersInfoCard";
import PlayerColumn from "../PlayerColumn";

import NPT_logo from "../../ProfilePic/npt.png";
import AGGY_logo from "../../ProfilePic/aggy.png";
import GBP_logo from "../../ProfilePic/GPB.png";
import PARKY_logo from "../../ProfilePic/parky.png";
import CBD_logo from "../../ProfilePic/cbd.png";
import CHRIS_logo from "../../ProfilePic/chris.png";
import BLANXZ_logo from "../../ProfilePic/blanxz.png";
import ADEF_logo from "../../ProfilePic/adef.png";
import VSWED_logo from "../../ProfilePic/vswed.png";
import BUSHY_logo from "../../ProfilePic/bushy.png";

const Home = () => {
  const [activePlayer, setActivePlayer] = useState(null);
  const columnRefs = useRef({});

  //list of columns, players are the players in columns
  const [columns, setColumns] = useState({
    NPT: {
      players: [],
    },
    CBD: {
      players: [],
    },
    Aggy: {
      players: [],
    },
    Blanxz: {
      players: [],
    },
    GPB: {
      players: [],
    },
    Parky: {
      players: [],
    },
    Adef: {
      players: [],
    },
    Chris: {
      players: [],
    },
    Vswed: {
      players: [],
    },
    Bushy: {
      players: [],
    },
  });

  // delete player funtion, this will be called from playercolumn component with columnname and playername
  const deletePlayer = (columnName, playerName) => {
    setColumns((prevState) => ({
      ...prevState,
      [columnName]: {
        ...prevState[columnName],
        players: prevState[columnName].players.filter(
          (player) => player.name !== playerName
        ),
      },
    }));
  };

  //activePlayer is whichever playerInfoCard you drag
  const onDrop = (activePlayer, PlayerColumnName) => {
    if (activePlayer) {
      const columnPlayers = columns[PlayerColumnName].players; //get all players from current activeplayer column

      // Check for duplicate names in the column
      const isDuplicate = columnPlayers.some(
        (player) => player.name === activePlayer.name
      ); 

      //check if current active player matches with current column that is being dropped on to
      const isOwnCard = activePlayer.name === PlayerColumnName; 

      // Check if PlayerColumnName already contains the activePlayer's column name
      const reverseConflict = columns[activePlayer.name]?.players.some(
        (player) => player.name === PlayerColumnName
      );

      if (!isDuplicate && !isOwnCard && !reverseConflict) {
        //case to check so that card with same name and own column isnt being dropped on
        setColumns((prevState) => ({
          ...prevState,
          [PlayerColumnName]: {
            ...prevState[PlayerColumnName],
            players: [...prevState[PlayerColumnName].players, activePlayer], //push the active player to previous list. activePlayer is the current
          },
        }));
      } else if (isDuplicate) {

        const columnElement = columnRefs.current[PlayerColumnName]; // Access the column DOM element
        if (columnElement) {
          // Add the "shake" class to trigger animation
          columnElement.classList.add("shake");
          
          // Remove the shake class after animation ends (e.g., after 500ms)
          setTimeout(() => {
            columnElement.classList.remove("shake");
          }, 500); // Adjust the timeout to match your animation duration
        }

      } else if (isOwnCard) {
        const columnElement = columnRefs.current[PlayerColumnName]; // Access the column DOM element
        if (columnElement) {
          // Add the "shake" class to trigger animation
          columnElement.classList.add("shake");
          
          // Remove the shake class after animation ends (e.g., after 500ms)
          setTimeout(() => {
            columnElement.classList.remove("shake");
          }, 500); // Adjust the timeout to match your animation duration
        }
      }
      else if(reverseConflict){
        const columnElement = columnRefs.current[PlayerColumnName]; // Access the column DOM element
        if (columnElement) {
          // Add the "shake" class to trigger animation
          columnElement.classList.add("shake");
          
          // Remove the shake class after animation ends (e.g., after 500ms)
          setTimeout(() => {
            columnElement.classList.remove("shake");
          }, 500); // Adjust the timeout to match your animation duration
        }
      }

      setActivePlayer(null); // Reset all values after playerinfocard is dropped
    }
  };

  return (
    <div className="main-container">
      <div className="intro-container">
        <h2>Make your prediction</h2>
        <span>
          {" "}
          Drag the bottom players and place it on one of the player's column.
          Each column represents the opponets you think they can defeat. For
          example, if you think NPT can defeat CBD then you drag CBD's card and
          place it on NPT's column
        </span>
      </div>
      <div className="top-sub-container">
        <PlayerColumn
          name="NPT"
          players={columns.NPT.players}
          PlayerColumnName="NPT"
          PlayerColumnLogo={NPT_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="CBD"
          players={columns.CBD.players}
          PlayerColumnName="CBD"
          PlayerColumnLogo={CBD_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Aggy"
          players={columns.Aggy.players}
          PlayerColumnName="Aggy"
          PlayerColumnLogo={AGGY_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Blanxz"
          players={columns.Blanxz.players}
          PlayerColumnName="Blanxz"
          PlayerColumnLogo={BLANXZ_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="GPB"
          players={columns.GPB.players}
          PlayerColumnName="GPB"
          PlayerColumnLogo={GBP_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Parky"
          players={columns.Parky.players}
          PlayerColumnName="Parky"
          PlayerColumnLogo={PARKY_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Adef"
          players={columns.Adef.players}
          PlayerColumnName="Adef"
          PlayerColumnLogo={ADEF_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Chris"
          players={columns.Chris.players}
          PlayerColumnName="Chris"
          PlayerColumnLogo={CHRIS_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Vswed"
          players={columns.Vswed.players}
          PlayerColumnName="Vswed"
          PlayerColumnLogo={VSWED_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
        <PlayerColumn
          name="Bushy"
          players={columns.Bushy.players}
          PlayerColumnName="Bushy"
          PlayerColumnLogo={BUSHY_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
          columnRefs={columnRefs}
        />
      </div>
      <div className="drag-me">
        <h1>Drag me</h1>
      </div>
      <div className="bottom-sub-container">
        <PlayersInfoCard
          name={"NPT"}
          logo={NPT_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "NPT", logo: NPT_logo })
          }
        />
        <PlayersInfoCard
          name={"CBD"}
          logo={CBD_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "CBD", logo: CBD_logo })
          }
        />
        <PlayersInfoCard
          name={"Aggy"}
          logo={AGGY_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Aggy", logo: AGGY_logo })
          }
        />
        <PlayersInfoCard
          name={"Blanxz"}
          logo={BLANXZ_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Blanxz", logo: BLANXZ_logo })
          }
        />
        <PlayersInfoCard
          name={"GPB"}
          logo={GBP_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "GPB", logo: GBP_logo })
          }
        />
        <PlayersInfoCard
          name={"Parky"}
          logo={PARKY_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Parky", logo: PARKY_logo })
          }
        />
        <PlayersInfoCard
          name={"Adef"}
          logo={ADEF_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Adef", logo: ADEF_logo })
          }
        />
        <PlayersInfoCard
          name={"Chris"}
          logo={CHRIS_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Chris", logo: CHRIS_logo })
          }
        />
        <PlayersInfoCard
          name={"Vswed"}
          logo={VSWED_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Vswed", logo: VSWED_logo })
          }
        />
        <PlayersInfoCard
          name={"Bushy"}
          logo={BUSHY_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Bushy", logo: BUSHY_logo })
          }
          
        />
      </div>
    </div>
  );
};

export default Home;
