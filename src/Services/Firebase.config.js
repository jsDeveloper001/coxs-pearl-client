// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo5y1oiu2p9nhc8Nn3MMcbudkQYwTHcjw",
  authDomain: "cox-s-pearl.firebaseapp.com",
  projectId: "cox-s-pearl",
  storageBucket: "cox-s-pearl.appspot.com",
  messagingSenderId: "608466957918",
  appId: "1:608466957918:web:1e1df9b46822afb578a6cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth