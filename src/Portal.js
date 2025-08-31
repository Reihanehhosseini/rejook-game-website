import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useContext } from "react";
import { RejookContext } from "./Context";

export default function Portal() {
  const dataContext = useContext(RejookContext);

  const humbergerFunc = () => {
    dataContext.setHumbergerMenuShow(false);
    dataContext.setShowPortal(false)
  };

  return ReactDOM.createPortal(
    <div
      className={dataContext.showPortal ? "portal" : ""}
      onClick={humbergerFunc}
    ></div>,
    document.getElementById("portal-test")
  );
}
