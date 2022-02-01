import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/*logo*/}
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineone">hello guest</span>
          <span className="header_optionlinetwo">sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">returns</span>
          <span className="header_optionlinetwo">order</span>
        </div>
      </div>
    </div>
  );
}
