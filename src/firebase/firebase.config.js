// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUWHg257xaIy9JP9Exagg_-v2pYqa8DO8",
  authDomain: "teeth-wizard-auth-ead34.firebaseapp.com",
  projectId: "teeth-wizard-auth-ead34",
  storageBucket: "teeth-wizard-auth-ead34.firebasestorage.app",
  messagingSenderId: "247133074178",
  appId: "1:247133074178:web:97fa8bebc1e846e0eac81b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export auth
export default auth;
