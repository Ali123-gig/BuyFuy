import React from "react";
import { Link } from "react-router-dom";
import CartList from "./../CartList/CartList";
import { connect } from "react-redux";
import { orderGenerate } from "./../../Redux/order/orderActions";
import "./Cart.css"
import Header from "../Header/Header";
import Button from "../Button/Button";

const Cart = ({ orderGenerate }) => {
  return (
    <div className="cart">
      <Header fontSize={25}style={{letterSpacing:"3px"}}>CART</Header>
      <CartList />
      {/* <Link to="/CheckOut/:orderId">
        <button onClick={orderGenerate}>CheckOut</button>
      </Link> */}
      <Button onClick={orderGenerate} fontSize={15} fontWeight="light" style={{letterSpacing:"3px"}}>CHECKOUT</Button>
    </div>
  );
};

var actions = {
  orderGenerate,
};
export default connect(null, actions)(Cart);
