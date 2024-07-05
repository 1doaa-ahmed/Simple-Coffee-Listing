import React, { useEffect, useState } from "react";
import Coffee from "./CoffeeCard";
import CardGroup from "react-bootstrap/CardGroup";

import "../styles/CoffeeMenu.css";

function Menu() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCoffeeList(data);
      })
      .catch(error => console.error(error));
  }, []); 

  return (
    <CardGroup className="menu-container">
      {coffeeList.map(coffee => (
        <Coffee
          key={coffee.id}
          coffee={coffee}
        />
      ))}
    </CardGroup>
  );
}

export default Menu;
