import React from "react";
import "./checkoutItem.scss";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cartActions";

function CheckoutItem({ cartItem, clearItemFromCart }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10006;
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
