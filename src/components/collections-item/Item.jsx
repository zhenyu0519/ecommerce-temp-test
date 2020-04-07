import React from "react";
// redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooterContainer,
  AddItemButton,
  Name,
  Price,
} from "./ItemStyle.jsx";

function Item({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <CollectionImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooterContainer>
      <AddItemButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddItemButton>
    </CollectionItemContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(Item);
