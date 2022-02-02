import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://i.pinimg.com/564x/d6/61/9f/d6619ff5fe907f827b488f9e4deea313.jpg"
      />
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

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionlinetwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
