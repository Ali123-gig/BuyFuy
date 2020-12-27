import { SET_PRODUCTS } from "./productsConstant";
 
var initialState = [];

var productsReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return [...payload.products];
    default:
      return state;
  }
};

export default productsReducer;
