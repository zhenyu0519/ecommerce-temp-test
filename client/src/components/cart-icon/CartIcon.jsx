import React from "react";
// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
// reselect
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
// style
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIconStyle.jsx";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
