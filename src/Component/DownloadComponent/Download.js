import React from "react";
import "./Download.css";

export default function Download({ svg , href}) {
  return (
    <div className="Download">
      <a href={href} target="_blank" rel="noreferrer">{svg}</a>
    </div>
  );
}
