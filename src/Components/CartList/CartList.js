import React from "react";
import CartListItem from "../CartListItem/CartListItem";
import { connect } from "react-redux";

const CartList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((items)=><CartListItem key={items.id} {...items}/>)}
    </div>
  );
};

var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CartList);
