import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./bars.css";
import { Menu } from "../../context/Contextmenu";
import { Windowsize } from "../../context/WindowContext";

function Sidebar() {
  const menu = useContext(Menu);
  const isopen = menu.isopen;
  const WindowContext = useContext(Windowsize);
  const windowsize=WindowContext.windowsize
  return (
    <div
      className="side-bar pt-3"
      style={{
        left: windowsize < "769" ? (isopen ? 0 : "-100%") : 0,
        width: isopen ? "240px" : "100px",
      }}
    >
      <NavLink
        to={"users"}
        className="side-bar-link"
        style={{ height: isopen ? "50px" : "50px" }}
      >
        <FontAwesomeIcon icon={faUsers} />
        <p style={{ display: isopen ? "block" : "none" }}>users</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;
