// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e7207.firebaseapp.com",
  projectId: "mern-estate-e7207",
  storageBucket: "mern-estate-e7207.appspot.com",
  messagingSenderId: "294249037114",
  appId: "1:294249037114:web:719d3b5e2428c41d9fe403",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
