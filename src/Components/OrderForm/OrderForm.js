import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const OrderForm = ({ user }) => {
  // receiver full name
  const [fullName, setFullName] = useState("");
  //..email
  const [email, setEmail] = useState("");
  //..phone
  const [phone, setPhone] = useState("");
  //..full address
  const [address, setAddress] = useState("");
  useEffect(() => {
    ///CDM

    var { fullName, email, address, phone } = user;
    setFullName(fullName ? fullName : "");
    setEmail(email ? email : "");
    setAddress(address ? address : "");
    setPhone(phone ? phone  : "");
  },[]);

  var handlesubmit = (e) => {
    e.preventDefault();
    var shippingInfo = {
      fullName,
      email,
      phone,
      address,
    };
    console.log(shippingInfo);
  };
  return (
    <div>
      <h1>Order form </h1>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          placeholder="Enter a full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button>PAY</button>
      </form>
    </div>
  );
};
var mapState = (state) => ({
  user: state.auth,
});

export default connect(mapState)(OrderForm);
