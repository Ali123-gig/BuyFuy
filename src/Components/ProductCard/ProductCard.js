import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart,removeProductFromCart,deleteItemFromCart } from './../../Redux/cart/cartActions';

const ProductCard = ({addProductToCart,deleteItemFromCart,removeProductFromCart,...product}) => {
    var {title,cost}=product
  
    return (
        <div>
            <h1>{title}-{`$${cost}`}-<button onClick={()=>addProductToCart(product)}>Add to cart</button> <button onClick={()=>removeProductFromCart(product.id)}>remove product to cart</button> <button onClick={()=>deleteItemFromCart(product.id)}>Delete product to cart</button></h1>
        </div>
    )
}
var actions={
    addProductToCart,
    removeProductFromCart,
    deleteItemFromCart
}
export default connect(null,actions)(ProductCard)
