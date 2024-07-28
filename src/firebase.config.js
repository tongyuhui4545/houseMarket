// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVk5zP5bUz1gSc5Rr9eujEVOcSpPW2Jgc",
  authDomain: "house-marketplace-app-32f00.firebaseapp.com",
  projectId: "house-marketplace-app-32f00",
  storageBucket: "house-marketplace-app-32f00.appspot.com",
  messagingSenderId: "7047687027",
  appId: "1:7047687027:web:22151464c94a63db54f306",
  measurementId: "G-KT3VD49WZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()