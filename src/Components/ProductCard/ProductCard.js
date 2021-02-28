import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "./../../Redux/cart/cartActions";
import "./ProductCard.css";
import Header from "./../Header/Header";
import Button from "../Button/Button";

const ProductCard = ({ addProductToCart, ...product }) => {
  var { title, cost, id ,coverPhoto} = product;

  return (
    <div className="productCard center">
      {/* <h1>
        <Link to={`/Product/${id}`}>{title}</Link>-{`$${cost}`}-
        <button onClick={() => addProductToCart(product)}>Add to cart</button>{" "}
      </h1> */}
      <div className="productCardHover center">
        <Button onClick={() => addProductToCart(product)} fontSize={12} fontWeight="semi-bold">Add to cart </Button>
      </div>
      <div style={{background:`url(${coverPhoto})`,backgroundSize:"100% 100% ,cover"}} className="productCard-image"></div>
      <Header
        style={{ alignSelf: "flex-start", marginTop: "0.5em" }}
        fontSize={15}
        fontWeight="bold"
      >
        {title}
      </Header>
      <Header
        style={{ alignSelf: "flex-start" }}
        fontSize={20}
        fontWeight="regular"
      >
        ${cost}
      </Header>
    </div>
  );
};
var actions = {
  addProductToCart,
};
export default connect(null, actions)(ProductCard);
