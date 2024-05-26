// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyA3lkXAnP-JCsm0Wm6V88DDMd98pJoeA",
  authDomain: "health-6cecf.firebaseapp.com",
  projectId: "health-6cecf",
  storageBucket: "health-6cecf.appspot.com",
  messagingSenderId: "758542450346",
  appId: "1:758542450346:web:7a31fc6e45bc6d8cbfdad3"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

// const ap = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, auth, db}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);