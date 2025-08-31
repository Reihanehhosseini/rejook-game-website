import React, { useContext } from "react";
import "./ProTips.css";
import ProCard from "./ProCard";
import { RejookContext } from "../../Context";

export default function ProTips() {
  const dataContext = useContext(RejookContext);

  return (
    <div className="ProTips">
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content marquee1 up">
            <ProCard {...dataContext.allTips[0]} />
            <ProCard {...dataContext.allTips[1]} />
            <ProCard {...dataContext.allTips[2]} />
            <ProCard {...dataContext.allTips[3]} />
            <ProCard {...dataContext.allTips[12]} />
            <ProCard {...dataContext.allTips[4]} />
            <ProCard {...dataContext.allTips[5]} />
            <ProCard {...dataContext.allTips[6]} />
            <ProCard {...dataContext.allTips[7]} />
            <ProCard {...dataContext.allTips[8]} />
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-content marquee2 down">
            <ProCard {...dataContext.allTips[9]} />
            <ProCard {...dataContext.allTips[10]} />
            <ProCard {...dataContext.allTips[11]} />
            <ProCard {...dataContext.allTips[12]} />
            <ProCard {...dataContext.allTips[0]} />
            <ProCard {...dataContext.allTips[1]} />
            <ProCard {...dataContext.allTips[2]} />
            <ProCard {...dataContext.allTips[3]} />
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-content marquee3 up">
            <ProCard {...dataContext.allTips[4]} />
            <ProCard {...dataContext.allTips[5]} />
            <ProCard {...dataContext.allTips[6]} />
            <ProCard {...dataContext.allTips[7]} />
            <ProCard {...dataContext.allTips[8]} />
            <ProCard {...dataContext.allTips[9]} />
            <ProCard {...dataContext.allTips[10]} />
            <ProCard {...dataContext.allTips[11]} />
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-content marquee4 down">
          <ProCard {...dataContext.allTips[0]} />
            <ProCard {...dataContext.allTips[1]} />
            <ProCard {...dataContext.allTips[2]} />
            <ProCard {...dataContext.allTips[3]} />
            <ProCard {...dataContext.allTips[12]} />
            <ProCard {...dataContext.allTips[0]} />
            <ProCard {...dataContext.allTips[1]} />
            <ProCard {...dataContext.allTips[2]} />
            <ProCard {...dataContext.allTips[3]} />
            <ProCard {...dataContext.allTips[12]} />
          </div>
        </div>
      </div>
    </div>
  );
}
