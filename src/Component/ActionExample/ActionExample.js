import React, { useContext, useEffect, useState } from "react";
import "./ActionExample.css";
import Titr from "../Titr/Titr";
import Button from "../Button/Button";
import Cards from "../Cards/Cards";
import { RejookContext } from "../../Context";
import "aos/dist/aos.css";

export default function ActionExample() {
  let dataContext = useContext(RejookContext);
  const [randomActionsGames, setRandomActionsGames] = useState([]);

  useEffect(() => {
    const shuffled = [...dataContext.allGames].sort(() => 0.5 - Math.random());
    setRandomActionsGames(shuffled.slice(0, 3));

 
  }, [dataContext.allGames]);

  return (
    <div className="action-example">
      <div className="action-example-header">
        <Titr titr="Introduce Mobile Games" />
        <Button title="see more" href="/Game" />
      </div>
      <div className="action-example-cards">
        {randomActionsGames.map((card) => (
          <Cards
            key={card.id}
            video={card.video}
            img={card.img}
            name={card.name}
            desc={card.desc}
            genre={card.genre}
            rate={card.rate}
            href={`/${card.genre.split(".")[0].trim()}/${card.id}`}
          />
        ))}
      </div>
    </div>
  );
}
