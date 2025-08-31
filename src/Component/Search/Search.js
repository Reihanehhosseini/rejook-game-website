import React, { useContext } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { RejookContext } from "../../Context";

export default function Search() {
  const dataContext = useContext(RejookContext);

  return (
    <div className="searching-item">
      <ul>
        {dataContext.findGame && dataContext.findGame.length > 0 ? (
          dataContext.findGame?.map((item) => (
            <li key={item.id} className="search-li search-found">
              <img src={item.img} alt="" width={30} height={30} />
              <Link
                to={`/${item.genre.split(".")[0].trim()}/${item.id}`}
                onClick={() => dataContext.setSearchValue("")}
              >
                {item.name}
              </Link>
            </li>
          ))
        ) : (
          <li className="search-li search-not-found">Not Found ...</li>
        )}
      </ul>
    </div>
  );
}
{
}
