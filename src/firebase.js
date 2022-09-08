// import firebase from "firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBh9xezen6AMDKGIprFemwcgAYm2xQBorc",
  authDomain: "clone-app-test.firebaseapp.com",
  projectId: "clone-app-test",
  storageBucket: "clone-app-test.appspot.com",
  messagingSenderId: "1083508271790",
  appId: "1:1083508271790:web:977af4a64ecf9d97675b3f",
  measurementId: "G-VYFCMPZNRC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}