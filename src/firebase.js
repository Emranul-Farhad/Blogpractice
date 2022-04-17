// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZxhP700s1jxMMWRI34VwFdQun2d7HccI",
    authDomain: "tech-zeeks-practice.firebaseapp.com",
    projectId: "tech-zeeks-practice",
    storageBucket: "tech-zeeks-practice.appspot.com",
    messagingSenderId: "586721907670",
    appId: "1:586721907670:web:341cb206787f9720354a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }