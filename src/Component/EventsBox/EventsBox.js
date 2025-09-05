import React from "react";
import "./EventsBox.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function EventsBox({ img, date, desc, event, title , href}) {
  return (
    <div className="EventsBox">
      <Link to={href} className="Events-img">
        <img src={img} alt="img-desc"/>
      </Link>
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
