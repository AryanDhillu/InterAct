import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// console.log('API Key:', import.meta.env.VITE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-fdfe6.firebaseapp.com",
  projectId: "reactchat-fdfe6",
  storageBucket: "reactchat-fdfe6.appspot.com",
  messagingSenderId: "421599613998",
  appId: "1:421599613998:web:fa493cba6957bbdfcdfbbf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
