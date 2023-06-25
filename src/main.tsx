import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBm4pInEYbkKf8mKqIzGVdKr87KgOD2fVY",

	authDomain: "tierlistmakerodin.firebaseapp.com",

	projectId: "tierlistmakerodin",

	storageBucket: "tierlistmakerodin.appspot.com",

	messagingSenderId: "574883619100",

	appId: "1:574883619100:web:2e73e6fe812cd06edd5ad9",
};
const myFirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(myFirebaseApp);

const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };

export const firestoreDB = getFirestore(myFirebaseApp);
