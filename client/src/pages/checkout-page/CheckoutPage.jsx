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
// style
import {
  CheckoutBlock,
  CheckoutHeader,
  CheckoutPageContainer,
  CheckoutTotalCost,
  CheckoutWarning,
} from "./CheckoutPageStyle.jsx";

function CheckoutPage({ cartItems, totalCost }) {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>Product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>Remove</span>
        </CheckoutBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <CheckoutTotalCost>
        <span>Total: ${totalCost}</span>
      </CheckoutTotalCost>
      <CheckoutWarning>
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </CheckoutWarning>
      <StripeButton price={totalCost} />
    </CheckoutPageContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCost: selelctCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
