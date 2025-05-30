// src/firebase/config.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq89UoqHfrdpzVoOPoEl115mx_sXOcCBc",
  authDomain: "projeto-teste-f8dde.firebaseapp.com",
  projectId: "projeto-teste-f8dde",
  storageBucket: "projeto-teste-f8dde.firebasestorage.app",
  messagingSenderId: "698540547483",
  appId: "1:698540547483:web:9f6018a7cadf0ac1f4d53e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
