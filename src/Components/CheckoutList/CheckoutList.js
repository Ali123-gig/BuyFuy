import React from "react";
import { connect } from "react-redux";
import CheckoutListItem from './../CheckoutListItem/CheckoutListItem';

const CheckoutList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((items)=><CheckoutListItem key={items.id} {...items}/>)}
    </div>
  );
};

var mapState = (state) => ({
  cartItems: state.cart,
});

export default connect(mapState)(CheckoutList);

