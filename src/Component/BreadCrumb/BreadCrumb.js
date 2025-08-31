import React from "react";
import "./BreadCrumb.css";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export default function BreadCrumb({ Links }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {Links.map((link) => (
          <li key={link.id} className="breadcrumb-item">
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
