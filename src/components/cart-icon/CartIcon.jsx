import React from "react";
// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
// reselect
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
