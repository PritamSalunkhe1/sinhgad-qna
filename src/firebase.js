import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJMzADdSjEVBx14JX5W3nJvve4eIRML60",
  authDomain: "sinhgad-qna.firebaseapp.com",
  projectId: "sinhgad-qna",
  storageBucket: "sinhgad-qna.appspot.com",
  messagingSenderId: "167344700144",
  appId: "1:167344700144:web:71b64348cd57b897a9e035",
  measurementId: "G-B5PD3QL4Z8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
