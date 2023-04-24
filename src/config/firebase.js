import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBRIr428UawUYpsVUGuC3f8IjakEUjX8E0",
  authDomain: "proyecto-restaurante-4caea.firebaseapp.com",
  projectId: "proyecto-restaurante-4caea",
  storageBucket: "proyecto-restaurante-4caea.appspot.com",
  messagingSenderId: "548086293322",
  appId: "1:548086293322:web:b136d35850f104f67357b3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)