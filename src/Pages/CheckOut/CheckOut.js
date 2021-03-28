import React, { useState } from "react";
import CheckoutList from "../../Components/CheckoutList/CheckoutList";
import { connect } from "react-redux";
import { calculateTotal } from "./../../utility/Checkout";
import OrderForm from "../../Components/OrderForm/OrderForm";
import "./CheckOut.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

const CheckOut = ({ total }) => {
  const [shipFormShown, setShipFormShown] = useState(false);
  return (
    <div className="checkout-page-container">
       <div className="check">
        <Header fontSize={40} fontWeight="bold">Shopping Cart</Header>
        <CheckoutList />
        <div className="checkout-bottom-content">
        <Header fontSize={40} fontWeight="bold">Total:${total}</Header>
        <Button style={{justifySelf:"end",borderRadius:"30px"}} fontSize={15} fontWeight="semi-bold" background="#fff" color="black">Proceed & Pay</Button>
        </div>
        {/* {shipFormShown && <OrderForm />}
      <button onClick={()=>setShipFormShown(!shipFormShown)}>PROCEED & PAY</button> */}
       </div>
    </div>
  );
};
var mapState = (state) => ({
  total: calculateTotal(state.cart),
});

export default connect(mapState)(CheckOut);
