// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5fmJPotR5yQqnH9uhyOcxBW6A5AQcuDw",
  authDomain: "chatapp-ff51d.firebaseapp.com",
  projectId: "chatapp-ff51d",
  storageBucket: "chatapp-ff51d.appspot.com",
  messagingSenderId: "353063675790",
  appId: "1:353063675790:web:c514eaf5be6c3c4ed126df",
  measurementId: "G-YR955TGFNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);