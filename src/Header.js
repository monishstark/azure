import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.pinimg.com/564x/d6/61/9f/d6619ff5fe907f827b488f9e4deea313.jpg"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineone">hello guest</span>
          <span className="header_optionlinetwo">sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Profile</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header_optionlinetwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
