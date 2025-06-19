import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDB8FOM3AR3ttbTGr3UEjomSE0T2b7I9E",
  authDomain: "pupstore-61001.firebaseapp.com",
  projectId: "pupstore-61001",
  storageBucket: "pupstore-61001.firebasestorage.app",
  messagingSenderId: "56840841800",
  appId: "1:56840841800:web:371e23f55abb9a87c1867d",
  measurementId: "G-N5ZKVSP4W8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
