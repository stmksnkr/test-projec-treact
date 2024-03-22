// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCtKUlA4fm6S94TmS76Qm8-vg99t1B9eAU",
  authDomain: "clone-ceb4f.firebaseapp.com",
  projectId: "clone-ceb4f",
  storageBucket: "clone-ceb4f.appspot.com",
  messagingSenderId: "1029298984047",
  appId: "1:1029298984047:web:93e1518d7238b338dde99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);