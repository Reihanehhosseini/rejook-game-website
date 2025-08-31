import React, { useEffect, useState } from "react";
import "./Action.css";
import Cards from "../../Component/Cards/Cards";
import { useContext } from "react";
import Titr from "../../Component/Titr/Titr";
import BreadCrumb from "../../Component/BreadCrumb/BreadCrumb";
import { AiTwotoneHome } from "react-icons/ai";
import { RejookContext } from "../../Context";
import { useLocation, useParams } from "react-router-dom";

export default function Action() {
  const dataContext = useContext(RejookContext);

  let location = useLocation();
  let locationGenre = location.pathname.slice(1);

  return (
    <div className="Action">
      <div className="Action-header">
        {locationGenre === "Game" ? (
          <Titr titr={`All ${locationGenre}s`}/>
        ):(
          <Titr titr={`All ${locationGenre} Games`} />
        )}
        <BreadCrumb
          Links={[
            { id: 1, title: <AiTwotoneHome />, to: "/" },
            { id: 2, title: `${locationGenre}`, to: `/${locationGenre}` },
          ]}
        />
      </div>
      <div className="Action-list">
        {locationGenre === "Game"
          ? (
            dataContext.allGames.map((card)=> (
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
            ))
          )
          : dataContext.allGames
              .filter((item) => item.genre.startsWith(locationGenre))
              .map((card) => (
                <Cards
                  key={card.id}
                  video={card.video}
                  img={card.img}
                  name={card.name}
                  desc={card.desc}
                  genre={card.genre}
                  rate={card.rate}
                  href={`/${locationGenre}/${card.id}`}
                />
              ))}
      </div>
    </div>
  );
}
