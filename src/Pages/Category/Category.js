import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/products/productsAction";
import { categorizeProducts } from './../../utility/products';

const Category = ({ fetchProducts,categorizes }) => {
  console.log(categorizes)
  useEffect(() => {
    //CDM
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>category</h1>
    </div>
  );
};

var actions = {
  fetchProducts,
};
var mapState=({products})=>({
  categorizes:categorizeProducts(products),

})
export default connect(mapState, actions)(Category);
