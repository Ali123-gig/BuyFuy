import React from "react";
import AuthForm from "../../Components/AuthForm/AuthForm";
import GoogleSignin from "../../Components/GoogleSignin/GoogleSignin";
import SigninForm from "../../Components/SigninForm/SigninForm";
import SignOut from "../../Components/SignOut/SignOut";
import SignupForm from "../../Components/SignupForm/SignupForm";
import "./Authentication.css"

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="auth-left"></div>
      <div className="auth-right center" style={{alignItems:"start"}}>
        <AuthForm />
      </div>
      {/* <h1>Authentication Page</h1>
      <SignupForm />
      <SigninForm />
      <GoogleSignin />
      <SignOut /> */}
    </div>
  );
};

export default Authentication;
