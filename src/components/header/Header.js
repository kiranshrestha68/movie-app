import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="left__header"> <Link to="/" className="link">MovieApp</Link></div>

      <div className="middle__header">
     
        <Link to="/favourites">
          {" "}
          <FavoriteIcon/>{" "}
        </Link>
        
      </div>

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
