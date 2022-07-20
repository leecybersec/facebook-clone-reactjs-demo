import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "facebook-clone-aaaf1",
  storageBucket: "facebook-clone-aaaf1.appspot.com",
  messagingSenderId: "1097979194983",
  appId: "1:1097979194983:web:bf7115745a303c477daec2",
  measurementId: "G-374ET361M8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
