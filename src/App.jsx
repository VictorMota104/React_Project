import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import axios from "axios";
import Modal from "./components/Modal";
import { ModalProvider } from "./components/modal.context";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"
      );
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <ModalProvider>
      <div className="container">
        <Users users={users} />
        <Modal />
      </div>
    </ModalProvider>
  );
};
export default App;
