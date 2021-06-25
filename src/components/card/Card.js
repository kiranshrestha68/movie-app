import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg"
        alt=""
        className="photos"
      />
      <div className="title">
        Loki
      </div>
      <div className="category">
        <div className="time-date">
          <span className="date"> 2021</span>
          <span> 50min </span>
        </div>

        <div className="cat__type">
           Series
        </div>
      </div>
      <div className="desc">
             Sit id ut velit exercitation occaecat esse eiusmod aute commodo irure id
        elit sunt.
      </div>
    </div>
  );
};

export default Card;
