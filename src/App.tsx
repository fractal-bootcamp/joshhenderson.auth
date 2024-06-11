import './App.css'
import axios from 'axios'
import { useState, useEffect, FormEvent } from 'react';
import { Request } from 'express';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpKy0i4CYBEmRXr4pQUTpnmg0tgBPBSZ8",
  authDomain: "expressauth-d08a0.firebaseapp.com",
  projectId: "expressauth-d08a0",
  storageBucket: "expressauth-d08a0.appspot.com",
  messagingSenderId: "882729998224",
  appId: "1:882729998224:web:da776c90be2d81bd530515",
  measurementId: "G-QX5ZEDJ0PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize the FirebaseUI Widget using Firebase.


console.log("app is working")

const config = {
  headers: {
    header1: "token",
    header2: "token",
  }
}

const apiCall = () => {
  axios.get('http://localhost:3000', config).then((data) => {
    console.log(data)
  })
}

function App() {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const [
    createUserWithEmailAndPassword,

  ] = useCreateUserWithEmailAndPassword(auth);
  const [user, loading, error] = useAuthState(auth);


  const handleFormSubmission = (e: FormEvent) => {

  }

  return (
    <div>
      <header>

        <button onClick={apiCall}>Make API Call!</button>

      </header>
      <div>
        {user ? "you are logged in" + user.email : "you are not logged in"}
      </div>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onSubmit={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          value={password}
          onSubmit={(e) => setPassword(e.target.value)} />
      </label>
      <select>
        <option value="signup">signup</option>
        <option value="login">login</option>
      </select>
      <input type="submit" />
    </div>
  )
}

export default App
