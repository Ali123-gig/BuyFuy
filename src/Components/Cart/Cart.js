import React from "react";
import { Link } from "react-router-dom";
import CartList from "./../CartList/CartList";
import { connect } from "react-redux";
import { orderGenerate } from "./../../Redux/order/orderActions";

const Cart = ({ orderGenerate }) => {
  return (
    <div>
      <h1>Cart</h1>
      <CartList />
      <Link to="/CheckOut/:orderId">
        <button onClick={orderGenerate}>CheckOut</button>
      </Link>
    </div>
  );
};

var actions = {
  orderGenerate,
};
export default connect(null, actions)(Cart);
