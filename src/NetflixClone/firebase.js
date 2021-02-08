import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyArrfUKMlKhqvREqkAoEgOImAWIPE64mb0",
  authDomain: "netflix-clone-20249.firebaseapp.com",
  databaseURL: "https://netflix-clone-20249.firebaseio.com",
  projectId: "netflix-clone-20249",
  storageBucket: "netflix-clone-20249.appspot.com",
  messagingSenderId: "753483410821",
  appId: "1:753483410821:web:b19293622207edabe0a8ec",
  measurementId: "G-QYJSK01B54",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { provider, auth };
export default db;
