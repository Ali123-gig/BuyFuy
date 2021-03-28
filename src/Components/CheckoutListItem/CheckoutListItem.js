import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart,
} from "./../../Redux/cart/cartActions";
import Para from "../Para/Para";
import Button from "./../Button/Button";
import "./CheckoutListItem.css";
const CheckoutListItem = ({
  addProductToCart,
  removeProductFromCart,
  deleteItemFromCart,
  title,
  cost,
  coverPhoto,
  quantity,
  ...products
}) => {
  return (
    <div className="checkout-list-item">
      <div className="checkout-item-products">
        <div
          className="checkout-item-products-image"
          style={{
            background: `url(${coverPhoto})`,
            backgroundSize: "100% 100%,cover",
          }}
        ></div>
        <Para fontSize={20} fontWeight="semi-bold">
          {title}
        </Para>
      </div>
      <div
        className="checkout-item-quantity center"
        style={{ flexFlow: "row" }}
      >
        <Button
          color="black"
          background="#ffff"
          fontWeight="bold"
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            transform: "translateX(5px)",
          }}
          onClick={() => addProductToCart(products)}
        >
          +
        </Button>
        <Button color="black" background="#ffff">
          {quantity}
        </Button>
        <Button
          color="black"
          background="#ffff"
          fontWeight="bold"
          style={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            transform: "translateX(-5px)",
          }}
          onClick={() => removeProductFromCart(products.id)}
        >
          -
        </Button>
      </div>
      <div className="checkout-item-price center">
        <Para fontSize={26} fontWeight="semi-bold">
          ${cost}
        </Para>
      </div>
      <div className="checkout-item-cross center">
        <Para
          fontSize={26}
          fontWeight="semi-bold"
          style={{cursor:"pointer"}}
          onClick={() => deleteItemFromCart(products.id)}
        >
          X
        </Para>
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
export default connect(null, actions)(CheckoutListItem);
