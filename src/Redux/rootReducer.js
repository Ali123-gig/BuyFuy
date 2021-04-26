import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import productsReducer from "./products/productsReducer";
import cartReducers from "./cart/cartReducers";
import modalReducer from "./modals/modalsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","cart"],
};
var rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cart: cartReducers,
  modals: modalReducer,
});

export default persistReducer(persistConfig,rootReducer);
