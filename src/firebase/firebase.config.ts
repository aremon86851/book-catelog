
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_6VNju2cGZydlUMf94xPrbfbQowTO0Bs",
  authDomain: "bookcatelog-69982.firebaseapp.com",
  projectId: "bookcatelog-69982",
  storageBucket: "bookcatelog-69982.firebasestorage.app",
  messagingSenderId: "26448146887",
  appId: "1:26448146887:web:4ae3490d535aa122cce9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }