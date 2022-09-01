// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh9xezen6AMDKGIprFemwcgAYm2xQBorc",
  authDomain: "clone-app-test.firebaseapp.com",
  projectId: "clone-app-test",
  storageBucket: "clone-app-test.appspot.com",
  messagingSenderId: "1083508271790",
  appId: "1:1083508271790:web:977af4a64ecf9d97675b3f",
  measurementId: "G-VYFCMPZNRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);