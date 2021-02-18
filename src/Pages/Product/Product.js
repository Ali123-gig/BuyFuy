import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchSpecificProduct } from './../../Redux/products/productsAction';
import { useState } from 'react';
import ProductCard from "./../../Components/ProductCard/ProductCard"

const Product = ({fetchSpecificProduct,match:{params:{ProductId}}}) => {
    var [product,setProduct]=useState({})
useEffect(async()=>{
    //CDM
    var DataProducts= await  fetchSpecificProduct(ProductId)
    setProduct(DataProducts);
},[])
console.log(ProductId);
    return (
        <div>
            <h1>Product</h1>
            {product.title&&<ProductCard {...product}/>}
        </div>
    )
}
var actions={
    fetchSpecificProduct
}

export default connect(null,actions)(Product)
