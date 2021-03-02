import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact />
  </Router>
);
