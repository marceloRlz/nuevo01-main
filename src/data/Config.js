// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6oAc5r53CT8ECVjLOIMCLu4U0l4ifu8k",
  authDomain: "ecommerce-1a3cb.firebaseapp.com",
  projectId: "ecommerce-1a3cb",
  storageBucket: "ecommerce-1a3cb.appspot.com",
  messagingSenderId: "845996460767",
  appId: "1:845996460767:web:70fa8714ebac95b7f8776a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
