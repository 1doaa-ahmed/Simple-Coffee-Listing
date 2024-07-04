import React from "react";
import starIconFill from "../images/Star_fill.svg";
import starIcon from "../images/Star.svg";
import "./Coffee.css";
function Coffee({coffee}) {
  console.log(coffee);

  return (
    <div className="g-col-6 d-flex flex-column  coffee-container">
      <div className="p-2 bd-highlight ">
        {coffee.popular && <span className="popular">popular</span> }
        <img variant="top" src={coffee.image} className="coffeeImage " />
      </div>
      <div className="coffee-information d-flex flex-column">
        <div className="coffee-text d-flex justify-content-between">
          <div className="coffee-name">{coffee.name}</div>
          <div className="coffee-price">{coffee.price}</div>
        </div>
        <div className="bd-highlight d-flex justify-content-between coffee-details">
          <div className="coffee-rating">
            <img className="starIcon"src={coffee.rating !== null ? starIconFill : starIcon} />
            {coffee.rating ? (
              <span>{coffee.rating}</span>
            ) : (
              <span>No ratings</span>
            )}
            {coffee.votes != 0 && (
              <span className="votes">({coffee.votes} votes)</span>
            ) }
          </div>
          {coffee.available ? <span className="sold-out">sold out</span> : null}
        </div>
      </div>
    </div>
    
  );
}

export default Coffee;
