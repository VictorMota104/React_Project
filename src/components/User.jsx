import React from "react";
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
        <div className="user-name">
          <strong>Nome do usuário</strong> - {user.name}
        </div>
        <div className="user-username">
          <strong>ID:</strong> {user.id} - <strong>Username:</strong>{" "}
          {user.username}
        </div>
      </div>
      <button onClick={testModal} className="pay-button">
        Pagar
      </button>
    </div>
  );
};

export default User;
