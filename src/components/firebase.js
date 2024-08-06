// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyBN3g5V2drT2-sCuME_bu2N7spsuaXghtY",
  authDomain: "fir-tut-3322a.firebaseapp.com",
  projectId: "fir-tut-3322a",
  storageBucket: "fir-tut-3322a.appspot.com",
  messagingSenderId: "182580712292",
  appId: "1:182580712292:web:6cc6c6fec054fba0012071",
  measurementId: "G-M999B52LTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app