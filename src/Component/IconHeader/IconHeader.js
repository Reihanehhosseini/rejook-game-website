import React from "react";
import "./IconHeader.css";

export default function IconHeader({ href, icon, classNames, title }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`btnHeader-icons ${classNames}`}>
      {icon}

      {title && <span>{title}</span>}
    </a>
  );
}
