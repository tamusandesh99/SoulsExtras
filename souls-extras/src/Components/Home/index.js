import React from "react";
import "./index.scss";
import { useState } from "react";

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

      const isDuplicate = columnPlayers.some(
        (player) => player.name === activePlayer.name
      ); // Check for duplicate names in the column
      const isOwnCard = activePlayer.name === PlayerColumnName; //check if current active player matches with current column that is being dropped on to

      if (!isDuplicate && !isOwnCard) {
        //case to check so that card with same name and own column isnt being dropped on
        setColumns((prevState) => ({
          ...prevState,
          [PlayerColumnName]: {
            ...prevState[PlayerColumnName],
            players: [...prevState[PlayerColumnName].players, activePlayer], //push the active player to previous list. activePlayer is the current
          },
        }));
      } else if (isDuplicate) {
        console.log(
          `${activePlayer.name} already exists in ${PlayerColumnName} column.`
        );
      } else if (isOwnCard) {
        console.log(
          `You cannot add your own player card (${activePlayer.name}) to the ${PlayerColumnName} column.`
        );
      }

      setActivePlayer(null); // Reset all values after playerinfocard is dropped
    }
  };

  return (
    <div className="main-container">
      <div className="top-sub-container">
        <PlayerColumn
          name="NPT"
          players={columns.NPT.players}
          PlayerColumnName="NPT"
          PlayerColumnLogo={NPT_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="CBD"
          players={columns.CBD.players}
          PlayerColumnName="CBD"
          PlayerColumnLogo={CBD_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Aggy"
          players={columns.Aggy.players}
          PlayerColumnName="Aggy"
          PlayerColumnLogo={AGGY_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Blanxz"
          players={columns.Blanxz.players}
          PlayerColumnName="Blanxz"
          PlayerColumnLogo={BLANXZ_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="GPB"
          players={columns.GPB.players}
          PlayerColumnName="GPB"
          PlayerColumnLogo={GBP_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Parky"
          players={columns.Parky.players}
          PlayerColumnName="Parky"
          PlayerColumnLogo={PARKY_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Adef"
          players={columns.Adef.players}
          PlayerColumnName="Adef"
          PlayerColumnLogo={ADEF_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Chris"
          players={columns.Chris.players}
          PlayerColumnName="Chris"
          PlayerColumnLogo={CHRIS_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Vswed"
          players={columns.Vswed.players}
          PlayerColumnName="Vswed"
          PlayerColumnLogo={VSWED_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
        <PlayerColumn
          name="Bushy"
          players={columns.Bushy.players}
          PlayerColumnName="Bushy"
          PlayerColumnLogo={BUSHY_logo}
          onDrop={onDrop}
          onDelete={deletePlayer}
          activePlayer={activePlayer}
        />
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
            setActivePlayer({ name: "Blanxz", logo: BLANXZ_logo})
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
            setActivePlayer({ name: "Parky", logo: PARKY_logo})
          }
        />
        <PlayersInfoCard
          name={"Adef"}
          logo={ADEF_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Adef", logo: ADEF_logo})
          }
        />
        <PlayersInfoCard
          name={"Chris"}
          logo={CHRIS_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Chris", logo: CHRIS_logo})
          }
        />
        <PlayersInfoCard
          name={"Vswed"}
          logo={VSWED_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Vswed", logo: VSWED_logo})
          }
        />
        <PlayersInfoCard
          name={"Bushy"}
          logo={BUSHY_logo}
          setActivePlayer={() =>
            setActivePlayer({ name: "Bushy", logo: BUSHY_logo})
          }
        />
      </div>
    </div>
  );
};

export default Home;
