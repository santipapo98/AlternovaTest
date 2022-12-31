// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrRYwQB1XZIz5uyAopmC76TfpPMQ1h2Mw",
  authDomain: "alternovalegostore.firebaseapp.com",
  projectId: "alternovalegostore",
  storageBucket: "alternovalegostore.appspot.com",
  messagingSenderId: "144949996885",
  appId: "1:144949996885:web:9a84086b5fb80682b853dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);