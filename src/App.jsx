import React, { useState } from "react";
import Users from "./components/Users";

import "./App.css";

const App = () => {
  const users = [
    {
      photo: (
        <img
          className="user-photo"
          src="https://randomuser.me/api/portraits/men/1.jpg"
        ></img>
      ),
      id: 1,
      name: "Victor Mota",
      username: "@victormotaX",
    },
    {
      photo: (
        <img
          className="user-photo"
          src="https://randomuser.me/api/portraits/men/5.jpg"
        ></img>
      ),
      id: 2,
      name: "Matheus Moura",
      username: "@mathX",
    },
    {
      photo: (
        <img
          className="user-photo"
          src="https://randomuser.me/api/portraits/men/4.jpg"
        ></img>
      ),
      id: 3,
      name: "João Felix",
      username: "@jofelX",
    },
  ];

  return (
    <div className="container">
      <Users users={users} />
    </div>
  );
};
export default App;
