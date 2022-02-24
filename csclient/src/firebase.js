// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSb3h4-TQJT_1atZ0cayHeHEEF9q1GztE",
  authDomain: "creatospace-14cd4.firebaseapp.com",
  projectId: "creatospace-14cd4",
  storageBucket: "creatospace-14cd4.appspot.com",
  messagingSenderId: "294267774346",
  appId: "1:294267774346:web:3f289bf79b712b0b139473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider

export {auth, provider}