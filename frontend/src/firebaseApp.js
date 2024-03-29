import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAoCACQqy5vSYO57zgJjSC1twY_nTcw1Tc",
  authDomain: "ankan-aacac.firebaseapp.com",
  projectId: "ankan-aacac",
  storageBucket: "ankan-aacac.appspot.com",
  messagingSenderId: "458044749731",
  appId: "1:458044749731:web:aec0918077753536108c16",
  measurementId: "G-RZ344RB2ST"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};