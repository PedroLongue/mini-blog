import { initializeApp } from "firebase/app";
import { getFirestore } from "firabase/firabase";

const firebaseConfig = {
  apiKey: "AIzaSyDpaOOyJKPS3kHKDUcgy8O2Bu6txuVYAlU",
  authDomain: "miniblog-5af01.firebaseapp.com",
  projectId: "miniblog-5af01",
  storageBucket: "miniblog-5af01.appspot.com",
  messagingSenderId: "689018614748",
  appId: "1:689018614748:web:0ebb2b28a0a44b68b1d519",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
