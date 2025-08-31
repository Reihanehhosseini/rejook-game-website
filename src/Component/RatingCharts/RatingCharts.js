import React from "react";
import "./RatingCharts.css";

export default function RatingCharts({ num, rate }) {
  return (
    <div className="rating-item">
      <span>{num}</span>
      <div className="rating-row">
        <div className="rating-blue-row" style={{ width: `${rate}%`}}></div>
      </div>
    </div>
  );
}
