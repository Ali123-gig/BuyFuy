import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { fetchCategpryProducts } from "./../../Redux/products/productsAction";
import "./CategoryProducts.css";

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
    <div className="categoryProducts">
      <div className="categoryProductsList">
        <h1 className="category-text additional">{category}</h1>
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
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
