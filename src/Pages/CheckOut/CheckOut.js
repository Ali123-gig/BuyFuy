import React from "react";
import CheckoutList from "../../Components/CheckoutList/CheckoutList";
import { connect } from "react-redux";
import { calculateTotal } from "./../../utility/Checkout";

const CheckOut = ({ total }) => {
  console.log(total);
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutList />
      <h2>Total Amount:{total} </h2>
      <button>PAY NOW {total}</button>
    </div>
  );
};
var mapState = (state) => ({
  total: calculateTotal(state.cart),
});

export default connect(mapState)(CheckOut);
