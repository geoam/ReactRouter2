import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Red from "./components/red.jsx";
import Blue from "./components/blue.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
<Router>
  <Header />
  <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/Red" element = {<Red />} />
    <Route path="/Blue" element = {<Blue/>} />
  </Routes>

  <React.StrictMode>
   
    <App/>

  </React.StrictMode>


</Router>


  
);
