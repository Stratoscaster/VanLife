/*
    NOTE: For Firebase, we can expose the API key publicly because Firebase uses
    security rules to determine who can access the data and how.
 */

const firebaseConfigLocal = {
    apiKey: "AIzaSyCVa2rqOTOpyMSEbQk_wL9qMOOOwuOLTzU",
    authDomain: "vanlife-1d8bd-stratoscaster.firebaseapp.com",
    projectId: "vanlife-1d8bd-stratoscaster",
    storageBucket: "vanlife-1d8bd-stratoscaster.firebasestorage.app",
    messagingSenderId: "962745773356",
    appId: "1:962745773356:web:11c4a3f048956d93a75089"
};

export default function getFirebaseConfig() {
    return firebaseConfigLocal;
}

