import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBReY4j0trI-VYHZG1ZZxYCqvkQ1QGEEVg",
  authDomain: "clone-fbc90.firebaseapp.com",
  projectId: "clone-fbc90",
  storageBucket: "clone-fbc90.appspot.com",
  messagingSenderId: "19518830355",
  appId: "1:19518830355:web:ccf306ce0066e1ce0b0ce6",
  measurementId: "G-22R0L40X6H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };