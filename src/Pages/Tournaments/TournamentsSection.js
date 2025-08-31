import React from "react";
import "./TournamentsSection.css";

export default function TournamentsSection() {
  return (
    <div className="Tournaments-section">
      <div className="Tournaments-section-term">
        <div className="term-top flex-center">
          <img src="img/Events/Tournaments1.png" alt="" width={80} />
          <span>TOURNAMENTS TERMS</span>
        </div>
        <div className="term">
            <ul>
                <li>Participants must be 16 years or older</li>
                <li>Only Mobile Phones are allowed</li>
                <li>Players Must be register online before the deadline</li>
                <li>Players must be show sportsmanship and respect to opponents</li>
                <li>Any form of cheating, hacks, or third-party software will result in instant disqualification</li>
            </ul>
        </div>
      </div>
      <div className="Tournaments-img">
        <img src="./img/Events/dubai10.png" alt="" width={450} />
      </div>
      <div className="Tournaments-section-bg"></div>
    </div>
  );
}
