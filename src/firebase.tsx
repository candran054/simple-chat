import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "chat-app-testing-b1661",
  storageBucket: "chat-app-testing-b1661.appspot.com",
  messagingSenderId: "775369073058",
  appId: "1:775369073058:web:531e0919e6da9b3a7292fb",
};

const app = initializeApp(firebaseConfig, "[chat-demo]");
export const auth = getAuth(app);
export const db = getFirestore(app);
