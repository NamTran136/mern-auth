// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-efad6.firebaseapp.com",
  projectId: "mern-auth-efad6",
  storageBucket: "mern-auth-efad6.appspot.com",
  messagingSenderId: "614222730686",
  appId: "1:614222730686:web:f92d1b525e8c18a7d995ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
