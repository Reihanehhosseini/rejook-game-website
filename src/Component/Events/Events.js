import React, { useEffect } from "react";
import "./Events.css";
import EventsBox from "../EventsBox/EventsBox";
import { AiTwotoneStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 100000, once: false });
  }, []);

  return (
    <div className="Events" data-aos="fade-up">
      <div className="Events-star">
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
      </div>
      <EventsBox
        title="Upcoming Tournaments You Can Join"
        img="img/Events/Untitled.png"
        date="July 29 , 2025"
        desc={`Mark Your Calender!The ultimate mobile at Dubai , Where fun,
          Competition, and the latest in mobile gaming come together!`}
        event="Tournaments"
        href="/Tournaments"
      />
      <EventsBox
        title="Prefect your Gameplay with these tips"
        img="img/Events/02.png"
        desc={`Whether you are dodging spikes, crushing candies, or bluffing in poker 
            this pro tips will help you play smarter, react faster, and win bigger`}
        event="ProTips"
        href="/ProTips"
      />
    </div>
  );
}
