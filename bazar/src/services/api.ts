import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBfRDzkZ84BfY0OH23TBcMxFtHPhQbQpUE",
    authDomain: "bazar-731ee.firebaseapp.com",
    projectId: "bazar-731ee",
    storageBucket: "bazar-731ee.appspot.com",
    messagingSenderId: "1099064378213",
    appId: "1:1099064378213:web:39f84c267ca05acae1178c",
    measurementId: "G-R821736N6Q"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);