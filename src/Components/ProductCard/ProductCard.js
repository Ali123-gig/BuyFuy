import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "./../../Redux/cart/cartActions";

const ProductCard = ({ addProductToCart, ...product }) => {
  var { title, cost ,id} = product;

  return (
    <div>
      <h1>
        <Link to={`/Product/${id}`}>{title}</Link>-{`$${cost}`}-
        <button onClick={() => addProductToCart(product)}>Add to cart</button>{" "}
      </h1>
    </div>
  );
};
var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
