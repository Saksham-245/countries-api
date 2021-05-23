import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.source} className="card-img-top" alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.country}</h4>
        <div className="card-detail">
          <p className="card-text">
            Population: {props.population.toLocaleString("en-US")}
          </p>
          <p className="card-text">Region: {props.region}</p>
          <p className="card-text">Capital: {props.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
