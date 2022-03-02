// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgeCfNen0d0B0g_0Y20398awpCw0PcrVc",
  authDomain: "namen-9dc9d.firebaseapp.com",
  projectId: "namen-9dc9d",
  storageBucket: "namen-9dc9d.appspot.com",
  messagingSenderId: "13226665613",
  appId: "1:13226665613:web:eb4b93348302eda0b7a4c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;