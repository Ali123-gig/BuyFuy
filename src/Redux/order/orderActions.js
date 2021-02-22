import { firestore, serverTimestamp, storage } from "./../../Firebase/Firebase";
import history from './../../history/history';
export var orderGenerate = (orderInfo) => async (dispatch, getState) => {
  try {
    var { auth, cart:products } = getState();
    var orderInfo={
        ...auth,
        products,
        createdAt:serverTimestamp(),
        orderStatus: "pending"
    }
    var order=await firestore.collection("orders").add(orderInfo)
    history.push(`/CheckOut/${order.id}`)
    // console.log(history);
    
  } catch (error) {
    console.log(error);
  }
};
