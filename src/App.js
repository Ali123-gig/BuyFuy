import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Catgeory from "./Pages/Category/Catgeory";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import CheckOut from "./Pages/CheckOut/CheckOut";
import { useEffect } from "react";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import Test from './Pages/Test/Test';

function App({ firebaseAuthListener }) {
  useEffect(() => {
    firebaseAuthListener();
  }, [firebaseAuthListener]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Authentication" component={Authentication} />
        <Route path="/Category" component={Catgeory} />
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
