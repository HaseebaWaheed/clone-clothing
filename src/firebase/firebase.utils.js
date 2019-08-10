import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbtN9Q7qlNFEKRxluMGpO4IHr9vUSaLIs",
  authDomain: "cloth-db.firebaseapp.com",
  databaseURL: "https://cloth-db.firebaseio.com",
  projectId: "cloth-db",
  storageBucket: "",
  messagingSenderId: "256727059211",
  appId: "1:256727059211:web:fbe484c7fc06a97f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
