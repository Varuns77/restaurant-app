// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGn-Hw1-hFE0C3UHroagQCrqxNPvXjR5Q",
  authDomain: "restaurant-project-e9668.firebaseapp.com",
  projectId: "restaurant-project-e9668",
  storageBucket: "restaurant-project-e9668.appspot.com",
  messagingSenderId: "131205245374",
  appId: "1:131205245374:web:c17ce8ef0e5fd3a915b1ef"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;