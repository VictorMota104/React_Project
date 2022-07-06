import React, { useState } from "react";
import "./User.css";
import { useModalContext } from "./modal.context";

const User = ({ user }) => {
  const { openModal } = useModalContext();
  const testModal = () => openModal({ messege: "Pagamento para " + user.name });

  return (
    <div className="user-container">
      <div>
        <img className="user-photo" src={user.img}></img>
      </div>
      <div className="user-char">
        <div className="user-name">Nome do usuário - {user.name}</div>
        <div className="user-username">
          ID: {user.id} - Username: {user.username}
        </div>
      </div>
      <button onClick={testModal} className="pay-button">
        Pagar
      </button>
    </div>
  );
};

export default User;
