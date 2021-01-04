import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchCategpryProducts } from "./../../Redux/products/productsAction";

const CategoryProducts = ({
  match: {
    params: { category },
  },
  fetchCategpryProducts,
  products,
}) => {
  useEffect(() => {
    //cdm
    fetchCategpryProducts(category);
  }, []);
  console.log(products);
  return (
    <div>
      <h1>{category}-CategoryProducts</h1>
      {products.map((product)=><ProductCard key={product.title} {...product}/>)}
    </div>
  );
};

var actions = {
  fetchCategpryProducts,
};
var mapState = (state) => ({
  products: state.products,
});
export default connect(mapState, actions)(CategoryProducts);
