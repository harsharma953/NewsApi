import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWIDWF_SodDp9SDeVT9By37JDH_cegCQQ",
  authDomain: "news-afaf0.firebaseapp.com",
  projectId: "news-afaf0",
  storageBucket: "news-afaf0.appspot.com",
  messagingSenderId: "783446900739",
  appId: "1:783446900739:web:d3df148f83b920e4ba4e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};