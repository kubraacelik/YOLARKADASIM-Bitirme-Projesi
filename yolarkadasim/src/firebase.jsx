import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt3SP06NwYc71aWvUooSpSYxNc1cydm-U",
  authDomain: "mesajlasma-f9149.firebaseapp.com",
  projectId: "mesajlasma-f9149",
  storageBucket: "mesajlasma-f9149.appspot.com",
  messagingSenderId: "350777197443",
  appId: "1:350777197443:web:9d48553274d9a7f8e9ecb6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
