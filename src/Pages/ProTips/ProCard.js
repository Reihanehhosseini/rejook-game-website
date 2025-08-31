import React from "react";
import "./ProCard.css";

export default function ProCard({title , desc}) {
  return (
    <div className="ProCard">
      <div className="procard-logo">
        {/* <img src="/img/REJOOK-.png" alt="" width={55} /> */}
      </div>
      <div className="procard-title">
        <span>{title}</span>
      </div>
      <div className="procard-desc">
        <span>{desc}</span>
      </div>
    </div>
  );
}
