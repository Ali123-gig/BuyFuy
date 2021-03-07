import React from "react";
import { connect } from "react-redux";
import Para from "../Para/Para";
import {
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart,
} from "./../../Redux/cart/cartActions";
import "./CartListItem.css";
const CartListItem = ({
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart,
  ...products
}) => {
  // var {title,cost}
  return (
    <div className="catrtListItem">
      <div style={{background:`url(${products.coverPhoto})`,backgroundSize:"100% 100% ,cover"}} className="cart-List-Item-Img"></div>
      <div className="cart-List-Item-Desc">
        <Para fontSize={15} fontWeight="semi-bold">{products.title}</Para>
        <div style={{display:"flex",alignItems:"center"}}>
          <Para fontSize={17} fontWeight="regular" style={{marginRight:"5px"}}>${products.cost} X {products.quantity}=</Para>
          <Para fontSize={17} fontWeight="regular">${products.cost * products.quantity}</Para>
        </div>
      </div>

      {/* <h1>
        {products.title}-{products.cost}-<button onClick={()=>deleteItemFromCart(products.id)}>X</button>
      </h1>

      <h3>
        {" "}
        <button onClick={()=>addProductToCart(products)}>+</button> {products.quantity}{" "}
        <button onClick={()=>removeProductFromCart(products.id)}>-</button>{" "}
      </h3> */}
    </div>
  );
};
var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart,
};
export default connect(null, actions)(CartListItem);
