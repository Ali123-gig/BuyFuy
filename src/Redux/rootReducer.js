import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productsReducer from './products/productsReducer';
import cartReducers from './cart/cartReducers';

var rootReducer = combineReducers({
  auth: authReducer,
  products:productsReducer, 
  cart :cartReducers
});

export default rootReducer;
