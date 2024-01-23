// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjc9LnJqycAjjNqCCnSnnX4x9CPBxU-SU",
  authDomain: "aplskdasd.firebaseapp.com",
  projectId: "aplskdasd",
  storageBucket: "aplskdasd.appspot.com",
  messagingSenderId: "82881509986",
  appId: "1:82881509986:web:bd3b12e870efc275032f3b"
};

 
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)