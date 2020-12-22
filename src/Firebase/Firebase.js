import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"


var firebaseConfig = {
  apiKey: "AIzaSyDDiLuYLtu1ZgYzOzLcDbicQF6Zw80cDLM",
  authDomain: "buyfuy-693c2.firebaseapp.com",
  projectId: "buyfuy-693c2",
  storageBucket: "buyfuy-693c2.appspot.com",
  messagingSenderId: "502839048392",
  appId: "1:502839048392:web:14836c12d486d4d0f60dfd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var serverTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
export var AuthProvider = new firebase.auth.GoogleAuthProvider();
export var storage = firebase.storage().ref(); 
export default firebase;
