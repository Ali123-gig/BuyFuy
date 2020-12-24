import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Category from "./Pages/Category/Category";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import CheckOut from "./Pages/CheckOut/CheckOut";
import { useEffect } from "react";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";

function App({ firebaseAuthListener }) {
  useEffect(() => {
    firebaseAuthListener();
  }, [firebaseAuthListener]);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Authentication" component={Authentication} />
        <Route path="/Category" component={Category} exact />
        <Route path="/CategoryProducts" component={CategoryProducts} />
        <Route path="/CheckOut" component={CheckOut} />
        <Route path="/Test" component={Test} />
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener,
};
export default connect(null, actions)(App);
