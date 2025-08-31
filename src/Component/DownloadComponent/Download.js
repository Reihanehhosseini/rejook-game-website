import React from "react";
import "./Download.css";
import { FaApple } from "react-icons/fa6";

export default function Download({ svg , href}) {
  return (
    <div className="Download">
      <a href={href} target="_blank">{svg}</a>
    </div>
  );
}
