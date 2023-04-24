import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBRL72c5EyNXRCf5JwztW-AbnInnoqlx0c",
    authDomain: "sns-app-pj.firebaseapp.com",
    projectId: "sns-app-pj",
    storageBucket: "sns-app-pj.appspot.com",
    messagingSenderId: "452130546634",
    appId: "1:452130546634:web:6bee1dd6851e3fd6416533",
    measurementId: "G-QE4NJ14PVT"
  });
}

export default firebase;