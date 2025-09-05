import React from "react";
import "./Comment.css";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

export default function Comment({
  name,
  date,
  comment,
  helpfull,
  likeHandler,
  dislikeHandler,
  isClickedLike,
  isClickedDisLike,
}) {


  return (
    <div className="comment">
      <div className="comment-user">
        <span className="first-letter flex-center">{name?.[0]}</span>
        <span className="user-name">{name}</span>
      </div>
      <div>
        <div className="user-date">
          <Rating
            initialRating={5}
            emptySymbol={<FaStar color="#949597" />}
            fullSymbol={<FaStar color="#4FFF8D" />}
          />
          <span>{date}</span>
        </div>
      </div>
      <div className="user-comment">{comment}</div>
      <div className="user-helpfull">
        <span>{helpfull}</span>
        <span>people found this review helpful :)</span>
      </div>
      <div className="user-opinion">
        <span>did you find this helpfull?</span>
        <button
          className="flex-center"
          onClick={likeHandler}
          disabled={isClickedLike}
        >
          <BiLike />
        </button>
        <button
          className="flex-center"
          onClick={dislikeHandler}
          disabled={isClickedDisLike}
        >
          <BiDislike />
        </button>
      </div>
    </div>
  );
}
