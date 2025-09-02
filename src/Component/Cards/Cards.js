import React, { useState } from "react";
import "./Cards.css";
import Button from "../Button/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function Cards({
  video,
  img,
  name,
  genre,
  rate,
  href,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <video controls loading="lazy">
        <source type="video/mp4" src={video} />
      </video>
      <Card.Body>
        <div className="card-body-left">
          <Card.Img variant="top" src={img} />
          <div className="card-desc">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span>
                {rate}
                <MdOutlineStarPurple500 />
              </span>
              <span>{genre}</span>
            </Card.Text>
          </div>
        </div>
        <div className="card-body-btn">
          <Button title="See more" href={href} />
        </div>
      </Card.Body>
    </Card>
  );
}
