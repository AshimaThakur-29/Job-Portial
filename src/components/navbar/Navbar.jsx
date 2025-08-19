import React,{useState} from "react";
import "./Navbar.css";
import {   NavLink ,Link} from "react-router-dom";
import Home from "../Homepage/Home.jsx";
import Estimate from "../Estimate/Estimate.jsx";
import Login from "../Login/Login.jsx";
import Job from "../Job/Job.jsx";
import Humburger from "../Humburger/Humburger.jsx";



function Navbar() {
  
  return (
    <div className="container">
      <div className="nav d-flex justify-content-between align-items-center p-4">
        <div className="nav-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              opacity="0.2"
            ></circle>
            <circle
              cx="16.9857"
              cy="17.4857"
              r="12.0143"
              fill="#3575E2"
            ></circle>
          </svg>
          <span>jobPortal</span>
        </div>
        <div className="nav-center d-flex justify-content-between  align-items-center list-unstyled m-0  ">
        
             <div className="Main-Link">
           <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
  Start a search
</NavLink>

<NavLink to="/Login" className={({ isActive }) => isActive ? "active-link" : ""}>
  My Jobs
</NavLink>

<NavLink to="/Estimate" className={({ isActive }) => isActive ? "active-link" : ""}>
  Salary estimate
</NavLink>

<NavLink to="/Job" className={({ isActive }) => isActive ? "active-link" : ""}>
  Post A Job
</NavLink>
        </div>
        </div>
         <div className="nav-right d-flex">
          <Link to="/Login" className="btn btn-outline-dark mx-2">
            Log in
          </Link>
          <Link to="/SignUp" className="btn btn-primary mx-2 text-white">
            Sign Up
          </Link>
        </div>
        <div>
           <Humburger/>
        </div>
      
        
      </div>
      
    </div>
  );
}
export default Navbar;
