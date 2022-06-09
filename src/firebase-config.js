import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-yV615QBFCZdqAB4JgX3k7gZVaqhqEdc",
  authDomain: "niji-2081c.firebaseapp.com",
  projectId: "niji-2081c",
  storageBucket: "niji-2081c.appspot.com",
  messagingSenderId: "520251844092",
  appId: "1:520251844092:web:f97a57d0e36b282f7dbe79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
