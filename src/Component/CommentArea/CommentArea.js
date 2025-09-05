import React, { useContext, useEffect } from "react";
import "./CommentArea.css";
import "react-comments-section/dist/index.css";
import { RejookContext } from "../../Context";

export default function CommentArea({ idGame }) {
  let dataContext = useContext(RejookContext);

  useEffect(() => {
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    const dateString = `${currentMonth} ${currentDay} ${currentYear}`;
    dataContext.setDate(dateString);
  }, [dataContext]);

  const submitComments = (event) => {
    event.preventDefault();
    const newComment = {
      id: idGame,
      name: "unknown",
      date: dataContext.date,
      comment: dataContext.textArea,
      helpfull: 0,
    };
    dataContext.setAllComments((prev) => [...prev, newComment]);
    dataContext.setTextArea("");
  };

  return (
    <form
      className="form"
      onSubmit={submitComments}
      
    >
      <div className="emoji-input">
        <textarea
          className="postComment"
          placeholder="Type Your Comment"
          value={dataContext.textArea}
          onChange={(event) => dataContext.setTextArea(event.target.value)}
          autoComplete="off"
          data-lpignore="true"
        />
      </div>
      <button className="btn-defualt">Post</button>
    </form>
  );
}
