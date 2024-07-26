// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-f1580.firebaseapp.com",
    projectId: "mern-blog-f1580",
    storageBucket: "mern-blog-f1580.appspot.com",
    messagingSenderId: "298532546440",
    appId: "1:298532546440:web:4dbf37967abaad7ad03c3d",
    measurementId: "G-6LY5QYGZ06",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);