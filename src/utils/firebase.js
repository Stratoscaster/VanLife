// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getFirebaseConfig from "./firebaseCredentials.js";
// Recommended: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
let app = null;

export default function getApp() {
    if (!app) {
        app = initializeApp(getFirebaseConfig());
    }
    return app;
}