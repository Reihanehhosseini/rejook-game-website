import React from "react";
import "./TournamentAddress.css";
import TournamentBox from "./TournamentBox";

export default function TournamentAddress() {
  return (
    <div className="TournamentAddress" data-aos="fade-up">
      <div className="TournamentAddress-bg">
        <div className="Tournaments-boxes">
          <TournamentBox
            icon="img/Events/location.png"
            title="Location"
            desc="Dubai World Trade Center"
            width={60}
          />
          <TournamentBox
            icon="img/Events/Date.png"
            title="Date"
            desc="29 July 2025"
            width={60}
          />
          <TournamentBox
            icon="img/Events/ticket.png"
            title="Entry"
            desc="50$"
            width={70}
          />
        </div>
        <div className="ticket">
          <img className="ticket-img" src="img/Events/dubai5.png" alt="" width={300} />
        </div>
      </div>
    </div>
  );
}
