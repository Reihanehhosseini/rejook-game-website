import React from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import "./Stars.css"
export default function Stars({rate}) {

  return (
    <div className="stars">
      <h3>{rate}</h3>
      <Rating
      initialRating={rate}
      emptySymbol={<FaStar color="#949597"/>}
      fullSymbol={<FaStar color="#fe6404"/>
      }
      />
    </div>
  );
}
