import React from "react";
import "./Home.css";
import MainSection from "../../Component/MainSection/MainSection";
import SwiperHome from "../../Component/Swiper/SwiperHome";
import Events from "../../Component/Events/Events";
import PosterGames from "../../Component/PosterGames/PosterGames";
import ActionExample from "../../Component/ActionExample/ActionExample";
import TeamMember from "../../Component/TeamMember/TeamMember";
export default function Home() {
  return (
    <div className="Home">
      <MainSection />
      <ActionExample />
      <Events />
      <PosterGames />
      <SwiperHome />
      <TeamMember/>
    </div>
  );
}
