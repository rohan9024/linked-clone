import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAw40yswRBsdvcS24_-IqIAm8AIJLGK7Eg",
    authDomain: "linkedin-clone-54075.firebaseapp.com",
    projectId: "linkedin-clone-54075",
    storageBucket: "linkedin-clone-54075.appspot.com",
    messagingSenderId: "867520390370",
    appId: "1:867520390370:web:d5be21b5a1674611062abb",
    measurementId: "G-TYXGXXEGQB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

