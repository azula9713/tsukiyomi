import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPZvPWB0jHU389VIg6QGbHtFSbw2D8oRI",
  authDomain: "tsukiyomi-b89c7.firebaseapp.com",
  projectId: "tsukiyomi-b89c7",
  storageBucket: "tsukiyomi-b89c7.appspot.com",
  messagingSenderId: "332396125756",
  appId: "1:332396125756:web:af5ee062c114814b346d39",
  measurementId: "G-QV0NNFVV08",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { firebaseApp, provider, auth };
