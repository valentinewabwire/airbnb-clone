import { Avatar } from "@material-ui/core";
import { LanguageOutlined, SearchOutlined } from "@material-ui/icons";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />
      <div className="header__center">
        <input type="text" />
        <SearchOutlined />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageOutlined />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
