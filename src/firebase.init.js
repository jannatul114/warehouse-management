// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCXpc22qW6ZpOoQdxPwug4CMzNerUjEVI",
    authDomain: "fruits-valley.firebaseapp.com",
    projectId: "fruits-valley",
    storageBucket: "fruits-valley.appspot.com",
    messagingSenderId: "717579206017",
    appId: "1:717579206017:web:2b893cd52c930f31117c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;