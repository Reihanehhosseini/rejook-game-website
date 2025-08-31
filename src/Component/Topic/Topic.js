import React from "react";
import "./Topic.css";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Topic({ topic , children}) {
  return (
    <div className="gamesPage-about-header">
      <div className="topic">
        <h2>{topic}</h2>
        <IoMdArrowRoundForward />
      </div>
      <div className="gamesPage-about-section">
        {children}
      </div>
    </div>
  );
}
