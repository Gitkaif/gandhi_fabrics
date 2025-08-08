// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7dJbPLXKOQpH4BwKTGbBtZOD_dGXWouU",
    authDomain: "fabric-wholesale.firebaseapp.com",
    projectId: "fabric-wholesale",
    storageBucket: "fabric-wholesale.firebasestorage.app",
    messagingSenderId: "378067463930",
    appId: "1:378067463930:web:83a709a2d04ef3cdb3e343",
    measurementId: "G-G533552FTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, storage };
