import React from "react";
import "./GameSummery.css";


export default function GameSummery({title , desc , icon }) {
  return (
    <div className="GameSummery col border-end-custom">
      <span className="text-muted small">{title}</span>
      <span className="fw-small">{desc}</span>
      <span>{icon}</span>
    </div>
  );
}
