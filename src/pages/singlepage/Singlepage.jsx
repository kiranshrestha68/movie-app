import React from "react";
import "./singlepage.css";

const Singlepage = () => {
  return (
    <>
      <div className="singlePage">
        <div className="row">
          <div className="row__1">
            <div className="image__s">
              <img
                className="image"
                src="https://fmoviefree.net/images/tt9844522/poster.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row__2">
            <div className="title"> Escape Room: Tounament of Champions</div>
            <div className="category">
              <span className="quality">hd</span>
              <span className="time"> 80 min </span>
              <span className="rating"> Imdb : 9.1</span>
            </div>
            <div className="overview">
              Voluptate do aliquip elit nisi laboris sunt quis id reprehenderit
              aliqua deserunt culpa anim. Irure consequat adipisicing nostrud
              proident excepteur culpa labore nulla occaecat. Sunt non nulla est
              laboris pariatur sunt. Officia nostrud labore ad nostrud proident
              excepteur cillum qui deserunt dolore eiusmod aliquip proident
              voluptate. Ea dolor in laboris nisi pariatur cupidatat laboris
              esse elit.
            </div>

            <div className="movie__info">
              <div className="infos">
                {" "}
                Genre:{" "}
                <span className="infos__ans"> Action, Horror, Thriller</span>
              </div>
              <div className="infos">
                {" "}
                Release: <span className="infos__ans"> July 9, 2021 </span>
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
