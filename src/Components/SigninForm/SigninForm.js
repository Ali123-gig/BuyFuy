import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "./../../Redux/auth/authActions";
import "./SigninForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";
const SigninForm = (props) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var HandleFormSubmit = (e) => {
    e.preventDefault();
    var user = {
      email,
      password,
    };
    props.signin(user);
  };
  return (
    <form className="sign-in-form" onSubmit={HandleFormSubmit}>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        background="rgba(0,0,0,0.7)"
        color="black"
        style={{ width: "70%", marginTop: "1em" }}
      >
        Sign In
      </Button>
      {/* <input
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
        <button type="submit">Submit</button> */}
    </form>
  );
};

var action = {
  signin,
};
export default connect(null, action)(SigninForm);
