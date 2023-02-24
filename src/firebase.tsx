import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGoUS64aFzeUAl2RRFCE8a3ytIp4JIj9E",
  authDomain: "chat-app-testing-b1661.firebaseapp.com",
  projectId: "chat-app-testing-b1661",
  storageBucket: "chat-app-testing-b1661.appspot.com",
  messagingSenderId: "775369073058",
  appId: "1:775369073058:web:531e0919e6da9b3a7292fb",
};

const app = initializeApp(firebaseConfig, "[chat-demo]");
export const auth = getAuth(app);
export const db = getFirestore(app);
