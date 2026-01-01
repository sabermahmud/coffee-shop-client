// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6769onLiOLyFym59tMyBfxIb66VusPA",
  authDomain: "coffee-shop-d200d.firebaseapp.com",
  projectId: "coffee-shop-d200d",
  storageBucket: "coffee-shop-d200d.firebasestorage.app",
  messagingSenderId: "791003953760",
  appId: "1:791003953760:web:22ff0216fa7a589e3ae105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);