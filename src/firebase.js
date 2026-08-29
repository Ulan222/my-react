


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cjLjm6JxU7uGwJaeIxpzFmduoMVcVLU",
  authDomain: "ulan-8ae0c.firebaseapp.com",
  projectId: "ulan-8ae0c",
  storageBucket: "ulan-8ae0c.firebasestorage.app",
  messagingSenderId: "844731167310",
  appId: "1:844731167310:web:829375a601b1f1fbd1091f",
  measurementId: "G-8RVSH8WNGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)