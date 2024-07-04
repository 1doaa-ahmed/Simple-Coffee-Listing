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
      {coffeeList.map((coffee) => (
        <Coffee
          key={coffee.id}
          coffee={coffee}
        />
      ))}
    </CardGroup>
  );
}

export default Menu;
