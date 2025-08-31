import React, { useContext } from "react";
import "./Company.css";
import { RejookContext } from "../../Context";
import Marquee from "react-fast-marquee";

export default function Company() {
  const dataContext = useContext(RejookContext);

  return (
    <div className="Company">
      <Marquee speed={150} gradient={false}>
        {dataContext.popularGamesArray.map((item) => (
          <>
            <div key={item.id} className="company-item">
              {item.company}
            </div>

          </>
        ))}
      </Marquee>
    </div>
  );
}
