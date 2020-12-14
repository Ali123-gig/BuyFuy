import { auth, firestore, serverTimestamp } from "./../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});
export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signup = (cred) => async (dispatch) => {
  var { email, password, fullName } = cred;
  try {
    //create user auth on firebase section
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);

    // save user data on firestore
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };
    await firestore.collection("users").doc(uid).set(userInfo);

    ///setting for the state in redux
    var userDataState = {
      fullName,
      email,
      uid,
    };

    dispatch(setUser(userDataState));
  } catch (error) {
    console.log(error);
  }
};
export var siginout = () => async (dispatch) => {
  try {
    //signout from firebase
    await auth.signOut();
    // siginout from front end
    dispatch(removeUser());
  } catch (error) {
    console.log(error);
  }
};

export var signin = ({ email, password }) => async (dispatch) => {
  try {
    //sigin user with auth
    var {
      user: { uid },
    } = await auth.signInWithEmailAndPassword(email, password);
    //fetch user data from firestore
    var userData = await firestore.collection("users").doc(uid).get();
    // console.log(userData.data())
    var { fullName, email: userEmail } = userData.data();
    //set user on auth state
    var userDataState = {
      fullName,
      email: userEmail,
      uid,
    };

    dispatch(setUser(userDataState));
  } catch (error) {
    console.log(error);
  }
};
