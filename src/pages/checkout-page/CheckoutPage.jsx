import React from "react";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selelctCartTotal,
} from "../../redux/cart/cartSelectors";
// components
import CheckoutItem from "../../components/checkout-Item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

import "./checkoutPage.scss";

function CheckoutPage({ cartItems, totalCost }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>Total: ${totalCost}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={totalCost} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCost: selelctCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
