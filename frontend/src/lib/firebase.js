// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   // apiKey: import.meta.env.VITE_API_KEY,
//   // apiKey: "AIzaSyBWr7qUhLZn_0vWbKnvvPSv_6KEfB0-SAo",
//   apiKey: "AIzaSyBWr7qUhLZn_0vWbKnvvPSv_6KEfB0-SAo",
//   authDomain: "reactchat-a42fa.firebaseapp.com",
//   projectId: "reactchat-a42fa",
//   storageBucket: "reactchat-a42fa.appspot.com",
//   messagingSenderId: "93203755518",
//   appId: "1:93203755518:web:7fb13743982f0f557410af"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth()
// export const db = getFirestore()
// export const storage = getStorage()


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = { 
  apiKey: "AIzaSyBWr7qUhLZn_0vWbKnvvPSv_6KEfB0-SAo",
  authDomain: "reactchat-a42fa.firebaseapp.com",
  projectId: "reactchat-a42fa",
  storageBucket: "reactchat-a42fa.appspot.com",
  messagingSenderId: "93203755518",
  appId: "1:93203755518:web:7fb13743982f0f557410af"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
