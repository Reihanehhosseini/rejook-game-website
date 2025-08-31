import React from "react";
import { useEffect } from "react";
import "./PosterGames.css";
import PosterCard from "./PosterCard";
import Button from "../Button/Button";
import Titr from "../Titr/Titr";
import AOS from "aos";

export default function PosterGames() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="posterGames" data-aos="fade-up">
      <div className="posterGames-title">
        <Titr titr="Top Old Games" />
        <Button title="See More" href={"/OldGames"} />
      </div>
      <PosterCard />
    </div>
  );
}
