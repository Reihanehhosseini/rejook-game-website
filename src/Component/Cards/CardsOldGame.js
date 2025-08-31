import React from "react";
import "./CardsOldGame.css";
import Button from "../Button/Button";

export default function CardsOldGame({ img, name, fact, year , id}) {
  return (
    <div className="CardsOldGame">
      <div className="CardsOldGame-img">
        <img src={img} alt="" style={{ width: 90, height: 90 }} />
        <Button title="See More" href={`/OldGames/${id}`} />
      </div>
      <div className="CardsOldGame-center">
        <div className="CardsOldGame-name">
          <span>{name}</span>
          <span>{year}</span>
        </div>
        <div className="CardsOldGame-fact">
          <span>FACT : </span>
          <span>{fact}</span>
        </div>
      </div>
      <div className="last-btn">
        <Button title="See More" href={`/OldGames/${id}`} />
      </div>
    </div>
  );
}
