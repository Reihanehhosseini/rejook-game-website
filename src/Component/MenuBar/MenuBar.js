import React from "react";
import "./MenuBar.css";
import IconMenuBar from "../IconMenuBar/IconMenuBar";
import { FaGun } from "react-icons/fa6";
import { PiPuzzlePieceDuotone } from "react-icons/pi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { TbPlayCardJFilled } from "react-icons/tb";
import { TbMoodKidFilled } from "react-icons/tb";
import { PiBrainDuotone } from "react-icons/pi";
import { AiTwotoneHome } from "react-icons/ai";

export default function MenuBar() {
  return (
    <div className="MenuBar">
      <div className="inputMenuBar">
       <IconMenuBar icons={<AiTwotoneHome />} title="Home"/>
       <IconMenuBar icons={<FaGun />} title="Action"/>
       <IconMenuBar icons={<PiPuzzlePieceDuotone />}  title="Puzzle"/>
       <IconMenuBar icons={<MdOutlineSportsSoccer />} title="Sport"/>
       <IconMenuBar icons={<TbPlayCardJFilled />} title="Card"/>
       <IconMenuBar icons={<TbMoodKidFilled />} title="Kids"/>
       <IconMenuBar icons={<PiBrainDuotone />} title="Brain"/>
      </div>
    </div>
  );
}
