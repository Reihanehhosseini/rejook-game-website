import React from "react";
import "./IconMenuBar.css";
import { Link } from "react-router-dom";

export default function IconMenuBar({ icons, title }) {
  return (
    <div className="IconMenuBar">
      <Link to={`/${title}`}>{icons}</Link>
      <span className="IconMenuBar-title">{title}</span>
    </div>
  );
}
