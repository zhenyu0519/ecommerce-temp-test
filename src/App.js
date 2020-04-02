import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepages/HomePage";
import ShopPage from "./components/shop/Shop";
import Header from "./components/header/Header";
import SignInUp from "./components/sign-in-up/SignInUp";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { selectCurrentUser } from "../src/redux/user/userSelectors";
// import action dispatch
import { setCurrentUser } from "./redux/user/userActions";
import { createStructuredSelector } from "reselect";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // Check if there is user logged in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If a use logged in
      if (userAuth) {
        // Get the logged in user's reference from firebase
        const userRef = await createUserProfileDocument(userAuth);
        // Get the logged in user's simple data based on reference
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
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
          <Route exact path="/shop" component={ShopPage} />
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
