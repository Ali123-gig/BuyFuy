import React from "react";
import "./Navbar.css";
import Headers from "./../Header/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { siginout } from "./../../Redux/auth/authActions";
import Cart from "../Cart/Cart";

const MenuItems = ({ children, to = "#", ...restProps }) => (
  <div>
    <div {...restProps} className="menuItems">
      <Link to={to}>
        <Headers
          style={{ cursor: "pointer", display: "inline" }}
          fontSize={24}
          fontWeight="bold"
        >
          {children}
        </Headers>
      </Link>
    </div>
  </div>
);
const Navbar = ({ auth, siginout }) => {
  var[navbar,setNavbar]=React.useState(false)
  return (
    <div className="Navbar">
      <MenuItems to="/">Logo</MenuItems>
      <MenuItems to="/Category">Shop</MenuItems>
      <MenuItems to="/Test">Test</MenuItems>
      <div>
        <Headers
          onClick={()=>setNavbar(!navbar)}
          style={{ cursor: "pointer", display: "inline" }}
          fontSize={24}
          fontWeight="bold"
        >
          Cart
        </Headers>
  {navbar ?<Cart/>:null}
      </div>
      {auth ? (
        <MenuItems to="/Authentication" onClick={siginout}>
          Logout
        </MenuItems>
      ) : (
        <MenuItems to="/Authentication">Login</MenuItems>
      )}
    </div>
  );
};
var actions = {
  siginout,
};
var mapState = (state) => ({
  auth: state.auth,
});
export default connect(mapState, actions)(Navbar);
