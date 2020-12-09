//import Rebase from "re-base";
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey : "AIzaSyA0XV0uQ_r6mNdP7vcGb7mK4cxnyeImcPE" ,   
  authDomain : "login-fb-c9467.firebaseapp.com" ,   
  projectId : "login-fb-c9467" ,   
  storageBucket : "login-fb-c9467.appspot.com" ,   
  messagingSenderId : "915035807060" ,   
  appId : "1: 915035807060: web: d3ef3abeed19c2d214fcc1" ,   
  measurementId : "G-D8SVCBW2CH",
  // databaseURL: "https://login-fb-c9467-default-rtdb.firebaseio.com/"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;