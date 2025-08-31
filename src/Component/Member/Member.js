import React from "react";
import "./Member.css";

export default function Member({ img, surname, characteristics }) {
  
  return (
    <div className="Member">
      <div className="member-img">
        <img src={img} alt="" />
      </div>
      <div className="member-profile">
        <h3>{surname}</h3>
        <div className="profile">
            <div>
              <span>NAME:</span>
              <span>{characteristics.name}</span>
            </div>
            <div>
              <span>GENDER:</span>
              <span>{characteristics.gender}</span>
            </div>
            <div>
              <span>COUNTRY:</span>
              <span>{characteristics.country}</span>
            </div>
            <div>
              <span>AGE:</span>
              <span>{characteristics.age}</span>
            </div>
        </div>
      </div>
    </div>
  );
}
