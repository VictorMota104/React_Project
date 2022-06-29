import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user-container">
      <div>{user.photo}</div>

      <div className="user-char">
        <div className="user-name">Nome do usuário - {user.name}</div>
        <div className="user-username">
          ID: {user.id} - Username: {user.username}
        </div>
      </div>
      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default User;
