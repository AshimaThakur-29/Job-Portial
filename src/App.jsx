import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Homepage/Home";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp.jsx';
import Job from "./components/Job/Job";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Estimate from "./components/Estimate/Estimate";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Job"element={<Job/>}></Route>
            <Route path="/Login" element={<Login />} ></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Estimate" element={<Estimate />}></Route>
           
        
        </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App;
