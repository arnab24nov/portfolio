// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUr4XB_jaCohIEXtzUv8UlTO7JMldj4Wk",
  authDomain: "my-portfolio-7db80.firebaseapp.com",
  projectId: "my-portfolio-7db80",
  storageBucket: "my-portfolio-7db80.appspot.com",
  messagingSenderId: "1054227209759",
  appId: "1:1054227209759:web:434097cb22a9a533103f2a",
  measurementId: "G-Y8Y65E05TW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
