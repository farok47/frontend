import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Menu } from "../../context/Contextmenu";

function Topbar() {
  const menu=useContext(Menu)
  const setisopen=menu.setisopen

  return (
    <div className="top-bar">
      <h3>E-Commerce</h3>
      <FontAwesomeIcon onClick={()=>setisopen(prev=>!prev)  } icon={faBars} cursor={'pointer'} />
    </div>
  );
}

export default Topbar;
