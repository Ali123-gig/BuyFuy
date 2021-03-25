import React,{useEffect} from 'react'
import CategoryListItem from '../CategoryListItem/CategoryListItem'
import { connect } from 'react-redux';
import { fetchProducts } from "../../Redux/products/productsAction";
import { categorizeProducts } from './../../utility/products';
import "./CategoryList.css"


const CategoryList = ({ fetchProducts,categorizes }) => {
    console.log(categorizes)
    useEffect(() => {
      //CDM
      fetchProducts();
    }, []);
    return (
        <div className="CategoryList">
         {categorizes.map((category)=>
             <CategoryListItem key={category.category} {...category}/>
         )}
        </div>
    )
}
var actions = {
    fetchProducts,
  };
  var mapState=({products})=>({
    categorizes:categorizeProducts(products),
  
  });

export default connect(mapState, actions)(CategoryList);