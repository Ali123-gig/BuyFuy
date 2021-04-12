import React from "react";
import "./AuthForm.css";
import Button from "./../Button/Button";
import SigninForm from "../SigninForm/SigninForm";
import SignupForm from "../SignupForm/SignupForm";
import { connect } from "react-redux";
import { googleSigin } from "./../../Redux/auth/authActions";

const AuthForm = ({ googleSigin }) => {
  var [formType, setFormType] = React.useState("sign-in");
  return (
    <div className="authForm">
      <div className="authform-switcher">
        <Button
          onClick={() => setFormType("sign-in")}
          background="#ffff"
          color="black"
          style={{ position: "relative" }}
        >
          Sign In
          <div className="underLine"></div>
        </Button>
        <Button
          onClick={() => setFormType("sign-up")}
          background="#ffff"
          color="black"
          style={{ position: "relative", justifySelf: "end" }}
        >
          Sign Up
          <div className="underLine"></div>
        </Button>
      </div>
      <div className="authform-fields center">
        {formType === "sign-in" ? <SigninForm /> : <SignupForm />}
      </div>
      <div className="authform-btns">
        <div className="seperator-or">OR</div>
      </div>
      <Button
        onClick={() => googleSigin()}
        background="rgba(0,0,0,0.7)"
        color="black"
        style={{ width: "70%", marginTop: "1em", marginLeft: "4em" }}
      >
        Google Sign-In
      </Button>
    </div>
  );
};
var action = {
  googleSigin,
};

export default connect(null, action)(AuthForm);
