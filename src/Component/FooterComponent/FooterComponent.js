import React from "react";
import "./FooterComponent.css";

export default function FooterComponent({title, img, children }) {
  return (
    <div className="footerComponent">
      <div className="footer-title">
        {img && <img src="./img/REJOOK-.png" style={{ maxWidth: 60 }} alt="logo"/>}
        <span>{title}</span>
      </div>
      <div className="footer-desc">
        {children}
        </div>
    </div>
  );
}
