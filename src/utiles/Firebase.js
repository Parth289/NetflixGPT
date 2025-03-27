// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkG-XGcmGIlbcZZEw2z5oJxiBX5BjeUSk",
  authDomain: "netflix-gpt-aa9ac.firebaseapp.com",
  projectId: "netflix-gpt-aa9ac",
  storageBucket: "netflix-gpt-aa9ac.firebasestorage.app",
  messagingSenderId: "414001621237",
  appId: "1:414001621237:web:9df726174bf6927f7b3dbc",
  measurementId: "G-0DEGRPF80C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* eslint-disable no-unused-vars */
const analytics = getAnalytics(app);
export const auth = getAuth();
