
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD9ZQk07PN9c0gmw3-OdzNoB6XQPDOuW0",
  authDomain: "chess-56b9a.firebaseapp.com",
  projectId: "chess-56b9a",
  storageBucket: "chess-56b9a.appspot.com",
  messagingSenderId: "828571720710",
  appId: "1:828571720710:web:d2d240ca5540aaa5193787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }