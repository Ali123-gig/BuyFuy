import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import { signup } from "./../../Redux/auth/authActions";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var HandleFormSubmit = (e) => {
    e.preventDefault();
    var user = {
      fullName,
      email,
      password,
    };
    signup(user);
  };
  return (
    <form className="sign-up-form" onSubmit={HandleFormSubmit}>
      <TextField
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="FullName"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="password"
      />
      <Button
        type="submit"
        background="rgba(0,0,0,0.7)"
        color="black"
        style={{ width: "70%", marginTop: "1em" }}
      >
        Sign Up
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
var actions = {
  signup,
};

export default connect(null, actions)(SignupForm);
