import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepages/HomePage";
import ShopPage from "./components/shop/Shop";
import Header from "./components/header/Header";
import SignInUp from "./components/sign-in-up/SignInUp";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
