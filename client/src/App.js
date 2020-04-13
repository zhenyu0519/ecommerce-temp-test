import React, { useEffect, lazy, Suspense } from "react";
// route
import { Route, Switch, Redirect } from "react-router-dom";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelectors";
// components
import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
// redux actions, selector
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/userActions";
// style
import { GlobalStyle } from "./globalStyles";

const HomePage = lazy(() => import("./pages/home-page/HomePage"));
const ShopPage = lazy(() => import("./pages/shop-page/ShopPage"));
const SignInUpPage = lazy(() => import("./pages/sign-in-up-page/SignInUpPage"));
const CheckoutPage = lazy(() => import("./pages/checkout-page/CheckoutPage"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
