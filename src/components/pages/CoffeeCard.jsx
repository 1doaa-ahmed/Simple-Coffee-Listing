import React from "react";
import starIconFill from "../../images/Star_fill.svg";
import starIcon from "../../images/Star.svg";
import "../styles/CoffeeCard.css";
function Coffee({coffee}) {
  return (
    <div className="coffee-container">
      <div className="coffeeImage-container">
        {coffee.popular && <span className="popular">popular</span> }
        <img variant="top" src={coffee.image} className="coffeeImage " alt={coffee.name}/>
      </div>
      <div className="coffee-information">
        <div className="coffee-text">
          <div className="coffee-name">{coffee.name}</div>
          <div className="coffee-price">{coffee.price}</div>
        </div>
        <div className="coffee-details">
          <div className="coffee-rating">
            <img className="starIcon"src={coffee.rating !== null ? starIconFill : starIcon} />
            {coffee.rating ? (
              <span>{coffee.rating}</span>
            ) : (
              <span>No ratings</span>
            )}
            {coffee.votes !== 0 && (
              <span className="votes">({coffee.votes} votes)</span>
            ) }
          </div>
          {coffee.available ? null : <span className="sold-out">sold out</span>}
        </div>
      </div>
    </div>
    
  );
}

export default Coffee;
