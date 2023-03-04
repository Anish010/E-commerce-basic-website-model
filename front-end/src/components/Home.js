import React from "react";
import logo from "../images/logo.png";
const Home = () => {
  return (
    <div className="HomePage">
      <img src={logo} alt="Home " />
      <span>
        <p>Invertio</p>
        <h5>A simple and easy to use Inventory App.</h5>
      </span>
    </div>
  );
};

export default Home;
