import React, { useContext, useState, useEffect } from "react";
import "./PlayGame.css";
import Titr from "../Titr/Titr";
import { RejookContext } from "../../Context";
import { useParams } from "react-router-dom";
import AOS from "aos";
import DownloadComponent from "../DownloadComponent/DownloadComponent";

export default function PlayGame() {
  const dataContext = useContext(RejookContext);
  const [selectOldGame, setSelectOldGame] = useState(null);
  let params = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (dataContext.allGames && params.id) {
      const oldGame = dataContext.popularGamesArray.find(
        (game) => game.id == parseInt(params.id)
      );
      setSelectOldGame(oldGame);
    }
  }, [dataContext.allGames, params.id]);
  console.log(selectOldGame);

  return (
    <div className="PlayGame">
      <div className="playgame-icon">
        <img src={selectOldGame?.icon} />
      </div>
      <div className="PlayGameHeader">
        <div className="playgame-title">
          <Titr titr={selectOldGame?.name} />
        </div>
        <div className="playGame-Bg">
          <video autoPlay controls loop src={selectOldGame?.video}>
            <source src={selectOldGame?.video} />
          </video>
        </div>
      </div>
      <div className="PlayGame-fact" data-aos="fade-up">
        <Titr titr="FACT" />
        <p>{selectOldGame?.fact}</p>
      </div>
      <DownloadComponent
        img={selectOldGame?.img[1]}
        name={selectOldGame?.name}
        desc={selectOldGame?.desc}
        AppStore={selectOldGame?.AppStore}
        GooglePlay={selectOldGame?.GooglePlay}
        Amazon={selectOldGame?.Amazon}
      />
    </div>
  );
}
