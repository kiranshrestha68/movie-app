import React from "react";
import "./singlepage.css";
import { useSelector } from "react-redux";


const Singlepage = () => {


  const moviedetail = useSelector((state) => state.allmovies.moviedetail);
  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;


  return (
    <>
      <div className="singlePage">
        <div className="row">
          <div className="row__1">
            <div className="image__s">
              <img
                className="image"
                src={getImage(moviedetail.poster_path)}
                alt=""
              />
            </div>
          </div>
          <div className="row__2">
            <div className="title"> {moviedetail.title}</div>
            <div className="category">
              <span className="quality">hd</span>
              <span className="time"> 80 min </span>
              <span className="rating"> Imdb : {moviedetail.vote_average}</span>
            </div>
            <div className="overview">
           {moviedetail.overview}
            </div>

            <div className="movie__info">
              <div className="infos">
                {" "}
                Genre:{" "}
                <span className="infos__ans"> Action, Horror, Thriller</span>
              </div>
              <div className="infos">
                {" "}
                Release: <span className="infos__ans"> {moviedetail.release_date} </span>
              </div>
              <div className="infos">
                {" "}
                Director: <span className="infos__ans"> Adam chacha</span>
              </div>
              <div className="infos">
                Cast:{" "}
                <span className="infos__ans">
                  Avianah Abrashah, Carlito Liveroo, Holland Rodes, James
                  Feains, Jay Ecring, Loagan Miller
                </span>
              </div>
            </div>
            <button className="watch__now">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlepage;
