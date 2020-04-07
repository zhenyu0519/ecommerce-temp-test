import React from "react";
// redux
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";

// style
import {
  CheckoutImage,
  CheckoutRemoveButton,
  CheckoutImageContainer,
  CheckoutName,
  CheckoutPrice,
  CheckoutQuantity,
  CheckoutItemContainer,
  CheckoutArrow,
  CheckoutValue
} from "./CheckoutItemStyle";

function CheckoutItem({ cartItem, clearItemFromCart, removeItem, addItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt="" />
      </CheckoutImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <CheckoutArrow onClick={() => removeItem(cartItem)}>
          &#8668;
        </CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={() => addItem(cartItem)}>&#8669;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice>{price}</CheckoutPrice>
      <CheckoutRemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10006;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
