import React from "react";
// style
import {
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemName,
  CartItemImage,
  CartItemPrice,
} from "./CartItemStyle.jsx";

export default function CartItem({
  item: { imageUrl, price, name, quantity },
}) {
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
