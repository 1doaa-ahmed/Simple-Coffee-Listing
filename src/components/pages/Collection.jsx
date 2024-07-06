import React, { useState } from "react";
import "../styles/Collection.css";
import CoffeeMenu from "./CoffeeMenu";
import icon from "../../images/vector.svg";
function Collection() {
  const [step, setStep] = useState(0);
  function handleAvailable() {
    if (step === 0) {
      setStep((s) => s + 1);
      console.log(step);
    }
  }
  function handleAll() {
    if (step === 1) {
      setStep((s) => s - 1);
      console.log(step);
    }
  }

  return (
    <div className="collection-container">
      <h1 className="collection-title">Our Collection</h1>
      <p className="collection-description">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="options">
        <button className={`option all-products ${step === 0 ? "active":"notActive"}` }onClick={handleAll}>
          All Products
        </button>
        <img src={icon} className="vector" />
        <button className={`option available ${step === 1 ? "active":"notActive"}`} onClick={handleAvailable}>
          Available Now
        </button>
      </div>
      <CoffeeMenu step={step}/>
    </div>
  );
}

export default Collection;
