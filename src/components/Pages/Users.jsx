import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";
import { useModalContext } from "../modal.context";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { openModal } = useModalContext();

  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {users.map((user) => {
        const testModal = () =>
          openModal({ messege: "Payment  for " + user.name });

        return (
          <div className="user-container">
            <img className="user-photo" src={user.img} alt="" />

            <div className="user-char">
              <div className="user-name">
                <strong>Username:</strong> {user.name}
              </div>
              <div className="user-username">
                <strong>ID:</strong> {user.id} - <strong>Nickname: </strong>
                {user.username}
              </div>
            </div>
            <button className="pay-button" onClick={testModal}>
              Pay
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Users;
