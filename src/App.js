import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      PSYCH0
    </BrowserRouter>
  );
}

export default App;
