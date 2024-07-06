import React, { useEffect, useState } from "react";
import Coffee from "./CoffeeCard";
import "../styles/CoffeeMenu.css";

function CoffeeMenu({ step }) {
  const [coffeeList, setCoffeeList] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="menu-container">
      {step === 0 &&
        coffeeList.map((coffee) => <Coffee key={coffee.id} coffee={coffee} />)}
      {step === 1 &&
        coffeeList
          .filter((coffee) => coffee.available)
          .map((coffee) => <Coffee key={coffee.id} coffee={coffee} />)}
    </div>
  );
}

export default CoffeeMenu;
