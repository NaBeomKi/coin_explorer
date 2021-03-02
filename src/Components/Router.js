import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Prices from "Screens/Prices";
import Exchanges from "Screens/Exchanges";
import Coins from "Screens/Coins";
import Detail from "Screens/Detail";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Prices} />
    <Route path="/exchanges" component={Exchanges} />
    <Route path="/coins" exact component={Coins} />
    <Route path="/coins/:id" exact component={Detail} />
  </Router>
);
