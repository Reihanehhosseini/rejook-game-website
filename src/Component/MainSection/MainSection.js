import React, { useEffect } from "react";
import "./MainSection.css";
import Button from "../Button/Button";
import Titr from "../Titr/Titr";
import AOS from "aos";
import "aos/dist/aos.css";


export default function MainSection() {
    useEffect(() => {
      AOS.init({ duration: 1000 , loop:true });
    }, []);
  
  return (
    <div className="MainSection">
      <div className="overaly">
        <div className="MainSection-left" data-aos="fade-up">
          <Titr titr="Fun Games Mobile Games"/>
          <h3>discover mobile games with REJOOKGAME</h3>
          <br />
          <Button title="Browse Games"/>
        </div>
        <img className="mainsection-img" src="./img/Games/Amoung_US2.png" alt="" data-aos="fade-up"/>
      </div>
    </div>
  );
}
