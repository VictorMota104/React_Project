import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModalProvider } from "./components/modal.context";
import Modal from "./components/Modal";
import Home from "./components/Pages/Home";
import Users from "./components/Pages/Users";
import Header from "./components/Header";
import "./App.css";
import Card from "./components/Pages/Card";

const App = () => {
  return (
    <ModalProvider>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/cards" component={Card} />
          </Switch>
        </div>
      </Router>
      <Modal />
    </ModalProvider>
  );
};
export default App;
