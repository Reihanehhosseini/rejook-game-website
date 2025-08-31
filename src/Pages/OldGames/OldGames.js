import React, { useContext } from "react";
import "./OldGames.css";
import Titr from "../../Component/Titr/Titr";
import OldGameGrid from "../../Component/OldGameGrid/OldGameGrid";
import Company from "../../Component/Company/Company";
import { RejookContext } from "../../Context";
import CardsOldGame from "../../Component/Cards/CardsOldGame";

export default function OldGames() {
  const dataContext = useContext(RejookContext)

  return (
    <div className="OldGames">
      <div className="oldgamesheader">
        <Titr titr="Top Old Games" />
        <OldGameGrid />
        <h4>A trip down memory lane with the best old games</h4>
      </div>
      <Company />
      <div className="OldGames-intro">
        {dataContext.popularGamesArray.map(item => (
          <CardsOldGame img={item.img[1]} name={item.name} fact={item.fact} year={item.year} id={item.id}/>
        ))}
      </div>
    </div>
  );
}
