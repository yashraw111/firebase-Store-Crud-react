import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "../../App";
// import App from "../App";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBpO04PhyVfrXle38Y2Pw9sh-0qIKfrJik",
  authDomain: "fir-cd21f.firebaseapp.com",
  projectId: "fir-cd21f",
  storageBucket: "fir-cd21f.firebasestorage.app",
  messagingSenderId: "1005541435993",
  appId: "1:1005541435993:web:ed025daac2b72761a15f48",
  measurementId: "G-XQLSNJZ5EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const dbFire = getFirestore(app);

export default dbFire
