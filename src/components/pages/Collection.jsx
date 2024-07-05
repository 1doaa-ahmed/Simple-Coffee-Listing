import React from "react";
import "../styles/Collection.css";
import Menu from "./CoffeeMenu";
import icon from "../../images/vector.svg";
function Collection() {
  return (
    <div className="collection-container d-flex flex-column bd-highlight mb-3">
      <h1 className="collection-title p-2 bd-highlight">Our Collection</h1>
      <p className="collection-description p-2 bd-highlight">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="options">
        <span className="option all-products">All Products</span>
      <img src={icon} className="vector" />
        <span className="option available">Available Now</span>
      </div>
      <Menu />
    </div>
  );
}

export default Collection;
