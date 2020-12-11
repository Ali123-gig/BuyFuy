import './App.css';
import { Route ,Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Authentication from './Pages/Authentication/Authentication';
import Catgeory from './Pages/Category/Catgeory';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
     
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/Authentication" component={Authentication}/>
          <Route path="/Category" component={Catgeory}/>
          <Route path="/CategoryProducts" component={CategoryProducts}/>
          <Route path="/CheckOut" component={CheckOut}/>
        </Switch>
    </div>
  );
}

export default App;
