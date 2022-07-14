import React from "react";
import "./MenuButton.css";

const MenuButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default MenuButton;
