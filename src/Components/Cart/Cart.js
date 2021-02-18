import React from 'react'
import { Link } from 'react-router-dom';
import CartList from './../CartList/CartList';

const Cart = () => {
    return (
        <div>
            <h1>Cart</h1>
            <CartList/>
            <Link to="/CheckOut">
                <button>CheckOut </button>
            </Link>
        </div>
    )
}

export default Cart
