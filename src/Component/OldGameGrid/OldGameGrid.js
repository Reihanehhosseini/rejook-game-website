import React, { useContext } from "react";
import "./OldGameGrid.css";
import { RejookContext } from "../../Context";

export default function OldGameGrid() {
  const dataContext = useContext(RejookContext);

  return (
    <div class="OldGameGrid">
      {dataContext.popularGamesArray.map((item) => (
        <div key={item.id} className={`oldGameGridItem grid${item.id}`}>
          <img
            className="oldGameGridImg"
            src={item.img[0]}
          />
        </div>
      ))}
    </div>
  );
}
