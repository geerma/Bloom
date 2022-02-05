import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACFGnS56UaSAYg8sUN26TLDC_4vS1pqh8",
    authDomain: "react-journal-uofthacks.firebaseapp.com",
    projectId: "react-journal-uofthacks",
    storageBucket: "react-journal-uofthacks.appspot.com",
    messagingSenderId: "459558516571",
    appId: "1:459558516571:web:2514cc4816b73a74e64c7e"
})

 var db =  firebaseApp.firestore();
 export {db}