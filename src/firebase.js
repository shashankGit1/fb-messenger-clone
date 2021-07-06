import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDK6FvEZk1TmYGHFlX2fZBKONWMYRXvPsk",
        authDomain: "fb-messenger-clone-ec6f9.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-ec6f9-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "fb-messenger-clone-ec6f9",
        storageBucket: "fb-messenger-clone-ec6f9.appspot.com",
        messagingSenderId: "980138737225",
        appId: "1:980138737225:web:370f722e5e223ed12d8998",
        measurementId: "G-N20S85WZ3X"
    }
);

const db = firebaseApp.firestore();
export default db;
