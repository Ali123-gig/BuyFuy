import React from "react";
import { connect } from "react-redux";
import Para from "../Para/Para";
import CheckoutListItem from './../CheckoutListItem/CheckoutListItem';
import "./CheckoutList.css"

const CheckoutList = ({ cartItems }) => {
  // console.log(cartItems);
  return (
    <div className="checkoutlist">
      <div className="checkout-list-item checkout-list-item-extends">
      <Para fontSize={20} fontWeight="semi-bold">Product</Para>
      <Para fontSize={20} fontWeight="semi-bold">Quantity</Para>
      <Para fontSize={20} fontWeight="semi-bold">Price</Para>

      </div>
      {cartItems.map((items)=><CheckoutListItem key={items.id} {...items}/>)}
    </div>
  );
};

var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CheckoutList);

