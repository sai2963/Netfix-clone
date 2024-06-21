// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARP7PzYBPso-MWXKJr9dJwSCKeDwndtgg",
  authDomain: "netflix-clone-96da8.firebaseapp.com",
  projectId: "netflix-clone-96da8",
  storageBucket: "netflix-clone-96da8.appspot.com",
  messagingSenderId: "773974433134",
  appId: "1:773974433134:web:ffd884d5b48e8e4496b57f",
  measurementId: "G-VEFHXYCR0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();