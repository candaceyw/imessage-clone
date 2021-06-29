import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXagz6Opc7iifGoFdMowpq3YEisThpjEQ",
  authDomain: "imessage-clone-dc448.firebaseapp.com",
  projectId: "imessage-clone-dc448",
  storageBucket: "imessage-clone-dc448.appspot.com",
  messagingSenderId: "800700099607",
  appId: "1:800700099607:web:716fbd23259cb25fee4052",
  measurementId: "G-FXDG18Z4SW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;