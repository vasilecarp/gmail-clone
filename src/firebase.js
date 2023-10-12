import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3lRSBMJlAbmj10OF-Ej_EW33wJu23Sq8",
  authDomain: "clone-8523d.firebaseapp.com",
  projectId: "clone-8523d",
  storageBucket: "clone-8523d.appspot.com",
  messagingSenderId: "717444973776",
  appId: "1:717444973776:web:01385e14ceb011cb740ad5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
