// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHHcA31fAOpRgdPZdwbtGgQ4vfsKjce_0",
  authDomain: "mern-book-inventory-e682b.firebaseapp.com",
  projectId: "mern-book-inventory-e682b",
  storageBucket: "mern-book-inventory-e682b.appspot.com",
  messagingSenderId: "879404795902",
  appId: "1:879404795902:web:05e487fddf396b4ddda2af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;