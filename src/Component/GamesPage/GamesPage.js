import React, { useCallback, useContext, useEffect, useState } from "react";
import GamesCard from "../GamesCard/GamesCard";
import "./Gamespage.css";
import { RejookContext } from "../../Context";
import { useLocation, useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Stars from "../Stars/Stars";
import RatingCharts from "../RatingCharts/RatingCharts";
import Comment from "../Comment/Comment";
import Topic from "../Topic/Topic";
import CommentArea from "../CommentArea/CommentArea";
import GameSummery from "../GameSummery/GameSummery";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GamesPage() {
  let dataContext = useContext(RejookContext);
  let params = useParams();

  const [selectGame, setSelectGame] = useState(null);
  const [comment, setComment] = useState(null);
  const [isClickedLike, setIsClickedLike] = useState(false);
  const [isClickedDisLike, setIsClickedDisLike] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (dataContext.allGames && params.id) {
      const game = dataContext.allGames.find(
        (game) => game.id == parseInt(params.id)
      );
      setSelectGame(game);
    }
  }, [dataContext.allGames, params.id]);

  const likeHandler = () => {
    setSelectGame((prevData) => ({
      ...prevData,
      commentsObj: {
        ...prevData.commentsObj,
        helpfull: prevData.commentsObj.helpfull + 1,
      },
    }));
    if (!isClickedLike && !isClickedDisLike) {
      setIsClickedLike(true);
    } else if (!isClickedLike && isClickedDisLike) {
      setIsClickedLike(true);
      setIsClickedDisLike(false);
    }
  };

  const dislikeHandler = () => {
    setSelectGame((prevData) => ({
      ...prevData,
      commentsObj: {
        ...prevData.commentsObj,
        helpfull: prevData.commentsObj.helpfull - 1,
      },
    }));
    if (!isClickedLike && !isClickedDisLike) {
      setIsClickedDisLike(true);
    } else if (!isClickedDisLike && isClickedLike) {
      setIsClickedDisLike(true);
      setIsClickedLike(false);
    }
  };

  return (
    <div className="GamesPage">
      <div
        className="GamesPage-bg"
        style={{ backgroundImage: `url('${selectGame?.bgimg}')` }}
      >
        <div className="gamesPage-overally">
          <BreadCrumb
            Links={[
              { id: 1, title: <AiTwotoneHome />, to: "/" },
              {
                id: 2,
                title: `${selectGame?.genre.split(".")[0].trim()}`,
                to: `/${selectGame?.genre.split(".")[0].trim()}`,
              },
              {
                id: 3,
                title: `${selectGame?.name}`,
                to: `/${selectGame?.genre.split(".")[0].trim()}/${
                  selectGame?.id
                }`,
              },
            ]}
          />
          <div className="gamesPage-left" data-aos="fade-up">
            <div className="gamesPage-left-header">
              <h1>{selectGame?.name}</h1>
              {/* <h3>Action</h3> */}
              <h5>{selectGame?.desc}</h5>
              <div className="gamesPage-rate">
                <span>
                  {selectGame?.rate}
                  <MdOutlineStarPurple500 />
                </span>
              </div>
              <span className="gamesPage-genre">{selectGame?.genre}</span>
            </div>
            <div className="gamesPage-about-video">
              <video src={selectGame?.video} autoPlay loop controls>
                <source src={selectGame?.video} />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="gamesPage-section">
        <div className="gamesPage-about" data-aos="fade-up">
          <Topic topic="About the Game">
            <p>{selectGame?.about}</p>
          </Topic>
          <Topic topic="Rating and Reviews">
            <div className="rate-reviews" data-aos="fade-up">
              <Stars rate={selectGame?.rate} />
              <div className="RatingCharts">
                {selectGame?.rating.map((row) => {
                  const key = Object.keys(row)[0];
                  const value = row[key];
                  return <RatingCharts key={key} num={key} rate={value} />;
                })}
              </div>
            </div>
          </Topic>
          <Comment
            name={selectGame?.commentsObj.name}
            date={selectGame?.commentsObj.date}
            comment={selectGame?.commentsObj.comment}
            helpfull={selectGame?.commentsObj.helpfull}
            likeHandler={likeHandler}
            dislikeHandler={dislikeHandler}
            isClickedLike={isClickedLike}
            isClickedDisLike={isClickedDisLike}
          />
          {dataContext.allComments
            .filter((comment) => comment.id === selectGame?.id)
            .map((comment) => (
              <Comment
                name={comment.name}
                date={comment.date}
                comment={comment.comment}
                helpfull={comment.helpfull}
              />
            ))}
          <CommentArea idGame={selectGame?.id} />
          <Topic topic="Summery">
            <div className="container my-4" data-aos="fade-up">
              <div className="platform row text-center rounded py-3">
                {selectGame?.summery.map((summery) => (
                  <GameSummery
                    title={summery.title}
                    icon={summery.icon}
                    desc={summery.desc}
                  />
                ))}
              </div>
            </div>
          </Topic>
        </div>
        <div className="gamesPage-left-card">
          <GamesCard img={selectGame?.imgcard[0]} />
          <GamesCard img={selectGame?.imgcard[1]} />
          <GamesCard img={selectGame?.imgcard[2]} />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="gamesPage-about-img">
          <img src={selectGame.img} alt="" />
        </div> */
}
