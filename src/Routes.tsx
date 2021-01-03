import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

export default function Routes() {
    return (
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Router>
      );
}