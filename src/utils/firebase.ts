import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCaEMqu4lTQZqhASD6uLy9nqXaQsve3gs0",
    authDomain: "supermercado-cf76f.firebaseapp.com",
    projectId: "supermercado-cf76f",
    storageBucket: "supermercado-cf76f.firebasestorage.app",
    messagingSenderId: "354670799801",
    appId: "1:354670799801:web:b0f159e62d50e55d9fe468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default { db, storage};