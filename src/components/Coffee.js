import React from "react";
import Card from "react-bootstrap/Card";
import starIconFill from "../images/Star_fill.svg";
import starIcon from "../images/Star.svg";
import "./Coffee.css";
function Coffee(props) {
  console.log(props.coffee);

  return (
    <div className="g-col-6 d-flex flex-column  coffee-container">
      <div className="p-2 bd-highlight ">
        {props.coffeePopular ? <span className="popular">popular</span> : " "}
        <img variant="top" src={props.coffeeImage} className="coffeeImage " />
      </div>
      <div className="coffee-information d-flex flex-column">
        <div className="coffee-text d-flex justify-content-between">
          <div className="coffee-name">{props.coffeeName}</div>
          <div className="coffee-price">{props.coffeePrice}</div>
        </div>
        <div className="bd-highlight d-flex justify-content-between coffee-details">
          <div className="coffee-rating">
            <img className="starIcon"src={props.coffeeRating !== null ? starIconFill : starIcon} />
            {props.coffeeRating ? (
              <span>{props.coffeeRating}</span>
            ) : (
              <span>No ratings</span>
            )}
            {props.coffeeVotes != 0 ? (
              <span className="votes">({props.coffeeVotes} votes)</span>
            ) : (
              " "
            )}
          </div>
          {props.coffeeAvailable ? " " : <span className="sold-out">sold out</span>}
        </div>
      </div>
    </div>
  );
}

export default Coffee;
