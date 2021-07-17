import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="left__header">
        {" "}
        <NavLink to="/" className="link__header">
          MovieApp
        </NavLink>
      </div>

      <div className="middle__header">
        <div className="middle__header__list">
          <div className="home__heder ">
            <NavLink
              to="/"
              exact
              activeClassName="menu_active"
              className="link__header"
            >
              HOME
            </NavLink>
          </div>
          <div className="trending link__header">TRENDING</div>
          <div className="genre link__header">GENRE</div>

          <div className="favourites">
            {" "}
            <NavLink
              activeClassName="menu_active"
              className="link__header"
              to="/favourites"
            >
              {" "}
              FAVOURITE
              <FavoriteIcon />{" "}
            </NavLink>
          </div>
          <div className="my__list link__header">MY LIST</div>
        </div>
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
