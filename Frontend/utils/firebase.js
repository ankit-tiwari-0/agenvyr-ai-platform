// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "agenvyr.firebaseapp.com",
  projectId: "agenvyr",
  storageBucket: "agenvyr.firebasestorage.app",
  messagingSenderId: "902462533722",
  appId: "1:902462533722:web:66c1f679207d0df7a8e863",
  measurementId: "G-NC9YB9MXJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();