import React from "react";
import "./TournamentBox.css";

export default function TournamentBox({ icon, title, desc, width }) {
  return (
    <div className="TournamentBox">
      <img src={icon} alt="" width={width} />
      <span>{title} :</span>
      <span>{desc}</span>
    </div>
  );
}
