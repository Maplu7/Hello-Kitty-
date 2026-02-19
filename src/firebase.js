// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0XxDyQGCNxoHwZGCCMELipNgI4xjxr9A",
  authDomain: "hello-kitty-b433c.firebaseapp.com",
  projectId: "hello-kitty-b433c",
  storageBucket: "hello-kitty-b433c.firebasestorage.app",
  messagingSenderId: "859995548538",
  appId: "1:859995548538:web:67edae844dd361bf8804c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);