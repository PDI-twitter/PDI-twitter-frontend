import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjTsHSRIz8WTli81OebIDmQWRqphZjVBs",
  authDomain: "bench-9f846.firebaseapp.com",
  projectId: "bench-9f846",
  storageBucket: "bench-9f846.appspot.com",
  messagingSenderId: "444580656686",
  appId: "1:444580656686:web:563227552760531035d1bf",
  measurementId: "G-V86NN4WRE6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
