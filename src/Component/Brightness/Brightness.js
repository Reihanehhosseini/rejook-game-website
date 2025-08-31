import React, { useEffect } from "react";
import "./Brightness.css";
import { MdBrightness2 } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { useState } from "react";

export default function Brightness({ title }) {
  const [brightness, setBrightness] = useState(true);

    useEffect(() => {
      const root = document.documentElement;

      if (!brightness) {
        root.classList.add("dark-theme");
      } else {
        root.classList.remove("dark-theme");
      }
    }, [brightness]);

  return (
    <div
      className="btnHeader-icons brightness-icon"
      onClick={() => {
        setBrightness((prev) => !prev);
      }}
    >
      {brightness ? <MdBrightness2 /> : <BsFillBrightnessHighFill />}
      {title && <span className="brightnes-span">{title}</span>}
    </div>
  );
}
