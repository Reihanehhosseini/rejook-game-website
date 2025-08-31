import React from "react";
import { useEffect } from "react";
import "./Tournaments.css";
import Titr from "../../Component/Titr/Titr";
import TournamentsSection from "./TournamentsSection";
import AOS from "aos";
import TournamentAddress from "./TournamentAddress";

export default function Tournaments() {
  useEffect(() => {
    AOS.init({ duration: 1000, loop: true });
  }, []);
  return (
    <div className="Tournaments">
      <div className="Tournaments-bg"></div>
      <div className="Tournaments-bg-top"></div>
      <div className="Tournaments-header">
        <div className="Tournaments-header-img">
          <img src="./img/Events/dubaipng2.png" alt="" width={600} height={400} />
        </div>
        <div className="Tournaments-header-title" data-aos="zoom-out">
          <Titr titr="BIGEST MOBILE GAME TOURNAMENT IN" />
          <Titr titr="DUBAI" />
        </div>
      </div>
      <TournamentsSection />
      <TournamentAddress/>
    </div>
  );
}
