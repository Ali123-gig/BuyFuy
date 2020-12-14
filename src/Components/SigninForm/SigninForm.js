import React, { useState } from "react";
import { connect } from 'react-redux';
import { signin } from './../../Redux/auth/authActions';

const SigninForm = (props) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var HandleFormSubmit = (e) => {
    e.preventDefault();
    var user={
      email,
      password,
    }
    props.signin(user)
  };
  return (
    <div>
      <form onSubmit={HandleFormSubmit}>
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

var action={
  signin
}
export default connect(null,action)(SigninForm);
