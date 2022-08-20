import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDHrosnB5S_m_Gg1sHLgXRwvWBpK2QVcf4",
  authDomain: "proyecto-coder-4e5a5.firebaseapp.com",
  projectId: "proyecto-coder-4e5a5",
  storageBucket: "proyecto-coder-4e5a5.appspot.com",
  messagingSenderId: "143097658250",
  appId: "1:143097658250:web:7ecf797163a4525b04e673"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)