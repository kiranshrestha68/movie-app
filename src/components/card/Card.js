import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./card.css";
import axios from "axios";
import {
  getMovies,
  favourites,
  viewdetail,
} from "../../redux/action/productaction";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import {Link } from "react-router-dom";

const Card = () => {

  // const [show, setShow] = useState(true);

  const movies = useSelector((state) => state.allmovies.movies);
  const fav = useSelector((state) => state.allmovies.favourites);
const favid = fav.map((fav) => fav.id)
console.log(favid)
  // const movies = useSelector((state) => state.allmovies.movies);

  const dispatch = useDispatch();

  const fetchmovies = async () => {
    const res = await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=aedb786bf1632adab2d897e9149fb89e"
      )
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(getMovies(res.data.results));
    console.log(res.data.results);
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  // const addtofavourite = (id) => {
  //   dispatch(favourites(id));
  // };

  const gotoviewdetail = (is) => {
    dispatch(viewdetail(is));
  };

  const gotofavourites = (m) => {
  
   
    dispatch(favourites(m));
    fetchmovies();
  };

  // const diffTost = () => {
  //   toast.success("Added to favourite", {
  //     position: "top-center",
  //     autoClose: 1000,
  //     hideProgressBar: true,
  //     pauseOnHover: false,
  //   });
  // };

  return (
    <div className="card_main">
      {/* {movies.slice(0,4).map((m) => ( */}
      {movies
        .filter((film) => film.original_language !== "hi")
        .map((m) => (
          <div className="card" key={m.id}>
            <div className="photos">
              <img src={getImage(m.poster_path)} alt="" />
            </div>
            <div className="card_infos">
              <div className="titles">
                {m.original_title} <hr />
              </div>
              <div className="category">
                <div className="time-date">
                  <span className="date"> {m.release_date}</span>
                </div>

                <div className="time-date">
                  {m.adult === false ? <p> family show</p> : <p> adult </p>}
                </div>

                <div onClick={() => gotoviewdetail(m)} className="cat__type">
                <Link className="link" to={`view-detail/${m.id}`}>
                View Detail
                </Link>
                 
                </div>
              </div>
             
              <div>
                {m.genre_ids.map((kiran) => (
                  /* console.log(kiran); */
                  <div> {kiran} </div>
                ))}
              </div>
              <hr />
              {favid.includes(m.id) ?
                <button  onClick={(e) => gotofavourites(m)} className="Button__favourite">
                 Added to fav
              </button>
              :
              <button onClick={(e) => gotofavourites(m)}  className="Button__favourite">
              Add to fav
           </button>
              }
              {/* <ToastContainer /> */}
              <div className="desc">{m.overview}</div>
            </div>  
          </div>
        ))}
    </div>
  );
};

export default Card;
