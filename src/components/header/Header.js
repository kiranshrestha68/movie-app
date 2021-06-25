import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="left__header">MovieApp</div>
      <div className="right__header">
        <div className="search__input">
          <input />
        </div>

        <div className="search">
          {" "}
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
