import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./card.css";
import axios from "axios";
import { getMovies } from "../../redux/action/productaction";

const Card = () => {
  const movies = useSelector((state) => state.allmovies.movies);
  const dispatch = useDispatch();

  const fetchmovies = async () => {
    const res = await axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=aedb786bf1632adab2d897e9149fb89e"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(getMovies(res.data));
    console.log(res);
  };

  useEffect(() => {
    fetchmovies();
  });

  return (
    <div className="card_main">
      {/* {movies?.map((m) => ( */}
      <div className="card">
        <div className="photos">
          <img src={movies.poster_path} alt="" />
        </div>
        <div className="card_infos">
          <div className="title">{movies.original_title}</div>
          <div className="category">
            <div className="time-date">
              <span className="date"> {movies.release_date}</span>
            </div>

            <div className="time-date">
              <span> {movies.runtime}min </span>
            </div>

            <div className="cat__type">serires</div>
          </div>
          <div className="desc">{movies.overview}</div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Card;
