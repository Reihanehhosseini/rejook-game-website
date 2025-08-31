import "./Header.css";
import React, { useEffect, useState } from "react";
import IconHeader from "../IconHeader/IconHeader";
import { FcSearch } from "react-icons/fc";
import Brightness from "../Brightness/Brightness";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import MobileIconMenuBar from "../IconMenuBar/MobileIconMenuBar";
import { FaGun } from "react-icons/fa6";
import { PiPuzzlePieceDuotone } from "react-icons/pi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { TbPlayCardJFilled } from "react-icons/tb";
import { TbMoodKidFilled } from "react-icons/tb";
import { PiBrainDuotone } from "react-icons/pi";
import { AiTwotoneHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RejookContext } from "../../Context";
import Search from "../Search/Search";

export default function Header() {
  const dataContext = useContext(RejookContext);

  const humbergerFunc = () => {
    dataContext.setHumbergerMenuShow(true);
    dataContext.setShowPortal(true);
  };

  useEffect(() => {
    if (dataContext.allGames && dataContext.searchValue) {
      const filterGames = dataContext.allGames.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(dataContext.searchValue.toLowerCase());
      });
      dataContext.setFindGame(filterGames);
    } else {
      dataContext.setFindGame([]);
    }
  }, [dataContext.searchValue, dataContext.allGames]);
  console.log(dataContext.findGame);

  return (
    <div className="Header">
      <div className="humbergerMenu btnHeader-icons">
        <div className="humbergerMenuIcon" onClick={humbergerFunc}>
          <IoMdMenu />
        </div>
        <div
          className={`mobileMenuBar ${
            !dataContext.humbergerMenuShow ? "displayNone" : ""
          }`}
        >
          <div className="inputMobileMenubar">
            <div
              className={`inputHeader-looking ${
                dataContext.searchValue ? "border-search" : "all-border"
              }`}
            >
              <FcSearch />
              <input
                type="text"
                placeholder="search..."
                value={dataContext.searchValue}
                onChange={(event) =>
                  dataContext.setSearchValue(event.target.value)
                }
              />
            </div>
            {dataContext.searchValue && <Search />}
          </div>
          <hr />
          <div className="mobileMenuBarBtn">
            <IconHeader
              href={"https://www.instagram.com/rejookgame"}
              icon={<FaInstagram />}
              title="Instagram"
            />
            <IconHeader
              href={"https://github.com/Reihanehhosseini"}
              icon={<FaGithub />}
              title="Git"
            />
            <IconHeader
              href={"https://www.linkedin.com/in/reihanehhs"}
              icon={<FiLinkedin />}
              title="Linkdin"
            />
          </div>
          <hr />
          <div className="mobileMenuBarGenre">
            <MobileIconMenuBar icons={<AiTwotoneHome />} title="Home" />
            <MobileIconMenuBar icons={<FaGun />} title="Action" />
            <MobileIconMenuBar
              icons={<PiPuzzlePieceDuotone />}
              title="Puzzle"
            />
            <MobileIconMenuBar
              icons={<MdOutlineSportsSoccer />}
              title="Sport"
            />
            <MobileIconMenuBar icons={<TbPlayCardJFilled />} title="Card" />
            <MobileIconMenuBar icons={<TbMoodKidFilled />} title="Kids" />
            <MobileIconMenuBar icons={<PiBrainDuotone />} title="Brain" />
          </div>
          <hr />
          <Brightness title="Theme" />
        </div>
      </div>
      <div className="LogoHeader">
        <img src="/img/REJOOK-.png" className="logo" />
        <span>Rejook</span>
      </div>
      <div className="inputHeader">
        <div
          className={`inputHeader-looking ${
            dataContext.searchValue ? "border-search" : "all-border"
          }`}
        >
          <FcSearch />
          <input
            type="text"
            placeholder="what are u looking for?"
            value={dataContext.searchValue}
            onChange={(event) => dataContext.setSearchValue(event.target.value)}
          />
        </div>
        {dataContext.searchValue && <Search />}
      </div>
      <div className="btnHeader">
        <Brightness />
        <IconHeader
          href={"https://www.instagram.com/rejookgame"}
          icon={<FaInstagram />}
        />
        <IconHeader
          href={"https://github.com/Reihanehhosseini"}
          icon={<FaGithub />}
        />
        <IconHeader
          href={"https://linkedin.com/in/reihanehhs"}
          icon={<FiLinkedin />}
        />
      </div>
    </div>
  );
}
