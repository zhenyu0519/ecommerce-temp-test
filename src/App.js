import React, { Component } from "react";
// route
import { Route, Switch, Redirect } from "react-router-dom";
// components
import Header from "./components/header/Header";
import HomePage from "./pages/homepages/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInUp from "./pages/sign-in-up/SignInUp";
import Checkout from "./pages/checkout/Checkout";
// firebase auth
import { auth, createUserProfileDocument } from "./firebase/firebase";
// redux actions, selector
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "../src/redux/user/userSelectors";
// reselect
import { createStructuredSelector } from "reselect";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // Check if there is user logged in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If a use logged in
      if (userAuth) {
        // Get the logged in user's reference from firebase
        const userRef = await createUserProfileDocument(userAuth);
        // Get the logged in user's simple data based on reference
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
