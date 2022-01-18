// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOgKVvqeEihBl2gbRLl2Jf_vPs1bjFi3w",
  authDomain: "redux-sags-demo.firebaseapp.com",
  projectId: "redux-sags-demo",
  storageBucket: "redux-sags-demo.appspot.com",
  messagingSenderId: "810128067472",
  appId: "1:810128067472:web:82d29462cb80f1765d4115",
  measurementId: "G-R4LY26WBHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
