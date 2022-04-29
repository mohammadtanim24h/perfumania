import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNjgbuZhKUtfe22HkjWzhg7JgOjecafxE",
  authDomain: "perfumania-4c8ba.firebaseapp.com",
  projectId: "perfumania-4c8ba",
  storageBucket: "perfumania-4c8ba.appspot.com",
  messagingSenderId: "382079066007",
  appId: "1:382079066007:web:aa917c98045b1e8dcf6ed2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;