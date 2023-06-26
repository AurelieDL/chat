import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBRt3eYizk6sXkdfdZ70olWb4F2Y0uVHDs",
  authDomain: "chat-8d6fb.firebaseapp.com",
  projectId: "chat-8d6fb",
  storageBucket: "chat-8d6fb.appspot.com",
  messagingSenderId: "674396157493",
  appId: "1:674396157493:web:b8779c27e05060026b237c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();