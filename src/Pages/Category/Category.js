import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/products/productsAction";

const Category = ({ fetchProducts,categories }) => {
  console.log(categories)
  useEffect(() => {
    //CDM
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Category</h1>
    </div>
  );
};

var actions = {
  fetchProducts,
};
var mapState=(state)=>({
  categories:state.products

})
export default connect(mapState, actions)(Category);
