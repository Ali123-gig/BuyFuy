import React from "react";
import CartListItem from "../CartListItem/CartListItem";
import { connect } from "react-redux";
import "./CartList.css"
const CartList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cartList">
      {cartItems.map((items)=><CartListItem key={items.id} {...items}/>)}
      {/* <CartListItem />
      <CartListItem />
      <CartListItem />
      <CartListItem />
      <CartListItem />
      <CartListItem /> */}
    </div>
  );
};

var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CartList);
