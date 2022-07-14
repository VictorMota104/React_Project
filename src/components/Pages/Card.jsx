import React from "react";
import LogoMastercard from "../imgs/mastercard.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards">
      <div className="card">
        <span id="marca">Mastercard</span>
        <span id="numero">1111 1111 1111 1111</span>
        <div className="center">
          <span id="validade">
            valid thru <br /> 01/18
          </span>
          <img className="logo-mastercard" src={LogoMastercard} />
        </div>
      </div>
      <div className="card-two">
        <span id="marca">Mastercard</span>
        <span id="numero">4111 1111 1111 1234</span>
        <div className="center">
          <span id="validade">
            valid thru <br /> 01/20
          </span>
          <img className="logo-mastercard" src={LogoMastercard} />
        </div>
      </div>
    </div>
  );
};

export default Card;
