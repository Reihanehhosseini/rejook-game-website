import React from "react";
import "./Footer.css";
import FooterComponent from "../FooterComponent/FooterComponent";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function Footer() {
  const tips = [
    "Every pro was once a noob - keep playing",
    "Dont just tap fast - tap smart",
    "Use Headphones - sound gives you clues.",
    "When you fail, its just XP in disguise",
    "Save power-ups for tough levels.",
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="Footer">
      <div className="overaly overaly-footer">
        <FooterComponent img={true} title="REJOOKGAME">
          <p>
            RejookGame is your go-to hub for discovering and enjoying the best
            mobile games.
          </p>
        </FooterComponent>
        <FooterComponent>
          <p>{randomTip}</p>
          <div className="footer-input">
            <input type="text" placeholder="Email Address" />
            <div className="footer-icon">
              <PiTelegramLogoLight />
            </div>
          </div>
        </FooterComponent>
      </div>
    </div>
  );
}
