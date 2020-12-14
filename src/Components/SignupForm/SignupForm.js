import React, { useState } from "react";
import { connect } from 'react-redux';
import { signup } from './../../Redux/auth/authActions';


const SignupForm = ({signup}) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var HandleFormSubmit = (e) => {
    e.preventDefault();
    var user={
      fullName,
      email,
      password,
    }
    signup(user)
  };
  return (
    <div>
      <form onSubmit={HandleFormSubmit}>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="full Name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
var actions={
  signup
}

export default connect(null,actions)(SignupForm);
