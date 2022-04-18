// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh2qI8mGYa1bUHj0z75wWDQ-7fzzKbmcg",
  authDomain: "assignment-10-79d65.firebaseapp.com",
  projectId: "assignment-10-79d65",
  storageBucket: "assignment-10-79d65.appspot.com",
  messagingSenderId: "407694304173",
  appId: "1:407694304173:web:e3302f93fa786592a2b724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;