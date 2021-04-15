import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productsReducer from "./products/productsReducer";
import cartReducers from "./cart/cartReducers";
import modalReducer from "./modals/modalsReducer";

var rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducers,
  modals: modalReducer,
});

export default rootReducer;
