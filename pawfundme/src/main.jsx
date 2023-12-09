import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'core-js/stable'
import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJ76cYgDVrj1PKDwcY77YeDhvGHB0Mxsw",
  authDomain: "pawfundme.firebaseapp.com",
  projectId: "pawfundme",
  storageBucket: "pawfundme.appspot.com",
  messagingSenderId: "863339197894",
  appId: "1:863339197894:web:7e3d48c5cf8137c614aec7"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
