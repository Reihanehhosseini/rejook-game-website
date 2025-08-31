import React from "react";
import "./MobileIconMenuBar.css";
import { Link } from "react-router-dom";

export default function MobileIconMenuBar({ title, icons }) {
  return (
    <Link to={`/${title}`} className="MobileIconMenuBar">
      <span>{icons}</span>
      <span className="IconMenuBar-title">{title}</span>
    </Link>
  );
}
