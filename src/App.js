import React, { Component } from "react";
// route
import { Route, Switch, Redirect } from "react-router-dom";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelectors";
// components
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignInUpPage from "./pages/sign-in-up-page/SignInUpPage";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";
// redux actions, selector
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { checkUserSession } from "./redux/user/userActions";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    // Check if there is user logged in
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   // If a use logged in
    //   if (userAuth) {
    //     // Get the logged in user's reference from firebase
    //     const userRef = await createUserProfileDocument(userAuth);
    //     // Get the logged in user's simple data based on reference
    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    // });
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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />
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
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
