import {
  auth,
  firestore,
  serverTimestamp,
  AuthProvider,
} from "./../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authConstants";
import firebase from "./../../Firebase/Firebase";

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
    
  } catch (error) {
    console.log(error);
  }
};
export var googleSigin = () => async (dispatch) => {
  try {
    var {
      additionalUserInfo: { isNewUser },
      user: { displayName, email, uid },
    } = await auth.signInWithPopup(AuthProvider);
    if (isNewUser) {
      var userObj = {
        fullName: displayName,
        email,
        createdAt: serverTimestamp(),
      };
      console.log(userObj);
      await firestore.collection("users").doc(uid).set(userObj);
      ///setting for the state in redux
    }
    
  } catch (error) {
    console.log(error);
  }
};

export var firebaseAuthListener = () => async (dispatch) => {
  try {
    // firebase auth listener
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        // User is signed in.
        var { uid } = user;
        var query = await firestore.collection("users").doc(uid).get();
        console.log(query.data());
        var {fullName,email} = query.data();
        //set user on auth state
        var userDataState = {
          fullName,
          email,
          uid,
        };
        dispatch(setUser(userDataState));
      } else {
        // No user is signed in.
        // siginout from front end
        dispatch(removeUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
