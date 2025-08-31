import React from "react";
import "./EventsBox.css";
import Button from "../Button/Button";

export default function EventsBox({ img, date, desc, event, title , href}) {
  return (
    <div className="EventsBox">
      <div className="Events-img">
        <img src={img} />
      </div>
      <div className="EventsData">
        <div className="Events-date">
          <Button title={event} href={href}/>
          <span>{date}</span>
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
