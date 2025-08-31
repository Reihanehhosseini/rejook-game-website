import React from "react";
import "./Section.css";
import MenuBar from "../MenuBar/MenuBar";
import routes from "../../routes";
import { useRoutes } from "react-router-dom";
import ScrollTop from "../../ScrollTop";

export default function Section() {
  let router = useRoutes(routes);

  return (
    <div className="Section">
      <MenuBar />
      <ScrollTop/>
      {router}
    </div>
  );
}
