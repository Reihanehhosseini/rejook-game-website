import React, { useState , useEffect } from "react";
import "./TeamMember.css";
import Titr from "../Titr/Titr";
import Member from "../Member/Member";
import { membersTeam } from "../../data.s";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamMember() {
  useEffect(() => {
    AOS.init({ duration: 1000,
     });
  }, []);
  const [allPeople, setAllPeople] = useState(membersTeam);
  return (
    <div className="TeamMember" data-aos="fade-up">
      <div className="teamMember-header">
        <h3>OUR TEAM MEMBER</h3>
        <Titr titr="Active Team Members" />
        <span></span>
      </div>
      <div className="people-section">
        {allPeople.map((member) => (
          <Member
            key={member.id}
            img={member.img}
            surname={member.surname}
            characteristics={member.characteristics}
          />
        ))}
      </div>
    </div>
  );
}
