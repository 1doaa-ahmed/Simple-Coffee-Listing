import React from "react";
import coffeeList from "../cofffe-list.json";
import Coffee from "./Coffee";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Menu.css";
function Menu() {
  console.log(coffeeList);
  // const [products, setProducts] = useState([]
  return (
    <CardGroup className="menu-container">
      {coffeeList.map((i) => (
        <Coffee
          key={i.id}
          coffeeName={i.name}
          coffeeImage={i.image}
          coffeePrice={i.price}
          coffeeRating={i.rating}
          coffeeVotes={i.votes}
          coffeePopular={i.popular}
          coffeeAvailable={i.available}
        />
      ))}
    </CardGroup>
  );
}

export default Menu;
