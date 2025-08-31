import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";


export default function Button({ title , href }) {

  return (
    <button className="btn-defualt">
      <Link to={href}>{title}</Link>
    </button>
  );
}
