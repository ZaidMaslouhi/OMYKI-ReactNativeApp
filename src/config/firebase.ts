import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgH1dUsO7liWrvBquRYFUh_aMJxacMECE",
  authDomain: "omyki-e93a1.firebaseapp.com",
  projectId: "omyki-e93a1",
  storageBucket: "omyki-e93a1.appspot.com",
  messagingSenderId: "286623929772",
  appId: "1:286623929772:web:abeae02baa63cf8dc2d609",
  databaseURL: "https://omyki-e93a1.firebaseio.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseConfig, firebaseApp };
