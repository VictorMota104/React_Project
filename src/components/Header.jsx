import React from "react";
import "./Header.css";
import { AiFillCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">
          <span id="tech"> Tech </span> <span id="bank"> Bank </span>
          <AiFillCreditCard id="card" />
        </h1>
      </Link>
    </div>
  );
};

export default Header;
