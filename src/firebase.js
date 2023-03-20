// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCmrmSBGkdz-GMunSwQW6XfQy_r5EfD1jA",
  authDomain: "mobile-verify-5fea0.firebaseapp.com",
  projectId: "mobile-verify-5fea0",
  storageBucket: "mobile-verify-5fea0.appspot.com",
  messagingSenderId: "5590420629",
  appId: "1:5590420629:web:67d474ab98cd978632df9c",
  measurementId: "G-RMPLJ1ZE54"
};








const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)