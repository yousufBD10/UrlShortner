// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAAEjkcNMyHfUEA0QJJEcHS0VgPP_xtMA",
  authDomain: "urlshortner-4a6a3.firebaseapp.com",
  projectId: "urlshortner-4a6a3",
  storageBucket: "urlshortner-4a6a3.appspot.com",
  messagingSenderId: "1084392633038",
  appId: "1:1084392633038:web:a1ea332cff628ef1add69f",
  measurementId: "G-LMQ26026NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);