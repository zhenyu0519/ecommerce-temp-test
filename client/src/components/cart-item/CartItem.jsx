import React from "react";
// style
import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemName,
  CartItemImage,
  CartItemPrice,
} from "./CartItemStyle.jsx";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x ${price}
        </CartItemPrice>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
}

export default React.memo(CartItem);
