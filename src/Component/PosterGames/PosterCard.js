import React, { useState , useContext } from "react";
import "./PosterCards.css";
import { RejookContext } from "../../Context";
import { Link } from "react-router-dom";

export default function PosterCard() {

  const dataContext = useContext(RejookContext);

  return (
    <div className="posterGames-pic">
      {dataContext.popularGamesArray.map((game) => (
        <Link to={`/OldGames/${game.id}`} key={game.id} className={`item item${game.id}`}>
          <img src={game.img[1]} alt="" />
          <div className="desc-pic">
            <h1 className="desc-pic-name">{game.name}</h1>
            <span className="desc-pic-desc">{game.desc}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
