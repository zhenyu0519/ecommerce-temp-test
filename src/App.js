import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepages/HomePage";
import ShopPage from "./components/shop/Shop";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />>
        </Switch>
      </div>
    );
  }
}

export default App;
