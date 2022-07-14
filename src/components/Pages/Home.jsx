import React from "react";
import MenuButton from "../MenuButtons";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const teste = () => {
    console.log("deu certo");
  };
  return (
    <div className="home">
      <Link to="/users" className="btn">
        <MenuButton onClick={teste}>Users</MenuButton>
      </Link>
      <Link to="/cards" className="btn">
        <MenuButton>Cards</MenuButton>
      </Link>
    </div>
  );
};

export default Home;
