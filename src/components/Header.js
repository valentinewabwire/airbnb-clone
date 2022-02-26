import {
  ExpandMore,
  LanguageOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://press.airbnb.com/wp-content/uploads/sites/4/2017/01/airbnb_vertical_lockup_web.png?fit=2096,1048"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" name="" id="" />
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
