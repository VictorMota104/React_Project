import React from "react";
import Users from "./components/Users";
import Modal from "./components/Modal";
import { ModalProvider } from "./components/modal.context";
import "./App.css";

const App = () => {
  return (
    <ModalProvider>
      <div className="container">
        <Users />
        <Modal />
      </div>
    </ModalProvider>
  );
};
export default App;
