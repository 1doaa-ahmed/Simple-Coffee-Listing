import React from "react";
import backgroundImage from'../images/bg-cafe.jpg' 
import './Main.css'
import Collection from "./Collection";
function Main() {
  return <div className="main-container">
    <img src={backgroundImage} className="backgroundImage"/>
    <Collection />
    </div>;
}

export default Main;
