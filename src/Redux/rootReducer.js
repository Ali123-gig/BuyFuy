import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productsReducer from './products/productsReducer';

var rootReducer = combineReducers({
  auth: authReducer,
  products:productsReducer, 
});

export default rootReducer;
