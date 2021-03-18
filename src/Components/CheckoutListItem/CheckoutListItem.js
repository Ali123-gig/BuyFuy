import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart
} from "./../../Redux/cart/cartActions";
import "./CheckoutListItem.css"
const CheckoutListItem = ({
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart,
  ...products
}) => {
    
  return (
    <div>
      <h1>
        {products.title}-{products.cost}-<button onClick={()=>deleteItemFromCart(products.id)}>X</button>
      </h1>

      <h3>
        {" "}
        <button onClick={()=>addProductToCart(products)}>+</button> {products.quantity}{" "}
        <button onClick={()=>removeProductFromCart(products.id)}>-</button>{" "}
      </h3>
    </div>
  );
};
var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart
};
export default connect(null, actions)(CheckoutListItem);
